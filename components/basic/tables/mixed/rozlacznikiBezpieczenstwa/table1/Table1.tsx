import { styles } from '@/styles';
/**Components**/
import HeaderCell from '../../_atoms/headerStaff/HeaderCell';
import BodyCell from '../../_atoms/bodyStaff/BodyCell';
/**Basic Data**/
import { catalogTable_1_data } from '@/data/modelsData/cat_6_rozlacznikiBezpieczenstwa/cat6_rozlacznikBezpieczenstwa_data';

const Table1 = () => {
  /**Data Destr...**/
  const { header, sections } = catalogTable_1_data;

  const {
    tableStyles: { cellPaddings },
  } = styles;

  /**...*/
  const createRow = (rowData: string[]) => {
    return rowData.map((cellData, i) => {
      return <BodyCell key={i} label={cellData} />;
    });
  };
  const createTableBlock = (
    headerLabel: string,
    firstRowData: string[],
    restRows: string[][]
  ) => {
    return (
      <>
        <tr>
          <HeaderCell label={headerLabel} colSpan={1} rowSpan={6} />
          {firstRowData.map((cellData, i) => (
            <BodyCell key={i} label={cellData} colSpan={1} />
          ))}
        </tr>
        {restRows.map((rowData, i) => (
          <tr key={i}>{createRow(rowData)}</tr>
        ))}
      </>
    );
  };

  const createTableBlocks = sections.map(
    ({ sideHeaderSpan, bodyRow, bodyRows }, i) => {
      return createTableBlock(sideHeaderSpan, bodyRow, bodyRows);
    }
  );

  /**JSX**/
  return (
    <div className="relative w-full pb-10 overflow-x-auto table-scrollbar">
      <table
        className="border-separate border-spacing-[2px] table-fixed w-full "
        //___border-separate border-spacing-[1px]
        //___border-collapse
      >
        <thead className="text-xs uppercase text-light bg-greyShade2">
          <tr>
            {header.map((label, i) => (
              <HeaderCell
                key={i}
                tailwindStyle={`w-1/4 ${cellPaddings} text-center bg-greyShade2 w-[300px]`}
                label={label}
                colSpan={1}
                rowSpan={1}
              />
            ))}
          </tr>
        </thead>
        {/****************************************************************Body*/}
        <tbody>{createTableBlocks}</tbody>
      </table>
    </div>
  );
};

export default Table1;
