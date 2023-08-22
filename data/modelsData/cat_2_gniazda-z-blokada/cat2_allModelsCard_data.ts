import { cat2_subCat1_modelCardsData } from './subCat_1/subCat_1_tablicowe_data';
import { cat2_subCat2_modelCardsData } from './subCat_2/subCat_2_stale_data';
import { cat2_subCat3_modelCardsData } from './subCat_3/subCat_3_z-opcjami_data';
import { cat2_subCat4_modelCardsData } from './subCat_4/subCat_4_akcesoria_data';

export const cat2_allModelsCard_data: modelCardsDataType[][] = [
  cat2_subCat1_modelCardsData,
  cat2_subCat2_modelCardsData,
  cat2_subCat3_modelCardsData,
  cat2_subCat4_modelCardsData,
];

export const cat2_allModels_pathSegments = cat2_allModelsCard_data.map(
  (subCat, i) => {
    return subCat.map(({ modelPathSegmant }) => modelPathSegmant);
  }
);

// const temp_pathSegments = cat1_allModelsCard_data.map((subCat, i) => {
//   return subCat.map(({ modelPathSegmant }) => modelPathSegmant);
// });

// export const cat1_allModels_pathSegments = [
//   temp_pathSegments.reduce((acc, curr) => [...acc, ...curr], []),
// ];
// export const cat1_allModels_pathSegments = [temp_pathSegments.flat()];
