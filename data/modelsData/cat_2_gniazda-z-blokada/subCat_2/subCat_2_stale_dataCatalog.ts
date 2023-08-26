import { tablesTypes } from '@/data/basicData';
/**Data for data**/
const headerTopData_1 = [
  ['3P = 2P + T', '4P = 3P + T', '5P = 3P + T + N'],
  ['110V', '50/60Hz'],
  ['230V', '50/60Hz'],
  ['400V', '50/60Hz'],
];
const headerBottomData_1 = [
  ['Ampery', 'Bieguny', 'Opakowanie'],
  ['Bieguny: 3P 4P 5P', 'Godz.P: 4h 4h 4h'],
  ['Bieguny: 3P 4P 5P', 'Godz.P: 6h 9h 9h'],
  ['Bieguny: 3P 4P 5P', 'Godz.P: 9h 6h 6h'],
];

/**Data for Components**/

const gniazdaBlokadaStale_tablesData: CatalogDataVar1Type = [
  //__1
  {
    tableType: tablesTypes[0],
    headerTopData: headerTopData_1,
    headerBottomData: headerBottomData_1,
    rowsData: [
      [
        ['16', '3', '1', '26006', '26008', '26033'],
        ['4', '1', '26007', '26009', '26011'],
        ['5', '1', '26029', '26010', '26012'],
      ],
      [
        ['32', '3', '1', '26013', '26015', '26034'],
        ['4', '1', '26014', '26016', '26018'],
        ['5', '1', '26030', '26017', '26019'],
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
        ['16', '3', '1', '26020', '26000', '26035'],
        ['4', '1', '26021', '26022', '26001'],
        ['5', '1', '26031', '26023', '26002'],
      ],
      [
        ['32', '3', '1', '26024', '26003', '26036'],
        ['4', '1', '26025', '26026', '26004'],
        ['5', '1', '26032', '26027', '26005'],
      ],
    ],
  },
  //__3
  {
    tableType: tablesTypes[0],
    headerTopData: headerTopData_1,
    headerBottomData: headerBottomData_1,
    rowsData: [
      [
        ['16', '3', '1', '25114', '25114', '25148'],
        ['4', '1', '25115', '25117', '25119'],
        ['5', '1', '25144', '25118', '25120'],
      ],
      [
        ['32', '3', '1', '25140', '25123', '25149'],
        ['4', '1', '25121', '25124', '25126'],
        ['5', '1', '25145', '25125', '25127'],
      ],
    ],
  },
  //__4
  {
    tableType: tablesTypes[0],
    headerTopData: headerTopData_1,
    headerBottomData: headerBottomData_1,
    rowsData: [
      [
        ['16', '3', '1', '25128', '25108', '25150'],
        ['4', '1', '25129', '25130', '25109'],
        ['5', '1', '25146', '25131', '25110'],
      ],
      [
        ['32', '3', '1', '25132', '25111', '25151'],
        ['4', '1', '25133', '25134', '25112'],
        ['5', '1', '25147', '25141', '25113'],
      ],
    ],
  },
];

export { gniazdaBlokadaStale_tablesData };
