import dynamic from 'next/dynamic';
const ComponentDelayed = dynamic(
  () => import('./heroBackground/HeroBackground')
);

/**Components**/
import FadingFrame from '@/components/forMultiPage/lines/fadingLine/FadingFrame';
import TenCategoriesSvg from '@/components/SVG/other/TenCategoriesSvg_3';
/**Tailwind Styles**/
import { styles } from '@/styles';
/**Basic Data**/
import { ProduktyPageText } from '@/data/textData';
import { corpoColors } from '@/data/basicData';
import Dziesiec from '@/components/SVG/other/Dziesiec';

const HeroSection = () => {
  /**JSX**/
  return (
    <div
      data-component="HeroSection"
      className={`relative flex items-center justify-center min-h-screen ${styles.heroSectionOffset} before:block before:absolute before:h-full before:left-0 before:w-[5%] before:max-w-[40px] before:bg-gradient-to-r before:from-dark before:to-transparent before:z-10 after:absolute after:h-full after:right-0 after:w-[5%] after:max-w-[40px] after:bg-gradient-to-l after:from-dark after:to-transparent`}
    >
      <ComponentDelayed />
      <div className="relative fc flex-col w-[90%] xs4xx:w-[360px] lg:w-[400px] xxl:w-[460px] h-[80vh] min-h-[460px] z-10 bg-dark ">
        <div
          className={`relative fc flex-col gap-10 w-[90%] xs4xx:w-[360px] lg:w-[400px] xxl:w-[460px] h-[80vh] min-h-[460px] z-10 bg-dark`}
        >
          <FadingFrame />

          <div className="flex-col gap-y-6 lg:gap-y-12 fc">
            <p className="px-6 text-center fc label-regular text-grey">
              {ProduktyPageText.hero.l1}
            </p>
            {/* <TenCategoriesSvg
              className="relative w-[82%] h-[82%] z-10"
              letterStyle={corpoColors.orange}
            /> */}
            <Dziesiec svgStyle="relative w-[82%] h-[82%] z-10 disable" />
            <p className="px-6 text-center fc label-regular text-grey">
              {ProduktyPageText.hero.l2}
            </p>

            {/* <p className="fc h-[2.75rem] leading-[4.25] text-center text-medium text-grey">
              {ProduktyPageText.hero.l1}
            </p>
            <p className="fc h-[2.75rem] leading-[4.25] text-center text-medium text-grey">
              {ProduktyPageText.hero.l2}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
