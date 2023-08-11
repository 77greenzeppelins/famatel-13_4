import dynamic from 'next/dynamic';
const ComponentDelayed = dynamic(
  () => import('./heroBackground/HeroBackground')
);
/**Components**/
import SvgLogoF from '@/components/SVG/logo/SvgLogoF';
// import HeroBackground from './heroBackground/HeroBackground';
import FadingFrame from '@/components/forMultiPage/lines/fadingLine/FadingFrame';
import DownloadableLinkSimple from '@/components/basic/links/downloadableLink/DownloadableLinkSimple';
/**Tailwind Styles**/
import { styles } from '@/styles';
/**Basic Data**/
import { doPobraniaPageData } from '@/data/basicData';

const HeroSection = () => {
  /**JSX**/
  return (
    <div
      data-component="HeroSection"
      className={`relative flex items-center justify-center min-h-screen ${styles.heroSectionOffset} before:block before:absolute before:h-full before:left-0 before:w-[5%] before:max-w-[40px] before:bg-gradient-to-r before:from-dark before:to-transparent before:z-10 after:absolute after:h-full after:right-0 after:w-[5%] after:max-w-[40px] after:bg-gradient-to-l after:from-dark after:to-transparent`}
    >
      {/* <HeroBackground /> */}
      <ComponentDelayed />
      <div className="relative fc flex-col w-[90%] xs4xx:w-[360px] lg:w-[400px] xxl:w-[460px] h-[80vh] min-h-[460px] z-10 bg-dark ">
        <div
          className={`relative fc flex-col gap-10 w-[90%] xs4xx:w-[360px] lg:w-[400px] xxl:w-[460px] h-[80vh] min-h-[460px] z-10 bg-dark`}
        >
          <FadingFrame />

          <div className="fc h-[40%] w-full">
            <SvgLogoF svgStyle={'h-full'} gStyle={'fill-corpo'} />
          </div>

          <div className="flex-col fc">
            <p className="text-large ">Katalog</p>
            <p className="text-regular">2023</p>
          </div>

          <div className="flex items-center justify-between min-w-[92px] gap-3 group">
            <DownloadableLinkSimple
              label={doPobraniaPageData.catalogData.linkLabel}
              path={doPobraniaPageData.catalogData.path}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
