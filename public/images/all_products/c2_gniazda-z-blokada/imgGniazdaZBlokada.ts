import { indexImgCat2_subCat_1 } from './1_tablicowe/imgGniazdaBlokada_01_tablicowe';
import { indexImgCat2_subCat_2 } from './2_stale/imgGniazdaBlokada_02_stale';
import { indexImgCat2_subCat_3 } from './3_z-komponentami/imgGniazdaBlokada_03_z-komponentami';
import { indexImgCat2_subCat_4 } from './4_akcesoria/imgGniazdaBlokada_04_akcesoria';

export const indexImgCat2_ProductsAll: ImageType_C[][] = [
  indexImgCat2_subCat_1,
  indexImgCat2_subCat_2,
  indexImgCat2_subCat_3,
  indexImgCat2_subCat_4,
];

/*
used in: subCategorie cards component
used in: images | allProducts |  indexImgAllSubCategories.js to create array with images of all subCats from all 10 categories; then in catalogStructureData.js as static data for 
*/
export const indexImgCat2_subCat_forCatalog: ImageType_C[] = [
  {
    path: '/images/all_products/c2_gniazda-z-blokada/1_tablicowe/2.1_03_25056.webp',
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
  {
    path: '/images/all_products/c2_gniazda-z-blokada/3_z-komponentami/2.3_03_26303.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie gniazda z blokadą',
  },
  {
    path: '/images/all_products/c2_gniazda-z-blokada/4_akcesoria/2.4_02_23022.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie gniazda z blokadą',
  },
];

/*
used in: produktPage in slider
*/
export const cat2_sliderImages = [
  ...indexImgCat2_subCat_forCatalog,
  {
    path: '/images/all_products/c2_gniazda-z-blokada/3_z-komponentami/2.3_03_26303.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie gniazda z blokadą',
  },
  {
    path: '/images/all_products/c2_gniazda-z-blokada//2_stale/2.2_05_25159.webp',
    width: 1200,
    height: 1200,
    alt: 'Zdjęcie gniazda z blokadą',
  },
];

/**Images**/
//___bottomLine
// import img1 from './1_tablicowe/2.1_03_25056.webp';
// import img2 from './2_stale/2.2_05_25159.webp';
// import img3 from './1_tablicowe/2.1_04_25010.webp';
// import img4 from './3_z-komponentami/2.3_03_26303.webp';
// //___topLine
// import img5 from './3_z-komponentami/2.3_01_25703.webp';
// import img6 from './2_stale/2.2_04_25110.webp';
// import img7 from './3_z-komponentami/2.3_05_26503FH.webp';
// import img8 from './4_akcesoria/2.4_02_23022.webp';
