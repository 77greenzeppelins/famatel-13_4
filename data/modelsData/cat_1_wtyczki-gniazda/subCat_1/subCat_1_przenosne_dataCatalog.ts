import { tablesTypes } from '@/data/basicData';

/**Data f data**/
const headerTopData_1: string[][] = [
  ['3P=2P+T', '4P=3P+T', '5P=3P+T+N'],
  ['110V', '50/60Hz'],
  ['230V', '50/60Hz'],
  ['400V', '50/60Hz'],
  ['500V', '50/60Hz'],
];
const headerBottomData_1: string[][] = [
  ['Ampery', 'Bieguny', 'Opakowanie'],
  ['Bieguny: 3P 4P 5P', 'Godz.P: 6h 9h 9h'],
  ['Bieguny: 3P 4P 5P', 'Godz.P: 6h 9h 9h'],
  ['Bieguny: 3P 4P 5P', 'Godz.P: 9h 6h 6h'],
  ['Bieguny: 3P 4P 5P', 'Godz.P: 7h 7h 7h'],
];

const headerTopData_2: string[][] = [
  ['3P = 2P + T', '4P = 3P + T', '5P = 3P + T + N'],
  ['230V', '50/60Hz'],
  ['400V', '50/60Hz'],
];
const headerBottomData_2: string[][] = [
  ['Ampery', 'Bieguny', 'Opakowanie'],
  ['Bieguny: 3P 4P 5P', 'Godz.P: 6h 9h 9h'],
  ['Bieguny: 3P 4P 5P', 'Godz.P: 9h 6h 6h'],
];
//___wtyczki-gniazda-przenosne / 13311
const headerTopData_3: string[][] = [
  ['3P = 2P + T', '4P = 3P + T', '5P = 3P + T + N'],
  ['400V', '50/60Hz'],
];
const headerBottomData_3: string[][] = [
  ['Ampery', 'Bieguny', 'Opakowanie'],
  ['Bieguny: 3P 4P 5P', 'Godz.P: 9h 6h 6h'],
];

