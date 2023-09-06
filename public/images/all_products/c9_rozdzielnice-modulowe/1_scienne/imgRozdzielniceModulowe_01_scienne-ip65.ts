export const indexImgCat9_subCat_1_temp: ImageType_C[] = [
  {
    path: '/images/all_products/c9_rozdzielnice-modulowe/1_scienne/9.1_01_39123.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c9_rozdzielnice-modulowe/1_scienne/9.1_02_39123_T.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c9_rozdzielnice-modulowe/1_scienne/9.1_03_39134.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c9_rozdzielnice-modulowe/1_scienne/9.1_04_39134_T.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c9_rozdzielnice-modulowe/1_scienne/9.1_05_39145.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c9_rozdzielnice-modulowe/1_scienne/9.1_06_39145_T.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c9_rozdzielnice-modulowe/1_scienne/9.1_07_39146.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c9_rozdzielnice-modulowe/1_scienne/9.1_08_39146_T.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c9_rozdzielnice-modulowe/1_scienne/9.1_09_39157.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c9_rozdzielnice-modulowe/1_scienne/9.1_10_39157_T.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c9_rozdzielnice-modulowe/1_scienne/9.1_11_39168.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c9_rozdzielnice-modulowe/1_scienne/9.1_12_39168_T.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c9_rozdzielnice-modulowe/1_scienne/9.1_13_39169.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
];

const models_9_1: { model: string }[] = [
  { model: '39123' },
  { model: '39123-T' },
  { model: '39134' },
  { model: '39134-T' },
  { model: '39145' },
  { model: '39145-T' },
  { model: '39146' },
  { model: '39146-T' },
  { model: '39157' },
  { model: '39157-T' },
  { model: '39168' },
  { model: '39168-T' },
  { model: '39169' },
];

export const indexImgCat9_subCat_1 = indexImgCat9_subCat_1_temp.map(
  (item, i) => ({
    ...item,
    model: models_9_1[i].model,
  })
);
