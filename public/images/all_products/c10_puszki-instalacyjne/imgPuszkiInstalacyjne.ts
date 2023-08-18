import { StaticImageData } from 'next/image';
/**Images**/
//___one for 3 products
import img1 from './1_zamykane/10.1_10_3003.webp';
import img2 from './2_drywall/10.2_catalog_800_3251.webp';
import img3 from './3_osadzone/10.3_06_3201T.webp';
import img4 from './3_osadzone/10.3_08_3202T.webp';
import img5 from './2_drywall/10.2_04_3256.webp';
import img6 from './1_zamykane/10.1_c_05_3067.webp';
import img7 from './1_zamykane/10.1_05_3025.webp';
import img8 from './2_drywall/10.2_08_3260.webp';

//10.2_08_3260

/**TS**/
import { IF_ImgStaticData } from '../../../utils/TS/typeScriptStaff';

/**For slider on "KategorieProduktowPage"**/
const imgPuszkiInstalacyjneSlider: IF_ImgStaticData[] = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
  { image: img8 },
  { image: img7 },
  { image: img6 },
];

/**
 * used in: images / kategorieProduktowPage / imgKategorieProduktowPage.ts
 **/
const imgPuszkiInstalacyjne_subCategoryCatalog: IF_ImgStaticData[] = [
  { image: img1 },
  { image: img2 },
  { image: img4 },
];
export {
  imgPuszkiInstalacyjneSlider,
  imgPuszkiInstalacyjne_subCategoryCatalog,
};
