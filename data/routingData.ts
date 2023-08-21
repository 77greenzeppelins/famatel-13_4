// import { mainPagesPaths } from './basicData';

import { createPath } from '@/lib/handlers/functions';

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
export const mainCategoriesPath = mainCategoriesNames.map(mainCatName =>
  createPath(mainCatName)
);

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
export const wtyczkiGniazdaSubCatPaths = wtyczkiGniazdaSubCatNames.map(
  subCatName => createPath(subCatName)
);

export const wtyczkiGniazdaSubCatFullPaths = wtyczkiGniazdaSubCatPaths.map(
  path => `${mainPagesPaths.produkty}/${mainCategoriesPath[0]}/${path}`
);

//_____subcategories of category_2
export const gniazdaZBlokadaSubCatNames: string[] = [
  'Gniazda tablicowe ',
  'Gniazda stałe ',
  'Gniazda z opcjonalnymi komponentami',
  'Akcesoria do gniazd z rozłącznikiem i blokadą',
];
const gniazdaZBlokadaSubCatPaths = gniazdaZBlokadaSubCatNames.map(subCatName =>
  createPath(subCatName)
);

export const gniazdaZBlokadaSubCatFullPaths = gniazdaZBlokadaSubCatPaths.map(
  (path, i) => `${mainPagesPaths.produkty}/${mainCategoriesPath[1]}/${path}`
);

//_____subcategories of category_3
export const adapteryPrzemysloweSubCatNames: string[] = [
  'Adaptery przemysłowe Schuko',
  'Adaptery wielokrotne przemysłowe',
  'Adaptery wielokrotne przemysłowe z przewodem',
];
export const adapteryPrzemysloweSubCatPaths =
  adapteryPrzemysloweSubCatNames.map(subCatName => createPath(subCatName));

export const adapteryPrzemysloweSubCatFullPaths =
  adapteryPrzemysloweSubCatPaths.map(
    (path, i) => `${mainPagesPaths.produkty}/${mainCategoriesPath[2]}/${path}`
  );

//_____subcategories of category_4
export const gniazdaPodwieszaneSubCatNames: string[] = ['Gniazda podwieszane'];
export const gniazdaPodwieszaneSubCatPaths: string[] = ['gniazda-podwieszane'];
export const gniazdaPodwieszaneSubCatFullPaths =
  gniazdaPodwieszaneSubCatPaths.map(
    (path, i) => `${mainPagesPaths.produkty}/${mainCategoriesPath[3]}/${path}`
  );

//_____category___5
export const przedluzaczeBebnoweSubCatNames: string[] = [
  'Pprzedłużacze bębnowe IP55 z gniazdami Schuko IP67',
  'Przemysłowe przedłużacze bębnowe z gniazdami IP67',
  'Metalowe przemysłowe przedłużacze bębnowe z gniazdami IP67',
];
export const przedluzaczeBebnoweSubCatPaths =
  przedluzaczeBebnoweSubCatNames.map(subCatName => createPath(subCatName));

export const przedluzaczeBebnoweSubCatFullPaths =
  przedluzaczeBebnoweSubCatPaths.map(
    (path, i) => `${mainPagesPaths.produkty}/${mainCategoriesPath[4]}/${path}`
  );

//_____subcategories of category_6
export const rozlacznikiBezpieczenstwaSubCatNames: string[] = [
  'Rozłączniki bezpieczeństwa',
];
export const rozlacznikiBezpieczenstwaSubCatPaths: string[] = [
  'rozlaczniki-bezpieczenstwa',
];
export const rozlacznikiBezpieczenstwaSubCatFullPaths =
  rozlacznikiBezpieczenstwaSubCatPaths.map(
    (path, i) => `${mainPagesPaths.produkty}/${mainCategoriesPath[5]}/${path}`
  );

//_____subcategories of category_7
export const ladowarkiPojazdowSubCatNames: string[] = ['Ładowarki samochodowe'];
export const ladowarkiPojazdowSubCatPaths: string[] = ['ladowarki-samochodowe'];
export const ladowarkiPojazdowSubCatFullPaths =
  ladowarkiPojazdowSubCatPaths.map(
    (path, i) => `${mainPagesPaths.produkty}/${mainCategoriesPath[6]}/${path}`
  );
//_____subcategories of category_8
export const obudowyAndRozdzielniceSubCatNames: string[] = [
  'Obudowy puste',
  'Rozdzielnice przemysłowe',
  'Obudowy gumowe',
  'Akcesoria do obudów i rozdzielnic',
];
export const obudowyAndRozdzielniceSubCatPathss =
  obudowyAndRozdzielniceSubCatNames.map(subCatName => createPath(subCatName));

