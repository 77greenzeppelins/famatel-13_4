import {
  mainCategoriesPath,
  mainPagesPaths,
  mainCategoriesNames,
  //___all subCategoriesNames
  wtyczkiGniazdaSubCatNames,
  gniazdaZBlokadaSubCatNames,
  adapteryPrzemysloweSubCatNames,
  gniazdaPodwieszaneSubCatNames,
  przedluzaczeBebnoweSubCatNames,
  rozlacznikiBezpieczenstwaSubCatNames,
  ladowarkiPojazdowSubCatNames,
  obudowyAndRozdzielniceSubCatNames,
  rozdzielniceModuloweSubCatNames,
  puszkiInstalacyjneSubCatNames,
  //___
  wtyczkiGniazdaSubCatFullPaths,
  gniazdaZBlokadaSubCatFullPaths,
  adapteryPrzemysloweSubCatFullPaths,
  gniazdaPodwieszaneSubCatPaths,
  przedluzaczeBebnoweSubCatFullPaths,
  rozlacznikiBezpieczenstwaSubCatFullPaths,
  ladowarkiPojazdowSubCatPaths,
  obudowyAndRozdzielniceSubCatFullPaths,
  rozdzielniceModuloweSubCatFullPaths,
  puszkiInstalacyjneSubCatFullPaths,
  //___
  // cat1_sub1_models,
} from './routingData';
import { indexImgCat } from '@/public/images/for_dropDownMenu/indexImgCat';
import { indexImgAllSubCategories } from '@/public/images/all_products/indexImgAllProducts';

/*
catAllModels: cat1_allModelsCard_data,___1. for property: 
catAllProductsImages
*/
import { indexImgCat1_ProductsAll } from '@/public/images/all_products/c1_wtyczki-gniazda/imgWtyczkiGniazda';
import { indexImgCat2_ProductsAll } from '@/public/images/all_products/c2_gniazda-z-blokada/imgGniazdaZBlokada';
import { indexImgCat3_ProductsAll } from '@/public/images/all_products/c3_adaptery-przemyslowe/imgAdapteryPrzemyslowe';
import { indexImgCat5_ProductsAll } from '@/public/images/all_products/c5_przedluzacze-bebnowe/imgPrzedluzaczeBebnowe';
import { indexImgCat8_ProductsAll } from '@/public/images/all_products/c8_obudowy-rozdzielnice/imgObudowyRozdzielnice';
import { indexImgCat9_ProductsAll } from '@/public/images/all_products/c9_rozdzielnice-modulowe/imgRozdzielniceModulowe';
import { indexImgCat10_ProductsAll } from '@/public/images/all_products/c10_puszki-instalacyjne/imgPuszkiInstalacyjne';

/*
___1. for property 
*/
import {
  //__all models pathSegments to call notFound() in ModelPage.tsx
  cat1_allModels_pathSegments,
  //___
  cat1_allModelsCard_data,
} from './modelsData/cat_1_wtyczki-gniazda/cat1_allModelsCard_data';
import {
  cat2_allModels_pathSegments,
  cat2_allModelsCard_data,
} from './modelsData/cat_2_gniazda-z-blokada/cat2_allModelsCard_data';
import {
  cat3_allModels_pathSegments,
  cat3_allModelsCard_data,
} from './modelsData/cat_3_adaptery-przemyslowe/cat3_allModelsCard_data';
import {
  cat8_allModels_pathSegments,
  cat8_allModelsCard_data,
} from './modelsData/cat_8_obudowy-i-rozdzielnice/cat8_allModelsCard_data';
import {
  cat9_allModels_pathSegments,
  cat9_allModelsCard_data,
} from './modelsData/cat_9_rozdzielnice-modulowe/cat9_allModelsCard_data';
import {
  cat10_allModels_pathSegments,
  cat10_allModelsCard_data,
} from './modelsData/cat_10_puszki-instalacyjne/cat10_allModelsCard_data';

