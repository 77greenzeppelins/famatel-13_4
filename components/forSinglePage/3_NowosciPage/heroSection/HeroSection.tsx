/**Components**/
import FadingFrame from '@/components/forMultiPage/atomsLike/lines/fadingLine/FadingFrame';
/**Tailwind Styles**/
import { styles } from '@/styles';
/**Basic Data**/
import { NowosciPageText } from '@/data/textData';

const HeroSection = () => {
  const {
    hero: { header },
  } = NowosciPageText;
  /**JSX**/
  return (
    <div data-component="HeroSection" className={styles.heroSectionContainer}>
      <div className="relative fc flex-col w-[90%] xs4xx:w-[360px] lg:w-[400px] xxl:w-[460px] h-[80vh] min-h-[460px] z-10 bg-dark ">
        <div
          className={`relative fc flex-col gap-10 w-[90%] xs4xx:w-[360px] lg:w-[400px] xxl:w-[460px] h-[80vh] min-h-[460px] z-10 bg-dark`}
        >
          <FadingFrame />

          <div className="flex-col fc">
            <p className="text-large text-grey">{header[0]}</p>
            <p className="fc h-[2.75rem] leading-[4.25] text-center text-regular text-grey">
              {header[1]}
            </p>
            <p
              className="fc h-[2.75rem] text-center text-regular text-corpo"
              //___special-gradient text-gradient
            >
              {header[2]}
            </p>
            {/* <p className="relative p-2 mt-10 text-regular before:block before:absolute before:inset-0 before:bg-corpo">
              <span className="relative">{header[2]}</span>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
