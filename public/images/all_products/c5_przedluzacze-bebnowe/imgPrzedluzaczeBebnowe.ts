import { StaticImageData } from 'next/image';
/**Images**/
//___one for 3 products
import img1 from './schuko/5.1_30017_18_19.webp';
//__
import img2 from './ip67/5.2_01_30013.webp';
import img3 from './ip67/5.2_02_30014.webp';
import img4 from './ip67/5.2_03_30015.webp';
import img5 from './ip67/5.2_04_30016.webp';
import img6 from './ip67/5.2_05_30002.webp';
import img7 from './ip67/5.2_06_30004.webp';
import img8 from './ip67/5.2_07_30020.webp';
import img9 from './ip67/5.2_08_30021_30021_F.webp';
//__
import img10 from './ip67-metalowe/5.3_30050.webp';
import img11 from './ip67-metalowe/5.3_30051.webp';
import img12 from './ip67-metalowe/5.3_30052.webp';
import img13 from './ip67-metalowe/5.3_30053.webp';

/**TS**/
import { IF_ImgStaticData } from '../../../utils/TS/typeScriptStaff';

/**
 * used in: pagesComponents / kategorie-prosduktow / ... / <ImageContent>
 **/
const imgPrzedluzaczeBebnoweSlides: IF_ImgStaticData[] = [
  //___img1 for 3 products
  { image: img1 },
  { image: img1 },
  { image: img1 },
  //___ img9 is for two products
  { image: img2 },
  { image: img2 },
  { image: img3 },
  { image: img3 },
  { image: img4 },
  { image: img4 },
  { image: img5 },
  { image: img5 },

  { image: img6 },
  { image: img6 },

  { image: img7 },
  { image: img8 },
  { image: img9 },
  { image: img9 },
];

/**
 * used in:
 **/
const imgPrzedluzaczeBebnowe_subCategoryCatalog: IF_ImgStaticData[] = [
  { image: img1 },
  { image: img3 },
  { image: img11 },
];

export {
  imgPrzedluzaczeBebnoweSlides,
  imgPrzedluzaczeBebnowe_subCategoryCatalog,
};
