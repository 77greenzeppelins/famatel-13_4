/**Components**/
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import SpecialTechTable from './specialTechTable/SpecialTechTable';
/**Basic Data**/
import { allHeaders } from '@/data/textData';
import TransparentTable from '@/components/basic/tables/transparent/TransparentTable';

/*
___for wtyczki gniazda estradowe / cat1_subCat8
*/

const TechTableType6 = (data: WtyczkaGniazdoType6TechDataType) => {
  const { tableHeader, tableBody, underlinedRows, tableBodySpecialRows } = data;
  console.log('....TechTableType6 / data', data);
  /**JSX**/
  return (
    <div className="flex flex-col w-full gap-y-16">
      {tableHeader && tableBody && tableBodySpecialRows ? <div>...</div> : null}
      {tableHeader && tableBody && !tableBodySpecialRows ? (
        <div className="flex flex-col w-full gap-y-6">
          <SpecialTechTable tableHeader={tableHeader} tableBody={tableBody} />
        </div>
      ) : null}

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
      {/* {underlinedRow ? (
        <div className="flex flex-col w-full gap-y-6">
          <BasicHeader
            hasVerticalOrnament={false}
            hasBox={true}
            text={allHeaders.tableHeaders[2]}
          />
          <TransparentTable rowsData={underlinedRow} />
        </div>
      ) : null} */}
      {/* {catalogLike ? <SpecialTechTable {...catalogLike} /> : null} */}
      {/* {header2a && header2b && tableBody2 ? (
        <SpecialTechTable2
          headeLine1={header2a}
          headeLine2={header2b}
          tableBody={tableBody2}
        />
      ) : null} */}
      {/* {description ? <p className="text-xs text-grey">{description}</p> : null} */}
    </div>
  );
};

export default TechTableType6;
