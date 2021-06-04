import React, { FC, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field } from '../../components/Field';
import { Loading } from '../../components/Loading';
import { ApplicationState } from '../../saga';
import allActions from '../../saga/saga';
import styles from './styles.module.scss';

const { loginUser } = allActions.appActions;

export const Login: FC = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const onSubmit = useCallback(() => {
    dispatch(loginUser({ username, password }));
  }, [dispatch, username, password]);

  const { isAuth, isLoading } = useSelector(({ appState }: ApplicationState) => appState);

  if (isLoading) {
    return <Loading />;
  }

  if (isAuth) {
    return <Redirect to='/admin' />;
  }

  return (
    <div className={styles.loginBox}>
      <Field text={'Username:'} onChange={(val: string) => setUsername(val)} />
      <Field text={'Password:'} onChange={(val: string) => setPassword(val)} />
      <button onClick={onSubmit}>submit</button>
    </div>
  );
};
