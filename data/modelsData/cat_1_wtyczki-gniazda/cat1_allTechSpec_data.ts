import { wtyczkiGniazdaPrzenosne_techData } from './subCat_1/subCat_1_przenosne_dataTechSpec';
import { wtyczkiGniazdaTablicowe_techData } from './subCat_2/subCat_2_tablicowe_dataTechSpec';
import { wtyczkiGniazdaScienne_techData } from './subCat_3/subCat_3_scienne_dataTechSpec';
import { wtyczkiGniazdaSchukoTablicowe_techData } from './subCat_4/subCat_4_tablicowe-jednofazowe_dataTechSpec';
import { wtyczkiGniazdaNiskieNapiecia_techData } from './subCat_6/subCat_6_niskie-napiecia_dataTechspec';
import { wtyczkiGniazdaKontenerowe_techData } from './subCat_7/subCat_7_kontenerowe_dataTechspec';

//___: Cat1AllTechDataType
export const cat1_allTechSpecData: Cat1AllTechDataType = [
  wtyczkiGniazdaPrzenosne_techData,
  wtyczkiGniazdaTablicowe_techData,
  wtyczkiGniazdaScienne_techData,
  wtyczkiGniazdaSchukoTablicowe_techData,
  wtyczkiGniazdaPrzenosne_techData, //fake
  wtyczkiGniazdaNiskieNapiecia_techData, //fake
  wtyczkiGniazdaScienne_techData, //fake
  wtyczkiGniazdaKontenerowe_techData,
];
