import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';
import { ISuccesses, ISuccessesCategory } from './consts';
import Caroline from '../../images/tips/Carolin.png';
import { Carousel, Button, Modal } from 'react-bootstrap';

export const Successes: FC = () => {
  const [successebox, setSuccesseBox] = useState<ISuccessesCategory>(ISuccesses[0]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.container}>
      <div className={classnames(styles.Column1)}>
        {ISuccesses.map((ISuccesse: ISuccessesCategory, idx) => (
          <Carousel key={idx.toString()}>
            <Carousel.Item>
              <div
                key={ISuccesse.id}
                className={classnames(styles.cards)}
                style={{ border: '8px solid', borderColor: ISuccesse.color }}
                onClick={() => setSuccesseBox(ISuccesse)}>
                <div className={classnames(styles.card)} style={{ backgroundColor: ISuccesse.color }}>
                  <img loading='lazy' src={Caroline} />

                  <Carousel.Caption>
                    <h1>ההצלחה של {ISuccesse.name}</h1>
                    <h2>{ISuccesse.detail}</h2>
                    <Button onClick={handleShow} style={{ color: ISuccesse.color }}>
                      כנסו לקרוא
                    </Button>

                    <Modal show={show} onHide={handleClose} style={{ backgroundColor: ISuccesse.color }}>
                      <Modal.Header>
                        <Modal.Title>ההצלחה של {ISuccesse.name}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <h1>{ISuccesse.question}</h1>
                        <h2>{ISuccesse.answer}</h2>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant='secondary' onClick={handleClose}>
                          סגירה
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Carousel.Caption>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        ))}
      </div>
    </div>
  );
};
