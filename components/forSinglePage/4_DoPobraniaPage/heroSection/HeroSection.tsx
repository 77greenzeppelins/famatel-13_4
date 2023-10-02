import dynamic from 'next/dynamic';
// const ComponentDelayed = dynamic(
//   () => import('./heroBackground/HeroBackground')
// );

/**Components**/
import HeroBackground from './heroBackground/HeroBackground';
import SvgLogoF from '@/components/SVG/logo/SvgLogoF';
import FadingFrame from '@/components/forMultiPage/atomsLike/lines/fadingLine/FadingFrame';
import DownloadableLinkSimple from '@/components/basic/links/downloadableLink/DownloadableLinkSimple';
/**Tailwind Styles**/
import { styles } from '@/styles';
/**Basic Data**/
import { doPobraniaPageData } from '@/data/basicData';

const HeroSection = () => {
    const {
        catalogData: { linkLabel, path }
    } = doPobraniaPageData;
    /**JSX**/
    return (
        <div data-component="HeroSection" className={styles.heroSectionContainer}>
            {/* <ComponentDelayed /> */}
            <HeroBackground />
            <div className="relative fc flex-col w-[90%] xs4xx:w-[360px] lg:w-[400px] xxl:w-[460px] h-[80vh] min-h-[460px] z-10 bg-dark ">
                <div className={`relative fc flex-col gap-10 w-[90%] xs4xx:w-[360px] lg:w-[400px] xxl:w-[460px] h-[80vh] min-h-[460px] z-10 bg-dark`}>
                    <FadingFrame />

                    <div className="fc h-[40%] w-full">
                        <SvgLogoF svgStyle={'h-full'} gStyle={'fill-corpo'} />
                    </div>

                    <div className="flex-col fc">
                        <p className="text-large text-light">Katalog</p>
                        <p className="text-regular">2023</p>
                    </div>

                    <div className="flex items-center justify-between min-w-[92px] gap-3 group">
                        <DownloadableLinkSimple
                            label={linkLabel}
                            path={path}
                            // endText={size}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
