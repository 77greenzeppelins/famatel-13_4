'use client';
/**Components**/
import TableSection from './tableSection/TableSection';
// import Cat1Schemas from './cat1/Cat1Schemas';
// import Cat2Schemas from './cat2/Cat2Schemas';
/**Basic Data**/
// import { catalogStructureData } from '@/data/catalogStructureData';

const ModelPageContent = (props: DynamicModelContent) => {
  /*
  ___ step 1 ==> select category data and destructure it
  */
  // const categoryAllData = catalogStructureData[props.mainCatIndex]; //__step
  // const { catAllProductsImages, catAllModels, catAllCatalogData } =
  //   categoryAllData;
  /*
  ___ step 2 ==> select subCategory data
  */
  // const subCategoryAllData = catAllModels[props.subCatIndex];
  /*
  ___ step 3 ==> last selection ==> as a result we have modelCard; then destr it...
  */
  // const modelCard = subCategoryAllData[props.modelIndex];
  // const { modelPathSegmant } = modelCard;
  /*
  ___1. 
  */
  // const modelImage = catAllProductsImages[props.subCatIndex][props.modelIndex];
  // const modelCatalogData =
  //   catAllCatalogData[props.subCatIndex][props.modelIndex];
  // // console.log('modelImage:', modelImage);
  // console.log('modelCatalogData:', modelCatalogData);

  /*
  ___1.
  */
  // const schemaSwitcher = (
  //   index: number,
  //   subCatIndex: number,
  //   modelIndexd: number
  // ) => {
  //   switch (index) {
  //     case 0:
  //       return (
  //         <Cat1Schemas
  //           catIndex={index}
  //           subCatIndex={subCatIndex}
  //           modelIndex={modelIndexd}
  //         />
  //       );
  //     // case 1:
  //     //   return <Cat2Schemas catIndex={index} />;
  //     // case 4:
  //     // case 7:
  //     // case 8:
  //     // case 9:
  //     //   return <CategorySchema1 index={index} />;
  //     // case 1:
  //     //   return <CategorySchema2 index={index} />;
  //     // case 3:
  //     //   return <GniazdaPodwieszane index={index} />;
  //     // case 5:
  //     //   return <RozlacznikiBezpieczenstwa index={index} />;
  //     // case 6:
  //     //   return <LadowarkiSamochodowe index={index} />;
  //     default:
  //       return <div className="w-full h-full bg-dark fc">...</div>;
  //   }
  // };

  /**JSX*/
  return (
    <div className="flex flex-col-reverse w-full gap-x-2 xxl:flex-row text-greyShade2 text-medium wrapper-1">
      <div className="fc w-full xxl:w-[50%] min-h-[25vh]">
        <TableSection {...props} />
      </div>
      <div className="fc w-full xxl:w-[50%] min-h-[25vh] bg-black">
        Graphic section
      </div>
    </div>
  );
};

export default ModelPageContent;
