import { cat1_subCat7_modelCardsData } from './subCat_7_kontenerowe_data';

export const wtyczkiGniazdaKontenerowe_catalogData: CatalogDataEmptyType =
  cat1_subCat7_modelCardsData.map(item => ({
    tableType: 'noCatalogData',
  }));
