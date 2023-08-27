/**Components**/
import HeaderCell from '../../headerStaff/HeaderCell';
import BodyCell from '../bodyCell/BodyCell';

const RowWithSideHeader = ({
  bodyRowData,
  customeStyle,
  sideHeaderStyle,
}: {
  bodyRowData: string[];
  customeStyle?: string;
  sideHeaderStyle?: string;
}) => {
  /**JSX**/
  return (
    <tr className="group">
      {bodyRowData.map((cellData, i) => {
        if (i === 0) {
          console.log('(i === 0)');
          return (
            <HeaderCell
              key={i}
              label={cellData}
              scope="row"
              customeStyle={sideHeaderStyle}
            />
          );
        }
        return <BodyCell key={i} label={cellData} />;
      })}
    </tr>
  );
};

export default RowWithSideHeader;
