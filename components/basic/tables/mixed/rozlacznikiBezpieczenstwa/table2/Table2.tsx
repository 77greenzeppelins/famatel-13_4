/**Components**/
import TableWrapper from '../../../_atoms/tableWrapper/TableWrapper';
import HeaderCell from '../../_atoms/headerStaff/HeaderCell';
import BodyCell from '../../_atoms/bodyStaff/BodyCell';
/**Tailwind Styles**/
import { styles } from '@/styles';
/**Basic Data**/
import { catalogTable_2_data } from '@/data/modelsData/cat_6_rozlacznikiBezpieczenstwa/cat6_rozlacznikBezpieczenstwa_data';

const Table2 = () => {
  /**Data Destr...**/
  const {
    tableStyles: { cellPaddings },
  } = styles;

  const {
    topHeaderLeftCol,
    sideHeaderSpan,
    topHeaderLine1,
    topHeaderLine2,
    topHeaderLine3,
    bodyRows1,
    bodyRows2,
  } = catalogTable_2_data;
  /**...*/
  const createRow = (rowData: string[]) => {
    return rowData.map((cellData, i) => {
      if (i === 0) {
        return <HeaderCell key={i} label={cellData} colSpan={2} />;
      }
      return <BodyCell key={i} label={cellData} />;
    });
  };

  /**JSX**/
  return (
    <TableWrapper>
      <thead className="text-xs uppercase text-light bg-greyShade2">
        <tr>
          {/* Part 1 */}
          <HeaderCell
            tailwindStyle={`w-2/12 ${cellPaddings} text-center bg-greyShade2 w-[200px]`}
            label={topHeaderLeftCol}
            colSpan={2}
            rowSpan={3}
          />

          {/* Part 2 - Row 1 */}
          <HeaderCell
            tailwindStyle={`w-10/12 ${cellPaddings} text-center bg-greyShade2 w-[800px]`}
            label={topHeaderLine1}
            colSpan={10}
          />
        </tr>

        <tr>
          {/* Part 2 - Row 2 */}
          <HeaderCell label={topHeaderLine2} colSpan={10} />
        </tr>

        {/* Part 2 - Row 3 */}
        <tr>
          {topHeaderLine3.map((label, i) => (
            <HeaderCell key={i} label={label} colSpan={2} />
          ))}
        </tr>
      </thead>
      {/****************************************************************Body*/}
      <tbody>
        <tr>
          <HeaderCell
            tailwindStyle={`w-2/12 w-[200px]`}
            label={sideHeaderSpan[0]}
            colSpan={2}
            rowSpan={2}
          />

          {/* Part 2 - Row 1 */}
          {bodyRows1[0].map((label, i) => (
            <BodyCell
              key={i}
              label={label}
              colSpan={1}
              tailwindStyle={`w-1/12 `}
            />
          ))}
        </tr>
        <tr>
          {bodyRows1[1].map((label, i) => (
            <BodyCell
              key={i}
              label={label}
              colSpan={1}
              tailwindStyle={`w-1/12 `}
            />
          ))}
        </tr>
        {bodyRows2.map((rowData, i) => (
          <tr key={i}>{createRow(rowData)}</tr>
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default Table2;
