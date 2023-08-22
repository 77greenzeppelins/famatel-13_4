import { cat5_subCat1_modelCardsData } from './subCat_1/subCat_1_schuko_data';

export const cat5_allModelsCard_data: modelCardsDataType[][] = [
  cat5_subCat1_modelCardsData,
  // cat5_subCat2_modelCardsData,
  // cat5_subCat3_modelCardsData,
];
export const cat5_allModels_pathSegments = cat5_allModelsCard_data.map(
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
