import { techSpecTables } from '@/data/basicData';
/*
Basic Data
*/

const arrOfDescriptionsT: TransparentTableDataType = [
  ['Podstawa', 'ABS'],
  ['Transparentne drzwiczki', ' PC'],
  ['1/4 turn plastic key', 'Tak (w komplecie)'],
  ['Galvanized metallic plate included', 'Tak'],
  ['Opakowanie podstawowe', '1'],
];
const arrOfDescriptions: TransparentTableDataType = [
  ['Drzwiczki i podstawa', 'ABS'],
  ['1/4 turn plastic key', 'Tak (w komplecie)'],
  ['Galvanized metallic plate included', 'Tak'],
  ['Opakowanie podstawowe', '1'],
];

/*
.....
*/

export const obudowyModulowePuste_techSpecData: ObudowyPusteTechDataType = [
  {
    tableType: techSpecTables[0],
    header: [['Wymiary zewnętrzne'], ['Wymiary wewnętrzne']],
    tablesData: [
      [
        { label: 'Wysokość', value: '280' },
        { label: 'Szerokość', value: '210' },
        { label: 'Głębokość', value: '130' },
      ],
      [
        { label: 'Wysokość', value: '235' },
        { label: 'Szerokość', value: '160' },
        { label: 'Głębokość', value: '123' },
      ],
    ],
    norma: ['Norma', 'EN 61439-1 / EN 60439-3 / EN 62208'],
    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'MOD6', 'DRUT650'],
    },
  },
  //__2
  {
    tableType: techSpecTables[0],
    header: [['Wymiary zewnętrzne'], ['Wymiary wewnętrzne']],
    tablesData: [
      [
        { label: 'Wysokość', value: '280' },
        { label: 'Szerokość', value: '210' },
        { label: 'Głębokość', value: '130' },
      ],
      [
        { label: 'Wysokość', value: '235' },
        { label: 'Szerokość', value: '160' },
        { label: 'Głębokość', value: '123' },
      ],
    ],
    norma: ['Norma', 'EN 61439-1 / EN 60439-3 / EN 62208'],

    description: [...arrOfDescriptionsT],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'MOD8', 'DRUT650'],
    },
  },
  //__3
  {
    tableType: techSpecTables[0],
    header: [['Wymiary'], ['Wymiary wewnętrzne']],
    tablesData: [
      [
        { label: 'Wysokość', value: '400' },
        { label: 'Szerokość', value: '300' },
        { label: 'Głębokość', value: '165' },
      ],
      [
        { label: 'Wysokość', value: '352' },
        { label: 'Szerokość', value: '250' },
        { label: 'Głębokość', value: '158' },
      ],
    ],

    norma: ['Norma', 'EN 61439-1 / EN 60439-3 / EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__4
  {
    tableType: techSpecTables[0],
    header: [['Wymiary'], ['Wymiary wewnętrzne']],
    tablesData: [
      [
        { label: 'Wysokość', value: '400' },
        { label: 'Szerokość', value: '300' },
        { label: 'Głębokość', value: '165' },
      ],
      [
        { label: 'Wysokość', value: '352' },
        { label: 'Szerokość', value: '250' },
        { label: 'Głębokość', value: '158' },
      ],
    ],
    norma: ['Norma', 'EN 61439-1 / EN 60439-3 / EN 62208'],

    description: [...arrOfDescriptionsT],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__5
  {
    tableType: techSpecTables[0],
    header: [['Wymiary'], ['Wymiary wewnętrzne']],
    tablesData: [
      [
        { label: 'Wysokość', value: '500' },
        { label: 'Szerokość', value: '400' },
        { label: 'Głębokość', value: '175' },
      ],
      [
        { label: 'Wysokość', value: '453' },
        { label: 'Szerokość', value: '352' },
        { label: 'Głębokość', value: '168' },
      ],
    ],
    norma: ['Norma', 'EN 61439-1 / EN 60439-3 / EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__6
  {
    tableType: techSpecTables[0],
    header: [['Wymiary'], ['Wymiary wewnętrzne']],
    tablesData: [
      [
        { label: 'Wysokość', value: '500' },
        { label: 'Szerokość', value: '400' },
        { label: 'Głębokość', value: '175' },
      ],
      [
        { label: 'Wysokość', value: '453' },
        { label: 'Szerokość', value: '352' },
        { label: 'Głębokość', value: '168' },
      ],
    ],
    norma: ['Norma', 'EN 61439-1 / EN 60439-3 / EN 62208'],

    description: [...arrOfDescriptionsT],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__7
  {
    tableType: techSpecTables[0],
    header: [['Wymiary'], ['Wymiary wewnętrzne']],
    tablesData: [
      [
        { label: 'Wysokość', value: '600' },
        { label: 'Szerokość', value: '400' },
        { label: 'Głębokość', value: '205' },
      ],
      [
        { label: 'Wysokość', value: '548' },
        { label: 'Szerokość', value: '352' },
        { label: 'Głębokość', value: '193' },
      ],
    ],
    norma: ['Norma', 'EN 61439-1 / EN 60439-3 / EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__8
  {
    tableType: techSpecTables[0],
    header: [['Wymiary'], ['Wymiary wewnętrzne']],
    tablesData: [
      [
        { label: 'Wysokość', value: '600' },
        { label: 'Szerokość', value: '400' },
        { label: 'Głębokość', value: '205' },
      ],
      [
        { label: 'Wysokość', value: '548' },
        { label: 'Szerokość', value: '352' },
        { label: 'Głębokość', value: '193' },
      ],
    ],
    norma: ['Norma', 'EN 61439-1 / EN 60439-3 / EN 62208'],

    description: [...arrOfDescriptionsT],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__9
  {
    tableType: techSpecTables[0],
    header: [['Wymiary'], ['Wymiary wewnętrzne']],
    tablesData: [
      [
        { label: 'Wysokość', value: '700' },
        { label: 'Szerokość', value: '500' },
        { label: 'Głębokość', value: '245' },
      ],
      [
        { label: 'Wysokość', value: '637' },
        { label: 'Szerokość', value: '450' },
        { label: 'Głębokość', value: '238' },
      ],
    ],
    norma: ['Norma', 'EN 61439-1 / EN 60439-3 / EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  // //__10
  {
    tableType: techSpecTables[0],
    header: [['Wymiary'], ['Wymiary wewnętrzne']],
    tablesData: [
      [
        { label: 'Wysokość', value: '700' },
        { label: 'Szerokość', value: '500' },
        { label: 'Głębokość', value: '245' },
      ],
      [
        { label: 'Wysokość', value: '637' },
        { label: 'Szerokość', value: '450' },
        { label: 'Głębokość', value: '238' },
      ],
    ],
    norma: ['Norma', 'EN 61439-1 / EN 60439-3 / EN 62208'],

    description: [...arrOfDescriptionsT],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__11
  {
    tableType: techSpecTables[0],
    header: [['Wymiary'], ['Wymiary wewnętrzne']],
    tablesData: [
      [
        { label: 'Wysokość', value: '800' },
        { label: 'Szerokość', value: '600' },
        { label: 'Głębokość', value: '260' },
      ],
      [
        { label: 'Wysokość', value: '736' },
        { label: 'Szerokość', value: '550' },
        { label: 'Głębokość', value: '253' },
      ],
    ],
    norma: ['Norma', 'EN 61439-1 / EN 60439-3 / EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__12
  {
    tableType: techSpecTables[0],
    header: [['Wymiary'], ['Wymiary wewnętrzne']],
    tablesData: [
      [
        { label: 'Wysokość', value: '800' },
        { label: 'Szerokość', value: '600' },
        { label: 'Głębokość', value: '260' },
      ],
      [
        { label: 'Wysokość', value: '736' },
        { label: 'Szerokość', value: '550' },
        { label: 'Głębokość', value: '253' },
      ],
    ],
    norma: ['Norma', 'EN 61439-1 / EN 60439-3 / EN 62208'],

    description: [...arrOfDescriptionsT],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
  //__13
  {
    tableType: techSpecTables[0],
    header: [['Wymiary'], ['Wymiary wewnętrzne']],
    tablesData: [
      [
        { label: 'Wysokość', value: '1000' },
        { label: 'Szerokość', value: '754' },
        { label: 'Głębokość', value: '322' },
      ],
      [
        { label: 'Wysokość', value: '970' },
        { label: 'Szerokość', value: '700' },
        { label: 'Głębokość', value: '260' },
      ],
    ],
    norma: ['Norma', 'EN 61439-1 / EN 60439-3 / EN 62208'],

    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
    },
  },
];
