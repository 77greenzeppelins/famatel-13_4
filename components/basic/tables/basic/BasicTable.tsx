/**Components**/
import TableWrapper from '../_atoms/tableWrapper/TableWrapper';
import HeaderCell from './headerStaff/HeaderCell';
import RowWithSideHeafer from './bodyStaff/bodyRows/RowWithSideHeafer';

const BasicTable = ({ headerData, bodyData }: BasicTableDataType) => {
  /**JSX**/
  return (
    <TableWrapper>
      <thead className="text-xs uppercase text-light bg-greyShade2">
        <tr>
          {headerData.map((cell, i) => (
            <HeaderCell key={i} label={cell} />
          ))}
        </tr>
      </thead>
      <tbody>
        {bodyData.map((bodyRowData, i) => (
          <RowWithSideHeafer key={i} bodyRowData={bodyRowData} />
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default BasicTable;
