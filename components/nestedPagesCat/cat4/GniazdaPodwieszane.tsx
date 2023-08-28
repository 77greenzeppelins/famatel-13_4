/**Components**/
import BasicTable from '@/components/basic/tables/basic/BasicTable';
import TransparentTable from '@/components/basic/tables/transparent/TransparentTable';
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
/**BasicData**/
import {
  gniazdaPodwieszane_feat_1_data,
  catalogTable_1_data,
  catalogTable_2_data,
  gniazdaPodwieszane_norma_data,
  gniazdaPodwieszane_material_data,
} from '@/data/modelsData/cat_4_gniazda-podwieszane/cat4_gniazdaPodwieszane_data';
import { allHeaders } from '@/data/textData';
import Link from 'next/link';

const GniazdaPodwieszane = ({ index }: { index: number }) => {
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
            <TransparentTable rowsData={gniazdaPodwieszane_feat_1_data} />
          </div>
          <div className="flex flex-col w-full h-full gap-y-0">
            <BasicHeader
              hasBox={true}
              hasVerticalOrnament={false}
              text={catPages[1]}
            />
            <TransparentTable rowsData={gniazdaPodwieszane_norma_data} />
          </div>
          <div className="flex flex-col w-full h-full gap-y-0">
            <BasicHeader
              hasBox={true}
              hasVerticalOrnament={false}
              text={catPages[2]}
            />
            <TransparentTable rowsData={gniazdaPodwieszane_material_data} />
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
        <BasicTable
          headerData={catalogTable_1_data.headerData}
          bodyData={catalogTable_1_data.bodyData}
        />
      </div>

      <div className="flex flex-col gap-y-6">
        <BasicHeader
          hasBox={true}
          hasVerticalOrnament={false}
          text={gniazdaPodwieszanePage[1]}
        />
        <BasicTable
          headerData={catalogTable_2_data.headerData}
          bodyData={catalogTable_2_data.bodyData}
        />
      </div>
      <Link
        className="w-[100px] h-[100px] bg-corpo"
        href={'przemyslowe-wtyczki-i-gniazda/wtyczki-i-gniazda-przenosne'}
      />
    </div>
  );
};

export default GniazdaPodwieszane;

//___produkty/przemyslowe-wtyczki-i-gniazda/wtyczki-i-gniazda-przenosne
