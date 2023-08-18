// 'use client';
import { mainCategoriesPath, mainCategoriesNames } from '@/data/routingData';
import { createPath } from '@/lib/handlers/functions';
import { notFound } from 'next/navigation';
/**Components**/
// import MainWrapper from '@/components/forMultiPage/pageWrappers/MainWrapper/MainWrapper';

/*
export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateStaticParams() {
 
  return mainCategoriesPath.map((post) => ({
    cat: post,
  }))
}
*/
export const dynamicParams = false;

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
  // console.log(paths);
  const isCorrect = paths.find(element => element === params.cat);
  // console.log(isCorrect);
  // const checkPath = async function (isCorrect: string | undefined) {
  //   if (isCorrect === undefined) {
  //     console.log('isCorrect === undefined');
  //     notFound();
  //   }
  //   return isCorrect;
  // };

  // const correctPath = checkPath(isCorrect);

  /**JSX**/
  return (
    // <MainWrapper>
    <div className="flex flex-col w-full min-h-screen fc">
      <div className="">current path: {params.cat}</div>
      <div className="">
        isCorrect: {isCorrect === undefined ? 'undefined' : 'exists'}
      </div>
      {/* <div className="">mcorrectPat: {correctPath}</div> */}
    </div>

    // </MainWrapper>
  );
}
