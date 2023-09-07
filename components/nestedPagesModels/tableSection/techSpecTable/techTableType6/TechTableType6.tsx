/**Components**/
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import SpecialTechTable from './specialTechTable/SpecialTechTable';
/**Basic Data**/
import { allHeaders } from '@/data/textData';
import TransparentTable from '@/components/basic/tables/transparent/TransparentTable';
import SpecialTechTable3 from './specialTable3/SpecialTechTable3';
import SpecialTechTable2 from './specialTechTable2/SpecialTechTable2';

/*
___for wtyczki gniazda campingowe / cat1_subCat8
*/

const TechTableType6 = (data: WtyczkaGniazdoType6TechDataType) => {
  const {
    tableHeader,
    tableBody,
    underlinedRows,
    tableBodySpecialRows,
    twoTables,
  } = data;
  // console.log('....TechTableType6 / data', data);
  /**JSX**/
  return (
    <div className="flex flex-col w-full gap-y-16">
      {
        //___for items: 7,8
        tableHeader && tableBody && tableBodySpecialRows ? (
          <div className="flex flex-col w-full gap-y-6">
            <SpecialTechTable3
              tableHeader={tableHeader}
              tableBody={tableBody}
              tableBodySpecialRows={tableBodySpecialRows}
            />
          </div>
        ) : null
      }
      {
        //___for items: 1,2,3,6, 10
        tableHeader && tableBody && !tableBodySpecialRows ? (
          <div className="flex flex-col w-full gap-y-6">
            <SpecialTechTable tableHeader={tableHeader} tableBody={tableBody} />
          </div>
        ) : null
      }
      {
        //___for items: 11
        twoTables ? <SpecialTechTable2 twoTables={twoTables} /> : null
      }
      {underlinedRows ? (
        <div className="flex flex-col w-full gap-y-16">
          <div className="flex flex-col w-full gap-y-6">
            <BasicHeader
              hasVerticalOrnament={false}
              hasBox={true}
              text={allHeaders.tableHeaders[2]}
            />
            <TransparentTable rowsData={underlinedRows} />
          </div>{' '}
        </div>
      ) : null}
    </div>
  );
};

export default TechTableType6;
