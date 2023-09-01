const underlinedRows1 = [
  ['Stopień ochrony: ', 'IP20'],
  ['Materiał obudowy: ', 'PA6/ABS'],
  ['Styki: ', 'Nickel-plated'],
  ['Opakowanie: ', '12 szt.'],
];
const underlinedRows2 = [['Opakowanie: ', '10 szt.']];
const underlinedRows3 = [
  ['Stopień ochrony:', 'IP44'],
  ['Odporność na uderzenie: ', 'IK06'],
  ['Stabilność rozmiaru: ', '-25 °C / 85 °C'],
  ['Materiał: ', 'Polyamid 6 - ABS'],
  ['Materiał styków: ', 'Mosiądz platerowany niklem'],
  ['Opakowanie: ', '1 szt.'],
];
const underlinedRows4 = [
  ['Stopień ochrony: ', 'IP20', 'Opakowanie: ', '10 szt.'],
];
/**____layout_1**/
export const wtyczkiGniazdaCampingowe_techData: WtyczkiGniazdaType6TechDataType =
  [
    //___1 / IP54
    {
      tableType: 'techTableWtyczkiGniazdaVer6',
      tableHeader: [' ', 'A', 'B'],
      tableBody: [
        ['Wymiary', '80', '60'],
        ['Wejście', 'Wtyczka schuko 16A/250V'],
        ['Wyjście', 'Gniazdo ind. CEE 16A/250V~2P+T 6h'],
        ['Waga', '164'],
      ],
      underlinedRows: underlinedRows1,
    },
    //___2 / IP67
    {
      tableType: 'techTableWtyczkiGniazdaVer6',
      tableHeader: [' ', 'A', 'B'],
      tableBody: [
        ['Wymiary', '120', '85'],
        ['Wejście', 'Wtyczka CEE 16A/250V ~ 2P+T 6h'],
        ['Wyjście', '3 Tomas/sockets Bipasso 16A/250V'],
        ['Waga', '164'],
      ],
      underlinedRows: underlinedRows1,
    },
    //___3 / IP67
    {
      tableType: 'techTableWtyczkiGniazdaVer6',
      tableHeader: [' ', 'A', 'B'],
      tableBody: [
        ['Wymiary', '80', '60'],
        ['Wejście', 'Wtyczka schuko 16A/230V 3P'],
        ['Wyjście', 'Gniazdo CEE 16A 2P+T 230V + Schuko 16A 2P+T 230V'],
        ['Waga', '101'],
      ],
      underlinedRows: underlinedRows2,
    },
    //___4
    {
      tableType: 'techTableWtyczkiGniazdaVer6',
      underlinedRows: underlinedRows3,
    },
    //___5
    {
      tableType: 'techTableWtyczkiGniazdaVer6',
      underlinedRows: underlinedRows3,
    },
    //___6
    {
      tableType: 'techTableWtyczkiGniazdaVer6',
      tableHeader: [' ', 'A', 'B', 'C'],
      tableBody: [
        ['Wymiary', '56', '68', '60,5'],
        ['Wejście', 'Clavija/plug schuko 16A/250V'],
        ['Outlet', 'Toma/socket ind. CEE 16A/250V~2P+T 6h'],
        ['Waga', '164'],
      ],
      underlinedRows: underlinedRows1,
    },
    //___7
    {
      tableType: 'techTableWtyczkiGniazdaVer6',
      tableHeader: [' ', 'A', 'B', 'C'],
      tableBodySpecialRows: [
        // ['Wymiary'], <== must be tworows
        ['Wymiary', '43,2 / 1-faz.', '56 / 1-faz.', '46,5 / 1-faz.'],
        ['56 / 3-faz.', '68 / 3-faz.', '60,5 / 3-faz.'],
      ],
      tableBody: [
        ['Wejście', 'Wtyczka CEE 16A 2P+T 230V'],
        ['Waga', '155'],
      ],
    },
    //___8
    {
      tableType: 'techTableWtyczkiGniazdaVer6',
      tableHeader: [' ', 'A', 'B', 'C'],
      tableBodySpecialRows: [
        // ['Wymiary'], <== must be tworows
        ['Wymiary', '43,2 / 1-faz.', '56 / 1-faz.', '46,5 / 1-faz.'],
        ['56 / 3-faz.', '68 / 3-faz.', '60,5 / 3-faz.'],
      ],
      tableBody: [
        ['Wejście', 'Wtyczka CEE 16A 3P+N+T 400V'],
        ['Waga', '155'],
      ],
    },
    //___9
    {
      tableType: 'techTableWtyczkiGniazdaVer6',
      underlinedRows: underlinedRows4,
    },
    //__10
    {
      tableType: 'techTableWtyczkiGniazdaVer6',
      tableHeader: [' ', 'A', 'B', 'D'],
      tableBody: [
        ['Wymiary', '56', '127', '59'],
        ['Wejście', 'Wtyczka 16A/230V 3P'],
        ['Waga', '164'],
      ],
      underlinedRows: [
        ['Stopień ochrony:', 'IP44'],
        ['Opakowanie: ', '30/70 szt.'],
      ],
    },

    //__11
    {
      tableType: 'techTableWtyczkiGniazdaVer6',
      twoTables: [
        {
          tableHeader: [' ', 'A', 'B', 'D'],
          tableBody: [
            ['Wymiary', '56', '127', '59'],
            ['Wejście', 'Wtyczka 16A/230V 3P'],
            ['Zabezpieczenie', 'Interruptor magnetotérmico 1P+N/MCB1P + N'],
            ['Waga', '164'],
          ],
        },
        {
          tableHeader: [' ', 'A', 'B', 'D'],
          tableBody: [
            ['Wymiary', '56', '127', '59'],
            ['Wejście', 'Wtyczka 16A/230V 3P'],
            ['Zabezpieczenie', 'Interruptor diferencial 1P+N/RCD1P + N'],
            ['Waga', '164'],
          ],
        },
      ],
      underlinedRows: [
        ['Stopień ochrony:', 'IP44'],
        ['Opakowanie: ', '30/70 szt.'],
      ],
    },
  ];

