// import { mainPagesPaths } from './basicData';
/*
___1.
*/
export const mainPagesPaths = {
  home: '/',
  produkty: '/produkty',
  nowosci: '/nowosci',
  doPobrania: '/do-pobrania',
  kontakt: '/kontakt',
};

export const mainPagesLabels = [
  'O firmie',
  'Produkty',
  'Nowości',
  'Realizacje',
  'Do pobrania',
  'Kontakt',
];

export const mainCategoriesNames = [
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
];

export const mainCategoriesPath = [
  'przemyslowe-wtyczki-i-gniazda',
  'gniazda-z-rozlacznikiem-i-blokada',
  'adaptery-przemyslowe',
  'gniazda-podwieszane',
  'przedluzacze-bebnowe',
  'rozlaczniki-bezpieczenstwa',
  'ladowarki-samochodowe',
  'obudowy-i-rozdzielnice',
  'rozdzielnice-modulowe',
  'puszki-instalacyjne',
];
/*
---------subcategories
*/
//_____subcategories of category_1
export const wtyczkiGniazdaSubCatNames: string[] = [
  'Wtyczki i gniazda przenośne',
  'Wtyczki i gniazda tablicowe',
  'Wtyczki i gniazda ścienne',
  'Wtyczki i gniazda tablicowe jednofazowe',
  'Wtyczki i gniazda jednofazowe',
  'Wtyczki i gniazda na bardzo niskie napięcia',
  'Wtyczki i gniazda kontenerowe',
  'Wtyczki i gniazda estradowe',
  'Wtyczki i gniazda campingowe',
];
export const wtyczkiGniazdaSubCatPaths: string[] = [
  `wtyczki-i-gniazda-przenosne`,
  `wtyczki-i-gniazda-tablicowe`,
  `wtyczki-i-gniazda-scienne`,
  `wtyczki-i-gniazda-tablicowe-jednofazowe`,
  `wtyczki-i-gniazda-jednofazowe`,
  `wtyczki-i-gniazda-na-bardzo-niskie-napiecia`,
  `wtyczki-i-gniazda-kontenerowe`,
  `wtyczki-i-gniazda-estradowe`,
  `wtyczki-i-gniazda-campingowe`,
];
export const wtyczkiGniazdaSubCatFullPaths = wtyczkiGniazdaSubCatPaths.map(
  (path, i) =>
    `${mainPagesPaths.produkty}/${mainCategoriesPath[0]}/${wtyczkiGniazdaSubCatPaths[i]}`
);
//_____subcategories of category_2
export const GniazdaZBlokadaSubCatNames: string[] = [
  'Gniazda tablicowe ',
  'Gniazda stałe ',
  'Gniazda z opcjonalnymi komponentami',
  'Akcesoria do gniazd z rozłącznikiem i blokadą',
];
//_____subcategories of category_3
export const adapteryPrzemysloweSubCatNames: string[] = [
  'Adaptery przemysłowe Schuko',
  'Adaptery wielokrotne przemysłowe',
  'Adaptery wielokrotne przemysłowe z przewodem',
];
//_____subcategories of category_4
export const gniazdaPodwieszaneSubCatNames: string[] = ['Gniazda podwieszane'];
//_____category___5
export const przedluzaczeBebnoweSubCatNames: string[] = [
  'Przedłużacze bębnowe IP55 z gniazdami Schuko IP67',
  'Przemysłowe przedłużacze bębnowe z gniazdami IP67',
  'Metalowe przemysłowe przedłużacze bębnowe z gniazdami IP67',
];
//_____subcategories of category_6
export const rozlacznikiBezpieczenstwaSubCatNames: string[] = [
  'Rozłączniki bezpieczeństwa',
];
//_____subcategories of category_7
export const ladowarkiPojazdowSubCatNames: string[] = ['Ładowarki samochodowe'];
//_____subcategories of category_8
export const obudowyAndRozdzielniceSubCatNames: string[] = [
  'Obudowy puste',
  'Rozdzielnice przemysłowe',
  'Obudowy gumowe',
  'Akcesoria do obudów i rozdzielnic',
];
//_____subcategories of category_9
export const rozdzielniceModuloweSubCatNames: string[] = [
  'Rozdzielnice ścienne IP65',
  'Rozdzielnice modułowe IP65',
  'Rozdzielnice modułowe Nuova IP40',
  'Rozdzielnice modułowe Nuova+ IP40',
  'Rozdzielnice modułowe Vita IP40',
  'Rozdzielnice modułowe ścienne ICP',
  'Rozdzielnice modułowe metalowe IP40',
  'Rozdzielnice modułowe metalowe ICT',
  'Akcesoria do rozdzielnic modułowych',
];
//_____subcategories of category_10
export const puszkiInstalacyjneSubCatNames: string[] = [
  'Puszki instalacyjne zamykane IP55/IP65',
  'Puszki instalacyjne drywall',
  'Puszki instalacyjne osadzone',
];

export const someFakePath = `${mainPagesPaths.produkty}/${mainCategoriesPath[0]}`;
