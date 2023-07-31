import { mainPagesPaths } from './basicData';

export const mainCategoriesPath: string[] = [
  'wtyczki-gniazda',
  'gniazda-z-blokada',
  'adaptery-przemyslowe',
  'gniazda-podwieszane',
  'przedluzacze-bebnowe',
  'rozlaczniki-bezpieczenstwa',
  'ladowarki-samochodowe',
  'obudowy-i-rozdzielnice',
  'rozdzielnice-modulowe',
  'puszki-instalacyjne',
  'osprzet-domowy',
];
export const mainCategoriesNames: string[] = [
  'Przemysłowe wtyczki i gniazda',
  'Gniazda z rozłącznikiem i blokadą',
  'Adaptery przemysłowe',
  'Gniazda podwieszane',
  'Przedłużacze bębnowe',
  'Rozłączniki bezpieczeństwa',
  'Ładowarki samochodowe',
  'Obudowy i rozdzielnice',
  'Rozdzielnice modułowe',
  'Puszki instalacyjne',
  // 'Osprzęt domowy',
];

/**
 * "name" is a name of main category /
 *  "subcategories" is an array of subcategories names
 * url is an array of subcategories urls
 */
export const catalogStructureData = [
  //_____category__1__wtyczki-gniazda
  {
    mainCategoryIndex: 0,
    mainCategoryName: mainCategoriesNames[0],
    // mainCategoryUrl: `${mainPagesPaths.produkty}/${mainCategoriesPath[0]}`,
    mainCategoryUrl: `${mainPagesPaths.produkty}`,

    // mainCategoryImage: imgMainCategories[0],
    // subCategoriesNames: [...wtyczkiGniazdaSubCategoryNames],
    // subCategoriesUrls: [...wtyczkiGniazdaSubCategoriesUrls],
    // imageData: imgSubCategoryCatalogs[0],
    svgIcons: ['IP54', 'IP67', 'ENEC'],
    labeledIcons: ['16A', '32A', '63A', '125A'],
  },
  //_____category__2__gniazda-z-blokada
  {
    mainCategoryIndex: 1,
    mainCategoryName: mainCategoriesNames[1],
    // mainCategoryUrl: `${mainPagesPaths.produkty}/${mainCategoriesPath[1]}`,
    mainCategoryUrl: `${mainPagesPaths.produkty}`,
    // mainCategoryImage: imgMainCategories[1],
    // subCategoriesNames: [...GniazdaZBlokadaSubCategoryNames],
    // subCategoriesUrls: [...GniazdaZBlokadaSubCategoryUrls],
    // imageData: imgSubCategoryCatalogs[1],
    svgIcons: ['IP54', 'IP67', 'IK08', 'ENEC'],
    labeledIcons: ['16A', '32A', '63A', '125A'],
  },
  //_____category__3__adaptery-przemyslowe
  {
    mainCategoryIndex: 2,
    mainCategoryName: mainCategoriesNames[2],
    // mainCategoryUrl: `${mainPagesPaths.produkty}/${mainCategoriesPath[2]}`,
    mainCategoryUrl: `${mainPagesPaths.produkty}`,
    // mainCategoryImage: imgMainCategories[2],
    // subCategoriesNames: [...adapteryPrzemysloweSubCategoryNames],
    // subCategoriesUrls: [...adapteryPrzemysloweSubCategoryUrls],
    // imageData: imgSubCategoryCatalogs[2],
    svgIcons: ['IP20', 'IP54', 'IP67'],
    labeledIcons: ['16A', '32A'],
  },
  //_____category__4__noSubCategory__gniazda-podwieszane
  {
    mainCategoryIndex: 3,
    mainCategoryName: mainCategoriesNames[3],
    // mainCategoryUrl: `${mainPagesPaths.produkty}/${mainCategoriesPath[3]}`,
    mainCategoryUrl: `${mainPagesPaths.produkty}`,
    // mainCategoryImage: imgMainCategories[3],
    // subCategoriesNames: [...gniazdaPodwieszaneSubCategoryNames],
    // subCategoriesUrls: [...gniazdaPodwieszaneSubCategoryUrls],
    // imageData: imgSubCategoryCatalogs[3], //___fake
    // svgIcons: ['IP65', 'IK07'],
    labeledIcons: ['16A', '32A', '63A', '125A'],
  },
  //_____category__5__przedlużacze-będnowe
  {
    mainCategoryIndex: 4,
    mainCategoryName: mainCategoriesNames[4],
    // mainCategoryUrl: `${mainPagesPaths.produkty}/${mainCategoriesPath[4]}`,
    mainCategoryUrl: `${mainPagesPaths.produkty}`,
    // mainCategoryImage: imgMainCategories[4],
    // subCategoriesNames: [...przedluzaczeBebnoweSubCategoryNames],
    // subCategoriesUrls: [...przedluzaczeBebnoweSubCategoryUrls],
    // imageData: imgSubCategoryCatalogs[4],
    svgIcons: ['IP55', 'IP67', 'IK06'],
    labeledIcons: ['16A'],
  },
  //_____category__6__noSubcategory__rozlaczniki-bezpieczenstwa
  {
    mainCategoryIndex: 5,
    mainCategoryName: mainCategoriesNames[5],
    // mainCategoryUrl: `${mainPagesPaths.produkty}/${mainCategoriesPath[5]}`,
    mainCategoryUrl: `${mainPagesPaths.produkty}`,
    // mainCategoryImage: imgMainCategories[5],
    // subCategoriesNames: [...rozlacznikiBezpieczenstwaSubCategoryNames],
    // subCategoriesUrls: [...rozlacznikiBezpieczenstwaSubCategoryUrls],
    // imageData: imgSubCategoryCatalogs[5], //___fake
    svgIcons: ['IP67', 'IK08'],
    labeledIcons: ['16A', '20A', '25A', '32A', '40A'],
  },
  //_____category__7__noSubcategory__ladowarki-samochodowe
  {
    mainCategoryIndex: 6,
    mainCategoryName: mainCategoriesNames[6],
    // mainCategoryUrl: `${mainPagesPaths.produkty}/${mainCategoriesPath[6]}`,
    mainCategoryUrl: `${mainPagesPaths.produkty}`,
    // mainCategoryImage: imgMainCategories[6],
    // subCategoriesNames: [...ladowarkiPojazdowSubCategoryNames],
    // subCategoriesUrls: [...ladowarkiPojazdowSubCategoryUrls],
    // imageData: imgSubCategoryCatalogs[6], //___fake
    svgIcons: ['IP54', 'IK08'],
    labeledIcons: ['16A', '32A'],
  },
  //_____category__8__obudowy-i-rozdzielnice
  {
    mainCategoryIndex: 7,
    mainCategoryName: mainCategoriesNames[7],
    // mainCategoryUrl: `${mainPagesPaths.produkty}/${mainCategoriesPath[7]}`,
    mainCategoryUrl: `${mainPagesPaths.produkty}`,
    // mainCategoryImage: imgMainCategories[7],
    // subCategoriesNames: [...obudowyAndRozdzielniceSubCategoryNames],
    // subCategoriesUrls: [...obudowyAndRozdzielniceSubCategoryUrls],
    // imageData: imgSubCategoryCatalogs[7],
    svgIcons: ['IP65', 'IK08', 'FREE', 'UV', 'IZO', 'MODR'],
    labeledIcons: ['16A', '32A'],
  },
  //_____category__9__rozdzielnice-modulowe
  {
    mainCategoryIndex: 8,
    mainCategoryName: mainCategoriesNames[8],
    // mainCategoryUrl: `${mainPagesPaths.produkty}/${mainCategoriesPath[8]}`,
    mainCategoryUrl: `${mainPagesPaths.produkty}`,
    // mainCategoryImage: imgMainCategories[8],
    // subCategoriesNames: [...rozdzielniceModuloweSubCategoryNames],
    // subCategoriesUrls: [...rozdzielniceModuloweSubCategoryUrls],
    // imageData: imgSubCategoryCatalogs[8],
    svgIcons: ['IP65', 'IK08', 'FREE', 'UV', 'IZO', 'MODR'],
    labeledIcons: ['16A', '32A'],
  },
  //_____category__10__puszki-instalacyjne
  {
    mainCategoryIndex: 9,
    mainCategoryName: mainCategoriesNames[9],
    // mainCategoryUrl: `${mainPagesPaths.produkty}/${mainCategoriesPath[9]}`,
    mainCategoryUrl: `${mainPagesPaths.produkty}`,
    // mainCategoryImage: imgMainCategories[9],
    // subCategoriesNames: [...puszkiInstalacyjneSubCategoryNames],
    // subCategoriesUrls: [...puszkiInstalacyjneSubCategoryUrls],
    // imageData: imgSubCategoryCatalogs[9],
    svgIcons: ['IP20', 'IP44', 'IP55', 'IP65', 'IK07', 'FREE', 'UV', 'IZO'],
  },
];
