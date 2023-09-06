export const indexImgCat1_subCat_9_temp: ImageType_C[] = [
  {
    path: '/images/all_products/c1_wtyczki-gniazda/9_camping/1.9_01_13912.webp',
    width: 600,
    height: 600,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/9_camping/1.9_02_13913.webp',
    width: 600,
    height: 600,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/9_camping/1.9_03_13919.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/9_camping/1.9_04_13000.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/9_camping/1.9_05_13011.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/9_camping/1.9_06_13917.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/9_camping/1.9_07_13910.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/9_camping/1.9_08_13922.webp',
    width: 600,
    height: 600,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/9_camping/1.9_09_13918.webp',
    width: 600,
    height: 600,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/9_camping/1.9_10_11_13361-13364.webp',
    width: 600,
    height: 600,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/9_camping/1.9_11_13361-13364.webp',
    width: 400,
    height: 400,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
];

const models_1_9: { model: string }[] = [
  { model: '13912' },
  { model: '13913' },
  { model: '13000' },
  { model: '13011' },
  { model: '13917' },
  { model: '13910' },
  { model: '13922' },
  { model: '13918' },
  { model: '13361' },
  { model: '13364' },
  { model: '13364' },
];

export const indexImgCat1_subCat_9 = indexImgCat1_subCat_9_temp.map(
  (item, i) => ({
    ...item,
    model: models_1_9[i].model,
  })
);
