/**Components**/
import Table1 from '@/components/basic/tables/mixed/ladowarkiSamochodowe/table1/Table1';
import Table2 from '@/components/basic/tables/mixed/ladowarkiSamochodowe/table2/Table2';
import Table3 from '@/components/basic/tables/mixed/ladowarkiSamochodowe/table3/Table3';
import TransparentTable from '@/components/basic/tables/transparent/TransparentTable';
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import ImageSlider from '@/components/forMultiPage/sliders/imagesSlider/ImagesSlider';

/**BasicData**/
import { cat7_threeModels } from '@/public/images/all_products/c7_ladowarki/imgLadowarki';
import {
  ladowarkiSamochodowe_feat_1_data,
  ladowarkiSamochodowe_norma_data,
  ladowarkiSamochodowe_material_data,
} from '@/data/modelsData/cat_7_ladowarki-samochodowe/cat7_ladowarkiSamochodowe_data';
import { allHeaders } from '@/data/textData';

const LadowarkiSamochodowe = ({ index }: { index: number }) => {
  /**Data Destr...**/
  const { catPages } = allHeaders;

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
            <TransparentTable rowsData={ladowarkiSamochodowe_feat_1_data} />
          </div>
          <div className="flex flex-col w-full h-full gap-y-0">
            <BasicHeader
              hasBox={true}
              hasVerticalOrnament={false}
              text={catPages[1]}
            />
            <TransparentTable rowsData={ladowarkiSamochodowe_norma_data} />
          </div>
          <div className="flex flex-col w-full h-full gap-y-0">
            <BasicHeader
              hasBox={true}
              hasVerticalOrnament={false}
              text={catPages[2]}
            />
            <TransparentTable rowsData={ladowarkiSamochodowe_material_data} />
          </div>
        </div>

        <div className="flex min-w-[200px] min-h-[200px] w-full h-full xl:w-1/2 ">
          <ImageSlider imageData={cat7_threeModels} />
        </div>
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

      <div className="flex flex-col w-full gap-y-6">
        <BasicHeader
          hasBox={true}
          hasVerticalOrnament={false}
          text={allHeaders.tableHeaders[1]}
        />
        <Table3 />
      </div>
    </div>
  );
};

export default LadowarkiSamochodowe;
