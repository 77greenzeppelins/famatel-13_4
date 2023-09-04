/**Components**/
import TransparentTable from '@/components/basic/tables/transparent/TransparentTable';
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
/**BasicData**/

import { allHeaders } from '@/data/textData';
import {
  przedluzaczeBebnoweGeneral_features_data,
  przedluzaczeBebnoweGeneral_norms_data,
  przedluzaczeBebnowe_allTables_data,
} from '@/data/modelsData/cat_5_przedluzacze-bebnowe/przedluzaczeBebnoweTables_data';
import TableWrapper from '@/components/basic/tables/_atoms/tableWrapper/TableWrapper';
import HeaderCellMulticolor from '@/components/basic/tables/mixed/_atoms/headerStaff/HeaderCellMulticolor';

/**TS**/
interface Props {
  mainCatIndex: number;
  subCatIndex: number;
}
const PrzedluzaczeBebnoweContent = ({ mainCatIndex, subCatIndex }: Props) => {
  /**Data Destr...**/
  const { catPages, gniazdaPodwieszanePage } = allHeaders;
  /**Data prep...**/
  const { tableHeader, tableBody } =
    przedluzaczeBebnowe_allTables_data[subCatIndex];

  /**JSX**/
  return (
    <div
      data-component="PrzedluzaczeBebnoweContent"
      className="w-full pt-10 wrapper-1"
    >
      <div className="flex flex-col pt-20 gap-y-10 ">
        <div className="flex-col-reverse h-full gap-4 fc xl:flex-row ">
          <div className="flex flex-col w-full h-full gap-y-4 xl:w-1/2">
            <div className="flex flex-col w-full h-full gap-y-0">
              <BasicHeader
                hasBox={true}
                hasVerticalOrnament={false}
                text={catPages[0]}
              />
              <TransparentTable
                rowsData={przedluzaczeBebnoweGeneral_features_data}
              />
            </div>
            <div className="flex flex-col w-full h-full gap-y-0">
              <BasicHeader
                hasBox={true}
                hasVerticalOrnament={false}
                text={catPages[1]}
              />
              <TransparentTable
                rowsData={przedluzaczeBebnoweGeneral_norms_data}
              />
            </div>
          </div>

          <div className="flex min-w-[200px] min-h-[200px] w-full h-full xl:w-1/2 bg-greyShade2"></div>
        </div>
        <div className="flex flex-col gap-y-6">
          <BasicHeader
            hasBox={true}
            hasVerticalOrnament={false}
            text={gniazdaPodwieszanePage[0]}
          />
          <TableWrapper
            tableStyle={`border-separate border-spacing-[2px] table-fixed ${
              subCatIndex === 0 || subCatIndex === 1 ? 'w-[1590px]' : 'w-full'
            } `}
          >
            <thead>
              <tr>
                {tableHeader.map((cellData, i) => (
                  <HeaderCellMulticolor
                    paddingStyle="px-3 py-3"
                    key={i}
                    label={cellData}
                    colSpan={i > 1 && i < 4 ? 4 : 2}
                    tailwindStyle={`
                          bg-greyShade2
                          ${i > 1 && i < 4 ? 'w-[280px]' : 'w-[200px]'} 
                        `}
                  />
                ))}
              </tr>
            </thead>
            <tbody>
              {tableBody.map((rowData, i) => (
                <tr key={i}>
                  {rowData.map((cellData, i) => {
                    const cellDataMod = cellData.join(' ');
                    return (
                      <HeaderCellMulticolor
                        paddingStyle="px-3 py-3"
                        key={i}
                        label={cellDataMod}
                        colSpan={i > 1 && i < 4 ? 4 : 2}
                        tailwindStyle={`
                          ${i === 0 ? 'bg-greyShade2' : 'bg-greyTint2'}
                          ${i > 1 && i < 4 ? 'w-[300px]' : 'w-[200px]'} 
                        `}
                        textStyle={
                          i === 0
                            ? 'text-center text-light text-xs'
                            : 'text-center text-dark text-xs'
                        }
                      />
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </TableWrapper>
        </div>
      </div>
    </div>
  );
};

export default PrzedluzaczeBebnoweContent;
