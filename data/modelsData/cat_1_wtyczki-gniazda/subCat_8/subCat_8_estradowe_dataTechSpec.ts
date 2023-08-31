/*
Data for component
*/

export const wtyczkiGniazdaEstradowe_techData: WtyczkiGniazdaType5TechDataType =
  [
    //___1 / IP54
    {
      tableType: 'techTableWtyczkiGniazdaVer5',
      header: [' ', '16A / 220/240V'],
      tableBody: [
        ['Bieguny', '3'],
        ['A', '150'],
        ['B', '55'],
        ['C', '110'],
        ['Ø K', '6 - 15'],
        ['Rodzaj połączenia', 'Zaciski śrubowe'],
        ['Przewód giętki (mm²)', '1 - 2.5'],
        ['Waga', '123'],
      ],
    },
    //___2 / IP67
    {
      tableType: 'techTableWtyczkiGniazdaVer5',
      header: [' ', '16A / 220/240V'],
      tableBody: [
        ['Bieguny', '3'],
        ['A', '157'],
        ['B', '85'],
        ['C', '110'],
        ['Ø K', '6 - 15'],
        ['Rodzaj połączenia', 'Zaciski śrubowe'],
        ['Przewód giętki (mm²)', '1 - 2.5'],
        ['Waga', '215'],
      ],
    },
    //___3 / IP67
    {
      tableType: 'techTableWtyczkiGniazdaVer5',
      header: [' ', '16A / 220/240V'],
      tableBody: [
        ['Bieguny', '3'],
        ['A', '55'],
        ['B', '55'],
        ['C', '44'],
        ['D', '44'],
        ['f', '48'],
        ['g', '15'],
        ['Rodzaj połączenia', 'Zaciski śrubowe'],
        ['Przewód giętki (mm²)', '1 - 2.5'],
        ['Waga', '138'],
      ],
    },
    //___4 ___empty
    {
      tableType: 'noTechTable',
    },
    //___5 ___empty
    {
      tableType: 'noTechTable',
    },
    //___6___
    {
      tableType: 'techTableWtyczkiGniazdaVer5',
      catalogLike: {
        line1: [' ', '230V 50/60Hz'],
        line2: ['Ampery', 'Gniazdo', 'Bieguny: 3P Godzina P: 6h'],
        line3: ['16', '3P (2x)', '17220'],
      },
      underlinedRow: [
        ['Przepust kablowy: ', 'M20'],
        ['Opakowanie', '8'],
      ],
    },
    //___7___
    {
      tableType: 'techTableWtyczkiGniazdaVer5',
      catalogLike: {
        line1: [' ', '230V 50/60Hz'],
        line2: ['Ampery', 'Wtyczki', 'Gniazda', 'Bieguny: 3P Godzina P: 6h'],
        line3: ['16', '3P (1x)', '3P (1x)', '17120'],
      },
      underlinedRow: [
        ['Przepust kablowy: ', 'M20'],
        ['Opakowanie', '8'],
      ],
    },
    //___8___
    {
      tableType: 'techTableWtyczkiGniazdaVer5',
      catalogLike: {
        line1: [' ', '230V 50/60Hz'],
        line2: ['Ampery', 'Wtyczki', 'Gniazda', 'Bieguny: 3P Godzina P: 6h'],
        line3: ['16', '3P (1x)', '3P (2x)', '17122'],
      },
      underlinedRow: [
        ['Przepust kablowy: ', 'M20'],
        ['Opakowanie', '8'],
      ],
    },
    //___9___
    {
      tableType: 'techTableWtyczkiGniazdaVer5',
      catalogLike: {
        line1: [' ', '230V 50/60Hz'],
        line2: ['Ampery', 'Wtyczki', 'Gniazda', 'Bieguny: 3P Godzina P: 6h'],
        line3: ['16', '3P (1x)', '3P (1x)', '17023'],
      },
      underlinedRow: [
        ['Przepust kablowy: ', 'M20'],
        ['Kabel', '1,5 m H07RN-F'],
        ['Opakowanie', '4'],
      ],
    },
    //___10___
    {
      tableType: 'techTableWtyczkiGniazdaVer5',
      catalogLike: {
        line1: [' ', '230V', '50/60Hz'],
        line2: ['Ampery', 'Gniazdo', 'Bieguny: 3P', 'Godzina P: 6h'],
        line3: ['16', '3P (2x)', '17020'],
      },
      underlinedRow: [
        ['Przepust kablowy: ', 'M20'],
        ['Opakowanie', '8'],
      ],
    },
    //__11__
    {
      tableType: 'techTableWtyczkiGniazdaVer5',
      header2a: ['', 'Wymiary'],
      header2b: ['Model', 'A', 'B', 'C'],
      tableBody2: [
        ['39103', '400', '350', '340'],
        ['39104', '560', '350', '340*'],
        ['39105', '600', '400', '545*'],
        ['39106', '600', '400', '670*'],
      ],
      underlinedRow: [
        ['Stopień ochrony: ', 'IP54'],
        ['Odporność na uderzenie: ', 'IK10'],
      ],
      description:
        '* Możliwość montażu urządzeń na panelu przednim i tylnym. Śruby montażowe do panelu przedniego i tylnego wkręcane w metalowe gwinty co umożliwia wielokrotne odkręcanie',
    },

    //___12_____data for stojak
    {
      tableType: 'techTableWtyczkiGniazdaVer5',
      underlinedRow: [
        ['Model stojaka: 1830', 'Model skrzyni: 39103 / 39104'],
        ['Model stojaka: 1832', 'Model skrzyni: 39105 / 39106'],
      ],
    },
    //___13___data for wózek
    {
      tableType: 'techTableWtyczkiGniazdaVer5',
      underlinedRow: [
        ['Koła: ', '4 szt.'],
        ['Koła z hamulcem ', '2 szt.'],
      ],
    },
  ];

