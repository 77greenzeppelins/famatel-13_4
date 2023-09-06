export const indexImgCat2_subCat_3_temp: ImageType_C[] = [
  {
    path: '/images/all_products/c2_gniazda-z-blokada/3_z-komponentami/2.3_01_25703.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c2_gniazda-z-blokada/3_z-komponentami/2.3_02_25721.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c2_gniazda-z-blokada/3_z-komponentami/2.3_03_26303.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c2_gniazda-z-blokada/3_z-komponentami/2.3_04_26321.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c2_gniazda-z-blokada/3_z-komponentami/2.3_05_26503FH.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c2_gniazda-z-blokada/3_z-komponentami/2.3_06_25206.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c2_gniazda-z-blokada/3_z-komponentami/2.3_07_25007.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c2_gniazda-z-blokada/3_z-komponentami/2.3_08_25306.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c2_gniazda-z-blokada/3_z-komponentami/2.3_09_25159.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
];
const models_2_3: { model: string }[] = [
  { model: '25703' },
  { model: '25721' },
  { model: '26303' },
  { model: '26321' },
  { model: '26503FH' },
  { model: '25206' },
  { model: '25007' },
  { model: '25306' },
  { model: '25159' },
];

export const indexImgCat2_subCat_3 = indexImgCat2_subCat_3_temp.map(
  (item, i) => ({
    ...item,
    model: models_2_3[i].model,
  })
);
