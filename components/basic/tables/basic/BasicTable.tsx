/**Components**/
import TableWrapper from '../_atoms/tableWrapper/TableWrapper';
import HeaderCell from './headerStaff/HeaderCell';
import RowWithSideHeader from './bodyStaff/bodyRows/RowWithSideHeafer';

const BasicTable = ({
  children,
  headerData,
  bodyData,
  headerColSpan,
  sideHeaderStyle,
  bodyColSpans,
  hasHeader = true,
}: BasicTableDataType) => {
  /**JSX**/
  return (
    <TableWrapper>
      {children}
      {headerData[0] !== 'noData' && (
        <thead className="text-xs uppercase text-light bg-greyShade2">
          <tr>
            {headerData.map((cell, i) => (
              <HeaderCell
                key={i}
                label={cell}
                colSpan={headerColSpan as number}
              />
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {bodyData.map((bodyRowData, i) => (
          <RowWithSideHeader
            key={i}
            bodyRowData={bodyRowData}
            sideHeaderStyle={sideHeaderStyle}
            bodyColSpans={bodyColSpans}
          />
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default BasicTable;
