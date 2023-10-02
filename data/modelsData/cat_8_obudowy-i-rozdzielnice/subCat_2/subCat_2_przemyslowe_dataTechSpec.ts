import { corpoColors } from '@/data/basicData';

const iconColorBG = corpoColors.dark;
const iconColorFG = corpoColors.light;
const iconContainerSize = 50;
const textLabelStyle = 'text-light text-[0.75rem]';

// const iconsForIP44 = {
//   svgLabel: ['IP44', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
//   textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
//   iconColorBG: iconColorBG,
//   iconColorFG: iconColorFG,
//   iconSize: iconContainerSize,
// };
// const iconsForIP65 = {
//   svgLabel: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
//   textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
//   iconColorBG: iconColorBG,
//   iconColorFG: iconColorFG,
//   iconSize: iconContainerSize,
// };

const ip54svgLabel = ['IP54', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'];
const ip65svgLabel = ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'];

/*
TS
*/
/*
The TypeScript type of the data you provided is:

TypeScript
Ten kod został wygenerowany przez sztuczną inteligencję. Przejrzyj i używaj uważnie. Aby uzyskać więcej informacji, Odwiedź często zadawane pytania.


voltage : ['220V','400V','400V','220V','220V','400V','400V'],
tableHeader2: ['3P+T', '3P+T', '3P+T+N', '2P+TTL', '2P+T', '3P+T', '3P+T+N']
voltage : ['220V','400V','400V','220V','220V','400V','400V'],
tableHeader2: ['3P+T',  '3P+T+N', '2P+TTL', '3P+T', '3P+T+n', '3P+T+N']

voltage = ['220V','400V','400V','220V','220V','400V','400V']
voltage = ['400V','400V','220V','400V','400V','400V']



*/
export const rozdzielnicePrzemyslowe_techSpecData: TechTable8_2Type = [
    //__1__model: 'Model: 3960 / 6406',
    {
        tableType: 'tableType8_2a',
        columnsNumber: 8,
        tableHeader1: ['Model', '3 gniazda IP44'],
        ampers: ['16A', '32A'],
        voltage: ['220V', '400V', '400V', '220V', '220V', '400V', '400V'],
        tableHeader2: ['3P+T', '3P+T', '3P+T+N', '2P+TTL', '2P+T', '3P+T', '3P+T+N'],
        dataLines: [
            {
                model: '6401',
                labels16A: ['--', '--', '--', '3'],
                labels32A: ['--', '--', '--']
            },
            {
                model: '6402',
                labels16A: ['3', '--', '--', '--'],
                labels32A: ['--', '--', '--']
            },
            {
                model: '6403',
                labels16A: ['3', '--', '--', '--'],
                labels32A: ['--', '--', '--']
            },
            {
                model: '6404',
                labels16A: ['1', '--', '--', '2'],
                labels32A: ['--', '--', '--']
            },
            {
                model: '6405',
                labels16A: ['2', '--', '--', '1'],
                labels32A: ['--', '--', '--']
            },
            {
                model: '6406',
                labels16A: ['3', '1', '--', '--'],
                labels32A: ['--', '--', '--']
            },
            {
                model: '6407',
                labels16A: ['2', '--', '--', '--'],
                labels32A: ['--', '1', '--']
            },
            {
                model: '6408',
                labels16A: ['1', '--', '1', '1'],
                labels32A: ['--', '--', '--']
            },
            {
                model: '6409',
                labels16A: ['1', '--', '--', '1'],
                labels32A: ['--', '--', '1']
            },
            {
                model: '6410',
                labels16A: ['2', '--', '--', '--'],
                labels32A: ['--', '--', '1']
            }
        ],
        norma: [['Norma', 'EN 62208']],
        packageDetails: [
            ['Opakowanie podstawowe', '1'],
            ['Opakowanie zbiorcze', '12']
        ],
        iconHolderData: {
            svgLabel: [...ip54svgLabel],
            textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
            iconColorBG: iconColorBG,
            iconColorFG: iconColorFG,
            iconSize: iconContainerSize
        }
    },
    //__2__model: 'Model: 3961 / 6504',
    {
        tableType: 'tableType8_2a',
        columnsNumber: 8,
        tableHeader1: ['Model', '4 gniazda IP44'],
        ampers: ['16A', '32A'],
        voltage: ['220V', '400V', '400V', '220V', '220V', '400V', '400V'],
        tableHeader2: ['3P+T', '3P+T', '3P+T+N', '2P+TTL', '2P+T', '3P+T', '3P+T+N'],
        dataLines: [
            {
                model: '6501',
                labels16A: ['--', '--', '--', '4'],
                labels32A: ['--', '--', '--']
            },
            {
                model: '6502',
                labels16A: ['2', '--', '--', '2'],
                labels32A: ['--', '--', '--']
            },
            {
                model: '6503',
                labels16A: ['2', '1', '--', '1'],
                labels32A: ['--', '--', '--']
            },
            {
                model: '6504',
                labels16A: ['--', '1', '--', '2'],
                labels32A: ['--', '1', '--']
            },
            {
                model: '6505',
                labels16A: ['--', '2', '--', '2'],
                labels32A: ['--', '1', '--']
            },
            {
                model: '6506',
                labels16A: ['--', '--', '--', '2'],
                labels32A: ['--', '2', '--']
            },
            {
                model: '6507',
                labels16A: ['--', '--', '2', '2'],
                labels32A: ['--', '1', '--']
            },
            {
                model: '6508',
                labels16A: ['--', '--', '2', '--'],
                labels32A: ['--', '--', '2']
            },
            {
                model: '6509',
                labels16A: ['--', '--', '1', '2'],
                labels32A: ['--', '--', '1']
            },
            {
                model: '6510',
                labels16A: ['1', '1', '--', '2'],
                labels32A: ['--', '--', '--']
            },
            {
                model: '6511',
                labels16A: ['2', '--', '2', '--'],
                labels32A: ['--', '--', '1']
            },
            {
                model: '6512',
                labels16A: ['2', '--', '--', '--'],
                labels32A: ['--', '--', '2']
            }
        ],
        norma: [['Norma', 'EN 62208']],
        packageDetails: [
            ['Opakowanie podstawowe', '1'],
            ['Opakowanie zbiorcze', '4']
        ],

        iconHolderData: {
            svgLabel: [...ip54svgLabel],
            textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
            iconColorBG: iconColorBG,
            iconColorFG: iconColorFG,
            iconSize: iconContainerSize
        }
    },

    //__3__model: 'Model: 3962 / 6602',
    {
        tableType: 'tableType8_2a',
        columnsNumber: 8,
        tableHeader1: ['Model', '6 gniazd IP44'],
        ampers: ['16A', '32A'],
        voltage: ['220V', '400V', '400V', '220V', '220V', '400V', '400V'],
        tableHeader2: ['3P+T', '3P+T', '3P+T+N', '2P+TTL', '2P+T', '3P+T', '3P+T+N'],
        dataLines: [
            {
                model: '6601',
                labels16A: ['2', '--', '--', '4'],
                labels32A: ['--', '--', '--']
            },
            {
                model: '6602',
                labels16A: ['--', '2', '--', '2'],
                labels32A: ['--', '2', '--']
            },
            {
                model: '6603',
                labels16A: ['2', '2', '--', '2'],
                labels32A: ['--', '--', '--']
            },
            {
                model: '6604',
                labels16A: ['--', '--', '2', '2'],
                labels32A: ['--', '--', '2']
            },
            {
                model: '6603',
                labels16A: ['--', '2', '--', '2'],
                labels32A: ['--', '2', '--']
            },
            {
                model: '6606',
                labels16A: ['2', '--', '2', '--'],
                labels32A: ['--', '--', '2']
            }
        ],
        norma: [['Norma', 'EN 62208']],
        packageDetails: [
            ['Opakowanie podstawowe', '1'],
            ['Opakowanie zbiorcze', '3']
        ],

        iconHolderData: {
            svgLabel: [...ip54svgLabel],
            textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
            iconColorBG: iconColorBG,
            iconColorFG: iconColorFG,
            iconSize: iconContainerSize
        }
    },
    //__4__model: 'Model: 3957 / 3957.1',
    {
        tableType: 'tableType8_2a',
        columnsNumber: 7,
        tableHeader1: ['Model', '3 gniazda IP44'],
        ampers: ['16A', '32A', '63A'],
        voltage: ['400V', '400V', '220V', '400V', '400V', '400V'],
        tableHeader2: ['3P+T', '3P+T+N', '2P+TTL', '3P+T', '3P+T+n', '3P+T+N'],
        dataLines: [
            {
                model: '3957.1',
                labels16A: ['1', '--', '2'],
                labels32A: ['--', '--'],
                labels63A: ['--']
            },
            {
                model: '3957.2',
                labels16A: ['--', '--', '2'],
                labels32A: ['1', '--'],
                labels63A: ['--']
            },
            {
                model: '3957.3',
                labels16A: ['--', '--', '2'],
                labels32A: ['1', '--'],
                labels63A: ['--']
            },
            {
                model: '3957.4',
                labels16A: ['--', '--', '4'],
                labels32A: ['1', '--'],
                labels63A: ['--']
            },
            {
                model: '3957.5',
                labels16A: ['--', '--', '--'],
                labels32A: ['--', '--'],
                labels63A: ['1']
            },
            {
                model: '3957.7',
                labels16A: ['--', '1', '2'],
                labels32A: ['--', '--'],
                labels63A: ['--']
            },
            {
                model: '3957.8',
                labels16A: ['--', '--', '2'],
                labels32A: ['--', '1'],
                labels63A: ['--']
            },
            {
                model: '3957.9',
                labels16A: ['2', '--', '--'],
                labels32A: ['--', '--'],
                labels63A: ['--']
            }
        ],
        norma: [['Norma', 'EN 62208']],
        packageDetails: [
            ['Opakowanie podstawowe', '1'],
            ['Opakowanie zbiorcze', '4']
        ],

        iconHolderData: {
            svgLabel: [...ip54svgLabel],
            textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
            iconColorBG: iconColorBG,
            iconColorFG: iconColorFG,
            iconSize: iconContainerSize
        }
    },
    //__5__'Model: 3958 / 3958.1',
    {
        tableType: 'tableType8_2a',
        columnsNumber: 7,
        tableHeader1: ['Model', '4 gniazda IP44'],
        ampers: ['16A', '32A', '63A'],
        voltage: ['400V', '400V', '220V', '400V', '400V', '400V'],
        tableHeader2: ['3P+T', '3P+T+N', '2P+TTL', '3P+T', '3P+T+n', '3P+T+N'],
        dataLines: [
            {
                model: '3958.1',
                labels16A: ['1', '--', '2'],
                labels32A: ['1', '--'],
                labels63A: ['--']
            },
            {
                model: '3958.2',
                labels16A: ['2', '--', '2'],
                labels32A: ['--', '--'],
                labels63A: ['--']
            },
            {
                model: '3958.3',
                labels16A: ['--', '--', '2'],
                labels32A: ['2', '--'],
                labels63A: ['--']
            },
            {
                model: '3958.4',
                labels16A: ['--', '1', '2'],
                labels32A: ['--', '1'],
                labels63A: ['--']
            },
            {
                model: '3958.5',
                labels16A: ['--', '2', '2'],
                labels32A: ['--', '--'],
                labels63A: ['--']
            },
            {
                model: '3958.6',
                labels16A: ['--', '--', '2'],
                labels32A: ['--', '2'],
                labels63A: ['--']
            }
        ],
        norma: [['Norma', 'EN 62208']],
        packageDetails: [
            ['Opakowanie podstawowe', '1'],
            ['Opakowanie zbiorcze', '4']
        ],

        iconHolderData: {
            svgLabel: [...ip54svgLabel],
            textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
            iconColorBG: iconColorBG,
            iconColorFG: iconColorFG,
            iconSize: iconContainerSize
        }
    },
    //__6__'Model: 3959'__newly added___check the data
    {
        tableType: 'tableType8_2a',
        columnsNumber: 7,
        tableHeader1: ['Model', '6 niazd IP44'],
        ampers: ['16A', '32A', '63A'],
        voltage: ['400V', '400V', '220V', '400V', '400V', '400V'],
        tableHeader2: ['3P+T', '3P+T+N', '2P+TTL', '3P+T', '3P+T+n', '3P+T+N'],
        dataLines: [
            {
                model: '3958.1',
                labels16A: ['1', '--', '2'],
                labels32A: ['1', '--'],
                labels63A: ['--']
            },
            {
                model: '3958.2',
                labels16A: ['2', '--', '2'],
                labels32A: ['--', '--'],
                labels63A: ['--']
            },
            {
                model: '3958.3',
                labels16A: ['--', '--', '2'],
                labels32A: ['2', '--'],
                labels63A: ['--']
            },
            {
                model: '3958.4',
                labels16A: ['--', '1', '2'],
                labels32A: ['--', '1'],
                labels63A: ['--']
            },
            {
                model: '3958.5',
                labels16A: ['--', '2', '2'],
                labels32A: ['--', '--'],
                labels63A: ['--']
            },
            {
                model: '3958.6',
                labels16A: ['--', '--', '2'],
                labels32A: ['--', '2'],
                labels63A: ['--']
            }
        ],
        norma: [['Norma', 'EN 62208']],
        packageDetails: [
            ['Opakowanie podstawowe', '1'],
            ['Opakowanie zbiorcze', '4']
        ],

        iconHolderData: {
            svgLabel: [...ip54svgLabel],
            textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
            iconColorBG: iconColorBG,
            iconColorFG: iconColorFG,
            iconSize: iconContainerSize
        }
    },
    //__7__Model: 3967 / 6201
    {
        tableType: 'tableType8_2a',
        columnsNumber: 8,
        tableHeader1: ['Model', '2 gniazda z blokadą IP67'],
        ampers: ['16A', '32A'],
        voltage: ['400V', '400V', '220V', '400V', '400V', '400V'],
        tableHeader2: ['3P+T', '3P+T+N', '2P+TTL', '3P+T', '3P+T+n', '3P+T+N'],
        dataLines: [
            {
                model: '6201',
                labels16A: ['2', '--', '--', '--'],
                labels32A: ['--', '--', '--']
            },
            {
                model: '6202',
                labels16A: ['--', '2', '--', '--'],
                labels32A: ['--', '--', '--']
            },
            {
                model: '6203',
                labels16A: ['1', '--', '1', '--'],
                labels32A: ['--', '--', '--']
            }
        ],
        norma: [['Norma', 'EN 62208']],
        packageDetails: [
            ['Opakowanie podstawowe', '1'],
            ['Opakowanie zbiorcze', '3']
        ],

        iconHolderData: {
            svgLabel: [...ip65svgLabel],
            textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
            iconColorBG: iconColorBG,
            iconColorFG: iconColorFG,
            iconSize: iconContainerSize
        }
    },
    //__7__Model: 3968 / 6301
    {
        tableType: 'tableType8_2a',
        columnsNumber: 8,
        tableHeader1: ['Model', '3 gniazda z blokadą IP67'],
        ampers: ['16A', '32A'],
        voltage: ['220V', '400V', '400V', '220V', '220V', '400V', '400V'],
        tableHeader2: ['3P+T', '3P+T', '3P+T+N', '2P+TTL', '2P+T', '3P+T', '3P+T+N'],
        dataLines: [
            {
                model: '6301',
                labels16A: ['3', '--', '--', '--'],
                labels32A: ['--', '--', '--']
            },
            {
                model: '6302',
                labels16A: ['2', '1', '--', '--'],
                labels32A: ['--', '--', '--']
            },
            {
                model: '6303',
                labels16A: ['2', '--', '1', '--'],
                labels32A: ['--', '--', '--']
            },
            {
                model: '6304',
                labels16A: ['1', '1', '1', '--'],
                labels32A: ['--', '--', '--']
            },
            {
                model: '6305',
                labels16A: ['1', '--', '--', '--'],
                labels32A: ['--', '1', '1']
            },
            {
                model: '6306',
                labels16A: ['1', '1', '--', '--'],
                labels32A: ['--', '--', '1']
            }
        ],
        norma: [['Norma', 'EN 62208']],
        packageDetails: [
            ['Opakowanie podstawowe', '1'],
            ['Opakowanie zbiorcze', '3']
        ],

        iconHolderData: {
            svgLabel: [...ip65svgLabel],
            textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
            iconColorBG: iconColorBG,
            iconColorFG: iconColorFG,
            iconSize: iconContainerSize
        }
    },
    //__8__Model: 3970 / 6901
    {
        tableType: 'tableType8_2a',
        columnsNumber: 8,
        tableHeader1: ['Model', '4 gniazda z blokadą IP67'],
        ampers: ['16A', '32A'],
        voltage: ['220V', '400V', '400V', '220V', '220V', '400V', '400V'],
        tableHeader2: ['3P+T', '3P+T', '3P+T+N', '2P+TTL', '2P+T', '3P+T', '3P+T+N'],
        dataLines: [
            {
                model: '6901',
                labels16A: ['2', '2', '--', '--'],
                labels32A: ['--', '--', '--']
            },
            {
                model: '6902',
                labels16A: ['2', '1', '--', '--'],
                labels32A: ['--', '1', '--']
            },
            {
                model: '6903',
                labels16A: ['3', '1', '--', '--'],
                labels32A: ['--', '--', '--']
            },
            {
                model: '6904',
                labels16A: ['3', '--', '--', '--'],
                labels32A: ['--', '1', '--']
            },
            {
                model: '6905',
                labels16A: ['4', '--', '--', '--'],
                labels32A: ['--', '--', '--']
            }
        ],
        norma: [['Norma', 'EN 62208']],
        packageDetails: [
            ['Opakowanie podstawowe', '1'],
            ['Opakowanie zbiorcze', '1']
        ],

        iconHolderData: {
            svgLabel: [...ip65svgLabel],
            textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
            iconColorBG: iconColorBG,
            iconColorFG: iconColorFG,
            iconSize: iconContainerSize
        }
    },
    //__9__Model: 3968 + 3964 / 6051
    {
        tableType: 'tableType8_2a',
        columnsNumber: 8,
        tableHeader1: ['Model', '3 gniazda z blokadą IP67'],
        ampers: ['16A', '32A'],
        voltage: ['220V', '400V', '400V', '220V', '220V', '400V', '400V'],
        tableHeader2: ['3P+T', '3P+T', '3P+T+N', '2P+TTL', '2P+T', '3P+T', '3P+T+N'],
        dataLines: [
            {
                model: '6051',
                labels16A: ['1', '1', '--', '--'],
                labels32A: ['--', '1', '--']
            },
            {
                model: '6052',
                labels16A: ['--', '1', '1', '--'],
                labels32A: ['--', '--', '1']
            }
        ],
        norma: [['Norma', 'EN 62208']],
        packageDetails: [
            ['Opakowanie podstawowe', '1'],
            ['Opakowanie zbiorcze', '1']
        ],

        iconHolderData: {
            svgLabel: [...ip65svgLabel],
            textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
            iconColorBG: iconColorBG,
            iconColorFG: iconColorFG,
            iconSize: iconContainerSize
        }
    },
    //__10__Model: 3968 + 3964 + 3963 / 6054
    {
        tableType: 'tableType8_2a',
        columnsNumber: 8,
        tableHeader1: ['Model', '3 gniazda z blokadą IP67'],
        ampers: ['16A', '32A'],
        voltage: ['220V', '400V', '400V', '220V', '220V', '400V', '400V'],
        tableHeader2: ['3P+T', '3P+T', '3P+T+N', '2P+TTL', '2P+T', '3P+T', '3P+T+N'],
        dataLines: [
            {
                model: '6053',
                labels16A: ['3', '--', '--', '2'],
                labels32A: ['--', '--', '--']
            },
            {
                model: '6054',
                labels16A: ['1', '1', '--', '2'],
                labels32A: ['--', '--', '1']
            }
        ],
        norma: [['Norma', 'EN 62208']],
        packageDetails: [
            ['Opakowanie podstawowe', '1'],
            ['Opakowanie zbiorcze', '1']
        ],
        iconHolderData: {
            svgLabel: [...ip65svgLabel],
            textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
            iconColorBG: iconColorBG,
            iconColorFG: iconColorFG,
            iconSize: iconContainerSize
        }
    },
    //__11__Model: 3980
    {
        tableType: 'tableType8_2b',
        columnsNumber: 1,
        header: 'Wymiary',
        packageDetails: [['Opakowanie podstawowe', '1']],
        norma: [['Norma', 'EN 61439-1 / EN 61439-3 / EN 61439-4']],
        iconHolderData: {
            svgLabel: ['IP40', 'IK09', 'FREE', 'IZO'],
            textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
            iconColorBG: iconColorBG,
            iconColorFG: iconColorFG,
            iconSize: iconContainerSize
        },
        table1Header: ['Możliwe konfiguracje'],
        table1Data: [
            ['Opcje', 'Model', 'N° de'],
            ['1', '3962', '2'],
            ['2', '3962 + 3964', '2+2'],
            ['3', '3962 + 3968', '1+1'],
            ['4', '3962 + 3970', '1+1'],
            ['5', '3968', '2'],
            ['6', '3970 + 3964', '2+2']
        ],
        table2Header: 'Wymiary',
        table2Data: [
            { label: 'Wysokość', value: '953' },
            { label: 'Szerokość', value: '890' },
            { label: 'Głębokość', value: '419' },
            { label: 'Waga(kg)', value: '18' }
        ]
    },
    //__12__Model: 3980P
    {
        tableType: 'tableType8_2b',
        columnsNumber: 1,
        header: 'Wymiary',
        packageDetails: [['Opakowanie podstawowe', '1']],
        norma: [['Norma', 'EN 61439-1 / EN 61439-3 / EN 61439-4']],
        iconHolderData: {
            svgLabel: ['IP40', 'IK09', 'FREE', 'IZO'],
            textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
            iconColorBG: iconColorBG,
            iconColorFG: iconColorFG,
            iconSize: iconContainerSize
        },
        table1Header: ['Możliwe konfiguracje'],
        table1Data: [
            ['Opcje', 'Model', 'N° de'],
            ['1', '3962', '1'],
            ['2', '3970', '1'],
            ['3', '3968', '1'],
            ['4', '3961', '2'],
            ['5', '3961 + 3967', '1+1'],
            ['6', '3967', '2']
        ],
        table2Header: 'Wymiary',
        table2Data: [
            { label: 'Wysokość', value: '724' },
            { label: 'Szerokość', value: '643' },
            { label: 'Głębokość', value: '419' },
            { label: 'Waga(kg)', value: '11' }
        ]
    }
];

/*
data for specTable
*/
const headerLabelStyle = 'text-[0.625rem]  xxl:text-[0.75rem] text-light';
const headerCellStyle = 'bg-greyShade1 opacity-[0.8] py-[0.3rem]';
const headerSocketCellStyle = 'bg-light opacity-[0.8] py-[0.3rem]';
const bodyLabelStyle = 'text-[0.625rem]  xxl:text-[0.75rem] text-dark text-center';
const bodyCellStyle = 'py-[0.3rem] bg-greyTint2';
const grid1colsStyle = 'grid grid-cols-[1fr] gap-[0.125rem]';
const grid2colsStyle = 'grid grid-cols-[1fr_1fr] gap-[0.125rem]';
const grid3colsStyle = 'grid grid-cols-[1fr_1fr_1fr] gap-[0.125rem]';
const grid4colsStyle = 'grid grid-cols-[1fr_1fr_1fr_1fr] gap-[0.125rem]';
const grid4fr3frStyle = 'grid grid-cols-[4fr_3fr] gap-[0.25rem]';
const grid3fr2fr1frStyle = 'grid grid-cols-[3fr_2fr_1fr] gap-[0.25rem]';
/*
used in: <MainTable> to distinguishe "coditionally" which table should be render
*/
const gridTemplate7Columns = 'grid grid-template-columns: repeat(7, 1fr) gap-[0.125rem] w-full';
const gridTemplate8Columns = 'grid grid-template-columns: repeat(8, 1fr) gap-[0.125rem] w-full';
export {
    headerLabelStyle,
    headerSocketCellStyle,
    headerCellStyle,
    bodyLabelStyle,
    bodyCellStyle,
    grid1colsStyle,
    grid2colsStyle,
    grid3colsStyle,
    grid4colsStyle,
    grid4fr3frStyle,
    grid3fr2fr1frStyle,
    gridTemplate7Columns,
    gridTemplate8Columns
};
