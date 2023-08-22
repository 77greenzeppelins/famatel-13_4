import { notFound } from 'next/navigation';
/**Components**/
import SubCatPageContent from '@/components/nestedPagesSubCat/SubCatPageContent';
/**Handlers**/
import { createPath } from '@/lib/handlers/functions';
/**Basic Data**/
import {
  allSubCatNames,
  catalogStructureData,
} from '@/data/catalogStructureData';
import { mainCategoriesPath } from '@/data/routingData';

// export const dynamicParams = false;

export async function generateStaticParams() {
  return mainCategoriesPath.map((mainCatPath, mainCatIndex) => {
    return catalogStructureData[mainCatIndex].subCategoriesPaths.map(
      subCatPath => ({
        cat: mainCatPath,
        subCat: subCatPath,
      })
    );
  });
}

interface Props {
  params: {
    cat: string;
    subCat: string;
  };
}

export default function SubCategoryPage({ params }: Props) {
  /*
  ___1. get index of main category
  ___2. we need it for the underlying actions...
  ___3. (!) I couldn't pepeat pattern from [cat]'s paege.tsx where I gor categorIndex in generateStaticParams()
  */
  const mainCatIndex = mainCategoriesPath.findIndex(el => el === params.cat);

  /*
  ___1. to get index of subCat we have to manipulate some data ==>prepare them in const subCatPaths
  ___2. "catalogStructureData[mainCatIndex].subCategoriesPaths" is an array of path that consists of 3 slashes and 3 segments : '/products/catName/subCatName"
  ___3. that is why we map() this array
  ___4. first split ==> each path changes from string to array ==> ['', 'products', ...]
  ___5. then slice ==> make cat right before element with index 3
  ___6. finally map again and take first (and the only one) element from each path-array
  ___7. in the last step using data from params we can specify index of current subCat; 
  ___8. Isn't it too complex / obscure ? ==> who knows... but this is my approach to collect index
  */
  const subCatPaths = catalogStructureData[mainCatIndex].subCategoriesPaths
    .map(path => path.split('/').slice(3))
    .map(subArr => subArr[0]);
  // console.log('subCatPaths:', subCatPaths);
  const subCatIndex = subCatPaths.findIndex(el => el === params.subCat);

  /*
   ___1. to trigger not-found.tsx we have to know if path segment (params.cat) is equal to any of predefined paths.
   ___2. we"predefine" paths from predefined subCat names
   ___3. path written by user is "correct" if mathes any of the predefined path; 
  */
  const allSubCatPaths = allSubCatNames.map(category => {
    return createPath(category);
  });

  const isPathCorrect = allSubCatPaths.find(
    element => element === params.subCat
  );

  if (isPathCorrect === undefined) {
    notFound();
  }

  /**JSX**/
  return (
    <div className="flex flex-col w-full min-h-screen fc">
      <SubCatPageContent
        mainCatPath={params.cat}
        mainCatIndex={mainCatIndex}
        subCatPath={params.subCat}
        subCatIndex={subCatIndex}
      />
    </div>
  );
}
