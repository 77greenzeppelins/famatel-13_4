/**Components**/
import InViewAnimatedContent from '@/components/layout/containers/inView/InViewAnimatedContent';
import InViewContainer from '@/components/layout/containers/inView/InViewContainer';
import SvgPolandMap from '@/components/SVG/maps/SvgPolandMap';
/**Tailwind Classes**/
import { styles } from '@/styles';

styles;

const MapModule = () => {
  /**Data Destr...**/
  const {
    mapModule: { container, background, foreground },
  } = styles;
  /**JSX**/
  return (
    <InViewContainer
      // outherContainerStyle=""
      animationDelay={2}
      topFactor={0.3}
      bottomFactor={0.3}
    >
      <InViewAnimatedContent scaleFactor={0.95} xFactor={''} yFactor={''}>
        <div className={container}>
          <div className={background} />
          <SvgPolandMap containerStyle={foreground} />
        </div>
      </InViewAnimatedContent>
    </InViewContainer>
  );
};

export default MapModule;
