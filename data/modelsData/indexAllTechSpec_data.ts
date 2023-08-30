import { cat1_allTechSpecData } from './cat_1_wtyczki-gniazda/cat1_allTechSpec_data';
import { cat8_allTechSpecData } from './cat_8_obudowy-i-rozdzielnice/cat8_allTechSpec_data';
// import { cat9_allTechSpecData } from './cat_9_rozdzielnice-modulowe/cat9_allTechSpec_data';
// import { cat10_allTechSpecData } from './cat_10_puszki-instalacyjne/cat10_allTechSpec_data';

//___: allTechDataType
export const allTechSpecData = [
  cat1_allTechSpecData,
  cat8_allTechSpecData,
  // cat9_allTechSpecData,
  // cat10_allTechSpecData,
];

// allTechSpecData: (WtyczkiGniazdaType1TechDataType[] | {
//     tableType: string;
//     header: string[][];
//     tablesData: {
//         label: string;
//         value: string;
//     }[][];
//     norma: string[];
//     description: DataAsTuple[];
//     iconHolderData: {
//         ...;
//     };
// }[][])[]

/*
({
    tableType: string;
    ampers: string[];
    poles: string[];
    bodyData: string[][];
    connectionType: string[];
    mm: string[];
    weight: string[];
}[][] | {
    tableType: string;
    header: string[][];
    tablesData: {
        label: string;
        value: string;
    }[][];
    norma: string[];
    description: DataAsTuple[];
    iconHolderData: {
        ...;
    };
}[][])[]
*/