//__________________________

// const wtyczkiGniazdaEstradowe_l1_feat1_data = [
//   ['Napięcie znamionowe: ', '220 - 240 V'],
//   ['Prąd znamionowy: ', '40 A'],
//   ['Rezystancja izolacji', '>10MΩ@500Vdc'],
//   ['Wytrzymałość elektryczna: ', '2,5 kV'],
//   ['Temperatura robocza: ', '-25 °C/ 40 °C'],
//   ['Stopień ochrony: ', 'IP55'],
//   ['Odporność na uderzenie: ', 'IK06'],
//   ['Materiał Obudowy: ', 'PA6/ABS'],
//   ['Styki: ', 'Mosiądz'],
//   ['Opakowanie: ', '10 szt.'],
// ];
// const wtyczkiGniazdaEstradowe_l1_feat2_data = [
//   ['Bieguny: ', '2P+T(2P+E)'],
//   ['Stopień ochrony: ', 'IP54'],
//   ['Odporność na uderzenie: ', 'IK07'],
//   ['Materiał Obudowy: ', 'PA6/ABS'],
//   ['Styki: ', 'Nickel-plated'],
//   ['Opakowanie: ', '10 szt.'],
//   ['Norma: ', 'EN 60309-1 / EN 60309-2'],
// ];

// //__________________________________________________________data for rozgałęźniki....
// const wtyczkiGniazdaEstradowe_l3_prodCat_data: {
//   line1: string[];
//   line2: string[];
//   line3: string[];
// }[] = [
//   {
//     line1: [' ', '230V', '50/60Hz'],
//     line2: ['Ampery', 'Gniazdo', 'Bieguny: 3P', 'Godzina P: 6h'],
//     line3: ['16', '3P (2x)', '17220'],
//   },
//   {
//     line1: [' ', '230V', '50/60Hz'],
//     line2: ['Ampery', 'Wtyczki', 'Gniazda', 'Bieguny: 3P', 'Godzina P: 6h'],
//     line3: ['16', '3P (1x)', '3P (1x)', '17120'],
//   },
//   {
//     line1: [' ', '230V', '50/60Hz'],
//     line2: ['Ampery', 'Wtyczki', 'Gniazda', 'Bieguny: 3P', 'Godzina P: 6h'],
//     line3: ['16', '3P (1x)', '3P (2x)', '17122'],
//   },
//   {
//     line1: [' ', '230V', '50/60Hz'],
//     line2: ['Ampery', 'Wtyczki', 'Gniazda', 'Bieguny: 3P', 'Godzina P: 6h'],
//     line3: ['16', '3P (1x)', '3P (1x)', '17023'],

//   },
//   {
//     line1: [' ', '230V', '50/60Hz'],
//     line2: ['Ampery', 'Gniazdo', 'Bieguny: 3P', 'Godzina P: 6h'],
//     line3: ['16', '3P (2x)', '17020'],
//   },
// ];

// const wtyczkiGniazdaEstradowe_l3_feat1_data: string[][][] = [
//   [
//     ['Przepust kablowy: ', 'M20'],
//     ['Opakowanie', '8'],
//   ],
//   [
//     ['Przepust kablowy: ', 'M20'],
//     ['Opakowanie', '8'],
//   ],
//   [
//     ['Przepust kablowy: ', 'M20'],
//     ['Opakowanie', '8'],
//   ],
//   [
//     ['Przepust kablowy: ', 'M20'],
//     ['Kabel', '1,5 m H07RN-F'],
//     ['Opakowanie', '4'],
//   ],
//   [
//     ['Przepust kablowy: ', 'M20'],
//     ['Opakowanie', '8'],
//   ],
// ];

// //_______________________________________________________________data for skrzynia
// const wtyczkiGniazdaEstradowe_l4_tab1_data: {
//   line1: string[];
//   line2: string[];
//   tableBody: string[][];
// } = {
//   line1: ['Wymiary'],
//   line2: ['Model', 'A', 'B', 'C'],
//   tableBody: [
//     ['39103', '400', '350', '340'],
//     ['39104', '560', '350', '340*'],
//     ['39105', '600', '400', '545*'],
//     ['39106', '600', '400', '670*'],
//   ],
// };
// const wtyczkiGniazdaEstradowe_l4_feat_data: string[][] = [
//   ['Stopień ochrony: ', 'IP54'],
//   ['Odporność na uderzenie: ', 'IK10'],
// ];

// //_______________________________________________________________data for stojak
// const wtyczkiGniazdaEstradowe_l5_feat_data: string[][] = [
//   ['Model stojaka: 1830', 'Model skrzyni: 39103 / 39104'],
//   ['Model stojaka: 1832', 'Model skrzyni: 39105 / 39106'],
// ];

// //_______________________________________________________________data for wózek
// const wtyczkiGniazdaEstradowe_l6_feat_data: string[][] = [
//   ['Koła: ', '4 szt.'],
//   ['Koła z hamulcem ', '2 szt.'],
// ];
//
