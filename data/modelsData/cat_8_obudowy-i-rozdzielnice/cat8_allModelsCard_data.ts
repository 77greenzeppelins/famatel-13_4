import { cat8_subCat1_modelCardsData } from './subCat_1/subCat_1_puste_data';
import { cat8_subCat2_modelCardsData } from './subCat_2/subCat_2_przemyslowe_data';
import { cat8_subCat3_modelCardsData } from './subCat_3/subCat_3_gumowe_data';
import { cat8_subCat4_modelCardsData } from './subCat_4/subCat_4_akcesoria_data';

export const cat8_allModelsCard_data: modelCardsDataType[][] = [
  cat8_subCat1_modelCardsData,
  cat8_subCat2_modelCardsData,
  cat8_subCat3_modelCardsData,
  cat8_subCat4_modelCardsData,
];

// const temp_pathSegments = cat1_allModelsCard_data.map((subCat, i) => {
//   return subCat.map(({ modelPathSegmant }) => modelPathSegmant);
// });

// export const cat1_allModels_pathSegments = [
//   temp_pathSegments.reduce((acc, curr) => [...acc, ...curr], []),
// ];
// export const cat1_allModels_pathSegments = [temp_pathSegments.flat()];

export const cat8_allModels_pathSegments = cat8_allModelsCard_data.map(
  (subCat, i) => {
    return subCat.map(({ modelPathSegmant }) => modelPathSegmant);
  }
);
