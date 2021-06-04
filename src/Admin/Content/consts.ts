import * as Yup from 'yup';
import { ISuccessCategory } from '../../pages/Successes/consts';
import { GenderEnum } from '../../pages/Tips';
import { ITipsCategory } from '../../pages/Tips/consts';

export type ContentType = 'success' | 'tip';
export type ContentDataType = ITipsCategory | ISuccessCategory;
export const createTipKeys = ['name', 'lastName', 'tip', 'title', 'gender', 'age', 'className', 'active'];
export const createSuccessKeys = ['name', 'content', 'title', 'className', 'active'];

export const createTipsInitials = createTipKeys.reduce((prev: Record<string, string | number>, curr: string) => {
  if (curr === 'age') {
    prev[curr] = 0;
  } else {
    prev[curr] = '';
  }
  return prev;
}, {});

export const createSuccessInitials = createSuccessKeys.reduce((prev: Record<string, string | number>, curr: string) => {
  if (curr === 'age') {
    prev[curr] = 0;
  } else {
    prev[curr] = '';
  }
  return prev;
}, {});

export const initialValues: Record<ContentType, Record<string, string | number>> = {
  success: createSuccessInitials,
  tip: createTipsInitials,
};

export const tipValidationSchema = Yup.object({
  name: Yup.string().required('Name is a required field'),
  lastName: Yup.string().required('Last name is a required field'),
  tip: Yup.string().required('Tip is a required field'),
  title: Yup.string().required('Title is a required field'),
  gender: Yup.string().oneOf(Object.keys(GenderEnum)),
  age: Yup.number().typeError('Age must be a number').required(),
});

export const successValidationSchema = Yup.object({
  name: Yup.string().required('Name is a required field'),
  content: Yup.string().required('Content is a required field'),
  title: Yup.string().required('Title is a required field'),
});
