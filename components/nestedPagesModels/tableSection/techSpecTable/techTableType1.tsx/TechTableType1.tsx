'use client';
/**Components**/
import TableWrapper from '@/components/basic/tables/_atoms/tableWrapper/TableWrapper';
import HeaderCellMulticolor from '@/components/basic/tables/mixed/_atoms/headerStaff/HeaderCellMulticolor';
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
/**Basic Data**/
import { allHeaders } from '@/data/textData';
import { styles } from '@/styles';

const TechTableType1 = (data: WtyczkaGniazdoType1TechDataType) => {
  /**Data destr...**/
  const { ampers, poles, bodyData, connectionType, mm, weight } = data;

  /**JSX**/
  return (
    <div className="flex flex-col w-full gap-y-16">
      <div className="flex flex-col w-full gap-y-6">
        <BasicHeader
          hasVerticalOrnament={false}
          hasBox={true}
          text={allHeaders.tableHeaders[1]}
        />
        <div className="flex flex-col w-full gap-y-4">
          <TableWrapper>
            <thead className={`text-xs uppercase text-light `}>
              <tr>
                {ampers.map((cellData, i) => {
                  if (i === 0) {
                    return (
                      <HeaderCellMulticolor
                        key={i}
                        label={cellData}
                        colSpan={2}
                      />
                    );
                  }
                  return (
                    <HeaderCellMulticolor
                      key={i}
                      label={cellData}
                      colSpan={poles.length === 5 ? 2 : 3}
                      tailwindStyle="bg-greyShade2"
                    />
                  );
                })}
              </tr>
              <tr>
                {poles.map((cellData: string, i: number) => {
                  if (i === 0) {
                    return (
                      <HeaderCellMulticolor
                        key={i}
                        label={cellData}
                        colSpan={2}
                        tailwindStyle="bg-greyShade2"
                      />
                    );
                  }
                  return (
                    <HeaderCellMulticolor
                      key={i}
                      label={cellData}
                      colSpan={
                        ampers.length === 3 && poles.length === 3 ? 3 : 1
                      }
                      tailwindStyle={`bg-greyShade2 ${styles.tableStyles.cellMinWidth1}`}
                    />
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {bodyData.map((rowData: string[], i: number) => {
                return (
                  <tr className="group" key={i}>
                    {rowData.map((cellData, i) => {
                      if (i === 0) {
                        return (
                          <HeaderCellMulticolor
                            key={i}
                            label={cellData}
                            colSpan={2}
                            tailwindStyle="bg-greyShade2 group-hover:bg-corpo"
                          />
                        );
                      }
                      return (
                        <HeaderCellMulticolor
                          key={i}
                          label={cellData}
                          // colSpan={1}
                          colSpan={
                            ampers.length === 3 && rowData.length === 3 ? 3 : 1
                          }
                          tailwindStyle="bg-greyTint2 group-hover:bg-light"
                          textStyle="text-center text-dark text-xs"
                        />
                      );
                    })}
                  </tr>
                );
              })}
              <tr className="group">
                {connectionType.map((cellData: string, i: number) => {
                  if (i === 0) {
                    return (
                      <HeaderCellMulticolor
                        key={i}
                        label={cellData}
                        colSpan={2}
                        tailwindStyle="bg-greyShade2 group-hover:bg-corpo"
                      />
                    );
                  }
                  return (
                    <HeaderCellMulticolor
                      key={i}
                      label={cellData}
                      colSpan={
                        ampers.length === 2 ? 3 : poles.length === 5 ? 4 : 6
                      }
                      // colSpan={poles.length === 5 ? 2 : 3}
                      tailwindStyle="bg-greyTint2 group-hover:bg-light"
                      textStyle="text-center text-dark text-xs"
                    />
                  );
                })}
              </tr>
              <tr className="group">
                {mm.map((cellData: string, i: number) => {
                  if (i === 0) {
                    return (
                      <HeaderCellMulticolor
                        key={i}
                        label={cellData}
                        colSpan={2}
                        tailwindStyle="bg-greyShade2 group-hover:bg-corpo"
                      />
                    );
                  }
                  return (
                    <HeaderCellMulticolor
                      key={i}
                      label={cellData}
                      // colSpan={ampers.length === 2 ? 3 : 3}
                      colSpan={
                        ampers.length === 2 ? 3 : poles.length === 5 ? 2 : 3
                      }
                      //colSpan={poles.length === 5 ? 2 : 3}
                      tailwindStyle="bg-greyTint2 group-hover:bg-light"
                      textStyle="text-center text-dark text-xs"
                    />
                  );
                })}
              </tr>
              <tr className="group">
                {weight.map((cellData: string, i: number) => {
                  if (i === 0) {
                    return (
                      <HeaderCellMulticolor
                        key={i}
                        label={cellData}
                        colSpan={2}
                        tailwindStyle="bg-greyShade2 group-hover:bg-corpo"
                      />
                    );
                  }
                  return (
                    <HeaderCellMulticolor
                      key={i}
                      label={cellData}
                      // colSpan={1}
                      colSpan={
                        ampers.length === 3 && weight.length === 3 ? 3 : 1
                      }
                      tailwindStyle="bg-greyTint2 group-hover:bg-light"
                      textStyle="text-center text-dark text-xs"
                    />
                  );
                })}
              </tr>
            </tbody>
          </TableWrapper>
        </div>
      </div>
    </div>
  );
};

export default TechTableType1;
