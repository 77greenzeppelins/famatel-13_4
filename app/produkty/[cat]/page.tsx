// 'use client';
import { notFound } from 'next/navigation';
/**Components**/
import CatPageContent from '@/components/nestedPagesCat/CatPageContent';
/**Handlers**/
// import { createPath } from '@/lib/handlers/functions';
/**Basic Data**/
import { mainCategoriesPath } from '@/data/routingData'; //___mainCategoriesNames,

// export const dynamicParams = false;
export async function generateStaticParams() {
  // const paths = mainCategoriesNames.map(category => {
  //   return createPath(category);
  // });
  const paths = mainCategoriesPath.map(category => {
    return category;
  });
  return paths.map((path, categoryIndex) => ({
    cat: path,
    categoryIndex: categoryIndex,
  }));
}

interface Props {
  params: { cat: string; categoryIndex: number };
}

export default async function CategoryPage({ params }: Props) {
  /*
  ___1.
  */
  const paths = mainCategoriesPath.map(category => {
    return category;
  });
  /*
  ___1.
  */
  const getIndex = () => {
    const index = paths.map((category, i) => {
      return category === params.cat && i;
    });
    return index.find(element => typeof element === 'number');
  };

  /*
  ___1. to trigger not-found.tsx we have to know if path segment (params.cat) is equal to any of predefined paths in mainCategoriesNames
  */
  const isCorrect = paths.find(element => element === params.cat);
  if (isCorrect === undefined) {
    notFound();
  }

  /**JSX**/
  return <CatPageContent categoryIndex={getIndex()} path={params.cat} />;
}
