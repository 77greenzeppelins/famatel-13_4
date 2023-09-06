export const indexImgCat8_subCat_3_temp: ImageType_C[] = [
  {
    path: '/images/all_products/c8_obudowy-rozdzielnice/3_gumowe/8.3_01_23310.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c8_obudowy-rozdzielnice/3_gumowe/8.3_02_23311.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c8_obudowy-rozdzielnice/3_gumowe/8.3_03_23312.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
];
const models_8_3: { model: string }[] = [
  { model: '23310' },
  { model: '23311' },
  { model: '23312' },
];

export const indexImgCat8_subCat_3 = indexImgCat8_subCat_3_temp.map(
  (item, i) => ({
    ...item,
    model: models_8_3[i].model,
  })
);
