/**Components**/
import TechTableType1 from './techTableType1.tsx/TechTableType1';
import Cat8Schema from './cat8Schema/Cat8Schema';
/**Basic Data**/
import { catalogStructureData } from '@/data/catalogStructureData';

const TechSpecTableHolder = (props: DynamicModelContent) => {
  const categoryAllTechData =
    catalogStructureData[props.mainCatIndex].catAllTechData;

  const modelTechData =
    categoryAllTechData[props.subCatIndex][props.modelIndex];

  /*
  ___1. this switcher is based on propert tabletype that is in every "modelTechData"
  wtyczki1: 'techTableWtyczkiVer1',
  obudowy1: 'techSpecTableVer1',
  */

  function createTable(data: ModelTechData) {
    switch (data.tableType) {
      case 'techTableWtyczkiVer1':
        return <TechTableType1 {...data} />;
      case 'techSpecTableVer1':
        return <Cat8Schema {...data} />;
    }
  }

  /**JSX**/
  return <div>{createTable(modelTechData)}</div>;
};

export default TechSpecTableHolder;
