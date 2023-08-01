import Link from 'next/link';
/**Icons**/
import { MapPinIcon } from '@heroicons/react/24/solid';
/**Components**/
import InViewContainer from '@/components/layout/containers/inView/InViewContainer';
import InViewAnimatedContent from '@/components/layout/containers/inView/InViewAnimatedContent';
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import SvgMap from '@/components/SVG/maps/SvgMap';

/**Basic Data**/
import { styles } from '@/styles';
import { kontaktPageText } from '@/data/textData';

/**TS**/
interface Props {
  containerStyle: string;
  labelStyle: string;
  iconStyle: string;
}

const Section2 = ({ containerStyle, labelStyle, iconStyle }: Props) => {
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
        <div className="flex flex-col items-center w-full lg:flex-row wrapper-1-l ">
          <div className="flex flex-col gap-y-20 w-full lg:w-1/2 xl:w-[45%] min-h-[50vh]">
            <div className="flex flex-col w-full gap-y-10">
              <BasicHeader
                ornamentStyle={styles.largeHeaderOrnamentStyle}
                textStyle={`${styles.largeHeaderText} max-w-[10px]`}
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
            </div>
          </div>

          <div className="relative flex w-[96%] gap-x-6 min-h-[400px] xl:h-[80vh] lg:w-1/2 xl:w-[55%] md:justify-center pt-2">
            <Link
              aria-label={'Link do GoogleMap'}
              role="link"
              className="absolute z-10 w-full h-full"
              target="_blank"
              rel="noopener"
              href="https://www.google.com/maps/search/Famatel+Polska+Sp.o.o+ul.+Willowa+5,+58+260+Bielawa+Polska"
              scroll={false}
            />
            <SvgMap containerStyle="relative w-full z-5" />
          </div>
        </div>
      </InViewAnimatedContent>
    </InViewContainer>
  );
};

export default Section2;
