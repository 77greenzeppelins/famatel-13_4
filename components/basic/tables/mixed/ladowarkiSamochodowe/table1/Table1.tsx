import React from 'react';
/**Components**/
import TableWrapper from '../../../_atoms/tableWrapper/TableWrapper';
import HeaderCell from '../../_atoms/headerStaff/HeaderCell';
import BodyCell from '../../_atoms/bodyStaff/BodyCell';
/**Tailwind Styles**/
import { styles } from '@/styles';
/**Basic Data**/
import { ladowarkiSamochodowe_feat_2_data } from '@/data/modelsData/cat_7_ladowarki-samochodowe/cat7_ladowarkiSamochodowe_data';

const Table1 = () => {
  /**Data Destr...**/

  const { header, bodyRows } = ladowarkiSamochodowe_feat_2_data;

  const {
    tableStyles: { cellPaddings },
  } = styles;

  /**...**/
  const createRow = (rowData: string[]) => {
    return rowData.map((cellData, i) => {
      return <BodyCell key={i} label={cellData} />;
    });
  };

  const createTableBody = bodyRows.map((rowData, i) => {
    return (
      <tr key={i}>
        {rowData.map((cellData, i) => {
          if (i === 0) {
            return (
              <HeaderCell
                key={i}
                label={cellData}
                colSpan={2}
                rowSpan={1}
                textStyles={'text-left text-xs text-light'}
              />
            );
          }
          return <BodyCell key={i} label={cellData} colSpan={1} />;
        })}
      </tr>
    );
  });

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
                i === 0 ? 'w-[600px]' : 'w-[300px]'
              }`}
              label={label}
              colSpan={i === 0 ? 2 : 1}
              rowSpan={1}
            />
          ))}
        </tr>
      </thead>
      {/****************************************************************Body*/}
      <tbody>{createTableBody}</tbody>
    </TableWrapper>
  );
};

export default Table1;

//--------------------------------------------------------------------------------------------
// const createTableBlock = (
//   headerLabel: string,
//   firstRowData: string[],
//   restRows: string[][]
// ) => {
//   return (
//     <React.Fragment>
//       <tr>
//         <HeaderCell label={headerLabel} colSpan={1} rowSpan={6} />
//         {firstRowData.map((cellData, i) => (
//           <BodyCell key={i} label={cellData} colSpan={1} />
//         ))}
//       </tr>
//       {restRows.map((rowData, i) => (
//         <tr key={i}>{createRow(rowData)}</tr>
//       ))}
//     </React.Fragment>
//   );
// };

// const createTableBlocks = sections.map(
//   ({ sideHeaderSpan, bodyRow, bodyRows }, i) => {
//     return createTableBlock(sideHeaderSpan, bodyRow, bodyRows);
//   }
// );
