import WorldMapComponent from '@/components/SVG/maps/WorldMapComponent';
import InViewAnimatedContent from '@/components/layout/containers/inView/InViewAnimatedContent';
import InViewContainer from '@/components/layout/containers/inView/InViewContainer';
import { worldMapConfig } from '@/data/basicData';
import React from 'react';

const MapModule = () => {
  return (
    <InViewContainer
      outherContainerStyle="fc hidden w-0 lg:w-1/2"
      animationDelay={2}
      topFactor={0.3}
      bottomFactor={0.3}
    >
      <InViewAnimatedContent scaleFactor={1} xFactor={''} yFactor={''}>
        <WorldMapComponent />
      </InViewAnimatedContent>
    </InViewContainer>
  );
};

export default MapModule;
