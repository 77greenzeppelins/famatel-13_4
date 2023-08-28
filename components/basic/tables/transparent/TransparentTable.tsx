/**Components**/
import TransparentCell from './cell/TransparentCell';

const TransparentTable = ({
  rowsData,
}: {
  rowsData: TransparentTableDataType | TransparentTableSimpleDataType;
}) => {
  /**JSX**/
  return (
    <div
      className="relative w-full pb-10 overflow-x-auto table-scrollbar"
      //___sm:rounded-lg
    >
      <table
        className="w-full border-collapse table-fixed"
        //___border-separate border-spacing-[1px]
        //___border-collapse
      >
        <tbody>
          {rowsData.map((rowData, i) => {
            return (
              <tr key={i} className=" group">
                {rowData.map((cellData, i) => (
                  <TransparentCell key={i} label={cellData} cellIndex={i} />
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransparentTable;
