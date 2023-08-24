'use client';
/**Components**/
import Cat1Schemas from './cat1/Cat1Schemas';
/**Basic Data**/
import {
  allModelsPathSegment,
  catalogStructureData,
} from '@/data/catalogStructureData';

const ModelPageContent = (props: DynamicModelContent) => {
  /**...*/
  const categorySpecification = catalogStructureData[props.mainCatIndex];
  const { catAllProductsImages, catAllModels } = categorySpecification; //__all product images of this cat

  /*
  ___1.
  */
  const schemaSwitcher = (index: number) => {
    switch (index) {
      case 0:
        return <Cat1Schemas catIndex={index} />;
      // case 2:
      // case 4:
      // case 7:
      // case 8:
      // case 9:
      //   return <CategorySchema1 index={index} />;
      // case 1:
      //   return <CategorySchema2 index={index} />;
      // case 3:
      //   return <GniazdaPodwieszane index={index} />;
      // case 5:
      //   return <RozlacznikiBezpieczenstwa index={index} />;
      // case 6:
      //   return <LadowarkiSamochodowe index={index} />;
      default:
        return <div className="w-full h-full bg-dark fc">...</div>;
    }
  };

  // console.log('.....', `${props.mainCatPath}/${props.subCatPath}`);
  // console.log(
  //   'cat1_allModels_pathSegments:',
  //   typeof cat1_allModels_pathSegments
  // );
  const isPathCorrect = allModelsPathSegment[0].map(item =>
    item.find(element => element === props.modelPath)
  );

  // const isPathCorrect = cat1_allModels_pathSegments.find(
  //   element => element === props.modelPath
  // );
  // const x = cat1_allModels_pathSegments.map(item =>
  //   item.find(element => element === props.modelPath)
  // );
  // console.log('...isPathCorrect:', isPathCorrect[0]);

  /**JSX*/
  return (
    <div className="w-full wrapper-1">
      <div className="">current path: {props.mainCatPath}</div>
      <div className="">current path: {props.subCatPath}</div>
      <div className="">current path: {props.modelPath}</div>
    </div>
  );
};

export default ModelPageContent;

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

//  const createModelsCardData = catAllModels[props.subCatIndex].map(item => ({
//    modelPath: `${mainPagesPaths.produkty}/${props.mainCatPath}/${props.subCatPath}/${item.modelPathSegmant}`,
//    textIcons: item.textIcons,
//    type: item.type,
//    collection: item.collection,
//    altName: item.altName,
//    model: item.model,
//  }));

// const createCards = catAllProductsImages[props.subCatIndex].map((item, i) => {
//   return (
//     <CatalogCardWithModel
//       modelIndex={i}
//       key={i}
//       catImage={{
//         path: item.path,
//         width: item.width,
//         height: item.height,
//         alt: item.alt,
//       }}
//       // catImage={createImageData[i]}
//       // modelPathSegmant={createModelsCardData.modelPathSegmant[i]}
//       modelPath={createModelsCardData[i].modelPath}
//     />
//   );
// });
