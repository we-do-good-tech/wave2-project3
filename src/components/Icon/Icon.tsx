import React, { FC } from 'react';
import { IconProps, SVGsType } from './types';
import { ReactComponent as Ui } from '../../images/sportLogos/Arrow.svg';

export const SVGs: SVGsType<JSX.IntrinsicElements | any> = {
  ui: Ui,
};

export const Icon: FC<IconProps> = ({ type, ...props }) => React.createElement(SVGs[type], props);
