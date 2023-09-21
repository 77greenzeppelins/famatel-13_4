import { Metadata } from 'next';
// import { notFound } from 'next/navigation';
/**Comoponenst**/
import ModelPageContent from '@/components/nestedPagesModels/ModelPageContent';
/**Basic Data**/
import { metadataText } from '@/data/textData';
// import { catalogStructureData } from '@/data/catalogStructureData';
// import { mainCategoriesPath } from '@/data/routingData';

// export const dynamicParams = false;
// export async function generateStaticParams() {
//   return mainCategoriesPath.map((mainCatPath, mainCatIndex) => {
//     return catalogStructureData[mainCatIndex].subCategoriesPaths.map(
//       subCatPath => ({
//         cat: mainCatPath,
//         subCat: subCatPath,
//       })
//     );
//   });
// }

// interface Props {
//   params: {
//     cat: string;
//     subCat: string;
//     model: string;
//   };
// }

/*
___CEO section
*/
export const metadata: Metadata = {
  title: metadataText.cat8.title,
  description: metadataText.cat8.desc,
  keywords: metadataText.cat8.keywords,
};

export default function ObudowyPrzemyslowePage() {
  /**JSX**/
  return (
    <div className="flex flex-col w-full fc">
      <ModelPageContent />
      {/* <div className="h-[50vh] fc">
        <p>{params.model}</p>
      </div> */}
    </div>
  );
}

//_______________________________________________________________
/** */
/*
  ___1. get index of main category
  ___2. we need it for the underlying actions...
  ___3. (!) I couldn't pepeat pattern from [cat]'s paege.tsx where I gor categorIndex in generateStaticParams()
  */
// const mainCatIndex = mainCategoriesPath.findIndex(el => el === params.cat);

/*
  ___1. to get index of subCat we have to manipulate some data ==>prepare them in const subCatPaths
  ___2. "catalogStructureData[mainCatIndex].subCategoriesPaths" is an array of path that consists of 3 slashes and 3 segments : '/products/catName/subCatName"
  ___3. that is why we map() this array
  ___4. first split ==> each path changes from string to array ==> ['', 'products', ...]
  ___5. then slice ==> make cat right before element with index 3
  ___6. finally map again and take first (and the only one) element from each path-array
  ___7. in the last step using data from params we can specify index of current subCat; 
  ___8. Isn't it too complex / obscure ? ==> 
  */
// const subCatPaths = catalogStructureData[mainCatIndex].subCategoriesPaths
//   .map(path => path.split('/').slice(3))
//   .map(subArr => subArr[0]);

// const subCatIndex = subCatPaths.findIndex(el => el === params.subCat);

// console.log('subCatIndex:', subCatIndex);
// const modelPathSegmants = catalogStructureData[mainCatIndex].catAllModels[
//   subCatIndex
// ].map(({ modelPathSegmant }, i) => modelPathSegmant);

// const modelIndex = modelPathSegmants.findIndex(el => el === params.model);
/*
   ___1. to trigger not-found.tsx we have to know if path segment (params.model) is equal to any of predefined model's path-segments. 
   ___2. we"predefine" path-segments for models in ... ; this is different approach then in <SubCategoryPage>
   ___3. path written by user is "correct" if mathes any of the predefined path; 
  */
// const allSubCatPaths = allSubCatNames.map(category => {
//   return createPath(category);
// });

// const isPathCorrect = allSubCatPaths.find(
//   element => element === params.subCat
// );
// const isPathCorrect = allModelsPathSegment[mainCatIndex].map(item =>
//   item.find(element => element === params.model)
// );

// const isPathCorrect = catalogStructureData[mainCatIndex].catAllModels[
//   subCatIndex
// ].map(({ modelPathSegmant }) => {
//   // if (modelPathSegmant === params.model) {
//   //   console.log('modelPathSegmant', modelPathSegmant);
//   //   console.log('params.model', params.model);
//   // }
//   return modelPathSegmant === params.model;
// });

// if (isPathCorrect[0] === undefined) {
//   notFound();
// }
