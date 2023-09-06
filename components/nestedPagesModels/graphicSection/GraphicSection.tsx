import SvgImageSwitcher from '@/components/forMultiPage/sliders/svgImageSwitcher/SvgImageSwitcher';
import { catalogStructureData } from '@/data/catalogStructureData';

const GraphicSection = (props: DynamicModelContent) => {
  /*
  ___ step 1 ==> select category using "props.mainCatIndex" ===> it gives access to data of choosen category; then destructure it
  */
  const categoryAllData = catalogStructureData[props.mainCatIndex]; //__step
  const { catAllProductsImages } = categoryAllData;
  /*
  ___ step 2 ==> select subCategory data
  */
  // const x = catAllProductsImages[props.subCatIndex] ;
  /*
  ___1. not each model has image ==> there are actually the whole categories that don't expand to "modelLevel" ==> example: cat4 stops at level "category" ==> doesn't have subcategorieLevel and modelLevel; 
  ___2. that is why we have to ommit cases without modelLevel ==> catAllProductsImages stores data for modelLevel
  */
  if (!catAllProductsImages) {
    return null;
  }

  const modelImage = catAllProductsImages[props.subCatIndex][props.modelIndex];
  // const { path, alt, width, height, model } = modelImage;
  //   const tableType: string | null = modelCatalogData
  //     ? modelCatalogData.tableType
  //     : null;
  /*
  ___ step 3 ==> last selection ==> as a result we have modelCard; then destr it...
  */
  // console.log('modelImage:', modelImage);

  /**JSX**/
  return (
    <div className="w-full h-full">
      <SvgImageSwitcher {...modelImage} />
    </div>
  );
};

export default GraphicSection;
