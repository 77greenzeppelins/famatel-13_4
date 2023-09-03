/**Components**/
import TableSectionWrapper from '@/components/nestedPagesModels/_atoms/TableSectionWrapper/TableSectionWrapper';
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import TableWrapper from '../../_atoms/tableWrapper/TableWrapper';
import HeaderCellMulticolor from '../../mixed/_atoms/headerStaff/HeaderCellMulticolor';
import AmperSection from './bodyStaff/AmperSection';
/**Tailwind Styles**/
import { styles } from '@/styles';
/**Basic Data**/
import { allHeaders } from '@/data/textData';
import TransparentTable from '../../transparent/TransparentTable';
import MultiTablesWrapper from '@/components/nestedPagesModels/_atoms/TableSectionWrapper/MultiTablesWrapper';

const CatalogTableVer1 = (data: CatalogItemVar1Type) => {
  /**Data Destr...**/
  const { headerTopData, headerBottomData, rowsData, features } = data;
  const {
    tableStyles: { cellPaddings },
  } = styles;

  // const maxColNumber = headerTopData.length;
  // console.log('maxColNumber', maxColNumber);

  /**Data Manipulations**/
  const firstHeaderRowRestCells = headerTopData.slice(1).map(item => item[0]);
  const firstHeaderRowFirstCell = headerTopData[0].join('\u00A0\u00A0\u00A0');
  const firstHeaderRow = [firstHeaderRowFirstCell, ...firstHeaderRowRestCells];

  const secondHeaderRow = [...headerTopData.slice(1).map(item => item[1])];

  const firstThreeCols = headerBottomData[0].map(i => i);
  const bottomHeader = [
    ...firstThreeCols,
    ...headerBottomData.slice(1).map(item => item.join(' ')),
  ];
  //___\u00A0\u00A0\u00A0

  /*
  ___some basic numbers
  */
  // const headerColMax = firstHeaderRow.length;
  // const amperHeaderColNumber = secondHeaderRow.length;
  // const bodyColNumber = secondHeaderRow.length;
  // console.log('CatalogTableVer1 / data:', data);

  const createTransparentTable = () => {
    if (features === undefined) {
      return null;
    }
    return (
      <TableSectionWrapper divStyle="flex flex-col w-full">
        <BasicHeader
          hasVerticalOrnament={false}
          hasBox={true}
          text={allHeaders.tableHeaders[0]}
        />
        <TableWrapper>
          <TransparentTable rowsData={features} />
        </TableWrapper>
      </TableSectionWrapper>
    );
  };

  /**JSX**/
  return (
    <>
      <MultiTablesWrapper>
        <TableSectionWrapper>
          <BasicHeader
            hasVerticalOrnament={false}
            hasBox={true}
            text={allHeaders.tableHeaders[0]}
          />
          <TableWrapper>
            <thead className={`text-xs uppercase text-light `}>
              <tr className="">
                {firstHeaderRow.map((cellData, i) => (
                  <HeaderCellMulticolor
                    key={i}
                    textStyle={`${i === 0 ? 'text-grey' : 'text-light'}`}
                    //___px-[50px]
                    tailwindStyle={`${i === 0 ? 'px-2' : cellPaddings} 
                
              ${
                i === 0
                  ? `bg-dark`
                  : cellData === '110V'
                  ? 'bg-vY'
                  : cellData === '230V'
                  ? 'bg-vB'
                  : cellData === '400V'
                  ? 'bg-vR'
                  : cellData === '500V'
                  ? 'bg-vD'
                  : 'bg-dark'
              }
              ${
                // i === 0
                //   ? 'w-[300px]'
                //   : i > 0 && firstHeaderRowRestCells.length === 4
                //   ? 'w-[150px]'
                //   : i > 0 && firstHeaderRowRestCells.length === 3
                //   ? 'w-[200px]'
                //   : i > 0 && firstHeaderRowRestCells.length < 3
                //   ? 'w-[200px]'
                //   : 'w-[200px]'
                i === 0 ? 'w-[300px] max-w-[300px]' : 'w-[150px] max-w-[150px]'
              }`}
                    label={cellData}
                    colSpan={
                      i > 0 && firstHeaderRow.length === 5
                        ? 2
                        : i > 0 && firstHeaderRow.length < 5
                        ? 4
                        : 3
                    }
                    rowSpan={i === 0 ? 2 : 1}
                  />
                ))}
              </tr>
              <tr>
                {secondHeaderRow.map((cellData, i) => (
                  <HeaderCellMulticolor
                    key={i}
                    tailwindStyle={`w-1/4 ${cellPaddings} text-center 
              ${
                firstHeaderRowRestCells[i] === '110V'
                  ? 'bg-vY'
                  : firstHeaderRowRestCells[i] === '230V'
                  ? 'bg-vB'
                  : firstHeaderRowRestCells[i] === '400V'
                  ? 'bg-vR'
                  : firstHeaderRowRestCells[i] === '500V'
                  ? 'bg-vD'
                  : 'bg-dark'
              }
              `}
                    label={cellData}
                    colSpan={secondHeaderRow.length === 4 ? 2 : 4}
                    rowSpan={1}
                  />
                ))}
              </tr>
              <tr>
                {bottomHeader.map((item, i) => {
                  return (
                    <HeaderCellMulticolor
                      key={i}
                      label={item}
                      tailwindStyle={`${i > 2 ? 'bg-dark' : 'bg-greyShade2'} `}
                      paddingStyle="py-4 px-2"
                      textStyle={`text-[10px] text-center ${
                        i > 2 ? 'text-[10px] text-grey' : 'text-[10px]'
                      } `}
                      colSpan={
                        i > 2 && bottomHeader.length === 7
                          ? 2
                          : i > 2 && bottomHeader.length < 7
                          ? 4
                          : 1
                      }
                      rowSpan={1}
                    />
                  );
                })}
              </tr>
            </thead>
            {/*********************************************************B O D Y****/}
            <tbody>
              {rowsData.map((amperRowsData, i) => (
                <AmperSection
                  key={i}
                  data={amperRowsData}
                  headerColors={firstHeaderRowRestCells}
                />
              ))}
            </tbody>
          </TableWrapper>
        </TableSectionWrapper>
        {createTransparentTable()}
      </MultiTablesWrapper>
    </>
  );
};

export default CatalogTableVer1;
