// import { notFound } from 'next/navigation';
/**Comoponenst**/
import ModelPageContent from '@/components/nestedPagesModels/ModelPageContent';
/**Basic Data**/
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
/**TS**/
// interface Props {
//   params: {
//     cat: string;
//     subCat: string;
//     model: string;
//   };
// }
export default function ObudowyPustePage() {
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
