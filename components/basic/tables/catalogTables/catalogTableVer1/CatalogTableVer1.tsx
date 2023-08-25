import { styles } from '@/styles';
import TableWrapper from '../../_atoms/tableWrapper/TableWrapper';
import HeaderCellMulticolor from '../../mixed/_atoms/headerStaff/HeaderCellMulticolor';
import HeaderCell from '../../mixed/_atoms/headerStaff/HeaderCell';

interface Props {
  data: CatalogItemVar1Type;
}
const CatalogTableVer1 = ({ data }: Props) => {
  /**Data Destr...**/

  const { tableType, headerTopData, headerBottomData, rowsData } = data;
  console.log('CatalogTableVer1 / data:', tableType);

  const {
    tableStyles: { cellPaddings },
  } = styles;

  const firstHeaderRowTemp = headerTopData.slice(1).map(item => item[0]);
  const firstHeaderRowFirstCell = headerTopData[0].join(
    '\u00A0\u00A0\u00A0\u00A0'
  );
  const firstHeaderRow = [firstHeaderRowFirstCell, ...firstHeaderRowTemp];
  const secondHeaderRow = [...headerTopData.slice(1).map(item => item[1])];

  // console.log('firstHeaderRowTemp', firstHeaderRowTemp);
  // console.log('headerTopData', headerTopData);
  // console.log('firstHeaderRow', firstHeaderRow.length);
  const x = headerBottomData[0].map(i => i);
  // const y;
  const bottomHeader = [
    ...x,
    ...headerBottomData
      .slice(1)
      .map(item => item.join('\u00A0\u00A0\u00A0\u00A0')),
  ];

  console.log('bottomHeader', bottomHeader);

  /**JSX**/
  return (
    <TableWrapper>
      <thead className="text-xs uppercase text-light">
        <tr className="">
          {firstHeaderRow.map((cellData, i) => (
            <HeaderCellMulticolor
              key={i}
              tailwindStyle={`${cellPaddings} text-center 
              ${
                i === 1 && firstHeaderRow.length === 5
                  ? `bg-vY`
                  : i === 2 && firstHeaderRow.length === 5
                  ? 'bg-vB'
                  : i === 3 && firstHeaderRow.length === 5
                  ? 'bg-vR'
                  : i === 4 && firstHeaderRow.length === 5
                  ? 'bg-vD'
                  : i === 1 && firstHeaderRow.length === 3
                  ? 'bg-vB'
                  : i === 2 && firstHeaderRow.length === 3
                  ? 'bg-vR'
                  : i === 1 && firstHeaderRow.length === 2
                  ? 'bg-vR'
                  : 'bg-dark'
              }
              ${
                i === 0
                  ? 'w-[300px]'
                  : i > 0 && firstHeaderRow.length === 5
                  ? 'w-[200px]'
                  : i > 0 && firstHeaderRow.length === 3
                  ? 'w-[400px]'
                  : i > 0 && firstHeaderRow.length === 3
                  ? 'w-[400px]'
                  : 'w-[300px]'
              }`}
              label={cellData}
              colSpan={
                i === 0
                  ? 3
                  : i > 0 && firstHeaderRow.length === 5
                  ? 2
                  : i > 0 && firstHeaderRow.length === 3
                  ? 4
                  : i > 0 && firstHeaderRow.length === 3
                  ? 4
                  : 4
              }
              rowSpan={i === 0 ? 2 : 1}
            />
          ))}
        </tr>
        <tr>
          {secondHeaderRow.map((cellData, i) => (
            <HeaderCellMulticolor
              key={i}
              // tailwindStyle={`w-1/4 ${cellPaddings} text-center bg-greyShade2 'w-[200px]'`}

              tailwindStyle={`w-1/4 ${cellPaddings} text-center 
              ${
                i === 0 && secondHeaderRow.length === 4
                  ? `bg-vY`
                  : i === 1 && secondHeaderRow.length === 4
                  ? 'bg-vB'
                  : i === 2 && secondHeaderRow.length === 4
                  ? 'bg-vR'
                  : i === 3 && secondHeaderRow.length === 4
                  ? 'bg-vD'
                  : i === 0 && secondHeaderRow.length === 2
                  ? 'bg-vB'
                  : i === 1 && secondHeaderRow.length === 2
                  ? 'bg-vR'
                  : i === 0 && secondHeaderRow.length === 1
                  ? 'bg-vR'
                  : 'bg-dark'
              }
              ${i === 0 ? 'w-[360px]' : 'w-[200px]'}`}
              label={cellData}
              colSpan={secondHeaderRow.length === 4 ? 2 : 4}
              rowSpan={1}
            />
          ))}
        </tr>
        <tr>
          {bottomHeader.map((item, i) => {
            return (
              <HeaderCell
                key={i}
                label={item}
                tailwindStyle={`${i > 3 ? 'w-[120px]' : 'w-[200px]'} `}
                paddingStyle="py-4 px-2"
                textStyles="text-[10px] text-center"
                colSpan={i < 3 ? 1 : 4}
                rowSpan={1}
              />
            );
          })}
        </tr>
      </thead>
    </TableWrapper>
  );
};

export default CatalogTableVer1;
