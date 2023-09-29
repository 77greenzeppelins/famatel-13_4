import Link from 'next/link';
/**Components**/
import SvgBielawaMap from '@/components/SVG/maps/SvgBielawaMap';
import InViewAnimatedContent from '@/components/layout/containers/inView/InViewAnimatedContent';
import InViewContainer from '@/components/layout/containers/inView/InViewContainer';
/**Tailwind Classes**/
import { styles } from '@/styles';

const MapModule = () => {
    /**Data Destr...**/
    const {
        mapModule: { container, background, foreground }
    } = styles;
    /**JSX**/
    return (
        <>
            <Link
                aria-label={'Link do GoogleMap'}
                role="link"
                className="absolute z-10 h-full opacity-50 left-10 right-10"
                target="_blank"
                rel="noopener"
                href="https://www.google.com/maps/search/Famatel+Polska+Sp.o.o+ul.+Willowa+5,+58+260+Bielawa+Polska"
                scroll={false}
            />
            <InViewContainer outherContainerStyle="z-5 w-full h-full" animationDelay={2} topFactor={0.3} bottomFactor={0.1}>
                <InViewAnimatedContent scaleFactor={0.95} xFactor={''} yFactor={''}>
                    <div className={container}>
                        <div className={background} />
                        <SvgBielawaMap containerStyle={foreground} />
                    </div>
                </InViewAnimatedContent>
            </InViewContainer>
        </>
    );
};

export default MapModule;
