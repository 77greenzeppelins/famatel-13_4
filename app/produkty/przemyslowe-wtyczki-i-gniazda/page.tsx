import { Metadata } from 'next';
/**Components**/
import CatPageContent from '@/components/nestedPagesCat/CatPageContent';
/**Basic Data**/
import { catalogStructureData } from '@/data/catalogStructureData';
import { metadataText } from '@/data/textData';

/*
___CEO section
*/
export const metadata: Metadata = {
    title: { absolute: metadataText.cat1.title },
    description: metadataText.cat1.desc,
    keywords: metadataText.cat1.keywords,
    alternates: {
        canonical: metadataText.cat1.canonical
    }
};

export default function WtyczkiGniazdaPage() {
    /**JSX**/
    return <CatPageContent categoryIndex={catalogStructureData[0].mainCategoryIndex} />;
}

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
