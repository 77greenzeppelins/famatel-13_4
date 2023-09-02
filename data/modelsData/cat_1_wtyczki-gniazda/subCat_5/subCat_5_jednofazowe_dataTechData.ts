import { cat1_subCat5_modelCardsData } from './subCat_5_jednofazowe_data';

export const wtyczkiGniazdaJednofazowe_techData: TechTableEmptyType =
  cat1_subCat5_modelCardsData.map(item => ({ tableType: 'noTechDate' }));

/*

mport { cat1_subCat7_modelCardsData } from './subCat_7_kontenerowe_data';

export const wtyczkiGniazdaKontenerowe_catalogData: CatalogDataEmptyType =
  cat1_subCat7_modelCardsData.map(item => ({
    tableType: 'noCatalogData',
  }));

*/
