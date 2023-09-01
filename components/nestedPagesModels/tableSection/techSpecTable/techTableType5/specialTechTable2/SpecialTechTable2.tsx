/**Components**/
import TableWrapper from '@/components/basic/tables/_atoms/tableWrapper/TableWrapper';
import HeaderCellMulticolor from '@/components/basic/tables/mixed/_atoms/headerStaff/HeaderCellMulticolor';
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
/**Basic Data**/
import { allHeaders } from '@/data/textData';

interface Props {
  headeLine1: string[];
  headeLine2: string[];
  tableBody: string[][];
}
const SpecialTechTable2 = ({ headeLine1, headeLine2, tableBody }: Props) => {
  console.log('....SpecialTechTable2');
  /**JSX**/
  return (
    <div className="flex flex-col w-full gap-y-6">
      <BasicHeader
        hasVerticalOrnament={false}
        hasBox={true}
        text={allHeaders.tableHeaders[1]}
      />
      <TableWrapper>
        <thead>
          <tr>
            {headeLine1.map((cellData, i) => (
              <HeaderCellMulticolor
                key={i}
                label={cellData}
                colSpan={i === 0 ? 2 : 6}
                tailwindStyle={i === 0 ? 'bg-dark' : 'bg-greyShade2'}
              />
            ))}
          </tr>
          <tr>
            {headeLine2.map((cellData, i) => (
              <HeaderCellMulticolor
                key={i}
                label={cellData}
                colSpan={2}
                tailwindStyle={i === 0 ? 'bg-greyShade2' : 'bg-greyTint2'}
                textStyle={
                  i === 0
                    ? 'text-xs text-center text-light'
                    : 'text-xs text-center text-dark'
                }
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {tableBody.map((rowData, i) => (
            <tr className="group" key={i}>
              {rowData.map((cellData, j) => (
                <HeaderCellMulticolor
                  key={j}
                  label={cellData}
                  colSpan={2}
                  tailwindStyle={
                    j === 0
                      ? 'bg-greyShade2 group-hover:bg-corpo'
                      : 'bg-greyTint2 group-hover:bg-light'
                  }
                  textStyle={
                    j === 0
                      ? 'text-xs text-center text-light'
                      : 'text-xs text-center text-dark'
                  }
                />
              ))}
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </div>
  );
};

export default SpecialTechTable2;
