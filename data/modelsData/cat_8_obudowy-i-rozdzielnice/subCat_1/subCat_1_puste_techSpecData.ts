/*
Basic Data
*/
const arrOfDescriptions: TransparentTableDataType = [
  ['Pokrywa i podstawa', 'ABS'],
  ['Transparentne okienko', ' PC'],
  ['Osłony śrub dla IP', 'Tak (w komplecie)'],
  ['Opakowanie podstawowe', '1'],
  ['Opakowanie zbiorcze', '18'],
];

/*
.....
*/

export const obudowyPuste_techSpecData: ObudowyType1TechDataType = [
  //___1
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary']],
    tablesData: [
      [
        { label: 'Wysokość', value: '305' },
        { label: 'Szerokość', value: '125' },
        { label: 'Głębokość', value: '107' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],
    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'MOD6', 'DRUT650'],
    },
  },
  //__2
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '490' },
        { label: 'Szerokość', value: '490' },
        { label: 'Głębokość', value: '107' },
      ],
      [
        { label: 'Góra', value: '1 x Ø25 / 32' },
        { label: 'Dół', value: '1 x Ø25 / 32' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],
    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'MOD8', 'DRUT650'],
    },
  },
  //__3
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '500' },
        { label: 'Szerokość', value: '230' },
        { label: 'Głębokość', value: '155' },
      ],
      [
        { label: 'Góra', value: '2 x Ø25 - Ø20 + 1 x Ø40 - Ø32' },
        { label: 'Dół', value: '2 x Ø25 - Ø20 + 1 x Ø40 - Ø32' },
        { label: 'Bok', value: '2x (3 x Ø40 - Ø32 + 2 x Ø25 - Ø20)' },
      ],
    ],

    norma: ['Norma', 'EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__4
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '330' },
        { label: 'Szerokość', value: '330' },
        { label: 'Głębokość', value: '155' },
      ],
      [
        { label: 'Góra', value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40' },
        { label: 'Dół', value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40' },
        { label: 'Bok', value: '2 x (2 x Ø40-Ø32 + 2 x Ø25-Ø20)' },
      ],
    ],

    norma: ['Norma', 'EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__5
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '500' },
        { label: 'Szerokość', value: '300' },
        { label: 'Głębokość', value: '155' },
      ],
      [
        { label: 'Góra', value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40' },
        { label: 'Dół', value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40' },
        { label: 'Bok', value: '2 x (3 x Ø40 - Ø32 + 2 x Ø25 - Ø20)' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__6
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '685' },
        { label: 'Szerokość', value: '330' },
        { label: 'Głębokość', value: '155' },
      ],
      [
        { label: 'Góra', value: '2 x Ø25-Ø20 + 2 x Ø40-Ø32 + 1 x Ø50-Ø40' },
        { label: 'Dół', value: '2 x Ø25-Ø20 + 2 x Ø40-Ø32 + 1 x Ø50-Ø40' },
        { label: 'Bok', value: '2 x (3 x Ø25 - Ø20 + 4 x Ø40 - Ø32)' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__7
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary']],
    tablesData: [
      [
        { label: 'Wysokość', value: '260' },
        { label: 'Szerokość', value: '215' },
        { label: 'Głębokość', value: '150' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__8
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary']],
    tablesData: [
      [
        { label: 'Wysokość', value: '350' },
        { label: 'Szerokość', value: '215' },
        { label: 'Głębokość', value: '150' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  // //__9
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary']],
    tablesData: [
      [
        { label: 'Wysokość', value: '400' },
        { label: 'Szerokość', value: '265' },
        { label: 'Głębokość', value: '153' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  // //__10
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary']],
    tablesData: [
      [
        { label: 'Wysokość', value: '305' },
        { label: 'Szerokość', value: '125' },
        { label: 'Głębokość', value: '107' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__11
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '490' },
        { label: 'Szerokość', value: '125' },
        { label: 'Głębokość', value: '107' },
      ],
      [
        { label: 'Góra', value: '1 x Ø25 / 32' },
        { label: 'Dół', value: '1 x Ø25 / 32' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__12
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '330' },
        { label: 'Szerokość', value: '330' },
        { label: 'Głębokość', value: '150' },
      ],
      [
        { label: 'Góra', value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40' },
        { label: 'Dół', value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40' },
        { label: 'Bok', value: '2 x (2 x Ø40-Ø32 + 2 x Ø25-Ø20)' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__13
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '500' },
        { label: 'Szerokość', value: '230' },
        { label: 'Głębokość', value: '155' },
      ],
      [
        { label: 'Góra', value: '2 x Ø25 - Ø20 + 1 x Ø50 - Ø40' },
        { label: 'Dół', value: '2 x Ø25 - Ø20 + 1 x Ø50 - Ø40' },
        { label: 'Bok', value: '2 x (3 x Ø40 - Ø32 + 2 x Ø25 - Ø20)' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  // //__14
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '500' },
        { label: 'Szerokość', value: '330' },
        { label: 'Głębokość', value: '155' },
      ],
      [
        { label: 'Góra', value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40' },
        { label: 'Dół', value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40' },
        { label: 'Bok', value: '2 x (3 x Ø40 - Ø32 + 2 x Ø25 - Ø20)' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  // //__15
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '685' },
        { label: 'Szerokość', value: '330' },
        { label: 'Głębokość', value: '155' },
      ],
      [
        { label: 'Góra', value: '2 x Ø25-Ø20 + 2 x Ø40-Ø32 + 1 x Ø50-Ø40' },
        { label: 'Dół', value: '2 x Ø25-Ø20 + 2 x Ø40-Ø32 + 1 x Ø50-Ø40' },
        { label: 'Bok', value: '2 x (3 x Ø25 - Ø20 + 4 x Ø40 - Ø32)' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  // //__16
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
        { label: 'Góra', value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40' },
        { label: 'Dół', value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20' },
        { label: 'Bok', value: '2 x (1 x Ø40-Ø32 + 1 x Ø25-Ø20)' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  // //__17
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '335' },
        { label: 'Szerokość', value: '330' },
        { label: 'Głębokość', value: '135' },
      ],
      [
        {
          label: 'Góra',
          value: '2 x Ø25 - Ø20 + 2 x Ø40 - Ø32 + 1 x Ø50 - Ø40',
        },
        {
          label: 'Dół',
          value: '2 x Ø25 - Ø20 + 2 x Ø40 - Ø32 + 1 x Ø50 - Ø40',
        },
        { label: 'Bok', value: '2 x (2 x Ø40 - Ø32 + 2 x Ø25 - Ø20)' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  // //__18
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '500' },
        { label: 'Szerokość', value: '330' },
        { label: 'Głębokość', value: '155' },
      ],
      [
        {
          label: 'Góra',
          value: '2 x Ø25-Ø20 + 1 x Ø50-Ø40',
        },
        {
          label: 'Dół',
          value: '2 x Ø25-Ø20 + 1 x Ø50-Ø40',
        },
        { label: 'Bok', value: '2 x (3 x Ø40-Ø32 + 2 x Ø25-Ø20)' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  // //__19
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '500' },
        { label: 'Szerokość', value: '330' },
        { label: 'Głębokość', value: '155' },
      ],
      [
        {
          label: 'Góra',
          value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40',
        },
        {
          label: 'Dół',
          value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40',
        },
        { label: 'Bok', value: '2 x (3 x Ø40-Ø32 + 2 x Ø25-Ø20)' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  // //__20
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
        {
          label: 'Góra',
          value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40',
        },
        {
          label: 'Dół',
          value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40',
        },
        { label: 'Bok', value: '2 x (2 x Ø40-Ø32 + 2 x Ø25-Ø20)' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__21
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '500' },
        { label: 'Szerokość', value: '330' },
        { label: 'Głębokość', value: '155' },
      ],
      [
        {
          label: 'Góra',
          value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40',
        },
        {
          label: 'Dół',
          value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40',
        },
        { label: 'Bok', value: '2 x (2 x Ø40-Ø32 + 2 x Ø25-Ø20)' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__22
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '685' },
        { label: 'Szerokość', value: '330' },
        { label: 'Głębokość', value: '155' },
      ],
      [
        {
          label: 'Góra',
          value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40',
        },
        {
          label: 'Dół',
          value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40',
        },
        { label: 'Bok', value: '2 x (3 x Ø25-Ø20 + 4 x Ø40-Ø32)' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__23
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
        {
          label: 'Góra',
          value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40',
        },
        {
          label: 'Dół',
          value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40',
        },
        { label: 'Bok', value: '2 x (1 x Ø40-Ø32 + 1 x Ø25-Ø20)' },
      ],
    ],

    norma: ['Norma', 'EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__24
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '175' },
        { label: 'Szerokość', value: '330' },
        { label: 'Głębokość', value: '155' },
      ],
      [
        {
          label: 'Góra',
          value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40',
        },
        {
          label: 'Dół',
          value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20',
        },
        { label: 'Bok', value: '2 x (1 x Ø40-Ø32 + 1 x Ø25-Ø20)' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
];
