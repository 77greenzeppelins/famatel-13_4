/**Components**/
import InViewContainer from '@/components/layout/containers/inView/InViewContainer';
import InViewAnimatedContent from '@/components/layout/containers/inView/InViewAnimatedContent';
import LargeHeader from '@/components/forMultiPage/headers/largeHeader/LargeHeader';
import Address from '@/components/layout/rootLayout/footer/bottomSection/contacts/Address';
import MapModule from './mapModule/MapModule';
/**Tailwind Styles**/
import { styles } from '@/styles';
/**Basic Data**/
import { kontaktPageText } from '@/data/textData';

/**TS**/
interface Props {
  sectionContainerStyle: string;
  textBlock: string;
  containerStyle: string;
  labelStyle: string;
  iconStyle: string;
}

const SectionAdres = ({
  sectionContainerStyle,
  containerStyle,
  labelStyle,
  iconStyle,
  textBlock,
}: Props) => {
  /**JSX**/
  return (
    <div className={sectionContainerStyle}>
      <InViewContainer
        animationDelay={2}
        outherContainerStyle=" w-full lg:w-1/2"
        measuredElementStyle="relative"
        topFactor={0.3}
        bottomFactor={0.3}
      >
        <InViewAnimatedContent
          yFactor=""
          xFactor=""
          scaleFactor={0.95}
          containerStyle={textBlock}
        >
          <LargeHeader
            ornamentStyle={styles.largeHeaderOrnamentStyle}
            textStyle={`${styles.largeHeaderText}`}
            text={kontaktPageText.headers[1]}
          />
          <Address
            containerStyle={containerStyle}
            labelStyle={labelStyle}
            iconStyle={iconStyle}
            isFooter={false}
          />
        </InViewAnimatedContent>
      </InViewContainer>
      <div className="relative flex w-full lg:w-1/2">
        <MapModule />
      </div>
    </div>
  );
};

export default SectionAdres;
