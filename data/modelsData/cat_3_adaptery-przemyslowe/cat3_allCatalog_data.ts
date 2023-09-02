import { adapteryPrzemysloweSchuko_tablesData } from './subCat_1/subCat_1_schuko_dataCatalog';
import { adapteryPrzemysloweWielokrotne_tablesData } from './subCat_2/subCat_2_wielokrotne_dataCatalog';
import { adapteryPrzemysloweWielokrotneKabel_tablesData } from './subCat_3/subCat_3_wielokrotne-z-kablem_dataCatalog';

export const cat3_allCatalogData: CategoryCatalogDataType = [
  adapteryPrzemysloweSchuko_tablesData,
  adapteryPrzemysloweWielokrotne_tablesData,
  adapteryPrzemysloweWielokrotneKabel_tablesData,
];
