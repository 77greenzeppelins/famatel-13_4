const catalogTable_1_data = {
  header: ['Prąd znamionowy', 'Bieguny', 'Uwagi', 'Model'],
  sections: [
    {
      sideHeaderSpan: '16A',
      bodyRow: ['2+E', '-', '25510'],
      bodyRows: [
        ['2+NP+E', 'N nierozłączany', '25511'],
        ['3+E', '---', '25512'],
        ['3+NP+E', 'N nierozłączany', '25513'],
        ['4+E', '---', '25514'],
        ['4+NP+E', 'N nierozłączany', '25515'],
      ],
    },
    {
      sideHeaderSpan: '20A',
      bodyRow: ['2+E', '---', '25501'],
      bodyRows: [
        ['2+NP+E', 'N nierozłączany', '25516'],
        ['3+E', '---', '25502'],
        ['3+NP+E', 'N nierozłączany', '25517'],
        ['4+E', '---', '25513'],
        ['4+NP+E', 'N nierozłączany', '25518'],
      ],
    },
    {
      sideHeaderSpan: '25A',
      bodyRow: ['2+E', '---', '25519'],
      bodyRows: [
        ['2+NP+E', 'N nierozłączany', '25520'],
        ['3+E', '---', '25521'],
        ['3+NP+E', 'N nierozłączany', '25522'],
        ['4+E', '---', '25533'],
        ['4+NP+E', 'N nierozłączany', '25524'],
      ],
    },
    {
      sideHeaderSpan: '32A',
      bodyRow: ['2+E', '---', '25504'],
      bodyRows: [
        // ['2+E', '---', '25504'],
        ['2+NP+E', 'N nierozłączany', '25525'],
        ['3+E', '---', '25505'],
        ['3+NP+E', 'N nierozłączany', '25526'],
        ['4+E', '---', '25506'],
        ['4+NP+E', 'N nierozłączany', '25527'],
      ],
    },
    {
      sideHeaderSpan: '40A',
      bodyRow: ['2+E', '---', '25507'],
      bodyRows: [
        // ['2+E', '---', '25507'],
        ['2+NP+E', 'N nierozłączany', '25528'],
        ['3+E', '---', '25508'],
        ['3+NP+E', 'N nierozłączany', '25529'],
        ['4+E', '---', '25509'],
        ['4+NP+E', 'N nierozłączany', '25530'],
      ],
    },
  ],
};

const catalogTable_2_data = {
  topHeaderLeftCol: 'Kategoria użytkowania',
  topHeaderLine1: 'Klasa użytkowania',
  topHeaderLine2: 'Prąd znamionowy dla klasy A',
  topHeaderLine3: ['16', '20', '25', '32', '40'],
  //__table body part 1
  sideHeaderSpan: ['AC23A'],
  bodyRows1: [
    ['10A', '690V', '16A', '690V', '20A', '690V', '25A', '690V', '25A', '690V'],
    ['16A', '500V', '20A', '500V', '25A', '500V', '32A', '500V', '32A', '500V'],
  ],
  //__table body part 1
  bodyRows2: [
    [
      'AC22A',
      '16A',
      '690V',
      '20A',
      '690V',
      '25A',
      '690V',
      '32A',
      '690V',
      '32A',
      '690V',
    ],
    [
      'AC21A',
      '16A',
      '690V',
      '20A',
      '690V',
      '25A',
      '690V',
      '32A',
      '690V',
      '40A',
      '690V',
    ],
  ],
};
//___???
export const rozlacznikiBezpieczenstwa_feat_data: TransparentTableDataType = [
  ['Wymiary (sz / w / gł)', '96,5 × 131 × 105,5 mm'],
  ['Waga', '0.15 kg'],
  ['Stopień ochrony', 'IP65'],
  ['Odporność mechaniczna', 'IK08'],
  ['Temperatura robocza', '-5 + 40°C'],
  ['Max. temp. pracy', '60°C'],
  ['Test rozżarzonego drutu', '650°C '],
  ['Bieguny', '2P - 3P - 4P'],
  ['Napięcie znamionowe izolacji', '690 V'],
  ['Napięcie impulsowe', '6 KV'],
  ['Prąd termiczny wewnątrz obudowy', '40 A'],
  ['Warunkowy prąd zwarciowy', '10 KA'],
  ['Częstotliwość: ', '50/60 Hz'],
  ['Zaciski dla przewodu elastycznego / sztywnego mm²: ', '1.5 / 10'],
];
export const rozlacznikiBezpieczenstwa_norma_data: TransparentTableDataType = [
  ['Norma', 'CEI EN 60947-3'],
];

export { catalogTable_1_data, catalogTable_2_data };
