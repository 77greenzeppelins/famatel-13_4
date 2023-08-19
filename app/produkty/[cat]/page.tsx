// 'use client';
import { notFound } from 'next/navigation';
/**Components**/
import CatPageContent from '@/components/nestedPagesCat/CatPageContent';
/**Handlers**/
import { createPath } from '@/lib/handlers/functions';
/**Basic Data**/
import { mainCategoriesNames } from '@/data/routingData';

// export const dynamicParams = false;
export async function generateStaticParams() {
  const paths = mainCategoriesNames.map(category => {
    return createPath(category);
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
  /** */
  const paths = mainCategoriesNames.map(category => {
    return createPath(category);
  });

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
    // console.log('isCorrect === undefined');
    notFound();
  }

  /**JSX**/
  return <CatPageContent categoryIndex={getIndex()} path={params.cat} />;
}
