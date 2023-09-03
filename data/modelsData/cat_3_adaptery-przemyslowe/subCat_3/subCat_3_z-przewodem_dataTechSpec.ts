import { cat3_subCat3_modelCardsData } from './subCat_3_z-przewodem_data';

export const adapteryPrzemysloweWielokrotneZPrzewodem_techData: TechTableEmptyType =
  cat3_subCat3_modelCardsData.map(item => ({ tableType: 'noTechDate' }));
