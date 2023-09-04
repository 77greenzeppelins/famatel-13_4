/**Components**/
import HeaderCell from '../../headerStaff/HeaderCell';
import BodyCell from '../bodyCell/BodyCell';

const RowWithSideHeader = ({
  bodyRowData,
  customeStyle,
  sideHeaderStyle,
  bodyColSpans,
}: {
  bodyRowData: string[];
  bodyColSpans?: number[];
  customeStyle?: string;
  sideHeaderStyle?: string;
}) => {
  /**JSX**/
  return (
    <tr className="group">
      {bodyRowData.map((cellData, i) => {
        if (i === 0) {
          // console.log('(i === 0)');
          return (
            <HeaderCell
              key={i}
              label={cellData}
              scope="row"
              customeStyle={sideHeaderStyle}
              colSpan={bodyColSpans ? bodyColSpans[i] : 1}
            />
          );
        }
        return (
          <BodyCell
            key={i}
            label={cellData}
            colSpan={bodyColSpans ? bodyColSpans[i] : 1}
          />
        );
      })}
    </tr>
  );
};

export default RowWithSideHeader;
