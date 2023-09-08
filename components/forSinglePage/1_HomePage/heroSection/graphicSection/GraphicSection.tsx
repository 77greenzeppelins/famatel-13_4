import Image from 'next/image';
import { dirtyPlugImage } from '@/public/images/1_homePage/';
import ScrollPrompt from '../scrollPrompt/ScrollPrompt';
import Sniper from '@/components/forMultiPage/accents/sniper/Sniper';
import PseudoTechPanel from './pseudoTechPanel/PseudoTechPanel';

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
      <div className="absolute hidden xs3xx:flex bottom-[10%] right-[25%] h-[70%] w-[70%]">
        <Sniper groupForHover="group" />
        <PseudoTechPanel />
      </div>
      <ScrollPrompt />
    </div>
  );
};

export default GraphicSection;
