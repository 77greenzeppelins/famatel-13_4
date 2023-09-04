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
  wtyczkiGniazdaSubCatPaths,
  gniazdaZBlokadaSubCatPaths,
  adapteryPrzemysloweSubCatPaths,
  przedluzaczeBebnoweSubCatPaths,
  rozlacznikiBezpieczenstwaSubCatPaths,
  obudowyAndRozdzielniceSubCatPaths,
  rozdzielniceModuloweSubCatPaths,
} from './routingData';
import { indexImgCat } from '@/public/images/for_dropDownMenu/indexImgCat';
import { indexImgAllSubCategories } from '@/public/images/all_products/indexImgAllProducts';

/*
catAllModels: cat1_alModelsCard_data,___1. for property: 

catAllCatalogData: allCatalogData[0],
catAllTechData: allTechSpecData[0], //then update index !catAllProductsImage
s
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
___1. for property: catAllCatalogData
*/
import { allCategoriesCatalogsData } from './modelsData/indexAllCatalog_data';
/*
___1. for property: catAllTechData
*/
import { allTechSpecData } from './modelsData/indexAllTechSpec_data';

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
  cat1_allModels_pathSegments, //___fake
  cat1_allModels_pathSegments, //___fake
  cat1_allModels_pathSegments, //___fake
  cat2_allModels_pathSegments, //___fake
  cat8_allModels_pathSegments,
  cat9_allModels_pathSegments,
  cat10_allModels_pathSegments,
];
/*
indexImgCat1_subCat_forCatalog
...
 */
