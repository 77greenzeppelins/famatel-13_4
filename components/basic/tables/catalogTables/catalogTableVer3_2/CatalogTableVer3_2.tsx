import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import TableWrapper from '../../_atoms/tableWrapper/TableWrapper';
import HeaderCellMulticolor from '../../mixed/_atoms/headerStaff/HeaderCellMulticolor';
import { allHeaders } from '@/data/textData';

const CatalogTableVer3_2 = (data: CatalogItemVar3_2Type) => {
  const { tablesData } = data;
  /**JSX**/
  return (
    <div className="flex flex-col w-full gap-y-6">
      <BasicHeader
        hasVerticalOrnament={false}
        hasBox={true}
        text={allHeaders.tableHeaders[1]}
      />
      <TableWrapper>
        <thead>
          {[tablesData[0], tablesData[1]].map((rowData, i) => (
            <tr key={i}>
              {rowData.map((cellData, i) => (
                <HeaderCellMulticolor
                  key={i}
                  label={cellData}
                  colSpan={i === 0 ? 4 : 9}
                  tailwindStyle={i === 0 ? 'bg-dark' : 'bg-vR'}
                />
              ))}
            </tr>
          ))}
          <tr>
            {tablesData[3].map((cellData, i) => (
              <HeaderCellMulticolor
                key={i}
                label={cellData}
                colSpan={i === 0 ? 4 : 9}
                tailwindStyle={i === 0 ? 'bg-dark' : 'bg-vR'}
              />
            ))}
          </tr>
          <tr>
            {tablesData[4].map((cellData, i) => (
              <HeaderCellMulticolor
                key={i}
                label={cellData}
                colSpan={i === 0 ? 4 : 3}
                rowSpan={i === 0 ? 2 : 1}
                tailwindStyle={
                  i === 0 ? 'bg-dark' : i === 2 ? 'bg-vB' : 'bg-vR'
                }
              />
            ))}
          </tr>
          <tr>
            {tablesData[5].map((cellData, i) => (
              <HeaderCellMulticolor
                key={i}
                label={cellData}
                colSpan={3}
                tailwindStyle={i === 1 ? 'bg-vB' : 'bg-vR'}
              />
            ))}
          </tr>
          <tr>
            {tablesData[6].map((cellData, i) => (
              <HeaderCellMulticolor
                key={i}
                label={cellData}
                colSpan={i === 0 ? 4 : 3}
                rowSpan={i === 0 ? 2 : 1}
                tailwindStyle={
                  i === 0 ? 'bg-dark' : i === 3 ? 'bg-vR' : 'bg-vB'
                }
              />
            ))}
          </tr>
          <tr>
            {tablesData[7].map((cellData, i) => (
              <HeaderCellMulticolor
                key={i}
                label={cellData}
                colSpan={3}
                tailwindStyle={i < 2 ? 'bg-vB' : 'bg-vR'}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {tablesData[2].map((cellData, i) => (
              <HeaderCellMulticolor
                key={i}
                label={cellData}
                colSpan={i < 2 ? 2 : 9}
                tailwindStyle={i < 2 ? 'bg-greyShade2' : 'bg-dark'}
              />
            ))}
          </tr>
          <tr>
            {tablesData[8].map((cellData, i) => (
              <HeaderCellMulticolor
                key={i}
                label={cellData}
                colSpan={i < 2 ? 2 : 3}
                tailwindStyle={
                  i < 2
                    ? 'bg-greyShade2'
                    : i < 4
                    ? 'bg-vB hover:bg-vtB'
                    : 'bg-vR hover:bg-vtR'
                }
              />
            ))}
          </tr>
        </tbody>
      </TableWrapper>
    </div>
  );
};

export default CatalogTableVer3_2;
