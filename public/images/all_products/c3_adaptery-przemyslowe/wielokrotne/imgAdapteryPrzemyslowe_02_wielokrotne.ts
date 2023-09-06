export const indexImgCat3_subCat_2_temp: ImageType_C[] = [
  {
    path: '/images/all_products/c3_adaptery-przemyslowe/wielokrotne/3.2_15006.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c3_adaptery-przemyslowe/wielokrotne/3.2_16002.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c3_adaptery-przemyslowe/wielokrotne/3.2_15001.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c3_adaptery-przemyslowe/wielokrotne/3.2_16000.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c3_adaptery-przemyslowe/wielokrotne/3.2_15003.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c3_adaptery-przemyslowe/wielokrotne/3.2_16006.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
];

const models_3_2: { model: string }[] = [
  { model: '15006' },
  { model: '16002' },
  { model: '15001' },
  { model: '16000' },
  { model: '15003' },
  { model: '16006' },
];

export const indexImgCat3_subCat_2 = indexImgCat3_subCat_2_temp.map(
  (item, i) => ({
    ...item,
    model: models_3_2[i].model,
  })
);
