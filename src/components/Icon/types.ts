export type IconType =
  | 'arrow'
  | 'athletics'
  | 'badminton'
  | 'basketball'
  | 'bikes'
  | 'boccia'
  | 'dance'
  | 'fencing'
  | 'goalball'
  | 'judo'
  | 'kayak'
  | 'powerlifting'
  | 'riding'
  | 'rowing'
  | 'rugby'
  | 'sailing'
  | 'shooting'
  | 'soccer'
  | 'swimming'
  | 'tabletennis'
  | 'taekwondo'
  | 'tennis'
  | 'triathlon'
  | 'ski'
  | 'volleyball'
  | 'documents'
  | 'users'
  | 'dashboard'
  | 'edit'
  | 'delete';

export interface IconProps {
  type: IconType;
  onClick?: Function;
  className?: string;
  style?: {};
}

export type SVGsType<T> = { [key in IconType]: T };
