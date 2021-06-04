import React, { FC } from 'react';
import { IconProps, SVGsType } from './types';
import { ReactComponent as Arrow } from '../../images/sportLogos/Arrow.svg';
import { ReactComponent as Athletics } from '../../images/sportLogos/Athletics.svg';
import { ReactComponent as Badminton } from '../../images/sportLogos/Badminton.svg';
import { ReactComponent as Basketball } from '../../images/sportLogos/Basketball.svg';
import { ReactComponent as Bikes } from '../../images/sportLogos/Bikes.svg';
import { ReactComponent as Boccia } from '../../images/sportLogos/Boccia.svg';
import { ReactComponent as Dance } from '../../images/sportLogos/Dance.svg';
import { ReactComponent as Fencing } from '../../images/sportLogos/Fencing.svg';
import { ReactComponent as Goalball } from '../../images/sportLogos/Goalball.svg';
import { ReactComponent as Judo } from '../../images/sportLogos/Judo.svg';
import { ReactComponent as Kayak } from '../../images/sportLogos/Kayak.svg';
import { ReactComponent as PowerLifting } from '../../images/sportLogos/PowerLifting.svg';
import { ReactComponent as Riding } from '../../images/sportLogos/Riding.svg';
import { ReactComponent as Rowing } from '../../images/sportLogos/Rowing.svg';
import { ReactComponent as Rugby } from '../../images/sportLogos/Rugby.svg';
import { ReactComponent as Sailing } from '../../images/sportLogos/Sailing.svg';
import { ReactComponent as Shooting } from '../../images/sportLogos/Shooting.svg';
import { ReactComponent as Soccer } from '../../images/sportLogos/Soccer.svg';
import { ReactComponent as Swimming } from '../../images/sportLogos/Swimming.svg';
import { ReactComponent as TableTennis } from '../../images/sportLogos/TableTennis.svg';
import { ReactComponent as Taekwondo } from '../../images/sportLogos/Taekwondo.svg';
import { ReactComponent as Tennis } from '../../images/sportLogos/Tennis.svg';
import { ReactComponent as Triathlon } from '../../images/sportLogos/Triathlon.svg';
import { ReactComponent as Volleyball } from '../../images/sportLogos/Volleyball.svg';
import { ReactComponent as Ski } from '../../images/sportLogos/Ski.svg';
import { ReactComponent as DocumentsLogo } from '../../images/documents.svg';
import { ReactComponent as UsersLogo } from '../../images/users.svg';
import { ReactComponent as Dashboard } from '../../images/dashboard.svg';
import { ReactComponent as Edit } from '../../images/edit.svg';
import { ReactComponent as Delete } from '../../images/delete.svg';

export const SVGs: SVGsType<JSX.IntrinsicElements | any> = {
  arrow: Arrow,
  athletics: Athletics,
  badminton: Badminton,
  basketball: Basketball,
  bikes: Bikes,
  boccia: Boccia,
  dance: Dance,
  fencing: Fencing,
  goalball: Goalball,
  judo: Judo,
  kayak: Kayak,
  powerlifting: PowerLifting,
  riding: Riding,
  rowing: Rowing,
  rugby: Rugby,
  sailing: Sailing,
  shooting: Shooting,
  soccer: Soccer,
  swimming: Swimming,
  tabletennis: TableTennis,
  taekwondo: Taekwondo,
  tennis: Tennis,
  triathlon: Triathlon,
  volleyball: Volleyball,
  ski: Ski,
  documents: DocumentsLogo,
  users: UsersLogo,
  dashboard: Dashboard,
  edit: Edit,
  delete: Delete,
};

export const Icon: FC<IconProps> = ({ type, ...props }) => React.createElement(SVGs[type], props);
