import dynamic from 'next/dynamic';
const ComponentDelayed = dynamic(
  () => import('./heroBackground/HeroBackground')
);

/**Components**/
import FadingFrame from '@/components/forMultiPage/atomsLike/lines/fadingLine/FadingFrame';
import Dziesiec from '@/components/SVG/other/Dziesiec';
/**Tailwind Styles**/
import { styles } from '@/styles';
/**Basic Data**/
import { ProduktyPageText } from '@/data/textData';

const HeroSection = () => {
  /**JSX**/
  return (
    <div data-component="HeroSection" className={styles.heroSectionContainer}>
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
