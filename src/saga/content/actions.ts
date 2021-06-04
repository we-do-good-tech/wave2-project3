import { ContentDataType, ContentType } from '../../Admin/Content/consts';
import { contentTypes } from '../types';
import { IContentState } from './reducer';

const loadContent = () => {
  return {
    type: contentTypes.LOAD_CONTENT,
  };
};

const updateContent = (payload: Partial<ContentDataType>, dataType: ContentType, id: string) => {
  return {
    type: contentTypes.UPDATE_CONTENT,
    payload: { payload: payload, dataType, id },
  };
};

const setActive = (id: string, dataType: ContentType, active: boolean) => {
  return {
    type: contentTypes.SET_ACTIVE,
    payload: { id, dataType, active },
  };
};

const createContent = (payload: Partial<ContentDataType>, dataType: ContentType) => {
  return {
    type: contentTypes.CREATE_CONTENT,
    payload: { payload, dataType },
  };
};

const deleteContent = (dataType: ContentType, id: string) => {
  return {
    type: contentTypes.DELETE_CONTENT,
    payload: { dataType, id },
  };
};

const setContentFailed = (error: string) => {
  return {
    type: contentTypes.SET_CONTENT_FAILED,
    payload: { error },
  };
};

const setContentSuccess = (payload: Partial<IContentState>) => {
  return {
    type: contentTypes.SET_CONTENT_SUCCESS,
    payload: payload,
  };
};

const contentActions = {
  loadContent,
  createContent,
  updateContent,
  deleteContent,
  setContentFailed,
  setActive,
  setContentSuccess,
};

export default contentActions;
