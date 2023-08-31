/**Components**/
import TableWrapper from '@/components/basic/tables/_atoms/tableWrapper/TableWrapper';
import HeaderCellMulticolor from '@/components/basic/tables/mixed/_atoms/headerStaff/HeaderCellMulticolor';
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
/**Basic Data**/
import { allHeaders } from '@/data/textData';

const RegularColumnsTable = (data: WtyczkaGniazdoType2TechDataType) => {
  /**Data destr...**/
  const { header, tableBody } = data;
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
              {header.map((cellData, i) => (
                <HeaderCellMulticolor
                  key={i}
                  label={cellData}
                  colSpan={1}
                  tailwindStyle={`${i > 0 ? 'bg-greyShade2' : 'bg-dark'}`}
                />
              ))}
            </tr>
          </thead>
          <tbody>
            {tableBody.map((rowData, i) => (
              <tr className="group" key={i}>
                {rowData.map((cellData, j) => {
                  if (j === 0) {
                    return (
                      <HeaderCellMulticolor
                        key={j}
                        label={cellData}
                        colSpan={1}
                        tailwindStyle="bg-greyShade2 group-hover:bg-corpo"
                      />
                    );
                  }
                  return (
                    <HeaderCellMulticolor
                      key={j}
                      label={cellData}
                      colSpan={1}
                      tailwindStyle="bg-greyTint2 group-hover:bg-light"
                      textStyle="text-center text-xs text-dark"
                    />
                  );
                })}
              </tr>
            ))}
          </tbody>
        </TableWrapper>
      </div>{' '}
    </div>
  );
};

export default RegularColumnsTable;
