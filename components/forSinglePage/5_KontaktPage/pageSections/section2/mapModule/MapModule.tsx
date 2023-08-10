import WorldMapComponent from '@/components/SVG/maps/WorldMapComponent';
import InViewAnimatedContent from '@/components/layout/containers/inView/InViewAnimatedContent';
import InViewContainer from '@/components/layout/containers/inView/InViewContainer';
import { worldMapConfig } from '@/data/basicData';
import React from 'react';

const MapModule = () => {
  return (
    <InViewContainer
      outherContainerStyle=""
      animationDelay={2}
      topFactor={0.3}
      bottomFactor={0.3}
    >
      <InViewAnimatedContent scaleFactor={0.95} xFactor={''} yFactor={''}>
        <WorldMapComponent widthToDrag={worldMapConfig.isDraggable_1} />
      </InViewAnimatedContent>
    </InViewContainer>
  );
};

export default MapModule;
