// import { cat9_subCat1_modelCardsData } from '../cat_9_rozdzielnice-modulowe/subCat_1/subCat_1_scienne_data';
// import { cat9_subCat2_modelCardsData } from '../cat_9_rozdzielnice-modulowe/subCat_2/subCat_2_modulowe_data';
// import { cat9_subCat3_modelCardsData } from '../cat_9_rozdzielnice-modulowe/subCat_3/subCat_3_nuova_data';
import { cat10_subCat1_modelCardsData } from './subCat_1/subCat_1_zamykane_data';
import { cat10_subCat2_modelCardsData } from './subCat_2/subCat_2_drywall_data';
import { cat10_subCat3_modelCardsData } from './subCat_3/subCat_3_osadzone_data';

export const cat10_allModelsCard_data: modelCardsDataType[][] = [
  cat10_subCat1_modelCardsData,
  cat10_subCat2_modelCardsData,
  cat10_subCat3_modelCardsData,
  // cat9_subCat1_modelCardsData,
  // cat9_subCat2_modelCardsData,
  // cat9_subCat3_modelCardsData,
];

export const cat10_allModels_pathSegments = cat10_allModelsCard_data.map(
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
