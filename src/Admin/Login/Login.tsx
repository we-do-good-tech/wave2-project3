import React, { FC, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Field } from '../../components/Field';
import allActions from '../../saga/saga';
import styles from './styles.module.scss';

const { loginUser } = allActions.appActions;

export const Login: FC = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const onSubmit = useCallback(() => {
    dispatch(loginUser({ username, password }));
  }, [username, password]);

  return (
    <div className={styles.loginBox}>
      <Field text={'Username:'} onChange={(val: string) => setUsername(val)} />
      <Field text={'Password:'} onChange={(val: string) => setPassword(val)} />
      <button onClick={onSubmit}>submit</button>
    </div>
  );
};
