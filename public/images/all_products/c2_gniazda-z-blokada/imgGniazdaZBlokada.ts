import { StaticImageData } from 'next/image';
/**Images**/
//___bottomLine
import img1 from './1_tablicowe/2.1_03_25056.webp';
import img2 from './2_stale/2.2_05_25159.webp';
import img3 from './1_tablicowe/2.1_04_25010.webp';
import img4 from './3_z-komponentami/2.3_03_26303.webp';
//___topLine
import img5 from './3_z-komponentami/2.3_01_25703.webp';
import img6 from './2_stale/2.2_04_25110.webp';
import img7 from './3_z-komponentami/2.3_05_26503FH.webp';
import img8 from './4_akcesoria/2.4_02_23022.webp';

/**TS**/
import { IF_ImgStaticData } from '../../../utils/TS/typeScriptStaff';

/**For slider on "KategorieProduktowPage"**/
const imgGniazdaZBlokadaSlides: IF_ImgStaticData[] = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
  { image: img6 },
  { image: img7 },
  { image: img8 },
];
/**
 * used in: images / kategorieProduktowPage / imgKategorieProduktowPage.ts
 **/
const imgGniazdaZBlokada_subCategoryCatalog: IF_ImgStaticData[] = [
  { image: img1 },
  { image: img6 },
  { image: img4 },
  { image: img8 },
];

export { imgGniazdaZBlokadaSlides, imgGniazdaZBlokada_subCategoryCatalog };
