/**Components**/
import FadingFrame from '@/components/forMultiPage/lines/fadingLine/FadingFrame';
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
    <div
      data-component="HeroSection"
      className={`relative flex items-center justify-center min-h-screen ${styles.heroSectionOffset} before:block before:absolute before:h-full before:left-0 before:w-[5%] before:max-w-[40px] before:bg-gradient-to-r before:from-dark before:to-transparent before:z-10 after:absolute after:h-full after:right-0 after:w-[5%] after:max-w-[40px] after:bg-gradient-to-l after:from-dark after:to-transparent`}
    >
      {/* <p className="text-grey text-medium">{NowosciPageText.hero.header}</p> */}
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
