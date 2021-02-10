import React, { FC, useMemo, useState } from 'react';
import { disabilitiesSubCategoris, IDisabilitiesSubCategory, ISportCategory, SportCateories } from './consts';

export const SportsModify: FC = () => {
  const [state, setState] = useState({});
  const [activeSports, setActiveSports] = useState<ISportCategory[]>(SportCateories);

  //check if there are not matching disablities ids
  const checkValid = (arrOne: number[], arrTwo: number[]) => {
    let flag = true;
    arrOne.forEach((id: number) => {
      if (arrTwo.includes(id)) flag = false;
    });
    return flag;
  };

  // change the categoryId state to the right subCategoryId
  const changeDisablity = (disablitity: IDisabilitiesSubCategory) => {
    const { categoryId, id: subCetegoryId } = disablitity;
    const model: any = state;
    if (model) {
      if (model[categoryId] === disablitity.id) model[categoryId] = undefined;
      else model[categoryId] = disabilitiesSubCategoris[subCetegoryId - 1].id;
    }
    setState(model);
    const arr = SportCateories.filter((category: ISportCategory) =>
      checkValid(category.categoryIds, Object.values(model)),
    );
    setActiveSports(arr);
  };

  //rendered the active sports
  const activeIds = useMemo(() => {
    return activeSports.map((sport: ISportCategory) => sport.id);
  }, [activeSports]);

  //reset disablities
  const reset = () => {
    setState({});
    setActiveSports(SportCateories);
  };

  return (
    <div>
      {disabilitiesSubCategoris.map((disability: IDisabilitiesSubCategory) => {
        return (
          <button
            onClick={() => {
              changeDisablity(disability);
            }}
            key={disability.name}
            className='font-size-16 d-flex flex-columns flex-center'>
            {disability.name}
          </button>
        );
      })}
      <button onClick={() => reset()}>reset</button>
      <div className={'d-flex flex-columns'}></div>
    </div>
  );
};
