export const indexImgCat2_subCat_2_temp: ImageType_C[] = [
  {
    path: '/images/all_products/c2_gniazda-z-blokada/2_stale/2.2_01_26008.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie gniazda z blokadą',
  },
  {
    path: '/images/all_products/c2_gniazda-z-blokada/2_stale/2.2_02_26002.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie gniazda z blokadą',
  },
  {
    path: '/images/all_products/c2_gniazda-z-blokada/2_stale/2.2_03_25116.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie gniazda z blokadą',
  },
  {
    path: '/images/all_products/c2_gniazda-z-blokada/2_stale/2.2_04_25110.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie gniazda z blokadą',
  },
  // {
  //   path: '/images/all_products/c2_gniazda-z-blokada/2_stale/2.2_05_25159.webp',
  //   width: 1200,
  //   height: 1200,
  //   alt: 'Zdjęcie gniazda z blokadą',
  // },
];
const models_2_2: { model: string }[] = [
  { model: '26008' },
  { model: '26002' },
  { model: '25116' },
  { model: '25110' },
];

export const indexImgCat2_subCat_2 = indexImgCat2_subCat_2_temp.map(
  (item, i) => ({
    ...item,
    model: models_2_2[i].model,
  })
);
