import BasicTable from '@/components/basic/tables/basic/BasicTable';
import HeaderCellMulticolor from '@/components/basic/tables/mixed/_atoms/headerStaff/HeaderCellMulticolor';
import TransparentTable from '@/components/basic/tables/transparent/TransparentTable';
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import MultiTablesWrapper from '@/components/nestedPagesModels/_atoms/TableSectionWrapper/MultiTablesWrapper';
import TableSectionWrapper from '@/components/nestedPagesModels/_atoms/TableSectionWrapper/TableSectionWrapper';
import { allHeaders } from '@/data/textData';
import React from 'react';

const TechTableType8_2b = (data: TechTableItem8_2aType) => {
  const {
    tableHeader1,
    ampers,
    dataLines,
    tableHeader2,
    voltage, //length 6 or 7
    // norma,
    // packageDetails,
  } = data;

  /**...**/
  const createDataLines = dataLines.map(
    ({ model, labels16A, labels32A, labels63A }) => {
      if (labels63A) {
        return [model, ...labels16A, ...labels32A, ...labels63A];
      }
      return [model, ...labels16A, ...labels32A];
    }
  );

  const ampersColsSpan = [4, 3];
  const ampersColsSpanWith63A = [3, 2, 1];

  /**JSX**/
  return (
    <MultiTablesWrapper>
      <TableSectionWrapper>
        <BasicHeader
          hasVerticalOrnament={false}
          hasBox={true}
          text={allHeaders.tableHeaders[1]}
        />

        <BasicTable
          headerData={['noData']}
          bodyData={createDataLines}
          // headerColSpan={7}
          sideHeaderStyle="text-xs text-light"
          // bodyColSpans={[1, 2, 2]}
        >
          <thead>
            <tr>
              <HeaderCellMulticolor
                label={tableHeader1[0]}
                colSpan={1}
                rowSpan={4}
                tailwindStyle="bg-greyShade2"
                // textStyle={`${
                //   j === 0
                //     ? 'text-xs text-light text-center'
                //     : 'text-xs text-dark text-center'
                // }`}
              />
              <HeaderCellMulticolor
                label={tableHeader1[1]}
                colSpan={tableHeader2.length === 6 ? 6 : 7}
                tailwindStyle="bg-greyShade2"
                // textStyle={`${
                //   j === 0
                //     ? 'text-xs text-light text-center'
                //     : 'text-xs text-dark text-center'
                // }`}
              />
            </tr>
            <tr>
              {ampers.map((cellData, i) => {
                return (
                  <HeaderCellMulticolor
                    key={i}
                    label={cellData}
                    // colSpan={tableHeader2.length === 6 ? 6 : 7}
                    colSpan={
                      ampers.length === 2
                        ? ampersColsSpan[i]
                        : ampersColsSpanWith63A[i]
                    }
                    tailwindStyle="bg-greyShade2"
                    // textStyle={`${
                    //   j === 0
                    //     ? 'text-xs text-light text-center'
                    //     : 'text-xs text-dark text-center'
                    // }`}
                  />
                );
              })}
            </tr>
            <tr>
              {tableHeader2.map((cellData, i) => {
                return (
                  <HeaderCellMulticolor
                    key={i}
                    label={cellData}
                    // colSpan={tableHeader2.length === 6 ? 6 : 7}
                    colSpan={1}
                    tailwindStyle="bg-greyShade2"
                    // textStyle={`${
                    //   j === 0
                    //     ? 'text-xs text-light text-center'
                    //     : 'text-xs text-dark text-center'
                    // }`}
                  />
                );
              })}
            </tr>
            <tr>
              {voltage.map((cellData, i) => {
                return (
                  <HeaderCellMulticolor
                    key={i}
                    label={cellData}
                    // colSpan={tableHeader2.length === 6 ? 6 : 7}
                    colSpan={1}
                    tailwindStyle="bg-greyShade2"
                    // textStyle={`${
                    //   j === 0
                    //     ? 'text-xs text-light text-center'
                    //     : 'text-xs text-dark text-center'
                    // }`}
                  />
                );
              })}
            </tr>
          </thead>
        </BasicTable>
      </TableSectionWrapper>

      {/* <TableSectionWrapper forTransparentTable={false}>
        <BasicHeader
          hasVerticalOrnament={false}
          hasBox={true}
          text={allHeaders.tableHeaders[4]}
        />
        <div className="flex flex-col w-full gap-y-4">
          <TransparentTable rowsData={norma} />
        </div>
      </TableSectionWrapper> */}
      {/* <TableSectionWrapper forTransparentTable={false}>
        <BasicHeader
          hasVerticalOrnament={false}
          hasBox={true}
          text={allHeaders.tableHeaders[2]}
        />
        <div className="flex flex-col w-full gap-y-4">
          <TransparentTable rowsData={packageDetails} />
        </div>
      </TableSectionWrapper> */}
    </MultiTablesWrapper>
  );
};

export default TechTableType8_2b;
