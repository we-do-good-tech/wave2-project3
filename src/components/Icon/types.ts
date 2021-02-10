export type IconType = 'ui';

export interface IconProps {
  type: IconType;
  onClick?: Function;
  className?: string;
  style?: {};
}

export type SVGsType<T> = { [key in IconType]: T };
