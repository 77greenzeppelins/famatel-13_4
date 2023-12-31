/**Components**/
import WorldMapComponent from '@/components/SVG/maps/WorldMapComponent';
import InViewAnimatedContent from '@/components/layout/containers/inView/InViewAnimatedContent';
import InViewContainer from '@/components/layout/containers/inView/InViewContainer';

const WorldMapSection = () => {
  /**JSX**/
  return (
    <div className="w-full">
      <InViewContainer animationDelay={2} topFactor={0.3} bottomFactor={0.3}>
        <InViewAnimatedContent scaleFactor={0.95} xFactor={''} yFactor={''}>
          <WorldMapComponent />
        </InViewAnimatedContent>
      </InViewContainer>
    </div>
  );
};

export default WorldMapSection;
