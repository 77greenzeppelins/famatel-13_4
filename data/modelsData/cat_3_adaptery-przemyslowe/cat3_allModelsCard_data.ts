import { cat3_subCat1_modelCardsData } from './subCat_1/subCat_1_schuko_data';
import { cat3_subCat2_modelCardsData } from './subCat_2/subCat_2_wielokrotne_data';
import { cat3_subCat3_modelCardsData } from './subCat_3/subCat_3_z-przewodem_data';

export const cat3_allModelsCard_data: modelCardsDataType[][] = [
  cat3_subCat1_modelCardsData,
  cat3_subCat2_modelCardsData,
  cat3_subCat3_modelCardsData,
];

export const cat3_allModels_pathSegments = cat3_allModelsCard_data.map(
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
