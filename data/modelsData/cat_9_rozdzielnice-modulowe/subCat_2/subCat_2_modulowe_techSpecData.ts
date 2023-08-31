/*
Basic Data
*/
const arrOfDescriptions: TransparentTableDataType = [
  ['Pokrywa i podstawa', 'ABS'],
  ['Transparentne okienko', ' PC'],
  ['Osłonka śrub dla IP', 'Tak (w komplecie)'],
];

/*
.....
*/
export const obudowyModulowe_techSpecData = [
  //___1
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary'], ['Konfiguracja']],
    tablesData: [
      [
        { label: 'Wysokość', value: '171' },
        { label: 'Szerokość', value: '100' },
        { label: 'Głębokość', value: '100' },
      ],
      [
        { label: '3902-TTB', value: '2 x RG-04' },
        { label: '3902-TTB1', value: '1 x RG-04' },
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
        { label: 'Wysokość', value: '171' },
        { label: 'Szerokość', value: '100' },
        { label: 'Głębokość', value: '100' },
      ],
      [
        { label: 'Góra', value: '1 x Ø20, Ø25, Ø32, Ø40' },
        { label: 'Dół', value: '1 x Ø20, Ø25, Ø32, Ø40' },
      ],
      // [
      //   { label: '3904-TTB', value: '1 x SPTC-4' },
      //   { label: '3904-TTB1', value: '1 x SPTC-4' },
      // ],
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
    header: [['Wymiary'], ['Wejścia'], ['Konfiguracja']],
    tablesData: [
      [
        { label: 'Wysokość', value: '171' },
        { label: 'Szerokość', value: '100' },
        { label: 'Głębokość', value: '100' },
      ],
      [
        { label: 'Góra', value: '1 x Ø20, Ø25, Ø32, Ø40' },
        { label: 'Dół', value: '1 x Ø20, Ø25, Ø32, Ø40' },
      ],
      [
        { label: '3904-TTB', value: '1 x SPTC-4' },
        { label: '3904-TTB1', value: '1 x SPTC-4' },
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
        { label: 'Wysokość', value: '215' },
        { label: 'Szerokość', value: '235' },
        { label: 'Głębokość', value: '110' },
      ],
      [
        { label: 'Góra', value: '3 x Ø20, Ø25, Ø32, Ø40' },
        { label: 'Dół', value: '3 x Ø20, Ø25, Ø32, Ø40' },
      ],
      // [
      //   { label: '3908-TTB', value: '1 x SPTA-12 + 1 x RG-12' },
      //   { label: '3908-TTB1', value: '1 x SPTA-12' },
      //   { label: '3908-TB', value: '1 x SPTA-12 + 1 x RG-12' },
      // ],
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
    header: [['Wymiary'], ['Wejścia'], ['Konfiguracja']],
    tablesData: [
      [
        { label: 'Wysokość', value: '215' },
        { label: 'Szerokość', value: '235' },
        { label: 'Głębokość', value: '110' },
      ],
      [
        { label: 'Góra', value: '3 x Ø20, Ø25, Ø32, Ø40' },
        { label: 'Dół', value: '3 x Ø20, Ø25, Ø32, Ø40' },
      ],
      [
        { label: '3908-TTB', value: '1 x SPTA-12 + 1 x RG-12' },
        { label: '3908-TTB1', value: '1 x SPTA-12' },
        { label: '3908-TB', value: '1 x SPTA-12 + 1 x RG-12' },
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
        { label: 'Wysokość', value: '215' },
        { label: 'Szerokość', value: '310' },
        { label: 'Głębokość', value: '110' },
      ],
      [
        { label: 'Góra', value: '3 x Ø20, Ø25, Ø32, Ø40' },
        { label: 'Dół', value: '3 x Ø20, Ø25, Ø32, Ø40' },
      ],
      // [
      //   { label: '3908-TTB', value: '1 x SPTA-12 + 1 x RG-12' },
      //   { label: '3908-TB', value: '1 x SPTA-12 + 1 x RG-12' },
      // ],
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
    header: [['Wymiary'], ['Wejścia'], ['Konfiguracja']],
    tablesData: [
      [
        { label: 'Wysokość', value: '215' },
        { label: 'Szerokość', value: '310' },
        { label: 'Głębokość', value: '110' },
      ],
      [
        { label: 'Góra', value: '3 x Ø20, Ø25, Ø32, Ø40' },
        { label: 'Dół', value: '3 x Ø20, Ø25, Ø32, Ø40' },
      ],
      [
        { label: '39012-TTB', value: '1 x SPTA-12 + 1 x RG-12' },
        { label: '39012-TB', value: '1 x SPTA-12 + 1 x RG-12' },
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
    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '410' },
        { label: 'Szerokość', value: '310' },
        { label: 'Głębokość', value: '150' },
      ],
      [
        {
          label: 'Góra',
          value: '1 x Ø50, Ø40, Ø32, Ø25 / 2 x Ø40, Ø32, Ø25 / 2 x Ø20, Ø16',
        },
        {
          label: 'Dół',
          value: '1 x Ø50, Ø40, Ø32, Ø25 / 2 x Ø40, Ø32, Ø25 / 2 x Ø20, Ø16',
        },
      ],
    ],
    norma: ['Norma', 'EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__9
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary'], ['Wejścia'], ['Konfiguracja']],
    tablesData: [
      [
        { label: 'Wysokość', value: '410' },
        { label: 'Szerokość', value: '310' },
        { label: 'Głębokość', value: '150' },
      ],
      [
        {
          label: 'Góra',
          value: '1 x Ø50, Ø40, Ø32, Ø25 / 2 x Ø40, Ø32, Ø25 / 2 x Ø20, Ø16',
        },
        {
          label: 'Dół',
          value: '1 x Ø50, Ø40, Ø32, Ø25 / 2 x Ø40, Ø32, Ø25 / 2 x Ø20, Ø16',
        },
      ],
      [
        { label: '39026-TTB', value: '2 x SPTA-12 + 2 x RG-12' },
        { label: '39026-TtB1', value: '1 x SPTA-12 + 1 x RG-12' },
        { label: '39026-TB', value: '2 x SPTA-12 + 2 x RG-12' },
        { label: '39026-TB1', value: '1 x SPTA-12 + 1 x RG-12' },
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
    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '410' },
        { label: 'Szerokość', value: '310' },
        { label: 'Głębokość', value: '150' },
      ],
      [
        {
          label: 'Bok',
          value: '2 x Ø40, Ø32, Ø25 / 4 x Ø20, Ø16',
        },
        {
          label: 'Góra',
          value: '1 x Ø50, Ø40, Ø32, Ø25 / 2 x Ø40, Ø32, Ø25 / 2 x Ø20, Ø16',
        },
        {
          label: 'Dół',
          value: '1 x Ø50, Ø40, Ø32, Ø25 / 2 x Ø40, Ø32, Ø25 / 2 x Ø20, Ø16',
        },
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
    header: [['Wymiary'], ['Wejścia'], ['Konfiguracja']],
    tablesData: [
      [
        { label: 'Wysokość', value: '410' },
        { label: 'Szerokość', value: '310' },
        { label: 'Głębokość', value: '150' },
      ],
      [
        {
          label: 'Bok',
          value: '2 x Ø40, Ø32, Ø25 / 4 x Ø20, Ø16',
        },
        {
          label: 'Góra',
          value: '1 x Ø50, Ø40, Ø32, Ø25 / 2 x Ø40, Ø32, Ø25 / 2 x Ø20, Ø16',
        },
        {
          label: 'Dół',
          value: '1 x Ø50, Ø40, Ø32, Ø25 / 2 x Ø40, Ø32, Ø25 / 2 x Ø20, Ø16',
        },
      ],
      [
        { label: '39042-TTB', value: '3 x SPTA-12 + 3 x RG-12' },
        { label: '39042-TtB1', value: '1 x SPTA-12 + 1 x RG-12' },
        { label: '39042-TB', value: '3 x SPTA-12 + 3 x RG-12' },
        { label: '39042-TB1', value: '1 x SPTA-12 + 1 x RG-12' },
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
        { label: 'Wysokość', value: '290' },
        { label: 'Szerokość', value: '430' },
        { label: 'Głębokość', value: '160' },
      ],
      [
        {
          label: 'Góra',
          value: '2x20 / 8x25 / 1x35',
        },
        {
          label: 'Dół',
          value: '2x20 / 8x25 / 1x35',
        },
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
        { label: 'Wysokość', value: '464' },
        { label: 'Szerokość', value: '430' },
        { label: 'Głębokość', value: '160' },
      ],
      [
        {
          label: 'Góra',
          value: '2x20 / 8x25 / 1x35',
        },
        {
          label: 'Dół',
          value: '2x20 / 8x25 / 1x35',
        },
      ],
    ],
    norma: ['Norma', 'EN 62208'],
    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__14
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '640' },
        { label: 'Szerokość', value: '430' },
        { label: 'Głębokość', value: '160' },
      ],
      [
        {
          label: 'Góra',
          value: '2x20 / 8x25 / 1x35',
        },
        {
          label: 'Dół',
          value: '2x20 / 8x25 / 1x35',
        },
      ],
    ],
    norma: ['Norma', 'EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__15
  {
    tableType: 'techSpecTableVer1',
    header: [['Wymiary'], ['Wejścia']],
    tablesData: [
      [
        { label: 'Wysokość', value: '878' },
        { label: 'Szerokość', value: '430' },
        { label: 'Głębokość', value: '160' },
      ],
      [
        {
          label: 'Góra',
          value: '2x20 / 8x25 / 1x35',
        },
        {
          label: 'Dół',
          value: '2x20 / 8x25 / 1x35',
        },
      ],
    ],
    norma: ['Norma', 'EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
];
