import React from 'react';
import HeaderCellMulticolor from '../../../mixed/_atoms/headerStaff/HeaderCellMulticolor';

const AmperSection = ({
  data,
  headerColors,
}: {
  data: string[][];
  headerColors: string[];
}) => {
  //   console.log('AmperSection / data:', data);
  const firstRowAmper = data[0][0];
  const firstRowRest = data[0].slice(1);

  const restRows = data.slice(1);
  //   console.log('AmperSection / firstRow:', firstRowAmper);
  //   console.log('AmperSection / firstRowRest:', firstRowRest);
  //   console.log('AmperSection / headerColors:', headerColors);

  /**JSX**/
  return (
    <>
      <tr>
        <HeaderCellMulticolor
          label={firstRowAmper}
          tailwindStyle="bg-greyShade2"
          paddingStyle="py-4 px-2"
          textStyle="text-xs text-center text-light"
          colSpan={1}
          //   rowSpan={restRows.length === 0 ? 1 : 3}
          rowSpan={data.length}
        />

        {firstRowRest.map((cellData, i) => (
          <HeaderCellMulticolor
            key={i}
            tailwindStyle={`${
              headerColors[i - 2] === '110V'
                ? 'bg-vY hover:bg-vtY'
                : headerColors[i - 2] === '230V'
                ? 'bg-vB hover:bg-vtB'
                : headerColors[i - 2] === '400V'
                ? 'bg-vR hover:bg-vtR'
                : headerColors[i - 2] === '500V'
                ? 'bg-vD hover:bg-vtD'
                : 'bg-grey'
            } `}
            paddingStyle="py-4 px-2"
            textStyle="text-xs text-center text-light"
            label={cellData}
            // label={`${i.toString()} / ${firstRowRest.length.toString()}`}
            colSpan={
              i > 1 && firstRowRest.length === 6
                ? 2
                : i > 1 && firstRowRest.length < 6
                ? 4
                : 1
            }
            //   colSpan={1}
            rowSpan={1}
          />
        ))}
      </tr>
      {restRows.map((rowData, i) => (
        <tr key={i}>
          {rowData.map((cellData, i) => (
            <HeaderCellMulticolor
              key={i}
              tailwindStyle={`${
                headerColors[i - 2] === '110V'
                  ? 'bg-vY hover:bg-vtY'
                  : headerColors[i - 2] === '230V'
                  ? 'bg-vB hover:bg-vtB'
                  : headerColors[i - 2] === '400V'
                  ? 'bg-vR hover:bg-vtR'
                  : headerColors[i - 2] === '500V'
                  ? 'bg-vD hover:bg-vtD'
                  : 'bg-grey'
              } `}
              paddingStyle="py-4 px-2"
              textStyle="text-xs text-center text-light"
              label={cellData}
              //   label={`${i.toString()} / ${rowData.length.toString()}`}
              colSpan={
                i > 1 && firstRowRest.length === 6
                  ? 2
                  : i > 1 && firstRowRest.length < 6
                  ? 4
                  : 1
              }
              //   colSpan={1}
              rowSpan={1}
            />
          ))}
        </tr>
      ))}
    </>
  );
};

export default AmperSection;
