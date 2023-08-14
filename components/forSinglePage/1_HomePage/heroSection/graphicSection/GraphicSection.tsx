import Image from 'next/image';
import { dirtyPlugImage } from '@/public/images/1_homePage/';
import ScrollPrompt from '../scrollPrompt/ScrollPrompt';

const GraphicSection = () => {
  /**JSX**/
  return (
    <div className="relative flex justify-end w-full h-full">
      <Image
        className="aspect-square"
        alt={dirtyPlugImage.alt}
        // src={dirtyPlugImg}
        src={dirtyPlugImage.path}
        width={dirtyPlugImage.width}
        height={dirtyPlugImage.height}
        // fill
        // sizes="1200"
        // fill // intrinsic|fixed|responsive|fill allowed;  fill your parent
      />
      <ScrollPrompt />
    </div>
  );
};

export default GraphicSection;
