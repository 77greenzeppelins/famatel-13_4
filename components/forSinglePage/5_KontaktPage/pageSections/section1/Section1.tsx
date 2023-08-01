/**Components**/
import InViewContainer from '@/components/layout/containers/inView/InViewContainer';
import InViewAnimatedContent from '@/components/layout/containers/inView/InViewAnimatedContent';
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import Address from '@/components/layout/rootLayout/footer/bottomSection/contacts/Address';
import ContactsLinks from '@/components/layout/rootLayout/footer/bottomSection/contacts/ContactsLinks';
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

const Section1 = ({ containerStyle, labelStyle, iconStyle }: Props) => {
  /**JSX**/
  return (
    <InViewContainer
      animationDelay={2}
      outherContainerStyle="w-full"
      measuredElementStyle="relative "
      // topFactor={0.6}
      topFactor={0.3}
      bottomFactor={0.3}
    >
      <InViewAnimatedContent yFactor="" xFactor="" scaleFactor={0.95}>
        <div className="flex w-full wrapper-1-l ">
          <div className="flex flex-col gap-y-20 w-full lg:w-1/2 min-h-[50vh]">
            <div className="flex flex-col w-full gap-y-10">
              <BasicHeader
                ornamentStyle={styles.largeHeaderOrnamentStyle}
                textStyle={`${styles.largeHeaderText} max-w-[10px]`}
                text={kontaktPageText.headers[0]}
              />
              <ContactsLinks labelStyle={labelStyle} iconStyle={iconStyle} />
            </div>
            <div className="flex flex-col w-full gap-y-10">
              <BasicHeader
                ornamentStyle={styles.largeHeaderOrnamentStyle}
                textStyle={`${styles.largeHeaderText} max-w-[10px]`}
                text={kontaktPageText.headers[1]}
              />
              <Address
                containerStyle={containerStyle}
                labelStyle={labelStyle}
                iconStyle={iconStyle}
                isFooter={false}
              />
            </div>
          </div>
          <div className="fc hidden w-0 lg:w-1/2 min-h-[50vh]">
            <WorldMapComponent widthToDrag={worldMapConfig.isDraggable_1} />
          </div>
        </div>
      </InViewAnimatedContent>
    </InViewContainer>
  );
};

export default Section1;
