/**Components**/
import CatalogTableVer1 from '@/components/basic/tables/catalogTables/catalogTableVer1/CatalogTableVer1';
import CatalogTableVer2 from '@/components/basic/tables/catalogTables/catalogTableVer2/CatalogTableVer2';
/**Basic Data**/
import { catalogStructureData } from '@/data/catalogStructureData';

const CatalogTableHolder = (props: DynamicModelContent) => {
  /*
  ___ step 1 ==> select category data and destructure it
  */
  const categoryAllData = catalogStructureData[props.mainCatIndex]; //__step
  const { catAllCatalogData } = categoryAllData;

  /*
  ___1. not each model has catalogTable ==> there are actually the whole subCategories without catalogTables ==> example: cat8 | sunCat1 i.e. "obudowy puste"
  ___2. that is why we have to check 
  */
  if (!catAllCatalogData) {
    return null;
  }
  const modelCatalogData =
    catAllCatalogData[props.subCatIndex][props.modelIndex];
  // console.log('CatalogTableHolder / modelCatalogData:', modelCatalogData);

  /*
  ___1.
  */
  function createTable(data: ModelCatalogsTypes) {
    switch (data.tableType) {
      case 'catalogTableCat1_1':
        return <CatalogTableVer1 {...data} />;
      case 'catalogTableCat1_4':
        return <CatalogTableVer2 {...data} />;
      case 'noCatalogData':
        return null;
      // default:
      //   return (
      //     <div className="w-full h-full bg-dark fc text-small ">
      //       This Catalog Table is null or under construction - disable this
      //       message in CatalogTableHolder...{data.tableType}
      //     </div>
      //   );
    }
  }

  /**JSX**/
  return <div>{createTable(modelCatalogData)}</div>;
};

export default CatalogTableHolder;

/*
___1
*/
// type TableComponentMap = {
//   [key: string]: React.ComponentType<any>;
// };

// const tableComponents: TableComponentMap = {
//   CatalogDataVar1Type: CatalogTableVer1,
//   CatalogDataVara2Type: CatalogTableVer2,
//   // Add more entries for other types and their corresponding table components
// };
// const tableComponents = {
//   tableType1: CatalogTableVer1,
//   tableType2: CatalogTableVer2,
//   // Add more entries for other types and their corresponding table components
// };

// const schemaSwitcher = (tableName: string) => {
//   switch (tableName) {
//     case catalogTablesTypes[0]:
//       return (
//         <CatalogTableVer1 data={modelCatalogData as CatalogItemVar1Type} />
//       );
//     case tablesTypes[1]:
//       return (
//         <CatalogTableVer2 data={modelCatalogData as CatalogItemVar2Type} />
//       );
//     default:
//       return (
//         <div className="w-full h-full bg-dark fc text-small ">
//           This Catalog Table is null or under construction - disable this
//           message in CatalogTableHolder...
//         </div>
//       );
//   }
// };
