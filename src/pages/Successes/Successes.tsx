import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';
import { ISuccessCategory, ISuccessConsts } from './consts';
import Caroline from '../../images/tips/Carolin.png';
import Carousel from 'react-elastic-carousel';
import Modal from 'react-modal';

interface ICardProps extends ISuccessCategory {
  onClickHandler: (_: ICardProps) => void;
}

const Card: FC<ICardProps> = (ISuccess: ICardProps) => (
  <div
    key={ISuccess.id}
    className={styles.card}
    style={{ border: '6px solid', borderColor: ISuccess.color, backgroundColor: ISuccess.color }}
    onClick={() => ISuccess.onClickHandler(ISuccess)}>
    <img alt='carol' loading='lazy' src={Caroline} />
    <div className={styles.textBox}>
      <h1>ההצלחה של {ISuccess.name}</h1>
      <p>{ISuccess.detail}</p>
      <button style={{ color: ISuccess.color }}>כנסו לקרוא</button>
    </div>
  </div>
);

export const Successes: FC = () => {
  const [successebox, setSuccesseBox] = useState<ISuccessCategory>(ISuccessConsts[0]);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

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
        easing='cubic-bezier(1,.15,.55,1.54)'
        tiltEasing='cubic-bezier(0.110, 1, 1.000, 0.210)'
        transitionMs={700}>
        {ISuccessConsts.map((model: ISuccessCategory) => (
          <Card {...model} onClickHandler={openModal} />
        ))}
      </Carousel>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel='Example Modal'
        className={classnames(styles.modal)}>
        <form>
          <h1>ההצלחה של {successebox.name}</h1>
          <button onClick={closeModal}>close</button>
        </form>
      </Modal>
    </div>
  );
};
