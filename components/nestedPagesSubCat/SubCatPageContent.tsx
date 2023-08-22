'use client';

import { catalogStructureData } from '@/data/catalogStructureData';
import CatalogGrid from '../forMultiPage/catalogs/catalogGrid/CatalogGrid';
import CatalogCardWithModel from '../forMultiPage/catalogs/allCards/cardWithModel/CatalogCardWithModel';
import { mainPagesPaths } from '@/data/routingData';
import { cat1_allModels_pathSegments } from '@/data/modelsData/cat_1_wtyczki-gniazda/cat1_allModelsCard_data';

// import { mainCategoriesPath } from "@/data/routingData";

// mainCategoriesPath

const SubCatPageContent = (props: DynamicSubCatContent) => {
  /**...*/
  const categorySpecification = catalogStructureData[props.mainCatIndex];
  const { catAllProductsImages, catAllModels } = categorySpecification; //__all product images of this cat

  /*

  */
  const createModelsCardData = catAllModels[props.subCatIndex].map(item => ({
    modelPath: `${mainPagesPaths.produkty}/${props.mainCatPath}/${props.subCatPath}/${item.modelPathSegmant}`,
    textIcons: item.textIcons,
    type: item.type,
    collection: item.collection,
    altName: item.altName,
    model: item.model,
  }));

  const createCards = catAllProductsImages[props.subCatIndex].map((item, i) => {
    return (
      <CatalogCardWithModel
        modelIndex={i}
        key={i}
        catImage={{
          path: item.path,
          width: item.width,
          height: item.height,
          alt: item.alt,
        }}
        // catImage={createImageData[i]}
        // modelPathSegmant={createModelsCardData.modelPathSegmant[i]}
        modelPath={createModelsCardData[i].modelPath}
      />
    );
  });

  // console.log('.....', `${props.mainCatPath}/${props.subCatPath}`);
  // console.log('cat1_allModels_pathSegments:', cat1_allModels_pathSegments);

  /**JSX*/
  return (
    <div className="w-full wrapper-1">
      <CatalogGrid>{createCards}</CatalogGrid>
    </div>
  );
};

export default SubCatPageContent;

{
  /* <CatalogGrid>
        <CatalogCardWithModel
          modelIndex={createImageData}
          catImage={{
            path: item.path,
            width: item.width,
            height: item.height,
            alt: item.alt,
          }}
        />
      </CatalogGrid> */
}

{
  /* <div className="text-corpo">{props.mainCatPath}</div>
      <div className="text-corpo">{props.mainCatIndex}</div>
      <div className="text-corpo">{props.subCatPath}</div>
      <div className="text-corpo">{props.subCatIndex}</div> */
}
