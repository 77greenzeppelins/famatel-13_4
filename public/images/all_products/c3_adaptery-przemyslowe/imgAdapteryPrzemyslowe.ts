/**Images**/
//___schuko
import img1 from './schuko/3.1_16002.webp';
import img2 from './schuko/3.1_16010.webp';
//___wielokrotne-przemyslowe
import img3 from './wielokrotne/3.2_15006.webp';
import img5 from './wielokrotne/3.2_15001.webp';
import img6 from './wielokrotne/3.2_16000.webp';
import img7 from './wielokrotne/3.2_15003.webp';
import img8 from './wielokrotne/3.2_16006.webp';
//___wielokrotne-przemyslowe-z-przewodem
import img9 from './wielokrotne-z-kablem/3.3_31004.webp';
import img10 from './wielokrotne-z-kablem/3.3_31012.webp';
import img11 from './wielokrotne-z-kablem/3.3_31040.webp';
import img12 from './wielokrotne-z-kablem/3.3_31020.webp';
import img13 from './wielokrotne-z-kablem/3.3_31071.webp';

/**TS**/
import { IF_ImgStaticData } from '../../../utils/TS/typeScriptStaff';

/**
 * used in: pagesComponents / kategorie-prosduktow / ... / <ImageContent>
 **/
const imgAdapteryPrzemysloweSlides: IF_ImgStaticData[] = [
  { image: img1 },
  { image: img11 },
  { image: img3 },
  { image: img13 },
  { image: img5 },
  { image: img10 },
  { image: img6 },
  { image: img7 },
  { image: img8 },
  { image: img9 },
  { image: img12 },
  // { image: img2 },
  // { image: img4 },
];

/**
 * used in:
 **/
const imgAdapteryPrzemyslowe_subCategoryCatalog: IF_ImgStaticData[] = [
  { image: img2 },
  { image: img5 },
  { image: img11 },
];

export {
  imgAdapteryPrzemysloweSlides,
  imgAdapteryPrzemyslowe_subCategoryCatalog,
};
