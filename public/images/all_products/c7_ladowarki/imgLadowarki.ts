/**Images**/
//___one for 3 products
import img1 from './m1.webp';
import img2 from './m2.webp';
import img3 from './m3.webp';

/**TS**/
import { IF_ImgStaticData } from '../../../utils/TS/typeScriptStaff';

/**...**/
const imgLadowarki: IF_ImgStaticData[] = [
  //___img1 for 3 products
  { image: img1, model: 'e - 3wallbox Point Basic' },
  { image: img2, model: 'e - 3wallbox Point Advance' },
  { image: img3, model: 'e - 3wallbox Point Advance' },
];

/**...**/
const imgLadowarkiSlides: IF_ImgStaticData[] = [
  //___img1 for 3 products
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img1 },
  { image: img2 },
  { image: img3 },
];

export { imgLadowarki, imgLadowarkiSlides };
