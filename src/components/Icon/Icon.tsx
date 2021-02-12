import React, { FC } from 'react';
import { IconProps, SVGsType } from './types';
import { ReactComponent as Arrow } from '../../images/sportLogos/Arrow.svg';

export const SVGs: SVGsType<JSX.IntrinsicElements | any> = {
  arrow: Arrow,
};

export const Icon: FC<IconProps> = ({ type, ...props }) => React.createElement(SVGs[type], props);
