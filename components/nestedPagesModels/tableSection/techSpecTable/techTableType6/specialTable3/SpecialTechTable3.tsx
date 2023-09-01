import TableWrapper from '@/components/basic/tables/_atoms/tableWrapper/TableWrapper';
import HeaderCellMulticolor from '@/components/basic/tables/mixed/_atoms/headerStaff/HeaderCellMulticolor';
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import { allHeaders } from '@/data/textData';

/**TS**/
interface Props {
  tableHeader: string[];
  tableBody: string[][];
  tableBodySpecialRows: string[][];
}
const SpecialTechTable3 = (props: Props) => {
  /**JSX**/
  return (
    <div className="flex flex-col w-full gap-y-16">
      <div className="flex flex-col w-full gap-y-6">
        <BasicHeader
          hasVerticalOrnament={false}
          hasBox={true}
          text={allHeaders.tableHeaders[1]}
        />
        <TableWrapper>
          <thead>
            <tr>
              {props.tableHeader.map((cellData, i) => (
                <HeaderCellMulticolor
                  key={i}
                  label={cellData}
                  colSpan={2}
                  tailwindStyle={`${i > 0 ? 'bg-greyShade2' : 'bg-dark'}`}
                />
              ))}
            </tr>
            <tr className="group">
              {props.tableBody[0].map((cellData, i) => (
                <HeaderCellMulticolor
                  key={i}
                  label={cellData}
                  colSpan={i === 0 ? 2 : 6}
                  tailwindStyle={`${
                    i === 0
                      ? `bg-greyShade2 group-hover:bg-corpo`
                      : `bg-greyTint2 group-hover:bg-light`
                  }`}
                  textStyle={`${
                    i === 0
                      ? 'text-xs text-light text-center'
                      : 'text-xs text-dark text-center'
                  }`}
                />
              ))}
            </tr>
          </thead>
          <tbody>
            {props.tableBody.slice(1).map((rowData, i) => (
              <tr className="group" key={i}>
                {rowData.map((cellData, j) => (
                  <HeaderCellMulticolor
                    key={j}
                    label={cellData}
                    colSpan={j === 0 ? 2 : 6}
                    tailwindStyle={`${
                      j === 0
                        ? `bg-greyShade2 group-hover:bg-corpo`
                        : `bg-greyTint2 group-hover:bg-light`
                    }`}
                    textStyle={`${
                      j === 0
                        ? 'text-xs text-light text-center'
                        : 'text-xs text-dark text-center'
                    }`}
                  />
                ))}
              </tr>
            ))}
            {/* {props.tableBodySpecialRows.map((rowData, i)=> <tr key={i}></tr>)} */}
            {
              <tr className="group">
                {props.tableBodySpecialRows[0].map((cellData, i) => {
                  return (
                    <HeaderCellMulticolor
                      key={i}
                      label={cellData}
                      colSpan={2}
                      rowSpan={i === 0 ? 2 : 1}
                      tailwindStyle={`${
                        i === 0
                          ? `bg-greyShade2 group-hover:bg-corpo`
                          : `bg-greyTint2 group-hover:bg-light`
                      }`}
                      textStyle={`${
                        i === 0
                          ? 'text-xs text-light text-center'
                          : 'text-xs text-dark text-center'
                      }`}
                    />
                  );
                })}
              </tr>
            }
            {
              <tr>
                {props.tableBodySpecialRows[1].map((cellData, i) => {
                  return (
                    <HeaderCellMulticolor
                      key={i}
                      label={cellData}
                      colSpan={2}
                      tailwindStyle="bg-greyTint2 hover:bg-light"
                      textStyle="text-xs text-dark text-center"
                    />
                  );
                })}
              </tr>
            }
          </tbody>
        </TableWrapper>
      </div>
    </div>
  );
};

export default SpecialTechTable3;
