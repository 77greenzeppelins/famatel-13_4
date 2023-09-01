/**Components**/
import TransparentTable from '@/components/basic/tables/transparent/TransparentTable';
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
/**Basic Data**/
import { allHeaders } from '@/data/textData';

const OnlyUnderlinedTable = (data: WtyczkaGniazdoType1TechDataType) => {
  /**Data Destr...**/
  const { features } = data;

  /**Function ==> narrow type to ommit "undefined"**/
  const createTable = () => {
    //___type narrowing
    if (!features) {
      return null;
    }
    //___UI creation
    return <TransparentTable rowsData={features} />;
  };

  /**JSX**/
  return (
    <div className="flex flex-col w-full gap-y-16">
      <div className="flex flex-col w-full gap-y-6">
        <BasicHeader
          hasVerticalOrnament={false}
          hasBox={true}
          text={allHeaders.tableHeaders[2]}
        />
        {createTable()}
      </div>{' '}
    </div>
  );
};

export default OnlyUnderlinedTable;
