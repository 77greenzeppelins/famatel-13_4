/*
used in: firstly stored in indexImgCat1_Allproducts 
*/
export const indexImgCat1_subCat_1_temp: ImageType_C[] = [
  {
    path: '/images/all_products/c1_wtyczki-gniazda/1_przenosne/1.1_01_13200.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/1_przenosne/1.1_02_14200.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/1_przenosne/1.1_03_14304.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/1_przenosne/1.1_04_14307.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/1_przenosne/1.1_05_23200.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/1_przenosne/1.1_06_24200.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/1_przenosne/1.1_07_24305_306.jpg',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/1_przenosne/1.1_08_24307.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/1_przenosne/1.1_09a_13200_CR.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/1_przenosne/1.1_10_14200_CR.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/1_przenosne/1.1_11_23200_CR.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/1_przenosne/1.1_12_24200_CR.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/1_przenosne/1.1_13_13311_2.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
];

const models_1_1: { model: string }[] = [
  { model: '13200' },
  { model: '14200' },
  { model: '14304' },
  { model: '14307' },
  { model: '23200' },
  { model: '24200' },
  { model: '24305' },
  { model: '24307' },
  { model: '13200CR' },
  { model: '14200CR' },
  { model: '23200CR' },
  { model: '24200CR' },
  { model: '13311' },
];

export const indexImgCat1_subCat_1: ImageType_C[] =
  indexImgCat1_subCat_1_temp.map((item, i) => ({
    ...item,
    model: models_1_1[i].model,
  }));
