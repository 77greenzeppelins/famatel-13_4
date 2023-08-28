/**
 * used in: images / kategorieProduktowPage / imgKategorieProduktowPage.ts
 **/
export const indexImgCat1_subCat_2_temp: ImageType_C[] = [
  {
    path: '/images/all_products/c1_wtyczki-gniazda/2_tablicowe/1.2_01_13631.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/2_tablicowe/1.2_02_13634.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/2_tablicowe/1.2_03_13377.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/2_tablicowe/1.2_04_23270.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/2_tablicowe/1.2_05_24272.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/2_tablicowe/1.2_06_24374.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/2_tablicowe/1.2_07_24377.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/2_tablicowe/1.2_08_23230.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/2_tablicowe/1.2_09_24333.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/2_tablicowe/1.2_10_24336.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/2_tablicowe/1.2_11_24337.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
];

const models_1_2: { model: string }[] = [
  { model: '13631' },
  { model: '13634' },
  { model: '13377' },
  { model: '23270' },
  { model: '24373' },
  { model: '24374' },
  { model: '24377' },
  { model: '23230' },
  { model: '24333' },
  { model: '24336' },
  { model: '24337' },
];

export const indexImgCat1_subCat_2 = indexImgCat1_subCat_2_temp.map(
  (item, i) => ({
    ...item,
    model: models_1_2[i].model,
  })
);
