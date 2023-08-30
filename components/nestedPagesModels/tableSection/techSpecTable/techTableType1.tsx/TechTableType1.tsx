'use client';
import TableWrapper from '@/components/basic/tables/_atoms/tableWrapper/TableWrapper';
import HeaderCellMulticolor from '@/components/basic/tables/mixed/_atoms/headerStaff/HeaderCellMulticolor';
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import { allHeaders } from '@/data/textData';
import { styles } from '@/styles';

interface Props {
  data: WtyczkaGniazdoType1TechDataType;
}

//___: WtyczkiGniazdaType1TechDataType
const TechTableType1 = (data: WtyczkaGniazdoType1TechDataType) => {
  const { ampers, poles, bodyData, connectionType, mm, weight } = data;
  console.log('data', data);
  /**JSX**/
  return (
    <div className="flex flex-col w-full gap-y-16">
      <div className="flex flex-col w-full gap-y-6">
        <BasicHeader
          hasVerticalOrnament={false}
          hasBox={true}
          text={allHeaders.tableHeaders[1]}
          // text={data.tableType}
        />
        <div className="flex flex-col w-full gap-y-4">
          <TableWrapper
          // tableStyle={`border-separate border-spacing-[2px] table-fixed
          // w-[900px]
          // `}
          >
            <thead className={`text-xs uppercase text-light `}>
              <tr>
                {ampers.map((cellData: string, i: number) => {
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
                      colSpan={3}
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
                  <tr key={i}>
                    {rowData.map((cellData, i) => {
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
                          // colSpan={1}
                          colSpan={
                            ampers.length === 3 && rowData.length === 3 ? 3 : 1
                          }
                          tailwindStyle="bg-grey"
                        />
                      );
                    })}
                  </tr>
                );
              })}
              <tr>
                {connectionType.map((cellData: string, i: number) => {
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
                      colSpan={ampers.length === 2 ? 3 : 6}
                      tailwindStyle="bg-grey"
                    />
                  );
                })}
              </tr>
              <tr>
                {mm.map((cellData: string, i: number) => {
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
                      colSpan={ampers.length === 2 ? 3 : 3}
                      tailwindStyle="bg-grey"
                    />
                  );
                })}
              </tr>
              <tr>
                {weight.map((cellData: string, i: number) => {
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
                      // colSpan={1}
                      colSpan={
                        ampers.length === 3 && weight.length === 3 ? 3 : 1
                      }
                      tailwindStyle="bg-grey"
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
