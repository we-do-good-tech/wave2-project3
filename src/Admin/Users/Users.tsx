import { useBoolean } from 'ahooks';
import classnames from 'classnames';
import { Field, Form, Formik } from 'formik';
import React, { FC, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Popup } from '../../components/SportPopup';
import { ApplicationState } from '../../saga';
import { User } from '../../saga/app/reducer';
import usersActions from '../../saga/users/actions';
import styles from './styles.module.scss';
const { loadUsers, createUser, deleteUser, setAdmin } = usersActions;

const initialValues = {
  username: ' ',
  password: '',
};
export const validationSchema = Yup.object({
  username: Yup.string().matches(/^[A-Za-z0-9]{6,30}$/, { message: 'User name must be between 6 to 30' }),
  password: Yup.string().matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/, { message: ' ' }),
});

export const Users: FC = () => {
  const [isCreating, { setTrue: setIsCreatingOn, setFalse: setIsCreatingOff }] = useBoolean(false);
  const { users, isAuth, isAuthLoading, currentUser } = useSelector(
    ({ usersState: { users }, appState: { isAuth, isLoading, user } }: ApplicationState) => ({
      users,
      isAuth,
      isAuthLoading: isLoading,
      currentUser: user,
    }),
  );
  const dispatch = useDispatch();
  useEffect(() => {
    !users && isAuth && !isAuthLoading && dispatch(loadUsers());
  }, [isAuth, users, isAuthLoading, dispatch]);

  const createUserFunction = useCallback(
    (username: string, password: string) => {
      dispatch(createUser(username, password));
      setIsCreatingOff();
    },
    [dispatch, setIsCreatingOff],
  );

  const deleteUserFunction = useCallback(
    (id: string) => {
      dispatch(deleteUser(id));
    },
    [dispatch],
  );

  const setAdminFunction = useCallback(
    (id: string, admin: boolean) => {
      dispatch(setAdmin(id, admin));
    },
    [dispatch],
  );

  return (
    <div className={styles.usersContainer}>
      <div className={styles.addUser}>
        <button onClick={setIsCreatingOn} className={styles.addButton}>
          +
        </button>
      </div>
      <table className={styles.usersTable}>
        <caption>Users</caption>
        <thead>
          <tr>
            <th>
              <span> Name </span>
            </th>
            <th>
              <span> Admin </span>
            </th>
            <th>
              <span> Actions </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user: User, idx: number) => (
            <tr key={`${idx}`}>
              <td>
                <span>{user.username}</span>
              </td>
              <td>
                <span className={classnames(user.admin ? styles.admin : styles.notadmin)}>
                  {' '}
                  {user.admin ? 'Yes' : 'No'}
                </span>
              </td>
              <td>
                <div>
                  {user.id !== currentUser?.id && currentUser?.admin && (
                    <>
                      <button className='admin-button' onClick={() => deleteUserFunction(user.id)}>
                        Delete
                      </button>
                      {!user.admin ? (
                        <button className='admin-button' onClick={() => setAdminFunction(user.id, true)}>
                          Make admin
                        </button>
                      ) : (
                        <button className='admin-button' onClick={() => setAdminFunction(user.id, false)}>
                          Set not admin
                        </button>
                      )}
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isCreating && (
        <Popup containerClassName={styles.popUp}>
          <div className={styles.formContainer}>
            <span className={styles.closeButton} onClick={setIsCreatingOff}>
              {' '}
              ✖{' '}
            </span>
            <Formik
              validationSchema={validationSchema}
              validateOnBlur={false}
              enableReinitialize={false}
              validateOnMount={true}
              onSubmit={({ username, password }) => createUserFunction(username, password)}
              initialValues={initialValues}>
              {({ values, errors, isValid }) => (
                <Form className={styles.form}>
                  <div>
                    <label> Username: </label> <Field key={`field-name`} name='username' />
                    <label> Password: </label> <Field key={`field-password`} type='password' name='password' />{' '}
                  </div>
                  <div>
                    <div className={styles.validations}>
                      <span className={classnames(values.password.match(/[\w+]{8,}/) ? styles.valid : styles.invalid)}>
                        8 characters or more
                      </span>
                      <span className={classnames(values.password.match(/[A-Z]/) ? styles.valid : styles.invalid)}>
                        1 Uppercase
                      </span>
                      <span className={classnames(values.password.match(/[a-z]/) ? styles.valid : styles.invalid)}>
                        1 Lowercase
                      </span>
                      <span className={classnames(values.password.match(/[0-9]/) ? styles.valid : styles.invalid)}>
                        1 Number
                      </span>
                      <span className={classnames(values.password.match(/[^\w+]/) ? styles.valid : styles.invalid)}>
                        1 Special character
                      </span>
                    </div>
                    {errors.username && <span className='error-msg'>{errors.username}</span>}
                    <button disabled={!isValid} className='admin-button' type='submit'>
                      Create
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Popup>
      )}
    </div>
  );
};
