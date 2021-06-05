import { useBoolean, useMount } from 'ahooks';
import classnames from 'classnames';
import { Field, Form, Formik } from 'formik';
import React, { ChangeEvent, FC, useCallback, useMemo, useState, VFC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OptionalObjectSchema, TypeOfShape } from 'yup/lib/object';
import { Popup } from '../../components/SportPopup';
import { ApplicationState } from '../../saga';
import contentActions from '../../saga/content/actions';
import { Card } from './Card';
import { ContentDataType, ContentType, initialValues, successValidationSchema, tipValidationSchema } from './consts';
import styles from './styles.module.scss';
import { UploadImage } from './UploadImage';

const { loadContent, createContent, updateContent, deleteContent, setActive } = contentActions;

interface IChooseContent {
  isSideBarOpen: boolean;
  currentContentType: string;
  setCurrentContentType: (type: ContentType) => void;
  setCreatingOn: () => void;
  toggleSideBarOpen: () => void;
}

const ChooseContent: FC<IChooseContent> = ({
  isSideBarOpen,
  currentContentType,
  setCurrentContentType,
  setCreatingOn,
  toggleSideBarOpen,
}) => (
  <div className={classnames(styles.chooseContent, !isSideBarOpen && styles.hidden)}>
    {isSideBarOpen && (
      <>
        {' '}
        <span
          className={classnames(currentContentType === 'success' && styles.active)}
          onClick={() => setCurrentContentType('success')}>
          {`סיפורי הצלחה `}
        </span>
        <span
          className={classnames(currentContentType === 'tip' && styles.active)}
          onClick={() => setCurrentContentType('tip')}>
          {`טיפים`}
        </span>
        <span className={styles.addContent} onClick={() => setCreatingOn()}>
          הוסף
        </span>
      </>
    )}
    <span onClick={() => toggleSideBarOpen()} className={styles.toggleSideBar}>
      {isSideBarOpen ? '<' : '>'}
    </span>
  </div>
);

interface IContentDisplayer {
  isSideBarOpen: boolean;
  currentContentType: ContentType;
  currentContent?: ContentDataType[];
  deleteContentFunction: (id: string) => void;
  updateContentFunction: (data: ContentDataType, id: string) => void;
  setActiveFunction: (id: string, active: boolean) => void;
  schema: OptionalObjectSchema<Record<string, any>, Record<string, any>, TypeOfShape<Record<string, any>>>;
}

const ContentDisplayer: FC<IContentDisplayer> = ({
  schema,
  setActiveFunction,
  updateContentFunction,
  deleteContentFunction,
  currentContentType,
  currentContent,
}) => {
  // const entries = !!currentContent?.length ? currentContent?.map((data: ContentDataType) => Object.entries(data)) : [];
  //@ts-ignore
  return (
    <div className={styles.contentDisplayer}>
      {' '}
      {!!currentContent?.length ? (
        currentContent.map((content: ContentDataType, idx: number) => (
          <Card
            key={`${idx}`}
            setActive={setActiveFunction}
            validationSchema={schema}
            updateContent={updateContentFunction}
            deleteContent={deleteContentFunction}
            content={content}
          />
        ))
      ) : (
        <span style={{ direction: 'ltr', textAlign: 'center', width: '100%' }}>
          {' '}
          No content for '{currentContentType}', you can add some any time :)
        </span>
      )}
    </div>
  );
};

const getComponent = (type: string) => {
  switch (type) {
    case 'content':
    case 'tip':
      return 'textarea';
    default:
      return 'input';
  }
};

interface ICreateContnetPopup {
  CreateContentForm: JSX.Element;
  onClose: () => void;
}

interface ICreateContentForm {
  validationSchema: OptionalObjectSchema<Record<string, any>>;
  initialValues: Record<string, string | boolean | string[]>;
  onSubmit: (values: any) => void;
}

