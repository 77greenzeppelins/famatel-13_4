import dynamic from 'next/dynamic';
const ComponentDelayed = dynamic(
  () => import('./heroBackground/HeroBackground')
);

/**Components**/
import FadingFrame from '@/components/forMultiPage/lines/fadingLine/FadingFrame';
/**Tailwind Styles**/
import { styles } from '@/styles';
/**Basic Data**/
// import { doPobraniaPageData } from '@/data/basicData';

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

          <div className="flex-col fc">
            <p className="text-center text-large">Famatel Polska</p>
            <p className="fc h-[2.75rem] leading-[4.25] text-center label-regular text-grey">
              poniedziałek - piątek
            </p>
            <p className="fc h-[2.75rem] leading-[4.25] text-center label-regular text-grey">
              {' '}
              8ºº - 16ºº
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
