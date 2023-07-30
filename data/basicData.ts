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
