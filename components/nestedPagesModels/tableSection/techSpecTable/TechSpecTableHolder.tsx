/**Components**/
import TechTableType1 from './techTableType1.tsx/TechTableType1';
import TechTableType3 from './techTableType3/TechTableType3';
import TechTableType5 from './techTableType5/TechTableType5';
import Cat8Schema from './cat8Schema/Cat8Schema';
import OnlyUnderlinedTable from './onlyUnderlinedTable/OnlyUnderlinedTable';
/**Basic Data**/
import { catalogStructureData } from '@/data/catalogStructureData';
import RegularColumnsTable from './regularColumnsTable/RegularColumnsTable';
import TechTableType6 from './techTableType6/TechTableType6';
import TechTable3_2 from './techTable3_2/TechTable3_2';
import TechTable3_1 from './techTable3_1/TechTable3_1';

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

  function createTable(data: ModelTechDataTypes) {
    switch (data.tableType) {
      case 'techTableWtyczkiGniazdaVer1':
        return <TechTableType1 {...data} />;
      case 'techTableWtyczkiGniazdaVer2':
        return <TechTableType3 {...data} />;
      case 'techTableWtyczkiGniazdaVer5':
        return <TechTableType5 {...data} />; // estradowe
      case 'techTableWtyczkiGniazdaVer6':
        return <TechTableType6 {...data} />; //campingowe
      case 'onlyUnderlinedTable':
        return <OnlyUnderlinedTable {...data} />;
      case 'techTableWithRegularColumns':
        return <RegularColumnsTable {...data} />;
      case 'techSpecTableVer1':
        return <Cat8Schema {...data} />;
      case 'techTable3_2':
        return <TechTable3_2 {...data} />;
      case 'techTable3_1':
        return <TechTable3_1 {...data} />;
      case 'tableType8_2a':
        return <div>tableType8_2a</div>;
      case 'tableType8_2b':
        return <div>tableType8_2b</div>;
      case 'noTechDate':
        return null;
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
