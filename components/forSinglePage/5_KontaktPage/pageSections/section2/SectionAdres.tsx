/**Components**/
import InViewContainer from '@/components/layout/containers/inView/InViewContainer';
import InViewAnimatedContent from '@/components/layout/containers/inView/InViewAnimatedContent';
import LargeHeader from '@/components/forMultiPage/headers/largeHeader/LargeHeader';
import Address from '@/components/layout/rootLayout/footer/bottomSection/contacts/Address';
import ContactsLinks from '@/components/layout/rootLayout/footer/bottomSection/contacts/ContactsLinks';
import MapModule from './mapModule/MapModule';
import WorldMapComponent from '@/components/SVG/maps/WorldMapComponent';

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

const SectionAdres = ({ containerStyle, labelStyle, iconStyle }: Props) => {
  /**JSX**/
  return (
    <div
      // className="flex items-center"
      className="flex flex-col gap-y-14 lg:gap-y-0 lg:items-center lg:justify-start lg:flex-row"
    >
      <InViewContainer
        animationDelay={2}
        // outherContainerStyle=" w-full lg:w-1/2 wrapper-1-l"
        // measuredElementStyle="relative "
        outherContainerStyle="flex flex-col gap-y-20 w-full lg:w-1/2 wrapper-1-l"
        measuredElementStyle="relative"
        // topFactor={0.6}
        topFactor={0.3}
        bottomFactor={0.3}
      >
        <InViewAnimatedContent yFactor="" xFactor="" scaleFactor={0.95}>
          {/* <div className="flex flex-col w-full gap-y-10"> */}
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
          {/* </div> */}
        </InViewAnimatedContent>
      </InViewContainer>
      {/* <div className="relative hidden w-0 fc lg:w-1/2 ">
        <div className="absolute left-0 h-full lg:w-[14px] bg-gradient-to-r from-dark  to-transparent  z-20" />
        <div className="absolute right-0 h-full lg:w-[6px] bg-gradient-to-l from-dark via-dark to-transparent  z-20" />
        <MapModule />
      </div> */}
      <div className="relative flex w-full lg:w-1/2 wrapper-1-l">
        <MapModule />
      </div>
    </div>
  );
};

export default SectionAdres;
