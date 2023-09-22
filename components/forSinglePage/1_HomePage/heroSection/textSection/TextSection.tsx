/**Components**/
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import BasicLink from '@/components/basic/links/linksWithIcon/basicLink/BasicLink';
// import HeroHeader from './content/heroHeader/HeroHeader';
/**Tailwind*/
import { styles } from '@/styles';
import { HomePageText } from '@/data/textData';
function TextSection() {
  /**JSX**/
  return (
    <div
      data-component="TextSection__container"
      className="relative w-full xs:w-fit"
      //___xs:w-[70%] xl:w-full
    >
      <div className="flex flex-col gap-y-8 xl:gap-y-14">
        <BasicHeader
          text="Bezpieczne rozwiązania"
          textStyle={`${styles.basicHeaderText} `}
          hasBox={true}
          hasVerticalOrnament={false}
        />
        <h1 className="flex flex-col">
          {HomePageText.hero.header.split(' ').map(word => (
            <span key={word} className="text-hero-h1 text-light">
              {word}
            </span>
          ))}
        </h1>
        <BasicLink linkLabel="Poznaj produkty" />
      </div>
    </div>
  );
}

export default TextSection;
