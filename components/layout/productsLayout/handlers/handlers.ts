import { catalogStructureData } from '@/data/catalogStructureData';

export const createSubCategoryData = (
  mainCatregoryIndex: number,
  catalogLevels: string[]
) => {
  if (catalogLevels.length < 1) {
    return null;
  }
  const subCatIndex: number = catalogStructureData[
    mainCatregoryIndex
  ].subCategoriesSegments.findIndex(item => item === catalogLevels[1]);

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
    return null;
  }
  const subCatIndex: number = catalogStructureData[
    mainCatregoryIndex
  ].subCategoriesSegments.findIndex(item => item === catalogLevels[1]);

  if (subCatIndex === -1) {
    return;
  }
  const modelIndex: number = catalogStructureData[
    mainCatregoryIndex
  ].catAllModels[subCatIndex].findIndex(
    ({ modelPathSegmant }) => modelPathSegmant === catalogLevels[2]
  );

  if (modelIndex === -1) {
    return;
  }

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
