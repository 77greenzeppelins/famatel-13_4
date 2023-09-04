import { cat1_allTechSpecData } from './cat_1_wtyczki-gniazda/cat1_allTechSpec_data';
import { cat2_allTechSpecData } from './cat_2_gniazda-z-blokada/cat2_allTechSpec_data';
import { cat3_allTechSpecData } from './cat_3_adaptery-przemyslowe/cat3_allTechSpec_data';
import { cat8_allTechSpecData } from './cat_8_obudowy-i-rozdzielnice/cat8_allTechSpec_data';
import { cat9_allTechSpecData } from './cat_9_rozdzielnice-modulowe/cat9_allTechSpec_data';
import { cat10_allTechSpecData } from './cat_10_puszki-instalacyjne/cat10_allTechSpec_data';

const tempArray: TechTableEmptyType = [{ tableType: 'noTechDate' }];
const catX_allTechSpecData: TechTableEmptyType[] = [tempArray];
//___: allTechDataType
export const allTechSpecData: AllTechSpecData = [
  cat1_allTechSpecData,
  cat2_allTechSpecData,
  cat3_allTechSpecData,
  catX_allTechSpecData,
  catX_allTechSpecData,
  catX_allTechSpecData,
  catX_allTechSpecData,
  cat8_allTechSpecData,
  cat9_allTechSpecData,
  cat10_allTechSpecData,
];
