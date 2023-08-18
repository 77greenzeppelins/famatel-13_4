import { StaticImageData } from 'next/image';
/**Images**/
//___one for 3 products
import img1 from './1.1_25501.webp';

/**TS**/
interface IF {
  image: StaticImageData;
}

/**...**/
const imgRozlacznikBezpieczenstwa: IF[] = [
  //___img1 for 3 products
  { image: img1 },
];

const imgRozlacznikBezpieczenstwaSlides: IF[] = [
  //___img1 for 3 products
  { image: img1 },
  { image: img1 },
  { image: img1 },
  { image: img1 },
  { image: img1 },
  { image: img1 },
];

export { imgRozlacznikBezpieczenstwa, imgRozlacznikBezpieczenstwaSlides };