/*
used in: [subCat] | page.tsx
*/
export const allSubCatNames = [
  ...wtyczkiGniazdaSubCatNames,
  ...gniazdaZBlokadaSubCatNames,
  ...adapteryPrzemysloweSubCatNames,
  ...gniazdaPodwieszaneSubCatNames,
  ...przedluzaczeBebnoweSubCatNames,
  ...rozlacznikiBezpieczenstwaSubCatNames,
  ...ladowarkiPojazdowSubCatNames,
  ...obudowyAndRozdzielniceSubCatNames,
  ...rozdzielniceModuloweSubCatNames,
  ...puszkiInstalacyjneSubCatNames,
];
/*
for all models
*/
export const allModelsPathSegment = [
  cat1_allModels_pathSegments,
  cat2_allModels_pathSegments,
  cat3_allModels_pathSegments,
  //___
  cat1_allModels_pathSegments, //___fake
  cat1_allModels_pathSegments, //___fake
  cat1_allModels_pathSegments,
  cat2_allModels_pathSegments,
  cat8_allModels_pathSegments,
  cat9_allModels_pathSegments,
  cat10_allModels_pathSegments,
];
/*
indexImgCat1_subCat_forCatalog
...
 */
export const catalogStructureData: CatalogStructureData[] = [
  //_____category__1__wtyczki-gniazda
  {
    mainCategoryIndex: 0,
    mainCategoryName: mainCategoriesNames[0],
    mainCategoryPath: `${mainPagesPaths.produkty}/${mainCategoriesPath[0]}`,
    mainCategoryImage: indexImgCat[0],
    subCategoriesNames: [...wtyczkiGniazdaSubCatNames],
    subCategoriesPaths: [...wtyczkiGniazdaSubCatFullPaths],
    subCategoriesImages: indexImgAllSubCategories[0],
    svgIcons: ['IP54', 'IP67', 'ENEC'],
    labeledIcons: ['16A', '32A', '63A', '125A'],
    catAllModels: cat1_allModelsCard_data, //___for <CatalogCardWithModel>
    catAllProductsImages: indexImgCat1_ProductsAll,
  },
  //_____category__2__gniazda-z-blokada
  {
    mainCategoryIndex: 1,
    mainCategoryName: mainCategoriesNames[1],
    mainCategoryPath: `${mainPagesPaths.produkty}/${mainCategoriesPath[1]}`,
    mainCategoryImage: indexImgCat[1],
    subCategoriesNames: [...gniazdaZBlokadaSubCatNames],
    subCategoriesPaths: [...gniazdaZBlokadaSubCatFullPaths],
    subCategoriesImages: indexImgAllSubCategories[1],
    svgIcons: ['IP54', 'IP67', 'IK08', 'ENEC'],
    labeledIcons: ['16A', '32A', '63A', '125A'],
    catAllModels: cat2_allModelsCard_data,
    catAllProductsImages: indexImgCat2_ProductsAll,
  },
  //_____category__3__adaptery-przemyslowe
  {
    mainCategoryIndex: 2,
    mainCategoryName: mainCategoriesNames[2],
    mainCategoryPath: `${mainPagesPaths.produkty}/${mainCategoriesPath[2]}`,
    mainCategoryImage: indexImgCat[2],
    subCategoriesNames: [...adapteryPrzemysloweSubCatNames],
    subCategoriesPaths: [...adapteryPrzemysloweSubCatFullPaths],
    subCategoriesImages: indexImgAllSubCategories[2],
    svgIcons: ['IP20', 'IP54', 'IP67'],
    labeledIcons: ['16A', '32A'],
    catAllModels: cat3_allModelsCard_data,
    catAllProductsImages: indexImgCat3_ProductsAll,
  },
  //_____category__4__noSubCategory__gniazda-podwieszane
  {
    mainCategoryIndex: 3,
    mainCategoryName: mainCategoriesNames[3],
    mainCategoryPath: `${mainPagesPaths.produkty}/${mainCategoriesPath[3]}`,
    mainCategoryImage: indexImgCat[3],
    subCategoriesNames: [...gniazdaPodwieszaneSubCatNames],
    subCategoriesPaths: [...gniazdaPodwieszaneSubCatPaths],
    subCategoriesImages: indexImgAllSubCategories[3], //___fake
    // svgIcons: [''],
    labeledIcons: ['16A', '32A', '63A', '125A'],
    catAllModels: cat1_allModelsCard_data, //___fake
    catAllProductsImages: indexImgCat1_ProductsAll, //___fake
  },
  //_____category__5__przedlużacze-będnowe
  {
    mainCategoryIndex: 4,
    mainCategoryName: mainCategoriesNames[4],
    mainCategoryPath: `${mainPagesPaths.produkty}/${mainCategoriesPath[4]}`,
    mainCategoryImage: indexImgCat[4],
    subCategoriesNames: [...przedluzaczeBebnoweSubCatNames],
    subCategoriesPaths: [...przedluzaczeBebnoweSubCatFullPaths],
    subCategoriesImages: indexImgAllSubCategories[4],
    svgIcons: ['IP55', 'IP67', 'IK06'],
    labeledIcons: ['16A'],
    catAllModels: cat1_allModelsCard_data,
    catAllProductsImages: indexImgCat5_ProductsAll,
  },
  //_____category__6__noSubcategory__rozlaczniki-bezpieczenstwa
  {
    mainCategoryIndex: 5,
    mainCategoryName: mainCategoriesNames[5],
    mainCategoryPath: `${mainPagesPaths.produkty}/${mainCategoriesPath[5]}`,
    mainCategoryImage: indexImgCat[5],
    subCategoriesNames: [...rozlacznikiBezpieczenstwaSubCatNames],
    subCategoriesPaths: [...rozlacznikiBezpieczenstwaSubCatFullPaths],
    subCategoriesImages: indexImgAllSubCategories[5], //___fake
    svgIcons: ['IP67', 'IK08'],
    labeledIcons: ['16A', '20A', '25A', '32A', '40A'],
    catAllModels: cat1_allModelsCard_data,
    catAllProductsImages: indexImgCat1_ProductsAll,
  },
  //_____category__7__noSubcategory__ladowarki-samochodowe
  {
    mainCategoryIndex: 6,
    mainCategoryName: mainCategoriesNames[6],
    mainCategoryPath: `${mainPagesPaths.produkty}/${mainCategoriesPath[6]}`,
    mainCategoryImage: indexImgCat[6],
    subCategoriesNames: [...ladowarkiPojazdowSubCatNames],
    subCategoriesPaths: [...ladowarkiPojazdowSubCatPaths],
    subCategoriesImages: indexImgAllSubCategories[6], //___fake
    svgIcons: ['IP54', 'IK08'],
    labeledIcons: ['16A', '32A'],
    catAllModels: cat1_allModelsCard_data,
    catAllProductsImages: indexImgCat1_ProductsAll,
  },
  //_____category__8__obudowy-i-rozdzielnice
  {
    mainCategoryIndex: 7,
    mainCategoryName: mainCategoriesNames[7],
    mainCategoryPath: `${mainPagesPaths.produkty}/${mainCategoriesPath[7]}`,
    mainCategoryImage: indexImgCat[7],
    subCategoriesNames: [...obudowyAndRozdzielniceSubCatNames],
    subCategoriesPaths: [...obudowyAndRozdzielniceSubCatFullPaths],
    subCategoriesImages: indexImgAllSubCategories[7],
    svgIcons: ['IP65', 'IK08', 'FREE', 'UV', 'IZO', 'MODR'],
    labeledIcons: ['16A', '32A'],
    catAllModels: cat8_allModelsCard_data,
    catAllProductsImages: indexImgCat8_ProductsAll,
  },
  //_____category__9__rozdzielnice-modulowe
  {
    mainCategoryIndex: 8,
    mainCategoryName: mainCategoriesNames[8],
    mainCategoryPath: `${mainPagesPaths.produkty}/${mainCategoriesPath[8]}`,
    mainCategoryImage: indexImgCat[8],
    subCategoriesNames: [...rozdzielniceModuloweSubCatNames],
    subCategoriesPaths: [...rozdzielniceModuloweSubCatFullPaths],
    subCategoriesImages: indexImgAllSubCategories[8],
    svgIcons: ['IP65', 'IK08', 'FREE', 'UV', 'IZO', 'MODR'],
    labeledIcons: ['16A', '32A'],
    catAllModels: cat9_allModelsCard_data,
    catAllProductsImages: indexImgCat9_ProductsAll,
  },
  //_____category__10__puszki-instalacyjne
  {
    mainCategoryIndex: 9,
    mainCategoryName: mainCategoriesNames[9],
    mainCategoryPath: `${mainPagesPaths.produkty}/${mainCategoriesPath[9]}`,
    mainCategoryImage: indexImgCat[9],
    subCategoriesNames: [...puszkiInstalacyjneSubCatNames],
    subCategoriesPaths: [...puszkiInstalacyjneSubCatFullPaths],
    subCategoriesImages: indexImgAllSubCategories[9],
    svgIcons: ['IP20', 'IP44', 'IP55', 'IP65', 'IK07', 'FREE', 'UV', 'IZO'],
    // labeledIcons: [''],
    catAllModels: cat10_allModelsCard_data,
    catAllProductsImages: indexImgCat10_ProductsAll,
  },
];
