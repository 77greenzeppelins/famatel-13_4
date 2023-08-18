/**Images**/
import img1 from './27002.webp';
import img2 from './27008.webp';
import img3 from './28000.webp';
import img4 from './28000_MA.webp';

/**TS**/
import { IF_ImgStaticData } from '../../../utils/TS/typeScriptStaff';

/**...should be small????**/
const imgGniazdaPodwieszane: IF_ImgStaticData[] = [
  { image: img3, model: '28000' },
  { image: img4, model: '28000-MA' },
  { image: img1, model: '27002' },
  { image: img2, model: '27008' },
];

/**...**/
const imgGniazdaPodwieszaneSlides: IF_ImgStaticData[] = [
  { image: img4 },
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
];

export { imgGniazdaPodwieszane, imgGniazdaPodwieszaneSlides };
