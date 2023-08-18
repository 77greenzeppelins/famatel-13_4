import {
  mainCategoriesPath,
  mainPagesPaths,
  mainCategoriesNames,
  //___all subCategoies
  wtyczkiGniazdaSubCatNames,
  GniazdaZBlokadaSubCatNames,
  adapteryPrzemysloweSubCatNames,
  gniazdaPodwieszaneSubCatNames,
  przedluzaczeBebnoweSubCatNames,
  rozlacznikiBezpieczenstwaSubCatNames,
  ladowarkiPojazdowSubCatNames,
  obudowyAndRozdzielniceSubCatNames,
  rozdzielniceModuloweSubCatNames,
  puszkiInstalacyjneSubCatNames,
} from './routingData';
import { indexImgCat } from '@/public/images/for_dropDownMenu/indexImgCat';

/*
used in: [subCat] | page.tsx
*/
export const allSubCatNames = [
  ...wtyczkiGniazdaSubCatNames,
  ...GniazdaZBlokadaSubCatNames,
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
...
 */
export const catalogStructureData = [
  //_____category__1__wtyczki-gniazda
  {
    mainCategoryIndex: 0,
    mainCategoryName: mainCategoriesNames[0],
    mainCategoryPath: `${mainPagesPaths.produkty}/${mainCategoriesPath[0]}`,
    // mainCategoryPath: `${mainPagesPaths.produkty}`,
    mainCategoryImage: indexImgCat[0],
    subCategoriesNames: [...wtyczkiGniazdaSubCatNames],
    // subCategoriesUrls: [...wtyczkiGniazdaSubCategoriesUrls],
    // imageData: imgSubCategoryCatalogs[0],
    svgIcons: ['IP54', 'IP67', 'ENEC'],
    labeledIcons: ['16A', '32A', '63A', '125A'],
  },
  //_____category__2__gniazda-z-blokada
  {
    mainCategoryIndex: 1,
    mainCategoryName: mainCategoriesNames[1],
    mainCategoryPath: `${mainPagesPaths.produkty}/${mainCategoriesPath[1]}`,
    mainCategoryImage: indexImgCat[1],
    subCategoriesNames: [...GniazdaZBlokadaSubCatNames],
    // subCategoriesUrls: [...GniazdaZBlokadaSubCategoryUrls],
    // imageData: imgSubCategoryCatalogs[1],
    svgIcons: ['IP54', 'IP67', 'IK08', 'ENEC'],
    labeledIcons: ['16A', '32A', '63A', '125A'],
  },
  //_____category__3__adaptery-przemyslowe
  {
    mainCategoryIndex: 2,
    mainCategoryName: mainCategoriesNames[2],
    mainCategoryPath: `${mainPagesPaths.produkty}/${mainCategoriesPath[2]}`,
    mainCategoryImage: indexImgCat[2],
    subCategoriesNames: [...adapteryPrzemysloweSubCatNames],
    // subCategoriesUrls: [...adapteryPrzemysloweSubCategoryUrls],
    // imageData: imgSubCategoryCatalogs[2],
    svgIcons: ['IP20', 'IP54', 'IP67'],
    labeledIcons: ['16A', '32A'],
  },
  //_____category__4__noSubCategory__gniazda-podwieszane
  {
    mainCategoryIndex: 3,
    mainCategoryName: mainCategoriesNames[3],
    mainCategoryPath: `${mainPagesPaths.produkty}/${mainCategoriesPath[3]}`,
    mainCategoryImage: indexImgCat[3],
    subCategoriesNames: [...gniazdaPodwieszaneSubCatNames],
    // subCategoriesUrls: [...gniazdaPodwieszaneSubCategoryUrls],
    // imageData: imgSubCategoryCatalogs[3], //___fake
    // svgIcons: ['IP65', 'IK07'],
    labeledIcons: ['16A', '32A', '63A', '125A'],
  },
  //_____category__5__przedlużacze-będnowe
  {
    mainCategoryIndex: 4,
    mainCategoryName: mainCategoriesNames[4],
    mainCategoryPath: `${mainPagesPaths.produkty}/${mainCategoriesPath[4]}`,
    mainCategoryImage: indexImgCat[4],
    subCategoriesNames: [...przedluzaczeBebnoweSubCatNames],
    // subCategoriesUrls: [...przedluzaczeBebnoweSubCategoryUrls],
    // imageData: imgSubCategoryCatalogs[4],
    svgIcons: ['IP55', 'IP67', 'IK06'],
    labeledIcons: ['16A'],
  },
  //_____category__6__noSubcategory__rozlaczniki-bezpieczenstwa
  {
    mainCategoryIndex: 5,
    mainCategoryName: mainCategoriesNames[5],
    mainCategoryPath: `${mainPagesPaths.produkty}/${mainCategoriesPath[5]}`,
    mainCategoryImage: indexImgCat[5],
    subCategoriesNames: [...rozlacznikiBezpieczenstwaSubCatNames],
    // subCategoriesUrls: [...rozlacznikiBezpieczenstwaSubCategoryUrls],
    // imageData: imgSubCategoryCatalogs[5], //___fake
    svgIcons: ['IP67', 'IK08'],
    labeledIcons: ['16A', '20A', '25A', '32A', '40A'],
  },
  //_____category__7__noSubcategory__ladowarki-samochodowe
  {
    mainCategoryIndex: 6,
    mainCategoryName: mainCategoriesNames[6],
    mainCategoryPath: `${mainPagesPaths.produkty}/${mainCategoriesPath[6]}`,
    mainCategoryImage: indexImgCat[6],
    subCategoriesNames: [...ladowarkiPojazdowSubCatNames],
    // subCategoriesUrls: [...ladowarkiPojazdowSubCategoryUrls],
    // imageData: imgSubCategoryCatalogs[6], //___fake
    svgIcons: ['IP54', 'IK08'],
    labeledIcons: ['16A', '32A'],
  },
  //_____category__8__obudowy-i-rozdzielnice
  {
    mainCategoryIndex: 7,
    mainCategoryName: mainCategoriesNames[7],
    mainCategoryPath: `${mainPagesPaths.produkty}/${mainCategoriesPath[7]}`,
    mainCategoryImage: indexImgCat[7],
    subCategoriesNames: [...obudowyAndRozdzielniceSubCatNames],
    // subCategoriesUrls: [...obudowyAndRozdzielniceSubCategoryUrls],
    // imageData: imgSubCategoryCatalogs[7],
    svgIcons: ['IP65', 'IK08', 'FREE', 'UV', 'IZO', 'MODR'],
    labeledIcons: ['16A', '32A'],
  },
  //_____category__9__rozdzielnice-modulowe
  {
    mainCategoryIndex: 8,
    mainCategoryName: mainCategoriesNames[8],
    mainCategoryPath: `${mainPagesPaths.produkty}/${mainCategoriesPath[8]}`,
    mainCategoryImage: indexImgCat[8],
    subCategoriesNames: [...rozdzielniceModuloweSubCatNames],
    // subCategoriesUrls: [...rozdzielniceModuloweSubCategoryUrls],
    // imageData: imgSubCategoryCatalogs[8],
    svgIcons: ['IP65', 'IK08', 'FREE', 'UV', 'IZO', 'MODR'],
    labeledIcons: ['16A', '32A'],
  },
  //_____category__10__puszki-instalacyjne
  {
    mainCategoryIndex: 9,
    mainCategoryName: mainCategoriesNames[9],
    mainCategoryPath: `${mainPagesPaths.produkty}/${mainCategoriesPath[9]}`,
    mainCategoryImage: indexImgCat[9],
    subCategoriesNames: [...puszkiInstalacyjneSubCatNames],
    // subCategoriesUrls: [...puszkiInstalacyjneSubCategoryUrls],
    // imageData: imgSubCategoryCatalogs[9],
    svgIcons: ['IP20', 'IP44', 'IP55', 'IP65', 'IK07', 'FREE', 'UV', 'IZO'],
  },
];
