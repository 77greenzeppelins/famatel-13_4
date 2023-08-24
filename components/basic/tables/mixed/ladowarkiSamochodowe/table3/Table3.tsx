import React from 'react';
/**Components**/
import TableWrapper from '../../../_atoms/tableWrapper/TableWrapper';
import HeaderCell from '../../_atoms/headerStaff/HeaderCell';
import BodyCell from '../../_atoms/bodyStaff/BodyCell';
/**Tailwind Styles**/
import { styles } from '@/styles';
/**Basic Data**/
import { catalogTable_2_data } from '@/data/modelsData/cat_7_ladowarki-samochodowe/cat7_ladowarkiSamochodowe_data';

const Table3 = () => {
  /**Data Destr...**/
  const { header, tableRow1, tableRowsPart1, tableRow9, tableRowsPart2 } =
    catalogTable_2_data;

  const {
    tableStyles: { cellPaddings },
  } = styles;

  const createSpecRow = (rowData: string[]) => {
    return rowData.map((cellData, i) => {
      if (i === 0) {
        return (
          <HeaderCell
            key={i}
            label={cellData}
            colSpan={1}
            rowSpan={1}
            isTopHeader={false}
          />
        );
      }
      if (i === 1 || i === 2) {
        return <BodyCell key={i} label={cellData} colSpan={2} rowSpan={1} />;
      }
      return <BodyCell key={i} label={cellData} colSpan={1} rowSpan={8} />;
    });
  };

  const createRows = (tableRows: string[][]) => {
    return tableRows.map((rowData, i) => {
      return (
        <tr key={i}>
          {rowData.map((cellData, i) => {
            if (i === 0) {
              return (
                <HeaderCell
                  key={i}
                  label={cellData}
                  colSpan={1}
                  rowSpan={1}
                  isTopHeader={false}
                />
              );
            }
            return (
              <BodyCell key={i} label={cellData} colSpan={2} rowSpan={1} />
            );
          })}
        </tr>
      );
    });
  };

  /**JSX**/
  return (
    <TableWrapper>
      {/****************************************************************Header*/}
      <thead className="text-xs uppercase text-light bg-greyShade2">
        <tr>
          {header.map((label, i) => (
            <HeaderCell
              key={i}
              tailwindStyle={`w-1/4 ${cellPaddings} text-center bg-greyShade2 ${
                i === 0 || i === 3 ? 'w-[180px]' : 'w-[400px]'
              }`}
              label={label}
              colSpan={i === 0 || i === 3 ? 1 : 2}
              rowSpan={1}
            />
          ))}
        </tr>
      </thead>
      {/****************************************************************Body*/}
      <tbody>
        <tr>{createSpecRow(tableRow1)}</tr>
        {createRows(tableRowsPart1)}
        <tr>{createSpecRow(tableRow9)}</tr>
        {createRows(tableRowsPart2)}
      </tbody>
    </TableWrapper>
  );
};

export default Table3;