export const catalogStructureData: CatalogStructureData = [
  //_____category__1__wtyczki-gniazda
  {
    mainCategoryIndex: 0,
    mainCategoryName: mainCategoriesNames[0],
    mainCategoryPath: `${mainPagesPaths.produkty}/${mainCategoriesPath[0]}`,
    mainCategoryImage: indexImgCat[0],
    subCategoriesNames: [...wtyczkiGniazdaSubCatNames],
    subCategoriesSegments: [...wtyczkiGniazdaSubCatPaths],
    subCategoriesPaths: [...wtyczkiGniazdaSubCatFullPaths],
    subCategoriesImages: indexImgAllSubCategories[0],
    svgIcons: ['IP54', 'IP67', 'ENEC'],
    labeledIcons: ['16A', '32A', '63A', '125A'],
    catAllModels: cat1_allModelsCard_data, //___for <CatalogCardWithModel>
    catAllProductsImages: indexImgCat1_ProductsAll,
    catAllCatalogData: allCategoriesCatalogsData[0],
    catAllTechData: allTechSpecData[0], //
  },
  //_____category__2__gniazda-z-blokada
  {
    mainCategoryIndex: 1,
    mainCategoryName: mainCategoriesNames[1],
    mainCategoryPath: `${mainPagesPaths.produkty}/${mainCategoriesPath[1]}`,
    mainCategoryImage: indexImgCat[1],
    subCategoriesNames: [...gniazdaZBlokadaSubCatNames],
    subCategoriesSegments: [...gniazdaZBlokadaSubCatPaths],
    subCategoriesPaths: [...gniazdaZBlokadaSubCatFullPaths],
    subCategoriesImages: indexImgAllSubCategories[1],
    svgIcons: ['IP54', 'IP67', 'IK08', 'ENEC'],
    labeledIcons: ['16A', '32A', '63A', '125A'],
    catAllModels: cat2_allModelsCard_data,
    catAllProductsImages: indexImgCat2_ProductsAll,
    catAllCatalogData: allCategoriesCatalogsData[1],
    catAllTechData: allTechSpecData[1], //then update index !
  },
  //_____category__3__adaptery-przemyslowe
  {
    mainCategoryIndex: 2,
    mainCategoryName: mainCategoriesNames[2],
    mainCategoryPath: `${mainPagesPaths.produkty}/${mainCategoriesPath[2]}`,
    mainCategoryImage: indexImgCat[2],
    subCategoriesNames: [...adapteryPrzemysloweSubCatNames],
    subCategoriesSegments: [...adapteryPrzemysloweSubCatPaths],
    subCategoriesPaths: [...adapteryPrzemysloweSubCatFullPaths],
    subCategoriesImages: indexImgAllSubCategories[2],
    svgIcons: ['IP20', 'IP54', 'IP67'],
    labeledIcons: ['16A', '32A'],
    catAllModels: cat3_allModelsCard_data,
    catAllProductsImages: indexImgCat3_ProductsAll,
    catAllCatalogData: allCategoriesCatalogsData[2],
    catAllTechData: allTechSpecData[2], //then update index !
  },
  //_____category__4__noSubCategory__gniazda-podwieszane
  {
    mainCategoryIndex: 3,
    mainCategoryName: mainCategoriesNames[3],
    mainCategoryPath: `${mainPagesPaths.produkty}/${mainCategoriesPath[3]}`,
    mainCategoryImage: indexImgCat[3],
    subCategoriesNames: [...gniazdaPodwieszaneSubCatNames],
    subCategoriesSegments: [...gniazdaPodwieszaneSubCatPaths],
    subCategoriesPaths: [...gniazdaPodwieszaneSubCatPaths],
    subCategoriesImages: indexImgAllSubCategories[3], //___fake
    // svgIcons: [''],
    labeledIcons: ['16A', '32A', '63A', '125A'],
    catAllModels: cat1_allModelsCard_data, //___fake
    catAllProductsImages: undefined, //___fake
    catAllCatalogData: undefined,
    catAllTechData: allTechSpecData[3], //then update index !
  },
  //_____category__5__przedlużacze-będnowe
  {
    mainCategoryIndex: 4,
    mainCategoryName: mainCategoriesNames[4],
    mainCategoryPath: `${mainPagesPaths.produkty}/${mainCategoriesPath[4]}`,
    mainCategoryImage: indexImgCat[4],
    subCategoriesNames: [...przedluzaczeBebnoweSubCatNames],
    subCategoriesSegments: [...przedluzaczeBebnoweSubCatPaths],
    subCategoriesPaths: [...przedluzaczeBebnoweSubCatFullPaths],
    subCategoriesImages: indexImgAllSubCategories[4],
    svgIcons: ['IP55', 'IP67', 'IK06'],
    labeledIcons: ['16A'],
    catAllModels: cat1_allModelsCard_data,
    catAllProductsImages: indexImgCat5_ProductsAll,
    catAllCatalogData: allCategoriesCatalogsData[0],
    catAllTechData: allTechSpecData[4], //then update index !
  },
  //_____category__6__noSubcategory__rozlaczniki-bezpieczenstwa
  {
    mainCategoryIndex: 5,
    mainCategoryName: mainCategoriesNames[5],
    mainCategoryPath: `${mainPagesPaths.produkty}/${mainCategoriesPath[5]}`,
    mainCategoryImage: indexImgCat[5],
    subCategoriesNames: [...rozlacznikiBezpieczenstwaSubCatNames],
    subCategoriesSegments: [...rozlacznikiBezpieczenstwaSubCatPaths],
    subCategoriesPaths: [...rozlacznikiBezpieczenstwaSubCatFullPaths],
    subCategoriesImages: indexImgAllSubCategories[5], //___fake
    svgIcons: ['IP67', 'IK08'],
    labeledIcons: ['16A', '20A', '25A', '32A', '40A'],
    catAllModels: cat1_allModelsCard_data,
    catAllProductsImages: undefined,
    catAllCatalogData: undefined,
    catAllTechData: allTechSpecData[5], //then update index !
  },
  //_____category__7__noSubcategory__ladowarki-samochodowe
  {
    mainCategoryIndex: 6,
    mainCategoryName: mainCategoriesNames[6],
    mainCategoryPath: `${mainPagesPaths.produkty}/${mainCategoriesPath[6]}`,
    mainCategoryImage: indexImgCat[6],
    subCategoriesNames: [...ladowarkiPojazdowSubCatNames],
    subCategoriesSegments: [...ladowarkiPojazdowSubCatPaths],
    subCategoriesPaths: [...ladowarkiPojazdowSubCatPaths],
    subCategoriesImages: indexImgAllSubCategories[6], //___fake
    svgIcons: ['IP54', 'IK08'],
    labeledIcons: ['16A', '32A'],
    catAllModels: cat1_allModelsCard_data,
    catAllProductsImages: undefined,
    catAllCatalogData: undefined,
    catAllTechData: allTechSpecData[6], //then update index !
  },
  //_____category__8__obudowy-i-rozdzielnice
  {
    mainCategoryIndex: 7,
    mainCategoryName: mainCategoriesNames[7],
    mainCategoryPath: `${mainPagesPaths.produkty}/${mainCategoriesPath[7]}`,
    mainCategoryImage: indexImgCat[7],
    subCategoriesNames: [...obudowyAndRozdzielniceSubCatNames],
    subCategoriesSegments: [...obudowyAndRozdzielniceSubCatPaths],
    subCategoriesPaths: [...obudowyAndRozdzielniceSubCatFullPaths],
    subCategoriesImages: indexImgAllSubCategories[7],
    svgIcons: ['IP65', 'IK08', 'FREE', 'UV', 'IZO', 'MODR'],
    labeledIcons: ['16A', '32A'],
    catAllModels: cat8_allModelsCard_data,
    catAllProductsImages: indexImgCat8_ProductsAll,
    catAllCatalogData: undefined,
    catAllTechData: allTechSpecData[7], //then update index !
  },
  //_____category__9__rozdzielnice-modulowe
  {
    mainCategoryIndex: 8,
    mainCategoryName: mainCategoriesNames[8],
    mainCategoryPath: `${mainPagesPaths.produkty}/${mainCategoriesPath[8]}`,
    mainCategoryImage: indexImgCat[8],
    subCategoriesNames: [...rozdzielniceModuloweSubCatNames],
    subCategoriesSegments: [...rozdzielniceModuloweSubCatPaths],
    subCategoriesPaths: [...rozdzielniceModuloweSubCatFullPaths],
    subCategoriesImages: indexImgAllSubCategories[8],
    svgIcons: ['IP65', 'IK08', 'FREE', 'UV', 'IZO', 'MODR'],
    labeledIcons: ['16A', '32A'],
    catAllModels: cat9_allModelsCard_data,
    catAllProductsImages: indexImgCat9_ProductsAll,
    catAllCatalogData: undefined,
    catAllTechData: allTechSpecData[8], //then update index !
  },
  //_____category__10__puszki-instalacyjne
  {
    mainCategoryIndex: 9,
    mainCategoryName: mainCategoriesNames[9],
    mainCategoryPath: `${mainPagesPaths.produkty}/${mainCategoriesPath[9]}`,
    mainCategoryImage: indexImgCat[9],
    subCategoriesNames: [...puszkiInstalacyjneSubCatNames],
    subCategoriesSegments: [...puszkiInstalacyjneSubCatFullPaths],
    subCategoriesPaths: [...puszkiInstalacyjneSubCatFullPaths],
    subCategoriesImages: indexImgAllSubCategories[9],
    svgIcons: ['IP20', 'IP44', 'IP55', 'IP65', 'IK07', 'FREE', 'UV', 'IZO'],
    catAllModels: cat10_allModelsCard_data,
    catAllProductsImages: indexImgCat10_ProductsAll,
    catAllCatalogData: undefined,
    catAllTechData: allTechSpecData[9], //then update index !
  },
];
