/**Icons**/
import { MapPinIcon } from '@heroicons/react/24/solid';
/**Components**/
import InViewContainer from '@/components/layout/containers/inView/InViewContainer';
import InViewAnimatedContent from '@/components/layout/containers/inView/InViewAnimatedContent';
import LargeHeader from '@/components/forMultiPage/headers/largeHeader/LargeHeader';
import MapModule from './mapModule/MapModule';

/**Basic Data**/
import { styles } from '@/styles';
import { kontaktPageText } from '@/data/textData';

/**TS**/
interface Props {
  containerStyle: string;
  labelStyle: string;
  iconStyle: string;
}

const SectionDojazd = ({ containerStyle, labelStyle, iconStyle }: Props) => {
  /**JSX**/
  return (
    <div className="flex flex-col gap-y-14 lg:gap-y-0 lg:items-center lg:justify-start lg:flex-row">
      <InViewContainer
        animationDelay={2}
        outherContainerStyle="flex flex-col gap-y-20 w-full lg:w-1/2 wrapper-1-l"
        measuredElementStyle="relative "
        // topFactor={0.6}
        topFactor={0.3}
        bottomFactor={0.3}
      >
        <InViewAnimatedContent yFactor="" xFactor="" scaleFactor={0.95}>
          <LargeHeader
            ornamentStyle={styles.largeHeaderOrnamentStyle}
            textStyle={`${styles.largeHeaderText} `}
            text={kontaktPageText.headers[2]}
          />

          <ul
            className={
              containerStyle ? containerStyle : 'flex flex-col gap-y-5 '
            }
          >
            {kontaktPageText.dojazd.map(label => (
              <li key={label}>
                <p className={labelStyle}>{label}</p>
              </li>
            ))}

            <li className="flex items-center gap-2 ">
              <div>
                <MapPinIcon
                  className={iconStyle}
                  //___animate-pulse glow
                />
              </div>
              <p className={labelStyle}>{kontaktPageText.dojazdNav}</p>
            </li>
          </ul>
        </InViewAnimatedContent>
      </InViewContainer>
      <div className="relative flex w-full lg:w-1/2 wrapper-1-l">
        <MapModule />
        <div />
      </div>
    </div>
  );
};

export default SectionDojazd;

//___________________________________________
{
  /* <div className="flex items-center">
  <InViewContainer
    animationDelay={2}
    outherContainerStyle="flex flex-col gap-y-20 w-full lg:w-1/2 min-h-[50vh] wrapper-1-l"
    measuredElementStyle="relative "
    // topFactor={0.6}
    topFactor={0.3}
    bottomFactor={0.3}
  >
    <InViewAnimatedContent yFactor="" xFactor="" scaleFactor={0.95}>
      <LargeHeader
        ornamentStyle={styles.largeHeaderOrnamentStyle}
        textStyle={`${styles.largeHeaderText} `}
        text={kontaktPageText.headers[2]}
      />

      <ul
        className={containerStyle ? containerStyle : 'flex flex-col gap-y-5 '}
      >
        {kontaktPageText.dojazd.map(label => (
          <li key={label}>
            <p className={labelStyle}>{label}</p>
          </li>
        ))}

        <li className="flex items-center gap-2 ">
          <div>
            <MapPinIcon
              className={iconStyle}
              //___animate-pulse glow
            />
          </div>
          <p className={labelStyle}>{kontaktPageText.dojazdNav}</p>
        </li>
      </ul>
    </InViewAnimatedContent>
  </InViewContainer>
  <div className="hidden w-0 fc lg:w-1/2">
    <MapModule />
  </div>
</div>; */
}
