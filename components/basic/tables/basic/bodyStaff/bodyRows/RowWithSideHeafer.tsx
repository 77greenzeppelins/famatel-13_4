/**Components**/
import HeaderCell from '../../headerStaff/HeaderCell';
import BodyCell from '../bodyCell/BodyCell';

const RowWithSideHeafer = ({ bodyRowData }: { bodyRowData: string[] }) => {
  /**JSX**/
  return (
    <tr className="group">
      {bodyRowData.map((cellData, i) => {
        if (i === 0) {
          console.log('(i === 0)');
          return <HeaderCell key={i} label={cellData} scope="row" />;
        }
        return <BodyCell key={i} label={cellData} />;
      })}
    </tr>
  );
};

export default RowWithSideHeafer;
