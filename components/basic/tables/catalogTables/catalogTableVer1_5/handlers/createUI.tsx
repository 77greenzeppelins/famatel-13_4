import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import TableSectionWrapper from '@/components/nestedPagesModels/_atoms/TableSectionWrapper/TableSectionWrapper';
import TableWrapper from '../../../_atoms/tableWrapper/TableWrapper';
import HeaderCellMulticolor from '../../../mixed/_atoms/headerStaff/HeaderCellMulticolor';
import { allHeaders } from '@/data/textData';

export const CreateTable1 = (data: CatalogItemVer1_5aType) => {
  const { line1, lines } = data;

  /**JSX**/
  return (
    <TableSectionWrapper>
      <BasicHeader
        hasVerticalOrnament={false}
        hasBox={true}
        text={allHeaders.tableHeaders[0]}
      />
      <TableWrapper>
        <thead>
          <tr>
            <HeaderCellMulticolor
              label={line1.label}
              colSpan={2}
              tailwindStyle="bg-greyShade2 group-hover:bg-corpo"
            />
            <HeaderCellMulticolor
              label={line1.value}
              colSpan={2}
              tailwindStyle="bg-greyShade2 group-hover:bg-corpo"
            />
          </tr>
        </thead>
        <tbody>
          <tr>
            {lines[0].map((cellData, i) => (
              <HeaderCellMulticolor
                key={i}
                label={cellData}
                colSpan={1}
                tailwindStyle={i === 3 ? 'bg-vB ' : 'bg-greyShade2 '}
              />
            ))}
          </tr>
          <tr>
            {lines[1].map((cellData, i) => (
              <HeaderCellMulticolor
                key={i}
                label={cellData}
                colSpan={1}
                tailwindStyle={
                  i === 3
                    ? 'bg-vB '
                    : i === 0
                    ? 'bg-greyShade2 '
                    : 'bg-greyTint2 '
                }
                textStyle={
                  i === 3
                    ? 'text-xs text-light text-center'
                    : i === 0
                    ? 'text-xs text-light text-center '
                    : 'text-xs text-dark text-center '
                }
              />
            ))}
          </tr>
        </tbody>
      </TableWrapper>
    </TableSectionWrapper>
  );
};

export const CreateTable2 = (data: CatalogItemVer1_5bType) => {
  const { header, tableBody } = data;
  const temp = tableBody.map(rowData => {
    const part1 = [rowData[0], rowData[1]];
    const part2 = rowData.slice(2);
    return [part1, ...part2];
  });

  /**JSX**/
  return (
    <TableSectionWrapper>
      <BasicHeader
        hasVerticalOrnament={false}
        hasBox={true}
        text={allHeaders.tableHeaders[0]}
      />
      <TableWrapper>
        <thead>
          <tr>
            <HeaderCellMulticolor
              label={header.label}
              colSpan={2}
              tailwindStyle="bg-greyShade2"
            />
            <HeaderCellMulticolor
              label={header.value}
              colSpan={4}
              tailwindStyle="bg-greyShade2"
              // tailwindStyle="bg-greyTint2 group-hover:bg-light"
              // textStyle="text-center text-xs text-dark font-medium"
            />
          </tr>
        </thead>
        <tbody>
          {temp.map((rowsData, i) => {
            return rowsData.map((rowData, j) => {
              if (j === 0) {
                return (
                  <tr key={j}>
                    <HeaderCellMulticolor
                      label={rowData[0]}
                      colSpan={2}
                      rowSpan={4}
                      tailwindStyle="bg-greyShade2 hover:bg-corpo"
                    />
                    <HeaderCellMulticolor
                      label={rowData[1]}
                      colSpan={4}
                      tailwindStyle="bg-greyTint2 hover:bg-light"
                      textStyle="text-dark text-xs text-center"
                    />
                  </tr>
                );
              }
              return (
                <tr key={j}>
                  <HeaderCellMulticolor
                    label={rowData as string}
                    colSpan={4}
                    tailwindStyle="bg-greyTint2 hover:bg-light"
                    textStyle="text-dark text-xs text-center"
                  />
                </tr>
              );
            });
          })}
        </tbody>
      </TableWrapper>
    </TableSectionWrapper>
  );
};
