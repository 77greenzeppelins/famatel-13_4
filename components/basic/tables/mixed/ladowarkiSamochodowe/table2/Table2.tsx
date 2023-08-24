import React from 'react';
/**Components**/
import TableWrapper from '../../../_atoms/tableWrapper/TableWrapper';
import HeaderCell from '../../_atoms/headerStaff/HeaderCell';
import BodyCell from '../../_atoms/bodyStaff/BodyCell';
/**Tailwind Styles**/
import { styles } from '@/styles';
/**Basic Data**/
import { catalogTable_1_data } from '@/data/modelsData/cat_7_ladowarki-samochodowe/cat7_ladowarkiSamochodowe_data';

const Table2 = () => {
  /**Data Destr...**/
  const { header, tableRow1, tableRowsPart1, tableRow5, tableRowsPart2 } =
    catalogTable_1_data;

  const {
    tableStyles: { cellPaddings },
  } = styles;

  const firstRow = tableRow1.map((cellData, i) => {
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
    if (i === 1) {
      return <BodyCell key={i} label={cellData} colSpan={2} rowSpan={1} />;
    }
    if (i === 2) {
      return <BodyCell key={i} label={cellData} colSpan={2} rowSpan={4} />;
    }
    return <BodyCell key={i} label={cellData} colSpan={1} rowSpan={8} />;
  });

  const fifthRow = tableRow5.map((cellData, i) => {
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
    if (i === 1) {
      return <BodyCell key={i} label={cellData} colSpan={2} rowSpan={1} />;
    }
    return <BodyCell key={i} label={cellData} colSpan={2} rowSpan={4} />;
  });

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
        <tr>{firstRow}</tr>
        {createRows(tableRowsPart1)}
        <tr>{fifthRow}</tr>
        {createRows(tableRowsPart2)}
      </tbody>
    </TableWrapper>
  );
};

export default Table2;
