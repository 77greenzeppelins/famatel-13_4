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
  containerStyle: string;
  labelStyle: string;
  iconStyle: string;
}

const SectionKontakt = ({ containerStyle, labelStyle, iconStyle }: Props) => {
  /**JSX**/
  return (
    <div className="flex items-center">
      <InViewContainer
        animationDelay={2}
        outherContainerStyle="flex flex-col gap-y-20 w-full lg:w-1/2 wrapper-1-l"
        measuredElementStyle="relative "
        // topFactor={0.6}
        topFactor={0.3}
        bottomFactor={0.3}
      >
        <InViewAnimatedContent yFactor="" xFactor="" scaleFactor={0.95}>
          <div className="flex flex-col w-full gap-y-10">
            <LargeHeader
              ornamentStyle={styles.largeHeaderOrnamentStyle}
              textStyle={`${styles.largeHeaderText} max-w-[10px]`}
              text={kontaktPageText.headers[0]}
            />
            <ContactsLinks labelStyle={labelStyle} iconStyle={iconStyle} />
          </div>
        </InViewAnimatedContent>
      </InViewContainer>
    </div>
  );
};

export default SectionKontakt;
