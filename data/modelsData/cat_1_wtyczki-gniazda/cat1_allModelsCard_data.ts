import { cat1_subCat1_modelCardsData } from './subCat_1/subCat_1_przenosne_data';
import { cat1_subCat2_modelCardsData } from './subCat_2/subCat_2_tablicowe_data';
import { cat1_subCat3_modelCardsData } from './subCat_3/subCat_3_scienne_data';
import { cat1_subCat4_modelCardsData } from './subCat_4/subCat_4_tablicowe-jednofazowe_data';
import { cat1_subCat5_modelCardsData } from './subCat_5/subCat_5_jednofazowe_data';
import { cat1_subCat6_modelCardsData } from './subCat_6/subCat_6_niskie-napiecia_data';
import { cat1_subCat7_modelCardsData } from './subCat_7/subCat_7_kontenerowe_data';
import { cat1_subCat8_modelCardsData } from './subCat_8/subCat_8_estradowe_data';
import { cat1_subCat9_modelCardsData } from './subCat_9/subCat_9_campingowe_data';

export const cat1_allModelsCard_data: modelCardsDataType[][] = [
  cat1_subCat1_modelCardsData,
  cat1_subCat2_modelCardsData,
  cat1_subCat3_modelCardsData,
  cat1_subCat4_modelCardsData,
  cat1_subCat5_modelCardsData,
  cat1_subCat6_modelCardsData,
  cat1_subCat7_modelCardsData,
  cat1_subCat8_modelCardsData,
  cat1_subCat9_modelCardsData,
];

// const temp_pathSegments = cat1_allModelsCard_data.map((subCat, i) => {
//   return subCat.map(({ modelPathSegmant }) => modelPathSegmant);
// });

// export const cat1_allModels_pathSegments = [
//   temp_pathSegments.reduce((acc, curr) => [...acc, ...curr], []),
// ];
// export const cat1_allModels_pathSegments = [temp_pathSegments.flat()];

export const cat1_allModels_pathSegments = cat1_allModelsCard_data.map(
  (subCat, i) => {
    return subCat.map(({ modelPathSegmant }) => modelPathSegmant);
  }
);
