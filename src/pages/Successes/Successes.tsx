import classnames from 'classnames';
import React, { FC, useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { useSelector } from 'react-redux';
import { Popup } from '../../components/SportPopup';
import closeImage from '../../images/close.svg';
import { ApplicationState } from '../../saga';
import { lockScreen, unlockScreen } from '../../utils/lockScreen';
import { ISuccessCategory } from './consts';
import styles from './styles.module.scss';

interface ICardProps extends ISuccessCategory {
  onClickHandler: (_: ICardProps) => void;
}

const Card: FC<ICardProps> = (_: ICardProps) => (
  <div key={_.id} className={classnames(styles.card, styles[_.className])}>
    <img alt='carol' loading='lazy' src={_.image} />
    <div className={styles.textBox}>
      <h1>ההצלחה של {_.name}</h1>
      <p>{_.title}</p>
      <button onClick={() => _.onClickHandler(_)}>כנסו לקרוא</button>
    </div>
  </div>
);

export const Successes: FC = () => {
  const [currentModal, setModal] = useState<ISuccessCategory | undefined>();
  const success = useSelector(({ contentState }: ApplicationState) => contentState.success ?? []);

  useEffect(() => {
    if (!!currentModal) {
      lockScreen();
    } else {
      unlockScreen();
    }
  }, [currentModal]);

  return (
    <div className={styles.container}>
      <Carousel
        showEmptySlots
        breakPoints={[
          { width: 1, itemsToScroll: 1, itemsToShow: 1 },
          { width: 600, itemsToScroll: 1, itemsToShow: 1 },
          { width: 800, itemsToScroll: 1, itemsToShow: 2 },
          { width: 1000, itemsToScroll: 1, itemsToShow: 3 },
        ]}
        pagination={false}
        isRTL
        initialActiveIndex={1}
        itemsToShow={3}
        easing='cubic-bezier(0.2, .15, .55, 1)'
        tiltEasing='cubic-bezier(0.210, 1, 1.000, 0.210)'
        transitionMs={400}>
        {success.map(
          (model: ISuccessCategory, idx: number) =>
            model.active && <Card key={`${idx}`} {...model} onClickHandler={() => setModal(model)} />,
        )}
      </Carousel>
      {!!currentModal && (
        <Popup isFixed containerClassName={styles.popup} backgroundColor={currentModal.className}>
          {currentModal.content.map((c: string) => (
            <p> {c} </p>
          ))}
          <img src={closeImage} alt='burger' className={styles.closeButton} onClick={() => setModal(undefined)} />
        </Popup>
      )}
    </div>
  );
};
