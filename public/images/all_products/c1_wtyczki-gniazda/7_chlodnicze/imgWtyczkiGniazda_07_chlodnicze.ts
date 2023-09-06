export const indexImgCat1_subCat_7_temp: ImageType_C[] = [
  {
    path: '/images/all_products/c1_wtyczki-gniazda/7_chlodnicze/1.7_01_14308.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/7_chlodnicze/1.7_02_24308.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/7_chlodnicze/1.7_03_24339.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/7_chlodnicze/1.7_04_24398.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/7_chlodnicze/1.7_05_25053.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/7_chlodnicze/1.7_06_26028.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/7_chlodnicze/1.7_07_25074.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/7_chlodnicze/1.7_08_25136.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/7_chlodnicze/1.7_09_25727.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/7_chlodnicze/1.7_10_26327.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/7_chlodnicze/1.7_11_26514.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
];

const models_1_7: { model: string }[] = [
  { model: '14308' },
  { model: '24308' },
  { model: '24339' },
  { model: '24398' },
  { model: '25053' },
  { model: '26028' },
  { model: '25074' },
  { model: '25136' },
  { model: '25727' },
  { model: '26327' },
  { model: '26514' },
];

export const indexImgCat1_subCat_7 = indexImgCat1_subCat_7_temp.map(
  (item, i) => ({
    ...item,
    model: models_1_7[i].model,
  })
);
