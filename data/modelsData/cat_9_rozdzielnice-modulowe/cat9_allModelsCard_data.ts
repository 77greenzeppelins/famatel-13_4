import { cat9_subCat1_modelCardsData } from './subCat_1/subCat_1_scienne_data';
import { cat9_subCat2_modelCardsData } from './subCat_2/subCat_2_modulowe_data';
import { cat9_subCat3_modelCardsData } from './subCat_3/subCat_3_nuova_data';
import { cat9_subCat4_modelCardsData } from './subCat_4/subCat_4_nuovaPlus_data';
import { cat9_subCat5_modelCardsData } from './subCat_5/subCat_5_vita_data';
import { cat9_subCat6_modelCardsData } from './subCat_6/subCat_6_icp_data';
import { cat9_subCat7_modelCardsData } from './subCat_7/subCat_7_metalowe_data';
import { cat9_subCat8_modelCardsData } from './subCat_8/subCat_8_metalowe-ict_data';
import { cat9_subCat9_modelCardsData } from './subCat_9/subCat_9_akcesoria_data';

export const cat9_allModelsCard_data: modelCardsDataType[][] = [
  cat9_subCat1_modelCardsData,
  cat9_subCat2_modelCardsData,
  cat9_subCat3_modelCardsData,
  cat9_subCat4_modelCardsData,
  cat9_subCat5_modelCardsData,
  cat9_subCat6_modelCardsData,
  cat9_subCat7_modelCardsData,
  cat9_subCat8_modelCardsData,
  cat9_subCat9_modelCardsData,
];
export const cat9_allModels_pathSegments = cat9_allModelsCard_data.map(
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
