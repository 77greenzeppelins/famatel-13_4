import { catalogStructureData } from '@/data/catalogStructureData';
import Image from 'next/image';

const GraphicSection = (props: DynamicModelContent) => {
  /*
  ___ step 1 ==> select category data and destructure it
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
  const { path, alt, width, height } = modelImage;
  //   const tableType: string | null = modelCatalogData
  //     ? modelCatalogData.tableType
  //     : null;
  /*
  ___ step 3 ==> last selection ==> as a result we have modelCard; then destr it...
  */
  // console.log('modelImage:', modelImage);

  /**JSX**/
  return (
    <div className="flex flex-col gap-y-1">
      <div className="fc h-[50px] w-full bg-greyShade1 rounded-md">
        buttons section
      </div>
      <div className="w-full p-1 rounded-md fc bg-light">
        <Image
          src={path}
          alt={alt}
          width={width}
          height={height}
          className="container max-w-[500px]"
        />
      </div>
    </div>
  );
};

export default GraphicSection;
