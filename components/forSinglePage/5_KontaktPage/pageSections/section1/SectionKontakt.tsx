/**Components**/
import InViewContainer from '@/components/layout/containers/inView/InViewContainer';
import InViewAnimatedContent from '@/components/layout/containers/inView/InViewAnimatedContent';
import LargeHeader from '@/components/forMultiPage/headers/largeHeader/LargeHeader';
import ContactsLinks from '@/components/layout/rootLayout/footer/bottomSection/contacts/ContactsLinks';

/**Basic Data**/
import { styles } from '@/styles';
import { kontaktPageText } from '@/data/textData';
import { worldMapConfig } from '@/data/basicData';

worldMapConfig;

/**TS**/
interface Props {
  textBlock: string;
  containerStyle: string;
  labelStyle: string;
  iconStyle: string;
}

const SectionKontakt = ({
  textBlock,
  containerStyle,
  labelStyle,
  iconStyle,
}: Props) => {
  /**JSX**/
  return (
    <InViewContainer
      animationDelay={2}
      outherContainerStyle="w-full wrapper-2"
      measuredElementStyle="relative "
      // topFactor={0.6}
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
          textStyle={`${styles.largeHeaderText} max-w-[10px]`}
          text={kontaktPageText.headers[0]}
        />
        <ContactsLinks
          containerStyle={containerStyle}
          labelStyle={labelStyle}
          iconStyle={iconStyle}
        />
      </InViewAnimatedContent>
    </InViewContainer>
  );
};

export default SectionKontakt;
