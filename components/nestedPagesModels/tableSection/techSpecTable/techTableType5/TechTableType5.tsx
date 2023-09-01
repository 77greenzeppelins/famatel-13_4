/**Components**/
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import RegularColumnsTable from '../regularColumnsTable/RegularColumnsTable';
/**Basic Data**/
import { allHeaders } from '@/data/textData';
import TransparentTable from '@/components/basic/tables/transparent/TransparentTable';
import SpecialTechTable from './specialTechTable/SpecialTechTable';
import SpecialTechTable2 from './specialTechTable2/SpecialTechTable2';

/*
___for wtyczki gniazda estradowe / cat1_subCat8
*/

const TechTableType5 = (data: WtyczkaGniazdoType5TechDataType) => {
  const {
    header,
    tableBody,
    underlinedRow,
    catalogLike,
    header2a,
    header2b,
    tableBody2,
    description,
  } = data;
  console.log('....TechTableType5 / data', data);
  console.log(
    'header2a && header2b && tableBody2:',
    header2a && header2b && tableBody2
  );
  /**JSX**/
  return (
    <div className="flex flex-col w-full gap-y-16">
      {
        //___items 1-3
        header && tableBody ? (
          <div className="flex flex-col w-full gap-y-6">
            <RegularColumnsTable
              tableType={'techTableWithRegularColumns'}
              header={header}
              tableBody={tableBody}
            />
          </div>
        ) : null
      }

      {catalogLike ? <SpecialTechTable {...catalogLike} /> : null}
      {header2a && header2b && tableBody2 ? (
        <SpecialTechTable2
          headeLine1={header2a}
          headeLine2={header2b}
          tableBody={tableBody2}
        />
      ) : null}
      {description ? <p className="text-xs text-grey">{description}</p> : null}
      {underlinedRow ? (
        <div className="flex flex-col w-full gap-y-6">
          <BasicHeader
            hasVerticalOrnament={false}
            hasBox={true}
            text={allHeaders.tableHeaders[2]}
          />
          <TransparentTable rowsData={underlinedRow} />
        </div>
      ) : null}
    </div>
  );
};

export default TechTableType5;
