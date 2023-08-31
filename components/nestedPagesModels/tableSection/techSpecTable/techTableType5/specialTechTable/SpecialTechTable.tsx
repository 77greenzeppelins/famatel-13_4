import TableWrapper from '@/components/basic/tables/_atoms/tableWrapper/TableWrapper';
import HeaderCellMulticolor from '@/components/basic/tables/mixed/_atoms/headerStaff/HeaderCellMulticolor';
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import { allHeaders } from '@/data/textData';
import React from 'react';
/**TS**/
interface Props {
  line1: string[];
  line2: string[];
  line3: string[];
}
const SpecialTechTable = (props: Props) => {
  /**Data Destr...**/
  const { line1, line2, line3 } = props;
  /**JSX**/
  return (
    <div className="flex flex-col w-full gap-y-6">
      <BasicHeader
        hasVerticalOrnament={false}
        hasBox={true}
        text={allHeaders.tableHeaders[1]}
      />
      <TableWrapper>
        <thead>
          <tr>
            {line1.map((cellData, i) => (
              <HeaderCellMulticolor
                key={i}
                label={cellData}
                colSpan={i === 0 && line2.length === 4 ? 6 : 4}
                tailwindStyle={i === 0 ? 'bg-dark' : 'bg-vB'}
              />
            ))}
          </tr>
          <tr>
            {line2.map((cellData, i) => {
              if (i === line2.length - 1) {
                return (
                  <HeaderCellMulticolor
                    key={i}
                    label={cellData}
                    colSpan={4}
                    tailwindStyle="bg-vB"
                  />
                );
              }

              return (
                <HeaderCellMulticolor
                  key={i}
                  label={cellData}
                  colSpan={2}
                  tailwindStyle="bg-greyShade2"
                />
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {line3.map((cellData, i) => {
              if (i === line2.length - 1) {
                return (
                  <HeaderCellMulticolor
                    key={i}
                    label={cellData}
                    colSpan={4}
                    tailwindStyle="bg-vB"
                  />
                );
              }
              if (i === 0) {
                return (
                  <HeaderCellMulticolor
                    key={i}
                    label={cellData}
                    colSpan={2}
                    tailwindStyle="bg-greyShade2"
                  />
                );
              }

              return (
                <HeaderCellMulticolor
                  key={i}
                  label={cellData}
                  colSpan={2}
                  tailwindStyle="bg-greyTint2"
                  textStyle="text-dark text-xs text-center"
                />
              );
            })}
          </tr>
        </tbody>
      </TableWrapper>
    </div>
  );
};

export default SpecialTechTable;
