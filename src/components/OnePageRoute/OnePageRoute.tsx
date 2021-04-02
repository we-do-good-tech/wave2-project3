import React, { FC } from 'react';
import { jumpTo } from '../../utils/jumpTo';

interface IOnePageRoute {
  idx: number;
}
const style = { margin: 0, padding: 0 };

export const OnePageRoute: FC<IOnePageRoute> = (props) => (
  <div style={style} onClick={() => jumpTo(props.idx)}>
    {props.children}
  </div>
);
