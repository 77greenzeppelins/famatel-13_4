import { indexImgCat8_subCat_1 } from './1_puste/imgObudowyRozdzielnice_01_obudowy-puste';
import { indexImgCat8_subCat_2 } from './2_przemyslowe/imgObudowyRozdzielnice_02_przemyslowe';
import { indexImgCat8_subCat_3 } from './3_gumowe/imgObudowyRozdzielnice_03_gumowe';
import { indexImgCat8_subCat_4 } from './4_akcesoria/imgObudowyRozdzielnice_04_akcesoria';

export const indexImgCat8_ProductsAll: ImageType_C[][] = [
  indexImgCat8_subCat_1,
  indexImgCat8_subCat_2,
  indexImgCat8_subCat_3,
  indexImgCat8_subCat_4,
];

export const indexImgCat8_subCat_forCatalog: ImageType_C[] = [
  {
    path: '/images/all_products/c8_obudowy-rozdzielnice/1_puste/8.1_12_3975.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie obudowy przemysłowej',
  },
  {
    path: '/images/all_products/c8_obudowy-rozdzielnice/2_przemyslowe/8.2_03_6602.webp',
    width: 1200,
    height: 1200,

    alt: 'Zdjęcie obudowy przemysłowej',
  },
  {
    path: '/images/all_products/c8_obudowy-rozdzielnice/3_gumowe/8.3_02_23311_full.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie obudowy przemysłowej',
  },
  {
    path: '/images/all_products/c8_obudowy-rozdzielnice/4_akcesoria/8.4_43_SPTA-12.webp',
    width: 800,
    height: 800,
    alt: 'Zdjęcie obudowy przemysłowej',
  },
];

/*
used in: produktPage in slider
*/
export const cat8_sliderImages = [
  ...indexImgCat8_subCat_forCatalog,
  {
    path: '/images/all_products/c8_obudowy-rozdzielnice/2_przemyslowe/8.2_04_3957_1.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie obudowy przemysłowej',
  },
];

/**Images**/
//___one for 3 products
// import img1 from './2_przemyslowe/8.2_03_6602.webp';
// import img2 from './1_puste/8.1_12_3975.webp';
// import img3 from './2_przemyslowe/8.2_04_3957_1.webp';
// import img4 from './3_gumowe/8.3_02_23311_full.webp';
// import img5 from './2_przemyslowe/8.2_11_3980.webp';
// import img6 from './1_puste/8.1_21_3970.webp';
// import img7 from './4_akcesoria/8.4_43_SPTA-12.webp';
