import React, { FC } from 'react';

//exapmle interface syntax
export interface ITestComponent {
  param?: string;
}

export const testComponent: FC<ITestComponent> = () => {
  return <div>test</div>;
};

export const testComponent2: FC = () => {
  return <div>test2</div>;
};
