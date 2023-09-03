/**Components**/
import TableWrapper from '@/components/basic/tables/_atoms/tableWrapper/TableWrapper';
import HeaderCellMulticolor from '@/components/basic/tables/mixed/_atoms/headerStaff/HeaderCellMulticolor';
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import TableSectionWrapper from '@/components/nestedPagesModels/_atoms/TableSectionWrapper/TableSectionWrapper';
/**Basic Data**/
import { allHeaders } from '@/data/textData';

const TechTable3_2 = (data: TechTable3_2ItemType) => {
  /**Data destr...**/
  const {
    header: { line1, line2 },
    tableBody,
  } = data;

  /**JSX**/
  return (
    <TableSectionWrapper>
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
                colSpan={i === 0 ? 2 : 1}
                rowSpan={i === 0 ? 1 : 2}
                tailwindStyle="bg-greyShade2"
              />
            ))}
          </tr>
          <tr>
            {line2.map((cellData, i) => (
              <HeaderCellMulticolor
                key={i}
                label={cellData}
                colSpan={1}
                rowSpan={1}
                tailwindStyle="bg-greyShade2"
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {tableBody.map((rowData, i) => (
            <tr key={i}>
              {rowData.map((cellData, j) => {
                return (
                  <HeaderCellMulticolor
                    key={j}
                    label={cellData}
                    colSpan={1}
                    tailwindStyle="bg-greyTint2 hover:bg-light"
                    textStyle="text-center text-xs text-dark"
                  />
                );
              })}
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </TableSectionWrapper>
  );
};

export default TechTable3_2;
