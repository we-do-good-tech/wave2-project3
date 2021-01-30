import React, { FC } from 'react';

//exapmle interface syntax
export interface ITestComponent {
  param?: string;
}

export const testComponent: FC<ITestComponent> = () => {
  return <div style={{ backgroundColor: 'blue', height: '100VH' }}>test</div>;
};

export const testComponent2: FC = () => {
  return <div style={{ backgroundColor: 'brown', height: '100VH' }}>test2</div>;
};