export const obudowyAndRozdzielniceSubCatFullPaths =
  obudowyAndRozdzielniceSubCatPathss.map(
    (path, i) => `${mainPagesPaths.produkty}/${mainCategoriesPath[7]}/${path}`
  );
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
export const rozdzielniceModuloweSubCatPaths =
  rozdzielniceModuloweSubCatNames.map(subCatName => createPath(subCatName));

export const rozdzielniceModuloweSubCatFullPaths =
  rozdzielniceModuloweSubCatPaths.map(
    path => `${mainPagesPaths.produkty}/${mainCategoriesPath[8]}/${path}`
  );
//_____subcategories of category_10
export const puszkiInstalacyjneSubCatNames: string[] = [
  'Puszki instalacyjne zamykane IP55 IP65',
  'Puszki instalacyjne drywall',
  'Puszki instalacyjne osadzone',
];
export const puszkiInstalacyjneSubCatPaths = puszkiInstalacyjneSubCatNames.map(
  subCatName => createPath(subCatName)
);

export const puszkiInstalacyjneSubCatFullPaths =
  puszkiInstalacyjneSubCatPaths.map(
    path => `${mainPagesPaths.produkty}/${mainCategoriesPath[9]}/${path}`
  );

// export const someFakePath = `${mainPagesPaths.produkty}/${mainCategoriesPath[0]}`;

// export const mainCategoriesPath = [
//   'przemyslowe-wtyczki-i-gniazda',
//   'gniazda-z-rozlacznikiem-i-blokada',
//   'adaptery-przemyslowe',
//   'gniazda-podwieszane',
//   'przedluzacze-bebnowe',
//   'rozlaczniki-bezpieczenstwa',
//   'ladowarki-samochodowe',
//   'obudowy-i-rozdzielnice',
//   'rozdzielnice-modulowe',
//   'puszki-instalacyjne',
// ];

// export const wtyczkiGniazdaSubCatPaths: string[] = [
//   `wtyczki-i-gniazda-przenosne`,
//   `wtyczki-i-gniazda-tablicowe`,
//   `wtyczki-i-gniazda-scienne`,
//   `wtyczki-i-gniazda-tablicowe-jednofazowe`,
//   `wtyczki-i-gniazda-jednofazowe`,
//   `wtyczki-i-gniazda-na-bardzo-niskie-napiecia`,
//   `wtyczki-i-gniazda-kontenerowe`,
//   `wtyczki-i-gniazda-estradowe`,
//   `wtyczki-i-gniazda-campingowe`,
// ];

// const gniazdaZBlokadaSubCatPaths: string[] = [
//   `gniazda-tablicowe`,
//   `gniazda-stale`,
//   `gniazda-z-opcjonalnymi-komponentami`,
//   'akcesoria-do-gniazd-z-rozłącznikiem-i-blokadą',
// ];

// export const adapteryPrzemysloweSubCatPaths: string[] = [
//   'adaptery-przemyslowe-schuko',
//   'adaptery-wielokrotne-przemyslowe',
//   'adaptery-wielokrotne-przemyslowe-z-przewodem',
// ];

// export const przedluzaczeBebnoweSubCatPaths: string[] = [
//   'przedluzacze-bebnowe-IP55-z-gniazdami-Schuko-IP67',
//   'przemyslowe-przedluzacze-bebnowe-z-gniazdami-IP67',
//   'metalowe-przemyslowe-przedluzacze-bebnowe-z-gniazdami-IP67',
// ];

// export const obudowyAndRozdzielniceSubCatPathss: string[] = [
//   'obudowy-puste',
//   'rozdzielnice-przemyslowe',
//   'obudowy-gumowe',
//   'akcesoria-do-obudow-i-rozdzielnic',
// ];

// export const rozdzielniceModuloweSubCatPaths: string[] = [
//   'rozdzielnice-scienne-ip65',
//   'rozdzielnice-modulowe-ip65',
//   'rozdzielnice-modulowe-nuova-ip40',
//   'rozdzielnice-modulowe-nuova+-ip40',
//   'rozdzielnice-modulowe-vita-ip40',
//   'rozdzielnice-modulowe-scienne-icp',
//   'rozdzielnice-modulowe-metalowe-ip40',
//   'rozdzielnice-modulowe-metalowe-ict',
//   'akcesoria-do-rozdzielnic-modulowych',
// ];

// export const puszkiInstalacyjneSubCatPaths: string[] = [
//   'puszki-instalacyjne-zamykane-ip55-ip65',
//   'puszki-instalacyjne-drywall',
//   'puszki-instalacyjne-osadzone',
// ];
