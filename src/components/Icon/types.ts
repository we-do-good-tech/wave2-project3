export type IconType = 'arrow';

export interface IconProps {
  type: IconType;
  onClick?: Function;
  className?: string;
  style?: {};
}

export type SVGsType<T> = { [key in IconType]: T };
