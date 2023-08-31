/**Components**/
import TechTableType1 from './techTableType1.tsx/TechTableType1';
import TechTableType3 from './techTableType3/TechTableType3';
import Cat8Schema from './cat8Schema/Cat8Schema';
import OnlyUnderlinedTable from './onlyUnderlinedTable/OnlyUnderlinedTable';
/**Basic Data**/
import { catalogStructureData } from '@/data/catalogStructureData';
import RegularColumnsTable from './regularColumnsTable/RegularColumnsTable';

const TechSpecTableHolder = (props: DynamicModelContent) => {
  /*
  ___1. catalogStructureData is an absolute resource of data;
  ___2. received props offers full set of indices;
  */
  const modelTechData =
    catalogStructureData[props.mainCatIndex].catAllTechData[props.subCatIndex][
      props.modelIndex
    ];

  /*
  ___1. this switcher is based on propert tableType that is in every "modelTechData"
  wtyczki1: 'techTableWtyczkiVer1',
  obudowy1: 'techSpecTableVer1',
  */

  function createTable(data: ModelTechData) {
    switch (data.tableType) {
      case 'techTableWtyczkiGniazdaVer1':
        return <TechTableType1 {...data} />;
      case 'techTableWtyczkiGniazdaVer2':
        return <TechTableType3 {...data} />;
      case 'onlyUnderlinedTable':
        return <OnlyUnderlinedTable {...data} />;
      case 'techTableWithRegularColumns':
        return <RegularColumnsTable {...data} />;
      case 'techSpecTableVer1':
        return <Cat8Schema {...data} />;
    }
  }

  /**JSX**/
  return <div>{createTable(modelTechData)}</div>;
};

export default TechSpecTableHolder;

// const categoryAllTechData =
//   catalogStructureData[props.mainCatIndex].catAllTechData;

// const modelTechData =
//   categoryAllTechData[props.subCatIndex][props.modelIndex];
