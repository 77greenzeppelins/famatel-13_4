export const mainPagesPaths = {
  home: '/',
  produkty: '/produkty',
  nowosci: '/nowosci',
  doPobrania: '/do-pobrania',
  kontakt: '/kontakt',
};
export const mainCategoriesPath = [
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

export const mainPagesData = [
  {
    arrayIndex: 0,
    label: mainPagesLabels[0],
    url: mainPagesPaths.home,
  },
  {
    arrayIndex: 1,
    label: mainPagesLabels[1],
    url: mainPagesPaths.produkty,
  },
  {
    arrayIndex: 2,
    label: mainPagesLabels[2],
    url: mainPagesPaths.nowosci,
  },
  {
    arrayIndex: 4,
    label: mainPagesLabels[4],
    url: mainPagesPaths.doPobrania,
  },
  {
    arrayIndex: 5,
    label: mainPagesLabels[5],
    url: mainPagesPaths.kontakt,
  },
];

export const regulacjeUrl = {
  notaPrawna: { label: 'Nota prawna', url: '/nota-prawna' },
  // cookies: { label: 'cookies', url: '/Polityka cookies' },
};

export const corpoColors = {
  //___basic
  light: '#ffffff',
  orange: '#e74124',
  grey: '#9d9e9f',
  dark: '#1d1d1b',
  //___grey modifications
  greyShade1: '#6d6e6f',
  greyShade2: '#2f2f2f',
  greyTint1: '#b0b1b2',
  greyTint2: '#d7d8d8',
  //___vat collors
  vYellow: '#ceae0e',
  vBlue: '#134976',
  vRed: '#a01b29',
  vDark: '#2c3038',
  green: '#32754c',
  violet: '#434592',
  //___vat collors mod
  vModYellow: '#a48b0b',
  vModBlue: '#217dca',
  vModRed: '#cc2234',
  vModDark: '#23262c',
  vModViolet: '#2A1764',
  vModGreen: '#02681d',
  vModLight: '#eaeaea',
};

/*
___1. used in "InstantContactButtons"
*/
export const linksToInstantContactData = {
  mailB: 'mailto:biuro@famatel.pl',
  mailGK: 'mailto:grzegorz.kowcz@famatel.pl',
  mobileGK: 'tel:697-790-915',
};
/*
___used in: as props to <WorldMapComponent> in HomePage & KontaktPage
*/
export const worldMapConfig = {
  isDraggable_1: 1600, //when container is "w-1/2"
  isDraggable_2: 768, //when container is "w-full"
};

/*
___1. used in <SearchEngineButton> & <>
*/
export const buttonsConfig = {
  isDisabledDuration: 1000,
};
/*
___used in: "do-pobrania" 
*/
export const doPobraniaPageData = {
  catalogData: {
    path: '/pdf/catalog/Katalog 2023.pdf',
    date: '2023',
    linkLabel: 'Pełna wersja (53MB)',
  },
  /**Framer Motion Staff*/
  chaptersData: [
    {
      id: '01',
      label: 'Wstęp',
      path: '/pdf/catalogChapters/00.Wstęp.pdf',
      size: '6.3 MB',
    },
    {
      id: '02',
      label: mainCategoriesNames[0],
      path: '/pdf/catalogChapters/01.Wtyczki i gniazda.pdf',
      size: '12.9 MB',
    },
    {
      id: '03',
      label: mainCategoriesNames[1],
      path: '/pdf/catalogChapters/02.Gniazda z blokadą.pdf',
      size: '5.7 MB',
    },
    {
      id: '04',
      label: mainCategoriesNames[2],
      path: '/pdf/catalogChapters/03.Adaptery przemysłowe.pdf',
      size: '1.4 MB',
    },
    {
      id: '05',
      label: mainCategoriesNames[3],
      path: '/pdf/catalogChapters/04.Gniazda podwieszane.pdf',
      size: '3.4 MB',
    },
    {
      id: '06',
      label: mainCategoriesNames[4],
      path: '/pdf/catalogChapters/05.Przedłużacze bębnowe.pdf',
      size: '1.2 MB',
    },
    {
      id: '07',
      label: mainCategoriesNames[5],
      path: '/pdf/catalogChapters/06.Wyłącznik bezpieczeństwa.pdf',
      size: '0.4 MB',
    },
    {
      id: '08',
      label: mainCategoriesNames[6],
      path: '/pdf/catalogChapters/07.Ładowarki.pdf',
      size: '1.9 MB',
    },
    {
      id: '09',
      label: mainCategoriesNames[7],
      path: '/pdf/catalogChapters/08.Obudowy i rozdzielnice.pdf',
      size: '6.6 MB',
    },
    {
      id: '10',
      label: mainCategoriesNames[8],
      path: '/pdf/catalogChapters/09.Rozdzielnice modułowe.pdf',
      size: '9.5 MB',
    },
    {
      id: '11',
      label: mainCategoriesNames[9],
      path: '/pdf/catalogChapters/10.Puszki instalacyjne.pdf',
      size: '5.8 MB',
    },
  ],
  declarationsData: [
    {
      id: '01',
      label:
        'Deklaracja zgodności wyrobów o numerach katalogowych 3952.XXXX (IP44, IP65 stacjonarne i przenośne)',
      path: '/pdf/declarations/D3952.XXXX zbiorcza.pdf',
      size: '0.6MB',
    },
    {
      id: '02',
      label:
        'Deklaracja zgodności wyrobów o numerach katalogowych 3957.XXXX (IP44, IP65 stacjonarne i przenośne)',
      path: '/pdf/declarations/D3957.XXXX zbiorcza.pdf',
      size: '0.6MB',
    },
    {
      id: '03',
      label:
        'Deklaracja zgodności wyrobów o numerach katalogowych 3958.XXXX (IP44, IP65 stacjonarne i przenośne)',
      path: '/pdf/declarations/D3958.XXXX zbiorcza.pdf',
      size: '0.2MB',
    },
    {
      id: '04',
      label:
        'Deklaracja zgodności wyrobów o numerach katalogowych 3959.XXXX (IP44, IP65 stacjonarne i przenośne)',
      path: '/pdf/declarations/D3959.XXXX zbiorcza.pdf',
      size: '0.6MB',
    },
    {
      id: '05',
      label:
        'Deklaracja zgodności wyrobów o numerach katalogowych 3977.XXXX (IP44, IP65 stacjonarne i przenośne)',
      path: '/pdf/declarations/D3977.XXXX zbiorcza.pdf',
      size: '0.6MB',
    },
  ],
};
