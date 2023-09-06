// import { StaticImageData } from 'next/image';
/**Images**/
// import img1 from './1.6_01_13800.webp';
// import img2 from './1.6_02_14800.webp';
// import img3 from './1.6_03_23800.webp';
// import img4 from './1.6_04_24800.webp';
// import img5 from './1.6_05_25540.webp';
// import img6 from './1.6_06_25556.webp';
// import img7 from './1.6_07_23072.webp';
// import img8 from './1.6_08_24991.webp';

/**
 * used in: images / kategorieProduktowPage / imgKategorieProduktowPage.ts
 **/
export const indexImgCat1_subCat_6_temp: ImageType_C[] = [
  {
    path: '/images/all_products/c1_wtyczki-gniazda/6_niskie-napiecia/1.6_01_13800.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/6_niskie-napiecia/1.6_02_14800.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/6_niskie-napiecia/1.6_03_23800.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/6_niskie-napiecia/1.6_04_24800.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/6_niskie-napiecia/1.6_05_25540.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/6_niskie-napiecia/1.6_06_25556.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/6_niskie-napiecia/1.6_07_23072.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/6_niskie-napiecia/1.6_08_24991.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
];

const models_1_6: { model: string }[] = [
  { model: '13800' },
  { model: '14800' },
  { model: '23800' },
  { model: '24800' },
  { model: '25540' },
  { model: '25556' },
  { model: '23072' },
  { model: '24991' },
];

export const indexImgCat1_subCat_6 = indexImgCat1_subCat_6_temp.map(
  (item, i) => ({
    ...item,
    model: models_1_6[i].model,
  })
);
