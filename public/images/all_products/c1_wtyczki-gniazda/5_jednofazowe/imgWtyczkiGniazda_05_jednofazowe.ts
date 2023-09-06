// import { StaticImageData } from 'next/image';
/**Images**/
// import img1 from './1.5_01_1167.webp';
// import img2 from './1.5_02_2167.webp';
// import img3 from './1.5_03_2167F.webp';
// import img4 from './1.5_04_1165.webp';
// import img5 from './1.5_05_2165.webp';
// import img6 from './1.5_06_2165F.webp';
// import img7 from './1.5_07_178G.webp';
// import img8 from './1.5_07_188G_catalog.webp';
// import img9 from './1.5_09_2998.webp';

export const indexImgCat1_subCat_5_temp: ImageType_C[] = [
  {
    path: '/images/all_products/c1_wtyczki-gniazda/5_jednofazowe/1.5_01_1167.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/5_jednofazowe/1.5_02_2167.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/5_jednofazowe/1.5_03_2167F.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/5_jednofazowe/1.5_04_1165.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/5_jednofazowe/1.5_05_2165.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/5_jednofazowe/1.5_06_2165F.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/5_jednofazowe/1.5_07_178G.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/5_jednofazowe/1.5_07_188G_catalog.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/5_jednofazowe/1.5_09_2998.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
];

const models_1_5: { model: string }[] = [
  { model: '1167' },
  { model: '2167' },
  { model: '2167F' },
  { model: '1165' },
  { model: '2165' },
  { model: '1165F' },
  { model: '187G' },
  { model: '188G' },
  { model: '2998' },
];

export const indexImgCat1_subCat_5 = indexImgCat1_subCat_5_temp.map(
  (item, i) => ({
    ...item,
    model: models_1_5[i].model,
  })
);
