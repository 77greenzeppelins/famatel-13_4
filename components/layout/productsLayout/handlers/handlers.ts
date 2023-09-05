import { catalogStructureData } from '@/data/catalogStructureData';

export const createSubCategoryData = (
  mainCatregoryIndex: number,
  catalogLevels: string[]
) => {
  if (catalogLevels.length < 1) {
    // console.log('catalogLevels.length < 1 ==> false');
    return null;
  }

  const subCatIndex: number = catalogStructureData[
    mainCatregoryIndex
  ].subCategoriesSegments.findIndex(item => item === catalogLevels[1]);

  if (subCatIndex === -1) {
    return;
  }

  const subCategoryName: string =
    catalogStructureData[mainCatregoryIndex].subCategoriesNames[subCatIndex];

  return {
    subCatIndex: subCatIndex,
    subCategoryName: subCategoryName,
  };
};

export const createModelData = (
  mainCatregoryIndex: number,
  catalogLevels: string[] //catalogLevels[2]
) => {
  if (catalogLevels.length < 2) {
    // console.log('catalogLevels.length < 2 ==> false');
    return null;
  }
  const subCatIndex: number = catalogStructureData[
    mainCatregoryIndex
  ].subCategoriesSegments.findIndex(item => item === catalogLevels[1]);

  //---------------------------
  if (subCatIndex === -1) {
    // console.log(
    //   'subCategoriesSegments',
    //   catalogStructureData[mainCatregoryIndex].subCategoriesSegments
    // );
    return;
  }
  // else {
  //   console.log(
  //     'subCategoriesSegments',
  //     catalogStructureData[mainCatregoryIndex].subCategoriesSegments
  //   );
  // }

  //-----------------------------

  const modelIndex: number = catalogStructureData[
    mainCatregoryIndex
  ].catAllModels[subCatIndex].findIndex(
    ({ modelPathSegmant }) => modelPathSegmant === catalogLevels[2]
  );

  if (modelIndex === -1) {
    // console.log(
    //   'catAllModels',
    //   catalogStructureData[mainCatregoryIndex].catAllModels[subCatIndex]
    // );
    return;
  }
  // else {
  //   console.log(
  //     'catAllModels',
  //     catalogStructureData[mainCatregoryIndex].catAllModels[subCatIndex]
  //   );
  // }

  //-----------------------------

  /*
  ___1. "catAllModels" stores cardData ==> primary 
  ___2. some products are presented by exact model (rozdzielnice) other by some sort of description ("gniazdo stałe pionowe wesołe itp...")
  */
  const modelLabel = catalogStructureData[mainCatregoryIndex].catAllModels[
    subCatIndex
  ]
    .map(({ modelPathSegmant, altName, model }) => {
      const label = altName ? altName : model;
      return modelPathSegmant === catalogLevels[2] && label;
    })
    .find(item => typeof item === 'string');

  return {
    modelIndex: modelIndex,
    modelLabel: modelLabel,
  };
};
