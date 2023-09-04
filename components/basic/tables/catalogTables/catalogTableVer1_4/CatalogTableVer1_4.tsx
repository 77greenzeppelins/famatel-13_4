import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import TableWrapper from '../../_atoms/tableWrapper/TableWrapper';
import TableSectionWrapper from '@/components/nestedPagesModels/_atoms/TableSectionWrapper/TableSectionWrapper';
/**Basic Data*/
import { allHeaders } from '@/data/textData';
import HeaderCellMulticolor from '../../mixed/_atoms/headerStaff/HeaderCellMulticolor';

const CatalogTableVer1_4 = (data: CatalogItemVar2Type) => {
  /*
  ___1. The filter(Boolean) method removes all falsy values from the array, including null values. This will give you an array with length 5 that doesn’t include items with null values.
  ___ 2. use the "as" keyword to cast the resulting array to a type that doesn’t include null values
  */
  const resultArray = Object.values(data)
    .map(line => {
      return typeof line === 'string'
        ? null
        : {
            label: line.label,
            value: line.value,
          };
    })
    .filter(Boolean) as { label: string; value: string }[];

  // console.log('resultArray', resultArray);

  // const tempTableBody = resultArray.map(item => {
  //   if (
  //     item?.label === 'Ampery' ||
  //     item?.label === 'Bieguny' ||
  //     item?.label === 'Ochrona' ||
  //     item?.label === 'Opakowanie' ||
  //     item?.label === 'Waga (g)'
  //   ) {
  //     return item;
  //   }
  // });

  // console.log('tempTableBody', tempTableBody);
  // const tableBody = tempTableBody
  //   .filter(item => item !== undefined)
  //   .map((item, i) => {
  //     if (typeof item === 'undefined') {
  //       return '';
  //     }
  //     return item;
  //   });
  // console.log('tableBody', tableBody);

  // const tempHeaderBody = resultArray.map(item => {
  //   //___Standard
  //   if (item?.value.split(' ').find(item => item === 'Standard')) {
  //     return item;
  //   }
  // });

  /**JSX**/
  return (
    <TableSectionWrapper>
      <BasicHeader
        hasVerticalOrnament={false}
        hasBox={true}
        text={allHeaders.tableHeaders[0]}
      />
      <TableWrapper>
        <tbody>
          {resultArray.map((rowData, i) => {
            if (typeof rowData === 'string') {
              return null;
            }
            return (
              <tr className="group" key={i}>
                <HeaderCellMulticolor
                  label={rowData.label}
                  colSpan={2}
                  tailwindStyle="bg-greyShade2 group-hover:bg-corpo"
                />
                <HeaderCellMulticolor
                  label={rowData.value}
                  colSpan={2}
                  tailwindStyle="bg-greyTint2 group-hover:bg-light"
                  textStyle="text-center text-xs text-dark font-medium"
                />
              </tr>
            );
          })}
        </tbody>
      </TableWrapper>
    </TableSectionWrapper>
  );
};

export default CatalogTableVer1_4;
