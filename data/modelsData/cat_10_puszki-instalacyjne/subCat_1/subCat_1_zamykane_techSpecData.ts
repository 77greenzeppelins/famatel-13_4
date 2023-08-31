/*
Basic Data
*/
const arrOfDescriptions: TransparentTableDataType = [
  ['Pokrywa i podstawa', 'ABS'],
  ['Transparentne okienko', ' PC'],
  ['Osłonka śrub dla IP', 'Tak (w komplecie)'],
];
const arrOfDescriptions1: TransparentTableSimpleDataType = [
  ['Pokrywa i podstawa z PP/PS'],
  ['Zewnętrzny system mocujący'],
  ['Osłabienia do wprowadzania przewodów'],
];
const arrOfDescriptions2: TransparentTableSimpleDataType = [
  ['Pokrywa i podstawa z ABS'],
  ['Pokrywa zatrzaskowa'],
  ['Dławnice do bezpośredniego wprowadzania przewodów'],
];

const arrOfDescriptions3a: TransparentTableSimpleDataType = [
  ['Pokrywa z PC / podstawa z ABS'],
  ['Pokrywa na zawiasach'],
  ['Śruby zamykające na 1/4 obrotu'],
];
const arrOfDescriptions3b: TransparentTableSimpleDataType = [
  ['Pokrywa i podstawa z ABS / Pokrywa z PC i podstawa z ABS'],
  ['Pokrywa na zawiasach'],
  ['Śruby zamykające na 1/4 obrotu'],
];
const arrOfDescriptions4: TransparentTableSimpleDataType = [
  ['Pokrywa i podstawa z ABS'],
  ['Pokrywa na zawiasach'],
  ['Osłabienia do wprowadzania przewodów'],
  ['Możliwość łączenia'],
];

const arrOfDescriptions5: TransparentTableSimpleDataType = [
  ['Pokrywa i podstawa z ABS'],
  ['Pokrywa na zawiasach'],
  ['Śruby zamykające na 1/4 obrotu'],
];
const arrOfDescriptions6: TransparentTableSimpleDataType = [
  ['Okablowane gniazdo 1-faz. 16A-250V~'],
  ...arrOfDescriptions5,
];

