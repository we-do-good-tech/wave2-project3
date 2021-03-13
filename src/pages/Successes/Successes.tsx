import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import { ISuccessCategory, ISuccessConsts } from './consts';
import Caroline from '../../images/tips/Carolin.png';
import Carousel from 'react-elastic-carousel';
import { Popup } from '../../components/SportPopup';
import closeImage from '../../images/close.svg';
import classnames from 'classnames';

interface ICardProps extends ISuccessCategory {
  onClickHandler: (_: ICardProps) => void;
}

const Card: FC<ICardProps> = (ISuccess: ICardProps) => (
  <div key={ISuccess.id} className={classnames(styles.card, styles[ISuccess.color])}>
    <img alt='carol' loading='lazy' src={Caroline} />
    <div className={styles.textBox}>
      <h1>ההצלחה של {ISuccess.name}</h1>
      <p>{ISuccess.detail}</p>
      <button onClick={() => ISuccess.onClickHandler(ISuccess)}>כנסו לקרוא</button>
    </div>
  </div>
);

export const Successes: FC = () => {
  const [currentModal, setModal] = useState<ISuccessCategory | undefined>();

  return (
    <div className={styles.container}>
      <Carousel
        breakPoints={[
          { width: 600, itemsToScroll: 1, itemsToShow: 1 },
          { width: 800, itemsToScroll: 1, itemsToShow: 2 },
          { width: 900, itemsToScroll: 1, itemsToShow: 3 },
        ]}
        pagination={false}
        isRTL
        itemsToShow={3}
        easing='cubic-bezier(0.2, .15, .55, 1)'
        tiltEasing='cubic-bezier(0.210, 1, 1.000, 0.210)'
        transitionMs={400}>
        {ISuccessConsts.map((model: ISuccessCategory) => (
          <Card {...model} onClickHandler={() => setModal(model)} />
        ))}
      </Carousel>
      {!!currentModal && (
        <Popup containerClassName={styles.popup} backgroundColor={currentModal.color}>
          <img src={closeImage} alt='burger' className={styles.closeButton} onClick={() => setModal(undefined)} />
        </Popup>
      )}
    </div>
  );
};
