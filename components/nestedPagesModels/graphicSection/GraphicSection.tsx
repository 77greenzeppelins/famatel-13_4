import SvgImageSwitcher from '@/components/forMultiPage/sliders/svgImageSwitcher/SvgImageSwitcher';
import { catalogStructureData } from '@/data/catalogStructureData';
import { cat1AllTechSvg } from '@/components/SVG/techDrawings/1_wtyczki-gniazda/indexCat1AllTechSvg';
import { allSvgTech } from '@/components/SVG/techDrawings/allSvgTech';

const GraphicSection = (props: DynamicModelContent) => {
  /*
  ___ step 1 ==> select category using "props.mainCatIndex" ===> it gives access to data of choosen category; then destructure it
  */
  const categoryAllData = catalogStructureData[props.mainCatIndex];
  const { catAllProductsImages } = categoryAllData;

  if (!catAllProductsImages) {
    return null;
  }

  /*
  ___1. prepear two types of data: (1) data for choosen model ==> this type of data in a n object that includes property "model"; (2) data of all subCategory's svg ==> it's an array which items has property "model"
  ___2. we need this to compere "models"
  */
  const modelImage = catAllProductsImages[props.subCatIndex][props.modelIndex];
  // const subCatSvg = cat1AllTechSvg[props.subCatIndex];

  const subCatSvg = allSvgTech[props.mainCatIndex][props.subCatIndex];
  console.log('subCatSvg', subCatSvg);

  /**JSX**/
  return (
    <div
      className="w-full h-full"
      //___min-h-[600px]
    >
      <SvgImageSwitcher imageContent={modelImage} subCatSvg={subCatSvg} />
    </div>
  );
};

export default GraphicSection;

// const x = catAllProductsImages[props.subCatIndex].length;
// const y = cat1AllTechSvg[props.subCatIndex].length;
// const slidesChangesCondition = x === y;

// console.log('subCatImagesNumber', x);
// console.log('subCatSvgNumber', y);

//   const subCatImages = catAllProductsImages[props.subCatIndex];
//   const subCatSvg = cat1AllTechSvg[props.subCatIndex];

// const zzz = ()=>{
//   subCatImages.map(({model},i)=>{

//   })

// }

// const createSvgContent = (
//   modelIndex: number,
//   arrayLength: number,
//   array: IndexFileOfSvgTechItemsType[]
// ) => {
//   // if (modelIndex > arrayLength) {
//   //   return;
//   // }
//   return array[modelIndex].map(item => item);
// };
