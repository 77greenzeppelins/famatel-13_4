import React from 'react';
/**Components**/
import FadingFrame from '@/components/forMultiPage/lines/fadingLine/FadingFrame';
import DownloadableLinkSimple from '@/components/basic/links/downloadableLink/DownloadableLinkSimple';
/**Basic Data*/
import { styles } from '@/styles';
import { doPobraniaPageData } from '@/data/basicData';
import SvgLogoF from '@/components/SVG/logo/SvgLogoF';

const HeroSection = () => {
  /**JSX**/
  return (
    <div
      role="presentation"
      aria-hidden="true"
      data-component="HeroSection"
      className={`relative flex items-center justify-center min-h-screen ${styles.heroSectionOffset}`}
    >
      <div
        className="absolute h-full left-0 w-[5%] max-w-[40px] z-10 from-dark  to-transparent bg-gradient-to-r"
        //___via-dark
      />
      <div className="absolute h-full right-0 w-[5%] max-w-[40px] z-10 from-dark to-transparent bg-gradient-to-l" />
      <div className="relative fc flex-col w-[90%] xs4xx:w-[360px] lg:w-[400px] xxl:w-[460px] h-[80vh] min-h-[460px] z-10 bg-dark ">
        <div
          className={`relative fc flex-col gap-10 w-[90%] xs4xx:w-[360px] lg:w-[400px] xxl:w-[460px] h-[80vh] min-h-[460px] z-10 bg-dark`}
          //___max-w-[600px] max-h-[600px]
          // variants={container}
          // initial="initial"
          // animate="animate"
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
            {/* <DownloadableLink
              staffToDownload={catalogLink}
              linkLabel={'PEŁNA WERSJA (53 MB)'}
              textStyle={
                'header-link-label text-grey group-hover:text-light ease-in duration-300 disable whitespace-normal'
              }
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
