/**Components**/
import CatalogTableVer2 from '@/components/basic/tables/catalogTables/catalogTableVer2/CatalogTableVer2';
// import BasicTable from '@/components/basic/tables/basic/BasicTable';
import Cat8Schema from './cat8Schema/Cat8Schema';
// import { CatalogDataVar1Type, CatalogDataVar2Type } from '@/types';
/**Basic Data**/
import { catalogStructureData } from '@/data/catalogStructureData';
import { tablesTypes, techSpecTables } from '@/data/basicData';

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

const TechSpecTableHolder = (props: DynamicModelContent) => {
  /*
  ___ step 1 ==> select category data and destructure it
  */
  const categoryAllData = catalogStructureData[props.mainCatIndex];
  const { catAllTechData } = categoryAllData;
  /*
  ___ step 2 ==> select subCategory data
  */
  // const subCategoryAllData = catAllModels[props.subCatIndex];
  /*
  ___ step 3 ==> last selection ==> as a result we have modelCard; then destr it...
  */
  // const modelCard = subCategoryAllData[props.modelIndex];
  // const { modelPathSegmant } = modelCard;

  const schemaSwitcher = (tableName: string) => {
    switch (tableName) {
      case techSpecTables[0]:
        return (
          <Cat8Schema data={modelTechSpecData as ObudowaPustaTechDataType} />
          // <CatalogTableVer1 data={modelCatalogData as CatalogItemVar1Type} />
          // <BasicTable data={modelCatalogData as ObudowaPustaTechDataType} />
        );
      // case tablesTypes[1]:
      //   return (
      //     <CatalogTableVer2 data={modelCatalogData as CatalogItemVar2Type} />
      //   );
      default:
        return (
          <div className="w-full h-full bg-dark fc">
            This TechSpec Table is under construction...
          </div>
        );
    }
  };

  /*
  ___1. each "techSpecData" must have "tableType" property;
  */
  const modelTechSpecData = catAllTechData[props.subCatIndex][props.modelIndex];
  const tableType: string = modelTechSpecData.tableType;

  /**JSX**/
  return <div>{schemaSwitcher(tableType)}</div>;
};

export default TechSpecTableHolder;
