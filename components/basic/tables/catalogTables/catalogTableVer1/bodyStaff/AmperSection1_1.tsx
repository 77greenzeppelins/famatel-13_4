/**Components**/
import HeaderCellMulticolor from '../../../mixed/_atoms/headerStaff/HeaderCellMulticolor';

const AmperSection1_1 = ({
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
          colSpan={2}
          rowSpan={data.length}
        />

        {firstRowRest.map((cellData, i) => (
          <HeaderCellMulticolor
            key={i}
            tailwindStyle={`${
              i === 2
                ? 'bg-vV'
                : i === 3
                ? 'bg-vmL'
                : i === 4
                ? 'bg-vG'
                : i === 5
                ? 'bg-vmL'
                : 'bg-grey'
            } `}
            paddingStyle="py-4 px-2"
            textStyle={`${
              i === 2
                ? 'text-light text-center text-xs'
                : i === 3
                ? 'text-dark text-center text-xs'
                : i === 4
                ? 'text-light text-center text-xs'
                : i === 5
                ? 'text-dark text-center text-xs'
                : 'text-light text-xs'
            }`}
            label={cellData}
            colSpan={2}
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
                i === 2
                  ? 'bg-vV'
                  : i === 3
                  ? 'bg-vmL'
                  : i === 4
                  ? 'bg-vG'
                  : i === 5
                  ? 'bg-vmL'
                  : 'bg-grey'
              } `}
              paddingStyle="py-4 px-2"
              textStyle={`${
                i === 2
                  ? 'text-light text-center text-xs'
                  : i === 3
                  ? 'text-dark text-center text-xs'
                  : i === 4
                  ? 'text-light text-center text-xs'
                  : i === 5
                  ? 'text-dark text-center text-xs'
                  : 'text-light text-xs'
              }`}
              label={cellData}
              colSpan={2}
              rowSpan={1}
            />
          ))}
        </tr>
      ))}
    </>
  );
};

export default AmperSection1_1;
