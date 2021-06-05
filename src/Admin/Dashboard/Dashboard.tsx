import React, { FC, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ISuccessCategory } from '../../pages/Successes/consts';
import { ITipsCategory } from '../../pages/Tips/consts';
import { ApplicationState } from '../../saga';
import { User } from '../../saga/app/reducer';
import contentActions from '../../saga/content/actions';
import usersActions from '../../saga/users/actions';
import styles from './styles.module.scss';

const { loadUsers } = usersActions;
const { loadContent } = contentActions;

const Table: FC<{ columns: string[]; name: string }> = ({ columns, name }) => {
  return (
    <div className={styles.tableWrapper}>
      <table>
        <caption> {name} </caption>
        <tbody>
          {columns.map((c: string, idx: number) => (
            <tr key={idx}>
              <td>{c}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const Dashboard: FC = () => {
  const dispatch = useDispatch();
  const { users, success, tip, isAppLoading } = useSelector(
    ({ usersState, contentState, appState }: ApplicationState) => ({
      users: usersState.users,
      success: contentState.success,
      tip: contentState.tip,
      isAppLoading: appState.isLoading,
    }),
  );

  useEffect(() => {
    if (!isAppLoading) {
      dispatch(loadUsers());
      dispatch(loadContent());
    }
  }, [isAppLoading, dispatch]);

  const usersList = useMemo(() => {
    return users?.map((_: User) => _.username) ?? [];
  }, [users]);

  const successList = useMemo(() => {
    return success?.map((_: ISuccessCategory) => _.name) ?? [];
  }, [success]);

  const tipList = useMemo(() => {
    return tip?.map((_: ITipsCategory) => _.name) ?? [];
  }, [tip]);

  return (
    <div className={styles.dashboardContainer}>
      <Table name='Users' columns={usersList} />
      <Table name='Successes' columns={successList} />
      <Table name='Tips' columns={tipList} />
    </div>
  );
};
