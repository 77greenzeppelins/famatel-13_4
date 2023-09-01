import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import TableWrapper from '../../_atoms/tableWrapper/TableWrapper';
import TableSectionWrapper from '@/components/nestedPagesModels/_atoms/TableSectionWrapper/TableSectionWrapper';
/**Basic Data*/
import { allHeaders } from '@/data/textData';
import HeaderCellMulticolor from '../../mixed/_atoms/headerStaff/HeaderCellMulticolor';

const CatalogTableVer2 = (data: CatalogItemVar2Type) => {
  // console.log('CatalogTableVer2 / data:', data);

  const resultArray = Object.values(data).map(line => {
    return typeof line === 'string'
      ? null
      : {
          label: line.label,
          value: line.value,
        };
  });

  const tempTableBody = resultArray.map(item => {
    if (
      item?.label === 'Ampery' ||
      item?.label === 'Bieguny' ||
      item?.label === 'Ochrona' ||
      item?.label === 'Opakowanie' ||
      item?.label === 'Waga (g)'
    ) {
      return item;
    }
  });
  const tableBody = tempTableBody
    .filter(item => item !== undefined)
    .map((item, i) => {
      if (typeof item === 'undefined') {
        return '';
      }
      return item;
    });

  const tempHeaderBody = resultArray.map(item => {
    //___Standard
    if (item?.label.split(' ').find(item => item === 'Standard')) {
      return item;
    }
  });

  const HeaderBody = tempHeaderBody
    .filter(item => item !== undefined)
    .map((item, i) => {
      if (typeof item === 'undefined') {
        return '';
      }
      return item;
    });
  console.log('HeaderBody', HeaderBody);

  /**JSX**/
  return (
    <TableSectionWrapper>
      <BasicHeader
        hasVerticalOrnament={false}
        hasBox={true}
        text={allHeaders.tableHeaders[0]}
      />
      <TableWrapper>
        <thead></thead>
        <tbody>
          {tableBody.map((rowData, i) => {
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

export default CatalogTableVer2;
