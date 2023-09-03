const tableHeader = {
  line1: ['Wymiary', 'Ampery', 'Bieguny', 'Waga'],
  line2: ['A', 'B'],
};

export const adapteryPrzemysloweWielokrotne_techData: {
  tableType: 'techTable3_2';
  header: { line1: string[]; line2: string[] };
  tableBody: string[][];
}[] = [
  //___1__s.120
  {
    tableType: 'techTable3_2',
    header: tableHeader,
    tableBody: [
      ['230', '220', '16', '2P + T', '530'],
      ['230', '220', '16', '3P + T', '563'],
      ['270', '265', '16', '3P + N + T', '585'],
      ['285', '275', '32', '2P + T', '605'],
      ['285', '275', '32', '3P + T', '620'],
      ['285', '280', '32', '3P + N + T', '605'],
    ],
  },
  //___2__
  {
    tableType: 'techTable3_2',
    header: tableHeader,
    tableBody: [
      ['235', '230', '16', '2P + T', '987'],
      ['235', '230', '16', '3P + T', '997'],
      ['270', '265', '16', '3P + N + T', '1010'],
      ['285', '280', '32', '2P + T', '1018'],
      ['285', '280', '32', '3P + T', '1035'],
      ['285', '285', '32', '3P + N + T', '1075'],
    ],
  },
  //___3__
  {
    tableType: 'techTable3_2',
    header: tableHeader,
    tableBody: [
      ['160', '168', '16', '2P + T', '390'],
      ['160', '168', '16', '3P + T', '450'],
    ],
  },
  //___4__s.122
  {
    tableType: 'techTable3_2',
    header: tableHeader,
    tableBody: [
      ['170', '162', '16', '2P + T', '411'],
      ['170', '162', '16', '3P + T', '470'],
    ],
  },
  //___5__
  {
    tableType: 'techTable3_2',
    header: tableHeader,
    tableBody: [
      ['160', '168', '16', '2P + T', '390'],
      ['160', '168', '16', '3P + T', '450'],
    ],
  },
  //___6__
  {
    tableType: 'techTable3_2',
    header: tableHeader,
    tableBody: [
      ['170', '162', '16', '2P + T', '411'],
      ['170', '162', '16', '3P + T', '470'],
    ],
  },
];
