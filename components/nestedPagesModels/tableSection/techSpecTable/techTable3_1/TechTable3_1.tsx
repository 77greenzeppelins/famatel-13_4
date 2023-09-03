/**Components**/
import TableWrapper from '@/components/basic/tables/_atoms/tableWrapper/TableWrapper';
import HeaderCellMulticolor from '@/components/basic/tables/mixed/_atoms/headerStaff/HeaderCellMulticolor';
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import TableSectionWrapper from '@/components/nestedPagesModels/_atoms/TableSectionWrapper/TableSectionWrapper';
/**Basic Data**/
import { allHeaders } from '@/data/textData';

const TechTable3_1 = (data: TechTable3_1ItemType) => {
  /**Data destr...**/
  const { header, sizes, l1, l2, l3 } = data;

  /**JSX**/
  return (
    <TableSectionWrapper>
      <BasicHeader
        hasVerticalOrnament={false}
        hasBox={true}
        text={allHeaders.tableHeaders[1]}
      />
      <TableWrapper>
        <thead>
          <tr>
            {header.map((cellData, i) => (
              <HeaderCellMulticolor
                key={i}
                label={cellData}
                colSpan={i === 0 ? 2 : 4}
                tailwindStyle={i == 0 ? 'bg-dark' : 'bg-greyShade2'}
              />
            ))}
          </tr>
          <tr>
            {sizes.map((cellData, i) => (
              <HeaderCellMulticolor
                key={i}
                label={cellData}
                colSpan={2}
                tailwindStyle={i == 0 ? 'bg-dark' : 'bg-greyShade2'}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="group">
            {l1.map((cellData, i) => {
              return (
                <HeaderCellMulticolor
                  key={i}
                  label={cellData}
                  colSpan={2}
                  tailwindStyle={
                    i == 0
                      ? 'bg-greyShade2 hover:bg-corpo'
                      : 'bg-greyTint2 hover:bg-light'
                  }
                  textStyle={
                    i == 0
                      ? 'text-center text-xs text-light'
                      : 'text-center text-xs text-dark'
                  }
                />
              );
            })}
          </tr>
          <tr className="group">
            {l2.map((cellData, i) => {
              return (
                <HeaderCellMulticolor
                  key={i}
                  label={cellData}
                  colSpan={i === 0 ? 2 : 4}
                  tailwindStyle={
                    i == 0
                      ? 'bg-greyShade2 hover:bg-corpo'
                      : 'bg-greyTint2 hover:bg-light'
                  }
                  textStyle={
                    i == 0
                      ? 'text-center text-xs text-light'
                      : 'text-center text-xs text-dark'
                  }
                />
              );
            })}
          </tr>
          <tr className="group">
            {l3.map((cellData, i) => {
              return (
                <HeaderCellMulticolor
                  key={i}
                  label={cellData}
                  colSpan={i === 0 ? 2 : 4}
                  tailwindStyle={
                    i == 0
                      ? 'bg-greyShade2 hover:bg-corpo'
                      : 'bg-greyTint2 hover:bg-light'
                  }
                  textStyle={
                    i == 0
                      ? 'text-center text-xs text-light'
                      : 'text-center text-xs text-dark'
                  }
                />
              );
            })}
          </tr>
        </tbody>
      </TableWrapper>
    </TableSectionWrapper>
  );
};

export default TechTable3_1;
