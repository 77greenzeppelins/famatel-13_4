/**Components**/
import Table1 from '@/components/basic/tables/mixed/rozlacznikiBezpieczenstwa/table1/Table1';
import Table2 from '@/components/basic/tables/mixed/rozlacznikiBezpieczenstwa/table2/Table2';
import TransparentTable from '@/components/basic/tables/transparent/TransparentTable';
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';

/**BasicData**/
import {
  rozlacznikiBezpieczenstwa_feat_data,
  rozlacznikiBezpieczenstwa_norma_data,
} from '@/data/modelsData/cat_6_rozlacznikiBezpieczenstwa/cat6_rozlacznikBezpieczenstwa_data';
import { allHeaders } from '@/data/textData';

const RozlacznikiBezpieczenstwa = ({ index }: { index: number }) => {
  /**Data Destr...**/
  const { catPages, gniazdaPodwieszanePage } = allHeaders;
  /**JSX**/
  return (
    <div className="flex flex-col pt-20 gap-y-10">
      <div className="flex-col-reverse h-full gap-4 fc xl:flex-row ">
        <div className="flex flex-col w-full h-full gap-y-4 xl:w-1/2">
          <div className="flex flex-col w-full h-full gap-y-0">
            <BasicHeader
              hasBox={true}
              hasVerticalOrnament={false}
              text={catPages[0]}
            />
            <TransparentTable rowsData={rozlacznikiBezpieczenstwa_feat_data} />
          </div>
          <div className="flex flex-col w-full h-full gap-y-0">
            <BasicHeader
              hasBox={true}
              hasVerticalOrnament={false}
              text={catPages[1]}
            />
            <TransparentTable rowsData={rozlacznikiBezpieczenstwa_norma_data} />
          </div>
        </div>

        <div className="flex min-w-[200px] min-h-[200px] w-full h-full xl:w-1/2 bg-greyShade2"></div>
      </div>

      <div className="flex flex-col w-full gap-y-6">
        <BasicHeader
          hasBox={true}
          hasVerticalOrnament={false}
          text={allHeaders.tableHeaders[0]}
        />
        <Table1 />
      </div>

      <div className="flex flex-col w-full gap-y-6">
        <BasicHeader
          hasBox={true}
          hasVerticalOrnament={false}
          text={allHeaders.tableHeaders[1]}
        />
        <Table2 />
      </div>
    </div>
  );
};

export default RozlacznikiBezpieczenstwa;