export const CreateContentForm: VFC<ICreateContentForm> = ({ validationSchema, initialValues, onSubmit }) => (
  <Formik validationSchema={validationSchema} validateOnBlur={false} onSubmit={onSubmit} initialValues={initialValues}>
    {({ initialValues, errors, isValid, values, setFieldValue }) => (
      <Form className={styles.form}>
        {Object.keys(initialValues).map(
          (v: string, idx: number) =>
            !['className', 'active', 'id', 'createdAt', 'updatedAt', 'image', 'content'].includes(v) && (
              <React.Fragment key={`idx-${idx}`}>
                <label key={`label-${idx}`}> {v}: </label>{' '}
                <Field key={`field-${idx}`} component={getComponent(v)} name={v} />{' '}
              </React.Fragment>
            ),
        )}

        <label key='label-image'> image: </label>
        <div className={styles.imageContainer}>
          {typeof values.image === 'string' && values.image?.length > 10 ? (
            <img src={values.image} alt='missing' />
          ) : typeof initialValues.image === 'string' && initialValues.image?.length > 10 ? (
            <img src={initialValues.image} alt='missing' />
          ) : (
            <UploadImage key='field-image' name='image' onChange={(value: string) => setFieldValue('image', value)} />
          )}
          <span
            onClick={() => {
              setFieldValue('image', ' ');
              initialValues.image = '';
            }}>
            X
          </span>
        </div>
        {
          //@ts-ignore
          values.content?.map((_: string, idx: number) => {
            //@ts-ignorea
            return (
              <div className={styles.textAreasWrapper}>
                {' '}
                <Field
                  key={`field-${idx}`}
                  value={values.content[idx]}
                  component={'textarea'}
                  onChange={(v: ChangeEvent<HTMLInputElement>) => {
                    const newArr: string[] =
                      typeof values.content === 'object'
                        ? values.content.map((c: string, cidx: number): string => (cidx === idx ? v.target.value : c))
                        : [];
                    setFieldValue('content', newArr);
                  }}
                />
                <label
                  className={styles.deleteArea}
                  onClick={() => {
                    const newArr: string[] =
                      typeof values.content === 'object'
                        ? values.content.filter((c: string, cidx: number) => cidx !== idx)
                        : [];
                    setFieldValue('content', newArr);
                  }}>
                  {' '}
                  X
                </label>
              </div>
            );
          })
        }

        {
          //@ts-ignore
          !!values.content && (
            <label
              className={styles.addArea}
              onClick={(e) => {
                e.stopPropagation();
                const newArr: string[] = typeof values.content === 'object' ? values.content.concat() : [];
                newArr.push('your text here');
                setFieldValue('content', newArr);
              }}>
              {' '}
              +{' '}
            </label>
          )
        }

        <label> color: </label>
        <Field key='className' as='select' name='className'>
          <option key='turqiz' value='turqiz'>
            Turqiz
          </option>
          <option key='blue' value='blue'>
            Blue
          </option>
          <option key='green' value='green'>
            Green
          </option>
          <option key='orange' value='orange'>
            Orange
          </option>
        </Field>
        <button disabled={!isValid} className='admin-button' type='submit'>
          {initialValues.id ? 'Update' : 'Create'}
        </button>
        <span className='error-msg'>{Object.values(errors)[0]}</span>
      </Form>
    )}
  </Formik>
);

const CreateContentPopup: VFC<ICreateContnetPopup> = ({ CreateContentForm, onClose }) => (
  <Popup containerClassName={styles.popUp}>
    <span className={styles.closeButton} onClick={onClose}>
      {' '}
      ✖{' '}
    </span>
    <div className={styles.createContentForm}>{CreateContentForm}</div>
  </Popup>
);

export const Content: FC = () => {
  useMount(() => loadContentFunction());
  const dispatch = useDispatch();
  const [currentContentType, setCurrentContentType] = useState<ContentType>('success');
  const data = useSelector((state: ApplicationState) => state.contentState);
  const currentContent = useMemo(() => data[currentContentType], [data, currentContentType]);
  const [isCreating, { setTrue: setCreatingOn, setFalse: setCreatingOff }] = useBoolean(false);
  const [isSideBarOpen, { toggle: toggleSideBarOpen }] = useBoolean(false);
  const schema = useMemo(() => (currentContentType === 'success' ? successValidationSchema : tipValidationSchema), [
    currentContentType,
  ]);

  const loadContentFunction = useCallback((): void => {
    dispatch(loadContent());
  }, [dispatch]);

  const createContentFunction = useCallback(
    (data: ContentDataType): void => {
      dispatch(createContent(data, currentContentType));
    },
    [dispatch, currentContentType],
  );

  const updateContentFunction = useCallback(
    async (data: ContentDataType, id: string): Promise<void> => {
      dispatch(updateContent(data, currentContentType, id));
    },
    [currentContentType, dispatch],
  );

  const setActiveFunction = useCallback(
    async (id: string, active: boolean): Promise<void> => {
      dispatch(setActive(id, currentContentType, active));
    },
    [currentContentType, dispatch],
  );

  const deleteContentFunction = useCallback(
    async (id: string): Promise<void> => {
      dispatch(deleteContent(currentContentType, id));
    },
    [currentContentType, dispatch],
  );

  const onSubmit = useCallback(
    (values) => {
      createContentFunction(values);
      setCreatingOff();
    },
    [createContentFunction, setCreatingOff],
  );

  return (
    <div className={styles.contentSection}>
      <ChooseContent
        currentContentType={currentContentType}
        isSideBarOpen={isSideBarOpen}
        setCreatingOn={setCreatingOn}
        setCurrentContentType={setCurrentContentType}
        toggleSideBarOpen={toggleSideBarOpen}
      />
      <ContentDisplayer
        isSideBarOpen={isSideBarOpen}
        currentContentType={currentContentType}
        deleteContentFunction={deleteContentFunction}
        updateContentFunction={updateContentFunction}
        setActiveFunction={setActiveFunction}
        schema={schema}
        currentContent={currentContent}
      />
      {isCreating && (
        <CreateContentPopup
          CreateContentForm={
            <CreateContentForm
              validationSchema={schema}
              onSubmit={onSubmit}
              initialValues={{ ...initialValues[currentContentType], className: 'blue', active: true, image: ' ' }}
            />
          }
          onClose={setCreatingOff}
        />
      )}
    </div>
  );
};
