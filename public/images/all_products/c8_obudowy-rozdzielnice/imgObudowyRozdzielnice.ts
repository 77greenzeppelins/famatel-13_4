/**Images**/
//___one for 3 products
import img1 from './2_przemyslowe/8.2_03_6602.webp';
import img2 from './1_puste/8.1_12_3975.webp';
import img3 from './2_przemyslowe/8.2_04_3957_1.webp';
import img4 from './3_gumowe/8.3_02_23311_full.webp';
import img5 from './2_przemyslowe/8.2_11_3980.webp';
import img6 from './1_puste/8.1_21_3970.webp';
import img7 from './4_akcesoria/8.4_43_SPTA-12.webp';

/**TS**/
import { IF_ImgStaticData } from '../../../utils/TS/typeScriptStaff';

/**...**/

const imgObudowyRozdzielniceSlide: IF_ImgStaticData[] = [
  //___img1 for 3 products
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
  { image: img6 },
  { image: img7 },
  { image: img4 },
];

const imgObudowyRozdzielnice_subCategoryCatalog: IF_ImgStaticData[] = [
  //___img1 for 3 products

  { image: img2 },
  { image: img1 },
  { image: img4 },
  { image: img7 },
];

export {
  imgObudowyRozdzielniceSlide,
  imgObudowyRozdzielnice_subCategoryCatalog,
};
