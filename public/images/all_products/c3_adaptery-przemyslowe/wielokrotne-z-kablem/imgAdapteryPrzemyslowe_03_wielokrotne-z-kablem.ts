export const indexImgCat3_subCat_3_temp: ImageType_C[] = [
  {
    path: '/images/all_products/c3_adaptery-przemyslowe/wielokrotne-z-kablem/3.3_31004.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c3_adaptery-przemyslowe/wielokrotne-z-kablem/3.3_31012.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c3_adaptery-przemyslowe/wielokrotne-z-kablem/3.3_31040.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c3_adaptery-przemyslowe/wielokrotne-z-kablem/3.3_31020.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c3_adaptery-przemyslowe/wielokrotne-z-kablem/3.3_31071.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
];

const models_3_3: { model: string }[] = [
  { model: '31004' },
  { model: '31012' },
  { model: '31040' },
  { model: '31020' },
  { model: '31071' },
];

export const indexImgCat3_subCat_3 = indexImgCat3_subCat_3_temp.map(
  (item, i) => ({
    ...item,
    model: models_3_3[i].model,
  })
);
