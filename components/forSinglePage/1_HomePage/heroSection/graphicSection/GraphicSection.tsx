import Image from 'next/image';
import { dirtyPlugImage } from '@/public/images/1_homePage/';
import ScrollPrompt from '../scrollPrompt/ScrollPrompt';
import Sniper from '@/components/forMultiPage/accents/sniper/Sniper';
import PseudoTechPanel from './pseudoTechPanel/PseudoTechPanel';

const GraphicSection = () => {
    /**JSX**/
    return (
        <div className="relative flex justify-end w-full h-full overflow-hidden">
            <Image
                className="aspect-square"
                alt={dirtyPlugImage.alt}
                src={dirtyPlugImage.path}
                width={dirtyPlugImage.width}
                height={dirtyPlugImage.height}
                priority
                // fill={true}
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                // className="object-cover w-full h-full aspect-square"
                // fill // intrinsic|fixed|responsive|fill allowed;  fill your parent
            />
            <div className="absolute hidden xs3xx:flex bottom-[10%] right-[25%] h-[70%] w-[70%]">
                <Sniper isHovered={true} />
                <PseudoTechPanel />
            </div>
            <ScrollPrompt />
        </div>
    );
};

export default GraphicSection;
