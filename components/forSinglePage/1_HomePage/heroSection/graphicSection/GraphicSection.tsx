import Image from 'next/image';
import { dirtyPlugImage } from '@/public/images/1_homePage/';
import ScrollPrompt from '../scrollPrompt/ScrollPrompt';
import Sniper from '@/components/forMultiPage/accents/sniper/Sniper';
import PseudoTechPanel from './pseudoTechPanel/PseudoTechPanel';

const GraphicSection = () => {
    /**JSX**/
    return (
        <div
            className={`relative oversize-hidden aspect-square w-[90%] md:w-full grid md:col-span-full md:row-span-full justify-self-end md:self-end xl:self-center md:max-w-[700px] lg:max-w-[620px] xl:max-w-[720px] xxxl:max-w-[900px] -z-1`}
        >
            <Image
                alt={dirtyPlugImage.alt}
                src={dirtyPlugImage.path}
                // className="aspect-square"
                // width={dirtyPlugImage.width}
                // height={dirtyPlugImage.height}
                priority
                fill={true}
                sizes="(min-width: 1800px) 900px, (min-width: 1280px) 780px, (min-width: 1040px) 650px, (min-width: 780px) 550px, 100vw"
                className="object-cover w-full h-full "
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

// className="relative flex justify-end w-full h-full max-width-[1200px] max-height-[1200px] min-width-[260px] min-height-[260px] overflow-hidden bg-black"