/*
Data for Components
*/
export const wtyczkiGniazdaPrzenosne_catalogData: CatalogDataVar1Type = [
  //__1
  {
    tableType: tablesTypes[0],
    //___for 16A
    headerTopData: headerTopData_1,
    headerBottomData: headerBottomData_1,
    rowsData: [
      [
        ['16', '3', '10', '13100', '13200', '13304', '13404'],
        ['4', '10', '13101', '13201', '13300', '13400'],
        ['5', '8', '13104', '13202', '13301', '13401'],
      ],
      [
        ['32', '3', '5', '13102', '13203', '13305', '13405'],
        ['4', '5', '13103', '13204', '13302', '13402'],
        ['5', '4', '13105', '13206', '13303', '13403'],
      ],
    ],
  },
  //__2
  {
    tableType: tablesTypes[0],
    headerTopData: headerTopData_1,
    headerBottomData: headerBottomData_1,
    rowsData: [
      [
        ['16', '3', '10', '14100', '14200', '14309', '14408'],
        ['4', '8', '14101', '14201', '14300', '14400'],
        ['5', '6', '14112', '14202', '14301', '14401'],
      ],
      [
        ['32', '3', '5', '14102', '14203', '14310', '14409'],
        ['4', '5', '14103', '14204', '14302', '14402'],
        ['5', '3', '14113', '14210', '14303', '14403'],
      ],
    ],
  },
  //__3
  {
    tableType: 'tableType1',
    //___for 63A
    headerTopData: headerTopData_1,
    headerBottomData: headerBottomData_1,
    rowsData: [
      [
        ['63', '3', '10', '14108', '14205', '14311', '14410'],
        ['4', '10', '14109', '14206', '14304', '14404'],
        ['5', '10', '14114', '14209', '14305', '14405'],
      ],
    ],
  },
  // //__4
  {
    tableType: 'tableType1',
    //___for 125A
    headerTopData: headerTopData_1,
    headerBottomData: headerBottomData_1,
    rowsData: [
      [
        ['125', '3', '2', '14110', '14212', '14312', '14411'],
        ['4', '2', '14111', '14208', '14306', '14406'],
        ['5', '2', '14115', '14211', '14307', '14407'],
      ],
    ],
  },
  // //__5
  {
    tableType: 'tableType1',
    //___for 16A
    headerTopData: headerTopData_1,
    headerBottomData: headerBottomData_1,
    rowsData: [
      [
        ['16', '3', '10', '23100', '23200', '23304', '23404'],
        ['4', '10', '23101', '23201', '23300', '23400'],
        ['5', '5', '23104', '23202', '23301', '23401'],
      ],
      [
        ['32', '3', '4', '23102', '23203', '23305', '23405'],
        ['4', '4', '23103', '23204', '23302', '23402'],
        ['5', '3', '23105', '23205', '23303', '23403'],
      ],
    ],
  },
  //__6
  {
    tableType: 'tableType1',
    headerTopData: headerTopData_1,
    headerBottomData: headerBottomData_1,
    rowsData: [
      [
        ['16', '3', '10', '24100', '24200', '24310', '24410'],
        ['4', '6', '24101', '24201', '24300', '24400'],
        ['5', '4', '24107', '24202', '24301', '24401'],
      ],
      [
        ['32', '3', '3', '24102', '24203', '24311', '24411'],
        ['4', '3', '24103', '24204', '24302', '24402'],
        ['5', '3', '24112', '24210', '24303', '24403'],
      ],
    ],
  },
  // //__7
  {
    tableType: 'tableType1',
    //___for 63A
    headerTopData: headerTopData_1,
    headerBottomData: headerBottomData_1,
    rowsData: [
      [
        ['63', '3', '10', '24104', '24205', '24312', '24412'],
        ['4', '10', '24109', '24206', '24304', '24404'],
        ['5', '10', '24113', '24209', '24305', '24405'],
      ],
    ],
  },
  //__8
  {
    tableType: 'tableType1',

    headerTopData: headerTopData_1,
    headerBottomData: headerBottomData_1,
    rowsData: [
      [
        ['125', '3', '2', '24106', '24212', '24313', '24413'],
        ['4', '2', '24111', '24208', '24306', '24406'],
        ['5', '2', '24114', '24211', '24307', '24407'],
      ],
    ],
  },

  // //__9
  {
    tableType: 'tableType1',
    //___for 16A
    headerTopData: headerTopData_2,
    headerBottomData: headerBottomData_2,
    rowsData: [
      [
        ['16', '3', '10', '13200CR', '--'],
        ['4', '10', '--', '13300CR'],
        ['5', '6', '--', '13301CR'],
      ],
    ],
  },
  // //__10
  {
    tableType: 'tableType1',
    //___for 16A
    headerTopData: headerTopData_2,
    headerBottomData: headerBottomData_2,
    rowsData: [
      [
        ['16', '3', '10', '14200CR', '--'],
        ['4', '8', '--', '14300CR'],
        ['5', '8', '--', '14301CR'],
      ],
    ],
  },
  // //__11
  {
    tableType: 'tableType1',
    //___for 16A
    headerTopData: headerTopData_2,
    headerBottomData: headerBottomData_2,
    rowsData: [
      [
        ['16', '3', '10', '23200CR', '--'],
        ['4', '10', '--', '23300CR'],
        ['5', '5', '--', '23301CR'],
      ],
    ],
  },
  // //__12
  {
    tableType: 'tableType1',
    headerTopData: headerTopData_2,
    headerBottomData: headerBottomData_2,
    rowsData: [
      [
        ['16', '3', '10', '24200CR', '--'],
        ['4', '6', '--', '24300CR'],
        ['5', '4', '--', '24301CR'],
      ],
    ],
  },
  // //__13
  {
    tableType: 'tableType1',
    headerTopData: headerTopData_3,
    headerBottomData: headerBottomData_3,
    rowsData: [
      [['16', '5', '10/150', '13311']],
      [['32', '5', '5/75', '13313']],
    ],
  },
];
