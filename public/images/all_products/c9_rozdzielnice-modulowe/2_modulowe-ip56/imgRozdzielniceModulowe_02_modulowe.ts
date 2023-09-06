export const indexImgCat9_subCat_2_temp: ImageType_C[] = [
  {
    path: '/images/all_products/c9_rozdzielnice-modulowe/2_modulowe-ip56/9.2_01_3902-T.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c9_rozdzielnice-modulowe/2_modulowe-ip56/9.2_02_3904.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c9_rozdzielnice-modulowe/2_modulowe-ip56/9.2_02_3904-T.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c9_rozdzielnice-modulowe/2_modulowe-ip56/9.2_03_3908.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c9_rozdzielnice-modulowe/2_modulowe-ip56/9.2_03_3908-T.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c9_rozdzielnice-modulowe/2_modulowe-ip56/9.2_04_3912.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c9_rozdzielnice-modulowe/2_modulowe-ip56/9.2_04_3912-T.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c9_rozdzielnice-modulowe/2_modulowe-ip56/9.2_05_3926.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c9_rozdzielnice-modulowe/2_modulowe-ip56/9.2_05_3926-T.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c9_rozdzielnice-modulowe/2_modulowe-ip56/9.2_06_3942.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c9_rozdzielnice-modulowe/2_modulowe-ip56/9.2_06_3942-T.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c9_rozdzielnice-modulowe/2_modulowe-ip56/9.2_07_39018.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c9_rozdzielnice-modulowe/2_modulowe-ip56/9.2_08_39036.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c9_rozdzielnice-modulowe/2_modulowe-ip56/9.2_09_39054.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c9_rozdzielnice-modulowe/2_modulowe-ip56/9.2_10_39072.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
];

const models_9_2: { model: string }[] = [
  { model: '3902-T' },
  { model: '3904' },
  { model: '3904-T' },
  { model: '3908' },
  { model: '3908-T' },
  { model: '3912' },
  { model: '3912-T' },
  { model: '3926' },
  { model: '3926-T' },
  { model: '3942' },
  { model: '3942-T' },
  { model: '39018' },
  { model: '39036' },
  { model: '39054' },
  { model: '39072' },
];

export const indexImgCat9_subCat_2 = indexImgCat9_subCat_2_temp.map(
  (item, i) => ({
    ...item,
    model: models_9_2[i].model,
  })
);