// const wtyczkiGniazdaCampingowe_l1_header_data = [
//   { type: 'EU' },
//   { type: 'EU-IT' },
//   { type: 'EU' },
// ];

// const wtyczkiGniazdaCampingowe_l1_rest_data = [
//   [
//     ['Stopień ochrony: ', 'IP20'],
//     ['Materiał obudowy: ', 'PA6/ABS'],
//     ['Styki: ', 'Nickel-plated'],
//     ['Opakowanie: ', '12 szt.'],
//   ],
//   [
//     ['Stopień ochrony: ', 'IP20'],
//     ['Materiał Obudowy: ', 'PA6/ABS'],
//     ['Styki: ', 'Nickel-plated'],
//     ['Opakowanie: ', '12 szt.'],
//   ],
//   [['Opakowanie: ', '10 szt.']],
// ];
/**________________________________________________________________layout_____2**/
// const wtyczkiGniazdaCampingowe_l2_rest_data = [
//   [
//     ['Stopień ochrony:', 'IP44'],
//     ['Odporność na uderzenie: ', 'IK06'],
//     ['Stabilność rozmiaru: ', '-25 °C / 85 °C'],
//     ['Materiał: ', 'Polyamid 6 - ABS'],
//     ['Materiał styków: ', 'Mosiądz platerowany niklem'],
//     ['Opakowanie: ', '1 szt.'],
//   ],
//   [
//     ['Stopień ochrony:', 'IP44'],
//     ['Odporność na uderzenie: ', 'IK06'],
//     ['Stabilność rozmiaru: ', '-25 °C / 85 °C'],
//     ['Materiał: ', 'Polyamid 6 - ABS'],
//     ['Materiał styków: ', 'Mosiądz platerowany niklem'],
//     ['Opakowanie: ', '1 szt.'],
//   ],
// ];

/**____________________________________________________________________layout_____3**/
const wtyczkiGniazdaCampingowe_l3_tech_data = {
  tableLine1: [' ', 'A', 'B', 'C'],
  tableLine2: ['Wymiary', '56', '68', '60,5'],
  tableBody: [
    ,
    ['Wejście', 'Clavija/plug schuko 16A/250V'],
    ['Outlet', 'Toma/socket ind. CEE 16A/250V~2P+T 6h'],
    ['Waga', '164'],
  ],
};
const wtyczkiGniazdaCampingowe_l3_rest_data = [
  ['Stopień ochrony: ', 'IP20'],
  ['Materiał Obudowy: ', 'PA6/ABS'],
  ['Styki: ', 'Nickel-plated'],
  ['Opakowanie: ', '12 szt.'],
];

