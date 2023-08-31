import TableWrapper from '@/components/basic/tables/_atoms/tableWrapper/TableWrapper';
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import TransparentTable from '@/components/basic/tables/transparent/TransparentTable';
/**BasicData**/
import { allHeaders } from '@/data/textData';
import { createHeader, createTableBody, createFeatures } from './handlers';

const TechTableType2 = (data: WtyczkaGniazdoType3TechDataType) => {
  const { header, tableBody, features } = data;

  /**JSX**/
  return (
    <div className="flex flex-col w-full gap-y-16">
      {header ? (
        <div className="flex flex-col w-full gap-y-6">
          <BasicHeader
            hasVerticalOrnament={false}
            hasBox={true}
            text={allHeaders.tableHeaders[1]}
          />
          <TableWrapper>
            <thead>{createHeader({ header })}</thead>
            <tbody>{createTableBody({ tableBody })}</tbody>
          </TableWrapper>
        </div>
      ) : null}

      {features ? (
        <div className="flex flex-col w-full gap-y-6">
          <BasicHeader
            hasVerticalOrnament={false}
            hasBox={true}
            text={allHeaders.tableHeaders[2]}
          />
          <TransparentTable rowsData={features} />
        </div>
      ) : null}
    </div>
  );
};

export default TechTableType2;
