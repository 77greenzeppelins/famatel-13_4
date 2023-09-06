export const indexImgCat2_subCat_1_temp: ImageType_C[] = [
  {
    path: '/images/all_products/c2_gniazda-z-blokada/1_tablicowe/2.1_01_25033.webp',
    width: 600,
    height: 600,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c2_gniazda-z-blokada/1_tablicowe/2.1_02_25002.webp',
    width: 600,
    height: 600,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c2_gniazda-z-blokada/1_tablicowe/2.1_03_25056.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c2_gniazda-z-blokada/1_tablicowe/2.1_04_25010.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
];

const models_2_1: { model: string }[] = [
  { model: '25033' },
  { model: '25002' },
  { model: '25056' },
  { model: '25010' },
];

export const indexImgCat2_subCat_1 = indexImgCat2_subCat_1_temp.map(
  (item, i) => ({
    ...item,
    model: models_2_1[i].model,
  })
);
