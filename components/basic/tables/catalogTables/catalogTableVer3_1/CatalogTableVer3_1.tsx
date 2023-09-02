/**Components**/
import TableWrapper from '../../_atoms/tableWrapper/TableWrapper';
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
/**Basic Data**/
import { allHeaders } from '@/data/textData';
import HeaderCellMulticolor from '../../mixed/_atoms/headerStaff/HeaderCellMulticolor';

const CatalogTableVer3_1 = (data: CatalogItemVer3_1) => {
  const { line1, line2, line3 } = data;
  /**JSX**/
  return (
    <div className="flex flex-col w-full gap-y-6">
      <BasicHeader
        hasVerticalOrnament={false}
        hasBox={true}
        text={allHeaders.tableHeaders[0]}
      />
      <TableWrapper>
        <thead>
          <tr className="group">
            <HeaderCellMulticolor
              label={line1.label}
              colSpan={2}
              tailwindStyle="bg-greyShade2 group-hover:bg-corpo"
              textStyle="text-center text-xs text-light font-medium"
            />
            <HeaderCellMulticolor
              label={line1.value}
              colSpan={4}
              tailwindStyle="bg-greyTint2 group-hover:bg-light"
              textStyle="text-center text-xs text-dark font-medium"
            />
          </tr>
          <tr>
            <HeaderCellMulticolor
              label={line2.label}
              colSpan={2}
              tailwindStyle="bg-greyShade2 group-hover:bg-corpo"
              textStyle="text-center text-xs text-light font-medium"
            />
            <HeaderCellMulticolor
              label={line2.value}
              colSpan={4}
              tailwindStyle="bg-greyTint2 group-hover:bg-light"
              textStyle="text-center text-xs text-dark font-medium"
            />
          </tr>
        </thead>
        <tbody>
          <tr className="group">
            {line3.map((cellData, i) => (
              <HeaderCellMulticolor
                key={i}
                label={cellData}
                colSpan={2}
                tailwindStyle={`${
                  i === 0
                    ? 'bg-greyShade2 group-hover:bg-corpo'
                    : 'bg-greyTint2 group-hover:bg-light'
                }`}
                textStyle={`${
                  i === 0
                    ? 'text-center text-xs text-light font-medium'
                    : 'text-center text-xs text-dark font-medium'
                }`}
              />
            ))}

            {/* <HeaderCellMulticolor
              label={line2.value}
              colSpan={4}
              tailwindStyle="bg-greyTint2 group-hover:bg-light"
              textStyle="text-center text-xs text-dark font-medium"
            /> */}
          </tr>
        </tbody>
      </TableWrapper>{' '}
    </div>
  );
};

export default CatalogTableVer3_1;
