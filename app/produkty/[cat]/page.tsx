// 'use client';
import { notFound } from 'next/navigation';
/**Handlers**/
import { createPath } from '@/lib/handlers/functions';
/**Basic Data**/
import { mainCategoriesNames } from '@/data/routingData';

// export const dynamicParams = false;
export async function generateStaticParams() {
  const paths = mainCategoriesNames.map(category => {
    return createPath(category);
  });
  return paths.map(path => ({
    cat: path,
  }));
}

interface Props {
  params: { cat: string };
}

export default async function CategoryPage({ params }: Props) {
  /** */
  const paths = mainCategoriesNames.map(category => {
    return createPath(category);
  });
  const isCorrect = paths.find(element => element === params.cat);

  if (isCorrect === undefined) {
    console.log('isCorrect === undefined');
    notFound();
  }
  /**JSX**/
  return (
    <div className="flex flex-col w-full min-h-screen fc">
      <div className="">current path: {params.cat}</div>
      <div className="">
        isCorrect: {isCorrect === undefined ? 'undefined' : 'exists'}
      </div>
    </div>
  );
}
