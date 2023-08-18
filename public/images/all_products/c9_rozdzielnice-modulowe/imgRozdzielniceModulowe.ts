import { StaticImageData } from 'next/image';
/**Images**/
//___one for 3 products
import img1 from './2_modulowe-ip56/9.2_01_3902-T.webp';
import img2 from './2_modulowe-ip56/9.2_02_3904-T.webp';
import img4 from './2_modulowe-ip56/9.2_04_3912-T.webp';
import img6 from './2_modulowe-ip56/9.2_06_3942-T.webp';
import imageC1 from './1_scienne/9.1_11_39168.webp';
import imageC3 from './3_modulowe-nuova/9.3.2.wall-m_09_3624.webp';
import imageC4 from './4_modulowe-nuovaPlus/9.4_03_3537.webp';
import imageC5 from './5_modulowe-vita/9.6_06_3320-F.webp';
import imageC6 from './6_scienne-icp/9.7_06_3401.webp';
import imageC7 from './7_metalowe-ip40/9.8_01_3114.webp';
import imageC8 from './8_metalowe-ict/9.9_04_3235.webp';
import imageC9 from './9_akcesoria//9.9_SPTA-12.webp';

/**TS**/
import { IF_ImgStaticData } from '../../../utils/TS/typeScriptStaff';

/**For slider on "KategorieProduktowPage"**/
const imgRozdzielniceModuloweSlider: IF_ImgStaticData[] = [
  { image: img1 },
  { image: imageC4 },
  { image: img2 },
  { image: imageC7 },
  { image: img4 },
  { image: imageC3 },
  { image: img6 },
  { image: imageC1 },
  { image: imageC7 },
];

/**
 * used in: images / kategorieProduktowPage / imgKategorieProduktowPage.ts
 **/
const imgRozdzielniceModulowe_subCategoryCatalog: IF_ImgStaticData[] = [
  { image: imageC1 },
  { image: img2 },
  { image: imageC3 },
  { image: imageC4 },
  { image: imageC5 },
  { image: imageC6 },
  { image: imageC7 },
  { image: imageC8 },
  { image: imageC9 },
];
export {
  imgRozdzielniceModuloweSlider,
  imgRozdzielniceModulowe_subCategoryCatalog,
};
