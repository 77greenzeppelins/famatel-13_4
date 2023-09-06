export const indexImgCat1_subCat_3_temp: ImageType_C[] = [
  {
    path: '/images/all_products/c1_wtyczki-gniazda/3_scienne/1.3_01_13250.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie przemysłowego gniazda stałego',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/3_scienne/1.3_02_14353.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie przemysłowego gniazda stałego',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/3_scienne/1.3_03_13297.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie przemysłowego gniazda stałego',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/3_scienne/1.3_04_13397.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie przemysłowego gniazda stałego',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/3_scienne/1.3_05_13761.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie przemysłowego gniazda stałego',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/3_scienne/1.3_06_14355.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie przemysłowego gniazda stałego',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/3_scienne/1.3_07_14381.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie przemysłowego gniazda stałego',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/3_scienne/1.3_08_23250.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie przemysłowego gniazda stałego',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/3_scienne/1.3_09_24353.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie przemysłowego gniazda stałego',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/3_scienne/1.3_10_23397.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie przemysłowego gniazda stałego',
  },
  //__11
  {
    path: '/images/all_products/c1_wtyczki-gniazda/3_scienne/1.3_11_23290.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie przemysłowego gniazda stałego',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/3_scienne/1.3_11_23609.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie przemysłowego gniazda stałego',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/3_scienne/1.3_12_23626.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie przemysłowego gniazda stałego',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/3_scienne/1.3_13_24290.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie przemysłowego gniazda stałego',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/3_scienne/1.3_13_24609.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie przemysłowego gniazda stałego',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/3_scienne/1.3_14_24626.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie przemysłowego gniazda stałego',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/3_scienne/1.3_15_24395.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie przemysłowego gniazda stałego',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/3_scienne/1.3_16_24396.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie przemysłowego gniazda stałego',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/3_scienne/1.3_17_23000.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie przemysłowego gniazda stałego',
  },
  //__20
  {
    path: '/images/all_products/c1_wtyczki-gniazda/3_scienne/1.3_18_23001.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie przemysłowego gniazda stałego',
  },
];

const models_1_3: { model: string }[] = [
  { model: '13250' },
  { model: '14353' },
  { model: '13297' },
  { model: '13397' },
  { model: '13761' },
  { model: '14355' },
  { model: '14381' },
  { model: '23250' },
  { model: '24353' },
  { model: '23397' }, //__no svg
  { model: '23290' },
  { model: '23609' },
  { model: '23626' },
  { model: '24290' },
  { model: '24609' },
  { model: '24626' },
  { model: '24395' },
  { model: '24396' },
  { model: '23000' },
  { model: '23001 / 23002' },
  //__no:20
];

export const indexImgCat1_subCat_3 = indexImgCat1_subCat_3_temp.map(
  (item, i) => ({
    ...item,
    model: models_1_3[i].model,
  })
);
