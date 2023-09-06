import { catalogStructureData } from '@/data/catalogStructureData';

export const createSubCategoryData = (
  mainCatregoryIndex: number,
  catalogLevels: string[]
) => {
  if (catalogLevels.length < 1) {
    // console.log('catalogLevels.length < 1 ==> false');
    return null;
  }

  const categoryData = catalogStructureData[mainCatregoryIndex];
  /*
  ___1. case: produkty/shit ==> if shit appears notFound() is triggered
  */
  if (categoryData === undefined) {
    return;
  }

  // console.log('createSubCategoryData / categoryData', categoryData);

  const subCatIndex: number = categoryData.subCategoriesSegments.findIndex(
    item => item === catalogLevels[1]
  );

  // if (subCatIndex === -1) {
  //   return notFound();
  // }

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

  const categoryData = catalogStructureData[mainCatregoryIndex];
  /*
  ___1. case: produkty/shit ==> if shit appears notFound() is triggered
  */
  if (categoryData === undefined) {
    return;
  }
  // console.log('createModelData / categoryData', categoryData);

  const subCatSegments = categoryData.subCategoriesSegments;

  if (subCatSegments === undefined) {
    return;
  }

  const subCatIndex: number = subCatSegments.findIndex(
    item => item === catalogLevels[1]
  );

  const modelsData =
    catalogStructureData[mainCatregoryIndex].catAllModels[subCatIndex];

  if (modelsData === undefined) {
    return;
  }

  const modelIndex: number = catalogStructureData[
    mainCatregoryIndex
  ].catAllModels[subCatIndex].findIndex(
    ({ modelPathSegmant }) => modelPathSegmant === catalogLevels[2]
  );

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

//---------------------------
// if (subCatIndex === -1) {
//   // console.log(
//   //   'subCategoriesSegments',
//   //   catalogStructureData[mainCatregoryIndex].subCategoriesSegments
//   // );
//   // return;
//   notFound();
// }
// else {
//   console.log(
//     'subCategoriesSegments',
//     catalogStructureData[mainCatregoryIndex].subCategoriesSegments
//   );
// }

//-----------------------------