/**________________________________________________________layout___4 */
const wtyczkiGniazdaCampingowe_l4_tech_data: {
  tableHeader: string[];
  tableBody1: string[][];
  tableBody2: string[][];
}[] = [
  //___1
  // {
  //   tableHeader: [' ', 'A', 'B', 'C'],
  //   tableBody1: [
  //     ['Wymiary'],
  //     ['43,2 / 1-faz.', '56 / 1-faz.', '46,5 / 1-faz.'],
  //     ['56 / 3-faz.', '68 / 3-faz.', '60,5 / 3-faz.'],
  //   ],
  //   tableBody2: [
  //     ['Wejście', 'Wtyczka CEE 16A 2P+T 230V'],
  //     ['Waga', '155'],
  //   ],
  // },
  //___2
  // {
  //   tableHeader: [' ', 'A', 'B', 'C'],
  //   tableBody1: [
  //     ['Wymiary'],
  //     ['43,2 / 1-faz.', '56 / 1-faz.', '46,5 / 1-faz.'],
  //     ['56 / 3-faz.', '68 / 3-faz.', '60,5 / 3-faz.'],
  //   ],
  //   tableBody2: [
  //     ['Wejście', 'Wtyczka CEE 16A 3P+N+T 400V'],
  //     ['Waga', '185'],
  //   ],
  // },
];

const wtyczkiGniazdaCampingowe_l4_rest_data = [
  [
    ['Stopień ochrony:', 'IP54'],
    ['Opakowanie: ', '10 szt.'],
  ],
  [
    ['Stopień ochrony:', 'IP54'],
    ['Opakowanie: ', '10 szt.'],
  ],
];

/**________________________________________________________layout___5 */
const wtyczkiGniazdaCampingowe_l5_tech_data: string[][] = [
  ['Wejście', 'Wtyczka CEE  3P+N+T 400V'],
  ['Wyjście', 'Gniazdo schuko 3x( 16A 2P+T 230V)'],
  ['Waga', '196'],
];
const wtyczkiGniazdaCampingowe_l5_rest_data = [
  ['Stopień ochrony:', 'IP20'],
  // ['Odporność na uderzenie: ', 'IK06'],
  // ['Stabilność rozmiaru: ', '-25 °C / 85 °C'],
  // ['Materiał: ', 'Polyamid 6 - ABS'],
  // ['Materiał styków: ', 'Mosiądz platerowany niklem'],
  ['Opakowanie: ', '10 szt.'],
];

/**________________________________________________________layout___6 */
// const wtyczkiGniazdaCampingowe_l6_tech_data = {
//   tableLine1: [' ', 'A', 'B', 'D'],
//   tableLine2: ['Wymiary', '56', '127', '59'],
//   tableBody: [
//     ['Wejście', 'Wtyczka 16A/230V 3P'],
//     ['Waga', '164'],
//   ],
// };
// const wtyczkiGniazdaCampingowe_l6_rest_data = [
//   ['Stopień ochrony:', 'IP44'],
//   ['Opakowanie: ', '30/70 szt.'],
// ];

/**________________________________________________________layout___7 */
const wtyczkiGniazdaCampingowe_l7_tech_data = [
  {
    tableLine1: [' ', 'A', 'B', 'D'],
    tableLine2: ['Wymiary', '56', '127', '59'],
    tableBody: [
      ['Wejście', 'Wtyczka 16A/230V 3P'],
      ['Zabezpieczenie', 'Interruptor magnetotérmico 1P+N/MCB1P + N'],
      ['Waga', '164'],
    ],
  },
  {
    tableLine1: [' ', 'A', 'B', 'D'],
    tableLine2: ['Wymiary', '56', '127', '59'],
    tableBody: [
      ['Wejście', 'Wtyczka 16A/230V 3P'],
      ['Zabezpieczenie', 'Interruptor diferencial 1P+N/RCD1P + N'],
      ['Waga', '164'],
    ],
  },
];
const wtyczkiGniazdaCampingowe_l7_rest_data = [
  ['Stopień ochrony:', 'IP44'],
  ['Opakowanie: ', '30/70 szt.'],
];
//_________________________________________________

const wtyczkiGniazdaEstradowe_l1_feat1_data = [
  ['Napięcie znamionowe: ', '220 - 240 V'],
  ['Prąd znamionowy: ', '40 A'],
  ['Rezystancja izolacji', '>10MΩ@500Vdc'],
  ['Wytrzymałość elektryczna: ', '2,5 kV'],
  ['Temperatura robocza: ', '-25 °C/ 40 °C'],
  ['Stopień ochrony: ', 'IP55'],
  ['Odporność na uderzenie: ', 'IK06'],
  ['Materiał Obudowy: ', 'PA6/ABS'],
  ['Styki: ', 'Mosiądz'],
  ['Opakowanie: ', '10 szt.'],
];
const wtyczkiGniazdaEstradowe_l1_feat2_data = [
  ['Bieguny: ', '2P+T(2P+E)'],
  ['Stopień ochrony: ', 'IP54'],
  ['Odporność na uderzenie: ', 'IK07'],
  ['Materiał Obudowy: ', 'PA6/ABS'],
  ['Styki: ', 'Nickel-plated'],
  ['Opakowanie: ', '10 szt.'],
  ['Norma: ', 'EN 60309-1 / EN 60309-2'],
];

//
