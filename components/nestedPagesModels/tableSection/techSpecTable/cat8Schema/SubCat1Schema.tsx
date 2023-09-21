/**Components**/
import BasicTable from '@/components/basic/tables/basic/BasicTable';
import TransparentTable from '@/components/basic/tables/transparent/TransparentTable';
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
/**Basic data**/
import { allHeaders } from '@/data/textData';

// interface Props {
//   data: ObudowaPustaTechDataType;
// }
//___{ data }: Props
const Cat8Schema = () => {
  // console.log('Cat8Schema / data:', data);
  // const { description, header, tablesData, iconHolderData, norma, opis } = data;

  // const tablesDataMod = (i: number) => {
  //   return tablesData[i].map(item => {
  //     if (typeof item === 'string') {
  //       return [...item];
  //     }
  //     return [item.label, item.value];
  //   });
  // };

  /**JSX**/
  return (
    <div className="flex flex-col w-full gap-y-16">
      <div className="flex flex-col w-full gap-y-6">
        <BasicHeader
          hasVerticalOrnament={false}
          hasBox={true}
          text={allHeaders.tableHeaders[1]}
        />
        <div className="flex flex-col w-full gap-y-4"></div>
      </div>

      <div className="flex flex-col w-full">
        <BasicHeader
          hasVerticalOrnament={false}
          hasBox={true}
          text={allHeaders.tableHeaders[2]}
        />
        {/* <TransparentTable rowsData={description} /> */}
      </div>
      <div className="flex flex-col w-full">
        <BasicHeader
          hasVerticalOrnament={false}
          hasBox={true}
          text={allHeaders.tableHeaders[2]}
        />
        {/* <TransparentTable rowsData={[norma]} /> */}
      </div>
      {/* {opis ? (
        <div className="flex flex-col w-full">
          <BasicHeader
            hasVerticalOrnament={false}
            hasBox={true}
            text={'oooooooooooooo'}
          />
        </div>
      ) : null} */}
    </div>
  );
};

export default Cat8Schema;
