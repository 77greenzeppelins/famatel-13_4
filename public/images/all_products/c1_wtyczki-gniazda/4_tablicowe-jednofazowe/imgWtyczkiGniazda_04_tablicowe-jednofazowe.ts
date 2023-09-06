// import { StaticImageData } from 'next/image';
/**Images**/
import img1 from './1.4_01_13953_d2.webp';
import img2 from './1.4_02_13950_d2.webp';
import img3 from './1.4_03_13957_d2.webp';
import img4 from './1.4_04_13956_d2.webp';
import img5 from './1.4_05_13960_d.webp';
import img6 from './1.4_06_13960F_d.webp';
import img7 from './1.4_07_23960.webp';
import img8 from './1.4_08_24960.webp';
import img9 from './1.4_09_13955.webp';
import img10 from './1.4_10_3905.webp';

export const indexImgCat1_subCat_4_temp: ImageType_C[] = [
  {
    path: '/images/all_products/c1_wtyczki-gniazda/4_tablicowe-jednofazowe/1.4_01_13953_d2.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/4_tablicowe-jednofazowe/1.4_02_13950_d2.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/4_tablicowe-jednofazowe/1.4_03_13957_d2.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/4_tablicowe-jednofazowe/1.4_04_13956_d2.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/4_tablicowe-jednofazowe/1.4_05_13960_d.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/4_tablicowe-jednofazowe/1.4_06_13960F_d.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/4_tablicowe-jednofazowe/1.4_07_23960.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/4_tablicowe-jednofazowe/1.4_08_24960.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/4_tablicowe-jednofazowe/1.4_09_13955.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
  {
    path: '/images/all_products/c1_wtyczki-gniazda/4_tablicowe-jednofazowe/1.4_10_3905.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie wtyczki przemysłowej',
  },
];

const models_1_4: { model: string }[] = [
  { model: '13953' },
  { model: '13950' },
  { model: '13957' },
  { model: '13956' },
  { model: '13960' },
  { model: '13960F' },
  { model: '' },
  { model: '24960' },
  { model: '13955' },
  { model: '3905' },
];

export const indexImgCat1_subCat_4 = indexImgCat1_subCat_4_temp.map(
  (item, i) => ({
    ...item,
    model: models_1_4[i].model,
  })
);
