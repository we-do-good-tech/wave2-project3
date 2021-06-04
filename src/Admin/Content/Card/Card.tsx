import { useBoolean } from 'ahooks';
import classnames from 'classnames';
import React, { FC, useCallback } from 'react';
import { OptionalObjectSchema } from 'yup/lib/object';
import { Icon } from '../../../components/Icon';
import { Popup } from '../../../components/SportPopup';
import { Switch } from '../../../components/Switch';
import { ContentDataType } from '../consts';
import { CreateContentForm } from '../Content';
import styles from '../styles.module.scss';

interface ICard {
  deleteContent: (id: string) => void;
  setActive: (id: string, active: boolean) => void;
  updateContent: (data: ContentDataType, id: string) => void;
  content: ContentDataType;
  validationSchema: OptionalObjectSchema<Record<string, any>>;
}

export const Card: FC<ICard> = ({ updateContent, deleteContent, setActive, content, validationSchema }) => {
  const [isOnEdit, { setTrue: setOnEdit, setFalse: setOffEdit }] = useBoolean(false);
  const [isOnDelete, { setTrue: setOnDelete, setFalse: setOffDelete }] = useBoolean(false);
  const [isOpen, { toggle: toggleCard }] = useBoolean(false);

  const changeHandler = useCallback(
    (e: boolean) => {
      setActive(content.id, e);
    },
    [content.id, setActive],
  );

  const toggleCardHandler = useCallback(() => {
    toggleCard();
  }, [toggleCard]);

  const onSubmit = useCallback(
    (values) => {
      updateContent(values, content.id);
      setOffEdit();
    },
    [setOffEdit, updateContent, content.id],
  );

  return isOnEdit ? (
    <Popup containerClassName={styles.popUp}>
      <span className={styles.closeButton} onClick={() => setOffEdit()}>
        {' '}
        ✖{' '}
      </span>
      <div className={styles.createContentForm}>
        <CreateContentForm
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          initialValues={Object.fromEntries(Object.entries(content))}
        />
      </div>
    </Popup>
  ) : (
    <div className={classnames(styles.contentCard, isOpen ? styles.open : styles.closed)}>
      <img
        className={classnames(styles.toggleOpen, isOpen && styles.toggleOpened, 'shiny-button')}
        src='https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg'
        alt='down-arrow'
        onClick={toggleCardHandler}
      />
      <div className={classnames(styles.cardSpans, !isOpen && styles.closed)}>
        {isOpen ? (
          <>
            {Object.entries(content).map(
              (entriesObject: string[], idx: number) =>
                !['image'].includes(entriesObject[0]) && (
                  <div key={`wrapper-${idx}`} id={`wrapper-${idx}`}>
                    <span key={`entry-${idx}`}>{entriesObject[0]}:</span>
                    <span key={`value-${idx}`}>{entriesObject[1]}</span>
                  </div>
                ),
            )}
            {content.image && content.image.length > 10 && (
              <div className='d-flex flex-column'>
                <span key={`value-image`}>image: </span>
                <img src={content.image} alt='missing' />
              </div>
            )}
          </>
        ) : (
          <>
            <div className={styles.closedContent}>
              <span>Name: {content.name}</span>
            </div>
          </>
        )}
      </div>
      <div className={classnames(styles.cardButtons, isOpen && styles.open)}>
        {isOpen ? (
          <>
            {isOnDelete ? (
              <div className={styles.acceptDelete}>
                <button className='admin-button' onClick={() => deleteContent(content.id)}>
                  I'm sure
                </button>
                <button className='admin-button' onClick={setOffDelete}>
                  Oops..
                </button>
              </div>
            ) : (
              <button className='admin-button' onClick={setOnDelete}>
                <Icon type='delete' />
              </button>
            )}
            <button className='admin-button' onClick={() => setOnEdit()}>
              <Icon type='edit' />{' '}
            </button>
          </>
        ) : (
          <div>
            <span>Active: </span>
            <Switch onChange={changeHandler} checked={content.active} />
          </div>
        )}
      </div>
    </div>
  );
};
