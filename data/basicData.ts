export const mainPagesPaths = {
  home: '/',
  produkty: '/produkty',
  nowosci: '/nowosci',
  doPobrania: '/do-pobrania',
  kontakt: '/kontakt',
};

export const mainPagesLabels: string[] = [
  'O firmie',
  'Produkty',
  'Nowości',
  'Realizacje',
  'Do pobrania',
  'Kontakt',
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
___1. used in <SearchEngineButton> & <>
*/
export const buttonsConfig = {
  isDisabledDuration: 1000,
};
