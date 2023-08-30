/**Components**/
import BasicTable from '@/components/basic/tables/basic/BasicTable';
import TransparentTable from '@/components/basic/tables/transparent/TransparentTable';
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
/**Basic data**/
import { allHeaders } from '@/data/textData';

interface Props {
  data: ObudowaType1TechDataType;
}

const Cat8Schema = (data: ObudowaType1TechDataType) => {
  console.log('Cat8Schema / data:', data);
  const { description, header, tablesData, iconHolderData, norma, opis } = data;

  console.log('...opis', opis);

  /**JSX**/
  return (
    <div className="flex flex-col w-full gap-y-16">
      <div className="flex flex-col w-full gap-y-6">
        <BasicHeader
          hasVerticalOrnament={false}
          hasBox={true}
          text={allHeaders.tableHeaders[1]}
        />
        <div className="flex flex-col w-full gap-y-4">
          {header.map((header, i) => (
            <BasicTable
              key={i}
              headerData={header}
              bodyData={tablesData[i].map(item => [item.label, item.value])}
              headerColSpan={2}
              sideHeaderStyle="text-xs text-light"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full">
        <BasicHeader
          hasVerticalOrnament={false}
          hasBox={true}
          text={allHeaders.tableHeaders[2]}
        />
        <TransparentTable rowsData={description} />
      </div>

      <div className="flex flex-col w-full">
        <BasicHeader
          hasVerticalOrnament={false}
          hasBox={true}
          text={allHeaders.tableHeaders[2]}
        />
        <TransparentTable rowsData={[norma]} />
      </div>
      {opis ? (
        <div className="flex flex-col w-full">
          <BasicHeader
            hasVerticalOrnament={false}
            hasBox={true}
            text={allHeaders.tableHeaders[3]}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Cat8Schema;
