import React, { ChangeEvent, FC, useCallback } from 'react';

interface IUploadImage {
  onChange: (image: string) => void;
  name: string;
}

const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    !file && reject('no file');
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const handleFileRead = async (event: ChangeEvent<any>): Promise<string> => {
  const file = event.target?.files[0];
  if (!file) {
    return '';
  }
  const base64 = await toBase64(file);
  return base64 as string;
};

export const UploadImage: FC<IUploadImage> = ({ onChange, name }) => {
  const changeHandler = useCallback(
    async (event: ChangeEvent<any>) => {
      const base64 = await handleFileRead(event);
      onChange(base64);
    },
    [onChange],
  );

  return <input name={name} type='file' onChange={changeHandler}></input>;
};
