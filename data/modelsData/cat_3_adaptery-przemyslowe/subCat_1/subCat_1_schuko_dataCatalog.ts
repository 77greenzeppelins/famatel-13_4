/*TS*/

/*
Data for component
*/

const adapteryPrzemysloweSchuko_tech_data: {
  header: string[];
  sizes: string[];
  l1: string[];
  l2: string[];
  l3: string[];
}[] = [
  //___1__
  {
    header: ['16A / 250 ~ 2P + T'],
    sizes: ['A', 'B'],
    l1: ['Wymiary', '226', '237'],
    l2: ['Wejścia', 'Wtyczka CEE 16A / 250V ~ 2P+T 6h'],
    l3: ['Waga', '530'],
  },
  //___2__
  {
    header: ['16A / 250 ~ 2P + T'],
    sizes: ['A', 'B'],
    l1: ['Wymiary', '160', '168'],
    l2: ['Wejścia', 'Wtyczka CEE 16A / 250V ~ 2P+T 6h'],
    l3: ['Waga', '530'],
  },
];

export const adapteryPrzemysloweSchuko_tablesData: CatalogDataVar3_1 = [
  {
    tableType: 'catalogTableCat3_1',
    // line1: { label: 'Model: 16010 / Standard', value: 'EU' },
    // line2: { label: 'Model: 16010F / Standard', value: 'PL' },
    line1: { label: 'Model: 16010', value: 'Standard EU' },
    line2: { label: 'Model: 16010F', value: 'Standard PL' },
    line3: [
      'Wyjście',
      '2 gniazda CEE 2P+T 16A/250V 6h +',
      '1 gniazdo schuko 16A/250V',
    ],
  },
  {
    tableType: 'catalogTableCat3_1',
    line1: { label: 'Model: 15002', value: 'Standard EU' },
    line2: { label: 'Model: 15002F', value: 'Standard PL' },
    line3: [
      'Wyjście',
      '1 gniazdo CEE 2P+T 16A/250V 6h +',
      '1 gniazdo schuko 16A/250V',
    ],
  },
];
