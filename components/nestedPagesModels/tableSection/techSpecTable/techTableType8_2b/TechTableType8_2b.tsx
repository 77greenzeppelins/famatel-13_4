import BasicTable from '@/components/basic/tables/basic/BasicTable';
import TransparentTable from '@/components/basic/tables/transparent/TransparentTable';
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import MultiTablesWrapper from '@/components/nestedPagesModels/_atoms/TableSectionWrapper/MultiTablesWrapper';
import TableSectionWrapper from '@/components/nestedPagesModels/_atoms/TableSectionWrapper/TableSectionWrapper';
import { allHeaders } from '@/data/textData';
import React from 'react';

const TechTableType8_2b = (data: TechTableItem8_2bType) => {
  const {
    table1Header,
    table1Data,
    table2Header,
    table2Data,
    norma,
    packageDetails,
  } = data;
  return (
    <MultiTablesWrapper>
      <TableSectionWrapper>
        <BasicHeader
          hasVerticalOrnament={false}
          hasBox={true}
          text={allHeaders.tableHeaders[1]}
        />
        <div className="flex flex-col w-full gap-y-4">
          <BasicTable
            headerData={[table2Header]}
            bodyData={table1Data.map(item => item)}
            headerColSpan={5}
            sideHeaderStyle="text-xs text-light"
            bodyColSpans={[1, 2, 2]}
          />
        </div>
      </TableSectionWrapper>

      <TableSectionWrapper>
        <BasicHeader
          hasVerticalOrnament={false}
          hasBox={true}
          text={allHeaders.tableHeaders[1]}
        />
        <div className="flex flex-col w-full gap-y-4">
          <BasicTable
            headerData={[table2Header]}
            bodyData={table2Data.map(item => [item.label, item.value])}
            headerColSpan={2}
            sideHeaderStyle="text-xs text-light"
          />
        </div>
      </TableSectionWrapper>

      <TableSectionWrapper forTransparentTable={false}>
        <BasicHeader
          hasVerticalOrnament={false}
          hasBox={true}
          text={allHeaders.tableHeaders[4]}
        />
        <div className="flex flex-col w-full gap-y-4">
          <TransparentTable rowsData={norma} />
        </div>
      </TableSectionWrapper>
      <TableSectionWrapper forTransparentTable={false}>
        <BasicHeader
          hasVerticalOrnament={false}
          hasBox={true}
          text={allHeaders.tableHeaders[2]}
        />
        <div className="flex flex-col w-full gap-y-4">
          <TransparentTable rowsData={packageDetails} />
        </div>
      </TableSectionWrapper>
    </MultiTablesWrapper>
  );
};

export default TechTableType8_2b;
