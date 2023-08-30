// 'use client';
import { notFound } from 'next/navigation';
/**Components**/
import CatPageContent from '@/components/nestedPagesCat/CatPageContent';
/**Basic Data**/
import { mainCategoriesPath } from '@/data/routingData';
import { catalogStructureData } from '@/data/catalogStructureData';
// export const dynamicParams = false;
// export async function generateStaticParams() {
//   return mainCategoriesPath.map((path, categoryIndex) => ({
//     cat: path,
//     categoryIndex: categoryIndex,
//   }));
// }

// interface Props {
//   params: { cat: string; categoryIndex: number };
// }

export default function WtyczkiGniazdaPage() {
  /*
  ___1.
  */
  // const catIndex = mainCategoriesPath.findIndex(
  //   element => element === params.cat
  // );
  /*
  ___1. to trigger notFound() and render not-found.tsx we have to know if path segment (params.cat) is equal to any of predefined paths in mainCategoriesPath
  */
  // const isCorrect = mainCategoriesPath.find(element => element === params.cat);
  // if (isCorrect === undefined) {
  //   notFound();
  // }

  /*
  ___
  */
  /**JSX**/
  return (
    <CatPageContent
      categoryIndex={catalogStructureData[0].mainCategoryIndex}
      path={catalogStructureData[0].mainCategoryPath}
    />
  );
}
