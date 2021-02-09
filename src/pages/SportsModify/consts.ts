export interface IDisabilitiesCategory {
  id: number;
  name: string;
  title: string;
}

export interface IDisabilitiesSubCategory {
  id: number;
  categoryId: number;
  name: string;
  title: string;
}

export interface ISportCategory {
  id: number;
  categoryIds: number[];
  name: string;
  title: string;
}

export const disabilitiesCategoris: IDisabilitiesCategory[] = [
  {
    id: 1,
    name: 'amputatin',
    title: 'קטועים',
  },
  {
    id: 2,
    name: 'headInjured',
    title: 'ופגיעות ראש CP שיתוק מוחין',
  },
  {
    id: 3,
    name: 'spinalCord',
    title: 'פגיעות חוט שידרה',
  },
  {
    id: 4,
    name: 'blindness',
    title: 'עיוורון ולקות ראייה',
  },
  {
    id: 5,
    name: 'shortness',
    title: 'נמיכות קומה',
  },
];

export const disabilitiesSubCategoris: IDisabilitiesSubCategory[] = [
  {
    id: 1,
    categoryId: 1,
    name: 'oneLeg',
    title: 'רגל',
  },
  {
    id: 2,
    categoryId: 1,
    name: 'twoLegs',
    title: 'שתי רגליים',
  },
  {
    id: 3,
    categoryId: 1,
    name: 'oneHand',
    title: 'יד אחת',
  },
  {
    id: 4,
    categoryId: 1,
    name: 'twoHands',
    title: 'שתי ידיים',
  },
  {
    id: 5,
    categoryId: 1,
    name: 'handLeg',
    title: 'יד ורגל',
  },
  {
    id: 6,
    categoryId: 1,
    name: 'twoHandsLeg',
    title: 'שתי ידיים ורגל',
  },
  {
    id: 7,
    categoryId: 1,
    name: 'twoLegsHand',
    title: 'שתי רגליים ויד',
  },
  {
    id: 8,
    categoryId: 1,
    name: 'twoLegsTwoHands',
    title: 'שתי רגליים ושתי ידיים',
  },
  {
    id: 9,
    categoryId: 2,
    name: 'withWheelchair',
    title: 'עם כיסא גלגלים',
  },
  {
    id: 10,
    categoryId: 2,
    name: 'withoutWheelchair',
    title: 'בלי כיסא גלגלים',
  },
  {
    id: 11,
    categoryId: 3,
    name: 'parphalegs',
    title: 'פאראפלגים',
  },
  {
    id: 12,
    categoryId: 3,
    name: 'quadphalegs',
    title: 'קוואדריפלגים',
  },
  {
    id: 13,
    categoryId: 4,
    name: 'Blindness',
    title: 'עיוורון',
  },
  {
    id: 14,
    categoryId: 4,
    name: 'Semiblind',
    title: 'לקות ראייה',
  },
  {
    id: 15,
    categoryId: 5,
    name: 'Shortness',
    title: 'נמיכות קומה',
  },
];

export const SportCateories: ISportCategory[] = [
  {
    id: 1,
    categoryIds: [15],
    name: 'Bicycle',
    title: 'אופניים',
  },
  {
    id: 2,
    categoryIds: [],
    name: 'Athletics',
    title: 'אתלטיקה',
  },
  {
    id: 3,
    categoryIds: [3, 4, 5, 6, 7, 8, 12, 13, 14],
    name: 'PowerLifting',
    title: 'הרמת כוח',
  },
  {
    id: 4,
    categoryIds: [13, 14, 15],
    name: 'Arrow',
    title: 'חץ וקשתץ',
  },
  {
    id: 5,
    categoryIds: [4, 6, 7, 8, 12, 15],
    name: 'Rowing',
    title: 'חתירה',
  },
  {
    id: 6,
    categoryIds: [3, 4, 5, 6, 7, 8, 12, 13, 14, 15],
    name: 'Tennis',
    title: 'טניס',
  },
  {
    id: 7,
    categoryIds: [8, 9, 10, 13, 14, 15],
    name: 'TableTennis',
    title: 'טניס שולחן',
  },
  {
    id: 8,
    categoryIds: [4, 5, 6, 7, 8, 12, 13, 14, 15],
    name: 'Triathlon',
    title: 'טריאתלון',
  },
  {
    id: 9,
    categoryIds: [2, 3, 4, 7, 8, 9, 10, 13, 14, 15],
    name: 'Volleyball',
    title: 'כדורעף',
  },
  {
    id: 10,
    categoryIds: [3, 4, 6, 8, 13, 14, 15],
    name: 'Basketball',
    title: 'כדורסל',
  },
  {
    id: 11,
    categoryIds: [3, 4, 8, 13, 14, 15],
    name: 'Fencing',
    title: 'סייף',
  },
  {
    id: 12,
    categoryIds: [6, 8, 13, 14, 15],
    name: 'Shooting',
    title: 'קליעה',
  },
  {
    id: 13,
    categoryIds: [3, 4, 5, 6, 7, 8, 12, 13, 14, 15],
    name: 'Kiaks',
    title: 'קיאקים',
  },
  {
    id: 14,
    categoryIds: [],
    name: 'HorseRiding',
    title: 'רכיבה',
  },
  {
    id: 15,
    categoryIds: [],
    name: 'Swimming',
    title: 'שחייה',
  },
  {
    id: 16,
    categoryIds: [13, 14, 15],
    name: 'Sailing',
    title: 'שייט',
  },
  {
    id: 17,
    categoryIds: [1, 2, 3, 4, 5, 11, 13, 14, 15],
    name: 'Boccia',
    title: 'בוצ׳ה',
  },
  {
    id: 18,
    categoryIds: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 13, 14, 15],
    name: 'Rogby',
    title: 'רוגבי',
  },
  {
    id: 19,
    categoryIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15],
    name: 'Judo',
    title: 'ג׳ודו',
  },
  {
    id: 20,
    categoryIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15],
    name: 'Soccer',
    title: 'כדורגל',
  },
  {
    id: 21,
    categoryIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15],
    name: 'Goalball',
    title: 'כדור שער',
  },
  {
    id: 22,
    categoryIds: [4, 6, 8, 12, 13, 14],
    name: 'Badminton',
    title: 'בדמינטון',
  },
  {
    id: 23,
    categoryIds: [1, 3, 4, 5, 6, 7, 8, 10, 12, 13, 14, 15],
    name: 'Dancing',
    title: 'ריקודים',
  },
  {
    id: 24,
    categoryIds: [1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    name: 'Taekwondo',
    title: 'טקוואנדו',
  },
];
