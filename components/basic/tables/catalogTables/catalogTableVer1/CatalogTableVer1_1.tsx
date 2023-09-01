/**Components**/
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import TableWrapper from '../../_atoms/tableWrapper/TableWrapper';
import HeaderCellMulticolor from '../../mixed/_atoms/headerStaff/HeaderCellMulticolor';
import AmperSection1_1 from './bodyStaff/AmperSection1_1';
/**Tailwind Styles**/
import { styles } from '@/styles';
/**Basic Data**/
import { allHeaders } from '@/data/textData';

const CatalogTableVer1_1 = (data: CatalogItemVar1Type) => {
  /**Data Destr...**/
  const { headerTopData, headerBottomData, rowsData } = data;
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
  console.log('CatalogTableVer1_1 / data:', data);

  /**JSX**/
  return (
    <div className="flex flex-col w-full gap-y-6">
      <BasicHeader
        hasVerticalOrnament={false}
        hasBox={true}
        text={allHeaders.tableHeaders[0]}
      />
      <TableWrapper
      // tableStyle={`border-separate border-spacing-[2px] table-fixed
      // w-[900px]
      // `}
      >
        <thead className={`text-xs uppercase text-light `}>
          <tr className="">
            {firstHeaderRow.map((cellData, i) => (
              <HeaderCellMulticolor
                key={i}
                textStyle={`${
                  i === 1
                    ? 'text-light text-center text-xs'
                    : i === 2
                    ? 'text-dark text-center text-xs'
                    : i === 3
                    ? 'text-light text-center text-xs'
                    : i === 4
                    ? 'text-dark text-center text-xs'
                    : 'bg-dark'
                }`}
                //___px-[50px]
                tailwindStyle={`${i === 0 ? 'px-2 py-3' : 'px-0 py-3'} 
              ${
                i === 1
                  ? 'bg-vV'
                  : i === 2
                  ? 'bg-vmL'
                  : i === 3
                  ? 'bg-vG'
                  : i === 4
                  ? 'bg-vmL'
                  : 'bg-dark'
              }
                i === 0 ? 'w-[300px] max-w-[300px]' : 'w-[150px] max-w-[150px]'
              }`}
                label={cellData}
                colSpan={i == 0 ? 6 : 2}
                rowSpan={i === 0 ? 2 : 1}
              />
            ))}
          </tr>
          <tr>
            {secondHeaderRow.map((cellData, i) => (
              <HeaderCellMulticolor
                key={i}
                tailwindStyle={` ${cellPaddings}  
             ${
               i === 0
                 ? 'bg-vV'
                 : i === 1
                 ? 'bg-vmL'
                 : i === 2
                 ? 'bg-vG'
                 : i === 3
                 ? 'bg-vmL'
                 : 'bg-dark'
             }
              `}
                textStyle={`${
                  i === 0
                    ? 'text-light text-center text-xs'
                    : i === 1
                    ? 'text-dark text-center text-xs'
                    : i === 2
                    ? 'text-light text-center text-xs'
                    : i === 3
                    ? 'text-dark text-center text-xs'
                    : 'bg-dark'
                }`}
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
                  // colSpan={
                  //   i > 2 && bottomHeader.length === 7
                  //     ? 2
                  //     : i > 2 && bottomHeader.length < 7
                  //     ? 4
                  //     : 1
                  // }
                  colSpan={2}
                  rowSpan={1}
                />
              );
            })}
          </tr>
        </thead>
        {/*********************************************************B O D Y****/}
        <tbody>
          {rowsData.map((amperRowsData, i) => (
            <AmperSection1_1
              key={i}
              data={amperRowsData}
              headerColors={firstHeaderRowRestCells}
            />
          ))}
        </tbody>
      </TableWrapper>
    </div>
  );
};

export default CatalogTableVer1_1;
