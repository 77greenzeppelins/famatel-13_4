// 'use client';
import { notFound } from 'next/navigation';
/**Handlers**/
import { createPath } from '@/lib/handlers/functions';
/**Basic Data**/
import { allSubCatNames } from '@/data/catalogStructureData';

// export const dynamicParams = false;
export async function generateStaticParams() {
  const paths = allSubCatNames.map(category => {
    return createPath(category);
  });

  return paths.map(path => ({
    subCat: path,
  }));
}

interface Props {
  params: { subCat: string };
}

export default async function CategoryPage({ params }: Props) {
  /** */
  const paths = allSubCatNames.map(category => {
    return createPath(category);
  });
  //___wtyczki-i-gniazda-przenosne
  const isCorrect = paths.find(element => element === params.subCat);

  if (isCorrect === undefined) {
    console.log('isCorrect === undefined');
    notFound();
  }

  /**JSX**/
  return (
    <div className="flex flex-col w-full min-h-screen fc">
      <div className="">current path: {params.subCat}</div>
      <div className="">typeof isCorrect: {typeof isCorrect}</div>

      <div className="">
        isCorrect: {isCorrect === undefined ? 'undefined' : 'exists'}
      </div>
    </div>
  );
}
