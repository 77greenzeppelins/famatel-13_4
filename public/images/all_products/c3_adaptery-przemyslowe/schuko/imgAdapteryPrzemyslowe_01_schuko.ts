export const indexImgCat3_subCat_1_temp: ImageType_C[] = [
  {
    path: '/images/all_products/c3_adaptery-przemyslowe/schuko/3.1_16010.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c3_adaptery-przemyslowe/schuko/3.1_16002.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
];
const models_3_1: { model: string }[] = [
  { model: '16010' },
  { model: '16002' },
];

export const indexImgCat3_subCat_1 = indexImgCat3_subCat_1_temp.map(
  (item, i) => ({
    ...item,
    model: models_3_1[i].model,
  })
);
