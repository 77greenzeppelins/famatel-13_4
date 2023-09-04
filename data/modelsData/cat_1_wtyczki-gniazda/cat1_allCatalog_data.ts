import { wtyczkiGniazdaPrzenosne_catalogData } from './subCat_1/subCat_1_przenosne_dataCatalog';
import { wtyczkiGniazdaTablicowe_catalogData } from './subCat_2/subCat_2_tablicowe_dataCatalog';
import { wtyczkiGniazdaScienne_catalogData } from './subCat_3/subCat_3_scienne_dataCatalog';
import { wtyczkiGniazdaSchukoTablicowe_catalogData } from './subCat_4/subCat_4_tablicowe-jednofazowe_dataCatalog';
import { wtyczkiGniazdaSchuko_catalogData } from './subCat_5/subCat_5_jednofazowe_dataCatalog';
import { wtyczkiGniazdaNiskieNapiecia_catalogData } from './subCat_6/subCat_6_niskie-napiecia_dataCatalog';
import { wtyczkiGniazdaKontenerowe_catalogData } from './subCat_7/subCat_7_kontenerowe_dataCatalog';
import { wtyczkiGniazdaEstradowe_catalogData } from './subCat_8/subCat_8_estradowe_dataCatalog';

export const cat1_allCatalogData: CategoryCatalogDataType = [
  wtyczkiGniazdaPrzenosne_catalogData,
  wtyczkiGniazdaTablicowe_catalogData,
  wtyczkiGniazdaScienne_catalogData,
  wtyczkiGniazdaSchukoTablicowe_catalogData,
  wtyczkiGniazdaSchuko_catalogData,
  wtyczkiGniazdaNiskieNapiecia_catalogData,
  wtyczkiGniazdaKontenerowe_catalogData,
  wtyczkiGniazdaEstradowe_catalogData, //___tableType: 'noCatalogData',
  wtyczkiGniazdaKontenerowe_catalogData, //___tableType: 'noCatalogData',
];
