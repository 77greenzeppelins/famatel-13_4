'use client';
/**Components**/
import CatalogGrid from '../forMultiPage/catalogs/catalogGrid/CatalogGrid';
import CatalogCardWithModel from '../forMultiPage/catalogs/allCards/cardWithModel/CatalogCardWithModel';
/**Basic Data**/
import { catalogStructureData } from '@/data/catalogStructureData';

const SubCatPageContent = (props: DynamicSubCatContent) => {
  /**...*/
  const modelCardData =
    catalogStructureData[props.mainCatIndex].catAllModels[props.subCatIndex];

  const categoryAllProductsImages =
    catalogStructureData[props.mainCatIndex].catAllProductsImages;

  const basicPath = `${
    catalogStructureData[props.mainCatIndex].subCategoriesPaths[
      props.subCatIndex
    ]
  }`;

  // console.log('basicPath', basicPath);
  /*
  ____const categoryAllProductsImages can be undefined ==> it refers to property in catalogStructureData whose type implies being "undefined"
  */
  if (!categoryAllProductsImages) {
    return null;
  }

  const createCards = categoryAllProductsImages[props.subCatIndex].map(
    (item, i) => {
      return (
        <CatalogCardWithModel
          key={i}
          modelIndex={i}
          modelImage={{
            path: item.path,
            width: item.width,
            height: item.height,
            alt: item.alt,
          }}
          modelPath={`${basicPath}/${modelCardData[i].modelPathSegmant}`}
          type={modelCardData[i].type}
          collection={modelCardData[i].collection}
          textIcons={modelCardData[i].textIcons}
        />
      );
    }
  );

  /**JSX*/
  return (
    <div className="w-full pt-10 wrapper-1">
      <CatalogGrid containerStyle="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] xxl:grid-cols-[1fr_1fr_1fr] gap-6 xl:gap-10 w-full">
        {createCards}
      </CatalogGrid>
    </div>
  );
};

export default SubCatPageContent;