/*
.....
*/
export const puszkiInstalacyjneZamykane_techSpecData = [
  //__1__s.304
  {
    tableType: 'techSpecTableVer1',

    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '43' },
        { label: 'Szerokość', value: '90' },
        { label: 'Głębokość', value: '39' },
      ],
      [
        { label: 'Góra', value: '3 × Ø 8-19' },
        { label: 'Dół', value: '3 × Ø 8-19' },
        { label: 'Bok', value: '2 × (2 × Ø 4-16)' },
      ],
    ],

    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '8'],
      ['Opakowanie zbiorcze', '456'],
    ],
    description: [...arrOfDescriptions1],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__2
  {
    tableType: 'techSpecTableVer1',

    header: [['Wymiary']],
    tablesData: [
      [
        { label: 'Wysokość', value: '75' },
        { label: 'Szerokość', value: '75' },
        { label: 'Głębokość', value: '39' },
      ],
    ],
    header3col: ['Wejścia', '3056', '3059'],
    tablesData3col: [
      { label: 'Góra', value1: '---', value2: '---' },
      { label: 'Dół', value1: '1 × Ø 16/20', value2: '1 × Ø 20/25' },
      {
        label: 'Bok',
        value1: '2 × (1 × Ø 16/20)',
        value2: '2 × (1 × Ø 20/25)',
      },
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '8'],
      ['Opakowanie zbiorcze', '280'],
    ],
    description: [...arrOfDescriptions1],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__3
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '85' },
        { label: 'Szerokość', value: '85' },
        { label: 'Głębokość', value: '39' },
      ],
      [
        { label: 'Góra', value: '3 × Ø 8-19' },
        { label: 'Dół', value: '3 × Ø 8-19' },
        { label: 'Bok', value: '2 × (2 × Ø 8-19)' },
      ],
    ],

    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '8'],
      ['Opakowanie zbiorcze', '244'],
    ],
    description: [...arrOfDescriptions1],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__4
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary']],
    tablesData: [
      [
        { label: 'Wysokość', value: '75' },
        { label: 'Szerokość', value: '75' },
        { label: 'Głębokość', value: '39' },
      ],
    ],
    header3col: ['Wejścia', '3056', '3059'],
    tablesData3col: [
      { label: 'Góra', value1: '--', value2: '--' },
      { label: 'Dół', value1: '1 × Ø 16/20', value2: '1 × Ø 20/25' },
      {
        label: 'Bok',
        value1: '2 × (1 × Ø 16/20)',
        value2: '2 × (1 × Ø 20/25)',
      },
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '6'],
      ['Opakowanie zbiorcze', '90'],
    ],
    description: [
      ['Pokrywa i podstawa z PP/PS'],
      ['Zewnętrzny system mocujący'],
      ['Wejście do bezpośredniego montażu rur metrycznych'],
    ],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__5__s.306
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '45' },
        { label: 'Szerokość', value: 'Ø 6}' },
      ],
      [{ label: 'Bok', value: '4 × Ø 20' }],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '6'],
      ['Opakowanie zbiorcze', '186'],
    ],
    description: [...arrOfDescriptions2],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__6__s.306
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '45' },
        { label: 'Szerokość', value: 'Ø 7}' },
      ],
      [{ label: 'Bok', value: '4 × Ø 20' }],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '6'],
      ['Opakowanie zbiorcze', '144'],
    ],
    description: [...arrOfDescriptions2],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__7__s.306
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '65' },
        { label: 'Szerokość', value: '65' },
        { label: 'Głębokość', value: '45' },
      ],
      [
        { label: 'Góra', value: '1 × Ø 20' },
        { label: 'Dół', value: '1 × Ø 20' },
        { label: 'Bok', value: '2 × (1 × Ø 20)' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '6'],
      ['Opakowanie zbiorcze', '144'],
    ],
    description: [...arrOfDescriptions2],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__8__s.306
  {
    tableType: 'techSpecTableVer1',

    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '80' },
        { label: 'Szerokość', value: '80' },
        { label: 'Głębokość', value: '45' },
      ],
      [
        { label: 'Góra', value: '1 × Ø 20' },
        { label: 'Dół', value: '2 × Ø 20' },
        { label: 'Bok', value: '2 × (2 × Ø 20)' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '6'],
      ['Opakowanie zbiorcze', '90'],
    ],
    description: [...arrOfDescriptions2],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },

  //__9__s.308
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '80' },
        { label: 'Szerokość', value: '80' },
        { label: 'Głębokość', value: '36' },
      ],
      [
        { label: 'Góra', value: '2 × Ø 20' },
        { label: 'Dół', value: '1 × Ø 20' },
        { label: 'Bok', value: '2 × (2 × Ø 20)' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '1'],
    ],
    description: [
      ['Puszka szczelna'],
      ['Żel izolacyjny'],
      ['2 dławnice skręcane M20'],
    ],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__10__s.308
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '100' },
        { label: 'Szerokość', value: '100' },
        { label: 'Głębokość', value: '45' },
      ],
      [
        { label: 'Góra', value: '2 × Ø 20' },
        { label: 'Dół', value: '1 × Ø 20' },
        { label: 'Bok', value: '2 × (2 × Ø 20)' },
      ],
    ],

    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '6'],
      ['Opakowanie zbiorcze', '150'],
    ],
    description: [...arrOfDescriptions2],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__11__s.308
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '103' },
        { label: 'Szerokość', value: '103' },
        { label: 'Głębokość', value: '55' },
      ],
      [
        { label: 'Góra', value: '2 × Ø 25' },
        { label: 'Dół', value: '1 × Ø 25' },
        { label: 'Bok', value: '2 × (2 × Ø 25)' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '6'],
      ['Opakowanie zbiorcze', '72'],
    ],
    description: [
      arrOfDescriptions2[0],
      arrOfDescriptions2[2],
      ['Pokrywa na zawiasach'],
      ['Śruby zamykające na 1/4 obrotu'],
    ],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__12__s.308
  {
    tableType: 'techSpecTableVer1',

    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '110' },
        { label: 'Szerokość', value: '152' },
        { label: 'Głębokość', value: '63' },
      ],
      [
        { label: 'Góra', value: '3 × Ø 25' },
        { label: 'Dół', value: '3 × Ø 25' },
        { label: 'Bok', value: '2 × (1 × Ø 25 + 1 × Ø 32)' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '4'],
      ['Opakowanie zbiorcze', '72'],
    ],
    description: [
      arrOfDescriptions2[0],
      arrOfDescriptions2[2],
      ['Pokrywa na zawiasach'],
      ['Śruby zamykające na 1/4 obrotu'],
    ],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },

  //__13__s.310
  {
    tableType: 'techSpecTableVer1',

    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '135' },
        { label: 'Szerokość', value: '161' },
        { label: 'Głębokość', value: '83' },
      ],
      [
        { label: 'Góra', value: '3 × Ø 32' },
        { label: 'Dół', value: '3 × Ø 32' },
        { label: 'Bok', value: '2 × (1 × Ø 32 + 1 × Ø 40)' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '42'],
    ],
    description: [
      arrOfDescriptions2[0],
      arrOfDescriptions2[2],
      ['Pokrywa na zawiasach'],
      ['Śruby zamykające na 1/4 obrotu'],
    ],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__14__s.310
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '175' },
        { label: 'Szerokość', value: '225' },
        { label: 'Głębokość', value: '85' },
      ],
      [
        { label: 'Góra', value: '2 × Ø 40 +  × Ø 32' },
        { label: 'Dół', value: '2 × Ø 40 + 1 × Ø 32' },
        { label: 'Bok', value: '2 × (1 × Ø 32 + 1 × Ø 40)' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '28'],
    ],
    description: [
      arrOfDescriptions2[0],
      arrOfDescriptions2[2],
      ['Pokrywa na zawiasach'],
      ['Śruby zamykające na 1/4 obrotu'],
    ],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__15__s.310
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary', 'Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '110' },
        { label: 'Szerokość', value: '152' },
        { label: 'Głębokość', value: '63' },
      ],
      [
        { label: 'Góra', value: '2 × Ø 50 + × Ø 40' },
        { label: 'Dół', value: '2 × Ø 50 + 1 × Ø 40' },
        { label: 'Bok', value: '2 × (2 × Ø 50 + 1 × Ø 40)' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '10'],
    ],
    description: [
      arrOfDescriptions2[0],
      arrOfDescriptions2[2],
      ['Pokrywa na zawiasach'],
      ['Śruby zamykające na 1/4 obrotu'],
    ],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__16__s.312
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary']],
    tablesData: [
      [
        { label: 'Wysokość', value: '80' },
        { label: 'Szerokość', value: '80' },
        { label: 'Głębokość', value: '36' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '28'],
    ],
    description: [arrOfDescriptions2[0], arrOfDescriptions2[2]],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__17__s.312
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary']],
    tablesData: [
      [
        { label: 'Wysokość', value: '100' },
        { label: 'Szerokość', value: '100' },
        { label: 'Głębokość', value: '45' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '28'],
    ],
    description: [arrOfDescriptions2[0], arrOfDescriptions2[2]],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__18__s.312
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary']],
    tablesData: [
      [
        { label: 'Wysokość', value: '103' },
        { label: 'Szerokość', value: '103' },
        { label: 'Głębokość', value: '55' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '28'],
    ],
    description: [
      arrOfDescriptions2[0],
      ['Pokrywa na zawiasach'],
      ['Śruby zamykające na 1/4 obrotu'],
    ],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__19__s.312
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary']],
    tablesData: [
      [
        { label: 'Wysokość', value: '110' },
        { label: 'Szerokość', value: '150' },
        { label: 'Głębokość', value: '63' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '28'],
    ],
    description: [...arrOfDescriptions3a],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__20__s.312
  {
    tableType: 'techSpecTableVer1',

    header: [['Wymiary']],
    tablesData: [
      [
        { label: 'Wysokość', value: '110' },
        { label: 'Szerokość', value: '150' },
        { label: 'Głębokość', value: '63' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '28'],
    ],
    description: [...arrOfDescriptions3b],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__21__s.314
  {
    tableType: 'techSpecTableVer1',

    header: [['Wymiary']],
    tablesData: [
      [
        { label: 'Wysokość', value: '135' },
        { label: 'Szerokość', value: '160' },
        { label: 'Głębokość', value: '83' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '48'],
    ],
    description: [...arrOfDescriptions3a],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__22__s.314
  {
    tableType: 'techSpecTableVer1',

    header: [['Wymiary']],
    tablesData: [
      [
        { label: 'Wysokość', value: '135' },
        { label: 'Szerokość', value: '160' },
        { label: 'Głębokość', value: '83' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '48'],
    ],
    description: [...arrOfDescriptions3b],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__23__s.314
  {
    tableType: 'techSpecTableVer1',

    header: [['Wymiary']],
    tablesData: [
      [
        { label: 'Wysokość', value: '175' },
        { label: 'Szerokość', value: '225' },
        { label: 'Głębokość', value: '85' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '28'],
    ],
    description: [...arrOfDescriptions3a],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__24__s.314
  {
    tableType: 'techSpecTableVer1',

    header: [['Wymiary']],
    tablesData: [
      [
        { label: 'Wysokość', value: '175' },
        { label: 'Szerokość', value: '225' },
        { label: 'Głębokość', value: '85' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '28'],
    ],
    description: [...arrOfDescriptions3b],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__25__s.314
  {
    tableType: 'techSpecTableVer1',

    header: [['Wymiary']],
    tablesData: [
      [
        { label: 'Wysokość', value: '240' },
        { label: 'Szerokość', value: '310' },
        { label: 'Głębokość', value: '125' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '10'],
    ],
    description: [...arrOfDescriptions3a],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__26__s.314
  {
    tableType: 'techSpecTableVer1',

    header: [['Wymiary']],
    tablesData: [
      [
        { label: 'Wysokość', value: '240' },
        { label: 'Szerokość', value: '310' },
        { label: 'Głębokość', value: '125' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '10'],
    ],
    description: [...arrOfDescriptions3b],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__27__s.314
  {
    tableType: 'techSpecTableVer1',

    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '95' },
        { label: 'Szerokość', value: 'Ø 7}' },
      ],
      [{ label: 'Bok', value: '4 × Ø 20' }],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '28'],
    ],
    description: [...arrOfDescriptions2, ['Ceramiczna oprawka E-27']],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__28__s.316
  {
    tableType: 'techSpecTableVer1',

    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '175' },
        { label: 'Szerokość', value: '330' },
        { label: 'Głębokość', value: '135' },
      ],
      [
        { label: 'Góra', value: '2 × Ø 32-40}+ 2 × Ø 20-25 + 1 × Ø 40-50' },
        { label: 'Dół', value: '2 × Ø 32-40 + 2 × Ø 20-25' },
        { label: 'Bok', value: '2 (1 × Ø 32-40 + 1 × Ø 20-25)' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '6'],
      ['Opakowanie zbiorcze', '144'],
    ],
    description: [...arrOfDescriptions4],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__29__s.316
  {
    tableType: 'techSpecTableVer1',

    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '330' },
        { label: 'Szerokość', value: '330' },
        { label: 'Głębokość', value: '135' },
      ],
      [
        { label: 'Góra', value: '2 × Ø 32-40}+ 2 × Ø 20-25 + 1 × Ø 40-50' },
        { label: 'Dół', value: '2 × Ø 32-40 + 2 × Ø 20-25 + 1 × Ø 40-50' },
        { label: 'Bok', value: '2 (2 × Ø 32-40 + 2 × Ø 20-25)' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '6'],
      ['Opakowanie zbiorcze', '144'],
    ],
    description: [...arrOfDescriptions4],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__30__s.318
  {
    tableType: 'techSpecTableVer1',

    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '500' },
        { label: 'Szerokość', value: '225' },
        { label: 'Głębokość', value: '135' },
      ],
      [
        { label: 'Góra', value: '2 × Ø 20-25} + 1 × Ø 32-40' },
        { label: 'Dół', value: '2 × Ø 20-25  + 1 × Ø 32-40' },
        { label: 'Bok', value: '2 ( 3 × Ø 32-40 + 2 × Ø 20-25)' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '6'],
    ],
    description: [...arrOfDescriptions4],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__31__s.318
  {
    tableType: 'techSpecTableVer1',

    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '500' },
        { label: 'Szerokość', value: '330' },
        { label: 'Głębokość', value: '135' },
      ],
      [
        { label: 'Góra', value: '2 × Ø 20-25} + 2 × Ø 32-40 + 1 × Ø 40-50' },
        { label: 'Dół', value: '2 × Ø 20-25  + 2 × Ø 32-40 + 1 × Ø 40-50' },
        { label: 'Bok', value: '2 ( 3 × Ø 32-40 + 2 × Ø 20-25)' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '3'],
    ],
    description: [...arrOfDescriptions4],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__32__s.320
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary']],
    tablesData: [
      [
        { label: 'Wysokość', value: '110' },
        { label: 'Szerokość', value: '150' },
        { label: 'Głębokość', value: '63' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '4'],
      ['Opakowanie zbiorcze', '32'],
    ],
    description: [['Szyna łączeniowa neutralna 100A'], ...arrOfDescriptions5],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__33__s.320
  {
    tableType: 'techSpecTableVer1',

    header: [['Wymiary']],
    tablesData: [
      [
        { label: 'Wysokość', value: '135' },
        { label: 'Szerokość', value: '160' },
        { label: 'Głębokość', value: '83' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '2'],
      ['Opakowanie zbiorcze', '48'],
    ],
    description: [
      ['Podstawa bezpiecznikowa 1P + zacisk łączenikowy 16 mm²'],
      ...arrOfDescriptions5,
    ],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__34__s.320
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary']],
    tablesData: [
      [
        { label: 'Wysokość', value: '135' },
        { label: 'Szerokość', value: '160' },
        { label: 'Głębokość', value: '83' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '2'],
      ['Opakowanie zbiorcze', '48'],
    ],
    description: [
      ['Podstawa bezpiecznikowa 2P + zacisk łączenik4owy 16 mm²'],
      ...arrOfDescriptions5,
    ],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__35__s.320
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary']],
    tablesData: [
      [
        { label: 'Wysokość', value: '135' },
        { label: 'Szerokość', value: '160' },
        { label: 'Głębokość', value: '83' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '2'],
      ['Opakowanie zbiorcze', '48'],
    ],
    description: [
      ['Podstawa bezpiecznikowa 3P + zacisk łączenikowy 16 mm²'],
      ...arrOfDescriptions5,
    ],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },

  //__36__s.322
  {
    tableType: 'techSpecTableVer1',

    header: [['Wymiary']],
    tablesData: [
      [
        { label: 'Wysokość', value: '103' },
        { label: 'Szerokość', value: '103' },
        { label: 'Głębokość', value: '55' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '36'],
    ],
    description: [...arrOfDescriptions6],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__37__s.322
  {
    tableType: 'techSpecTableVer1',

    header: [['Wymiary']],
    tablesData: [
      [
        { label: 'Wysokość', value: '110' },
        { label: 'Szerokość', value: '150' },
        { label: 'Głębokość', value: '83' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '28'],
    ],
    description: [...arrOfDescriptions6],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__38__s.322
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary']],
    tablesData: [
      [
        { label: 'Wysokość', value: '135' },
        { label: 'Szerokość', value: '160' },
        { label: 'Głębokość', value: '83' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '18'],
    ],
    description: [...arrOfDescriptions6],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__39__s.322
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary']],
    tablesData: [
      [
        { label: 'Wysokość', value: '175' },
        { label: 'Szerokość', value: '225' },
        { label: 'Głębokość', value: '65' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '10'],
    ],
    description: [...arrOfDescriptions6],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__40__s.324
  {
    tableType: 'techSpecTableVer1',

    header: [['Wymiary'], ['Dodatkowe wyposażenie']],
    tablesData: [
      [
        { label: 'Wysokość', value: '110' },
        { label: 'Szerokość', value: '150' },
        { label: 'Głębokość', value: '63' },
      ],
      [
        {
          label: 'Gniazda',
          value: '1 × CEE 16A 3P+N+T 400V~ + 1 × GS 16A 2P+T 230V~',
        },
      ],
    ],
    // extraStaff: {
    //   header: ['Dodatkowe wyposażenie'],
    //   tablesData: [
    //     ['Gniazda', '1 × CEE 16A 3P+N+T 400V~ + 1 × GS 16A 2P+T 230V~'],
    //   ],
    // },
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '18'],
    ],
    description: [...arrOfDescriptions5],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__41__s.324
  {
    tableType: 'techSpecTableVer1',

    header: [['Wymiary'], ['Dodatkowe wyposażenie']],
    tablesData: [
      [
        { label: 'Wysokość', value: '135' },
        { label: 'Szerokość', value: '160' },
        { label: 'Głębokość', value: '83' },
      ],
      [
        {
          label: 'Gniazda',
          value: '2 × CEE 16A 3P+N+T 400V~ + 1 × GS 16A 2P+T 230V~',
        },
      ],
    ],
    // extraStaff: {
    //   header: ['Dodatkowe wyposażenie'],
    //   tablesData: [
    //     ['Gniazda', '2 × CEE 16A 3P+N+T 400V~ + 1 × GS 16A 2P+T 230V~'],
    //   ],
    // },
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '10'],
    ],
    description: [...arrOfDescriptions5],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //___akcesoria
  {
    tableType: 'techSpecTableVer1',

    header: [['Wymiary']],
    tablesData: [
      [
        { label: 'Wysokość', value: '135' },
        { label: 'Szerokość', value: '160' },
        { label: 'Głębokość', value: '83' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '10'],
    ],
    description: [
      ['Wyposażenie: 2 × CEE 16A 3P+N+T 400V~ + 1 × GS 16A 2P+T 230V~'],
      ...arrOfDescriptions5,
    ],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  {
    tableType: 'techSpecTableVer1',

    header: [['Wymiary']],
    tablesData: [
      [
        { label: 'Wysokość', value: '135' },
        { label: 'Szerokość', value: '160' },
        { label: 'Głębokość', value: '83' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '10'],
    ],
    description: [
      ['Wyposażenie: 2 × CEE 16A 3P+N+T 400V~ + 1 × GS 16A 2P+T 230V~'],
      ...arrOfDescriptions5,
    ],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  {
    tableType: 'techSpecTableVer1',

    header: [['Wymiary']],
    tablesData: [
      [
        { label: 'Wysokość', value: '135' },
        { label: 'Szerokość', value: '160' },
        { label: 'Głębokość', value: '83' },
      ],
    ],
    norma: ['Norma', 'EN 60670-22'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '10'],
    ],
    description: [
      ['Wyposażenie: 2 × CEE 16A 3P+N+T 400V~ + 1 × GS 16A 2P+T 230V~'],
      ...arrOfDescriptions5,
    ],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
];
