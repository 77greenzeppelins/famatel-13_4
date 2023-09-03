// import { gniazdaBlokadaTablicowe_techData } from './subCat_1/subCat_1_tablicowe_dataTechSpec';
// import { gniazdaBlokadaStale_techData } from './subCat_2/subCat_2_stale_dataTechSpec';
// import { gniazdaBlokadaKomponenty_techData } from './subCat_3/subCat_3_z-komponentami_dataTechSpec';

import { adapteryPrzemysloweSchuko_techData } from './subCat_1/subCat_1_schuko_dataTechSpec';
import { adapteryPrzemysloweWielokrotne_techData } from './subCat_2/subCat_2_wielokrotne_dataTechSpec';
import { adapteryPrzemysloweWielokrotneZPrzewodem_techData } from './subCat_3/subCat_3_z-przewodem_dataTechSpec';

//___: Cat2AllTechDataType
export const cat3_allTechSpecData: Cat1AllTechDataType = [
  adapteryPrzemysloweSchuko_techData,
  adapteryPrzemysloweWielokrotne_techData,
  adapteryPrzemysloweWielokrotneZPrzewodem_techData,
];
