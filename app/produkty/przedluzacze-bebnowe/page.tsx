// 'use client';
import { notFound } from 'next/navigation';
/**Components**/
import CatPageContent from '@/components/nestedPagesCat/CatPageContent';
/**Basic Data**/
import { mainCategoriesPath } from '@/data/routingData';

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

export default function PrzedluzaczeBebnowePage() {
  /**JSX**/
  return <CatPageContent categoryIndex={4} path={mainCategoriesPath[4]} />;
}
