/**Components**/
import InViewAnimatedContent from '@/components/layout/containers/inView/InViewAnimatedContent';
import InViewContainer from '@/components/layout/containers/inView/InViewContainer';
import SvgPolandMap from '@/components/SVG/maps/SvgPolandMap';

const MapModule = () => {
  return (
    <InViewContainer
      outherContainerStyle=""
      animationDelay={2}
      topFactor={0.3}
      bottomFactor={0.3}
    >
      <InViewAnimatedContent scaleFactor={0.95} xFactor={''} yFactor={''}>
        <div className="grid justify-items-center">
          <div className="abs-cell aspect-square min-h-[400px] max-h-[700px] special-gradient -z-1 scale-95 rotate-180" />
          <SvgPolandMap containerStyle=" abs-cell w-full min-h-[400px] max-h-[700px] z-1 scale-100" />
        </div>
      </InViewAnimatedContent>
    </InViewContainer>
  );
};

export default MapModule;
