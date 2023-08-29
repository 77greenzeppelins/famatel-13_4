'use client';
import { useState } from 'react';
/**Components**/
import InViewContainer from '@/components/layout/containers/inView/InViewContainer';
import CatalogDisplayer from './catalogDisplayer/CatalogDisplayer';

const CatalogHandler = () => {
  /**Local State**/
  const [expanded, setExpanded] = useState<false | number>(0);

  console.log('CatalogHandler / expanded:', expanded);

  /**JSX**/
  return (
    <div data-component="CatalogHandler" className="w-full h-full">
      <InViewContainer
        topFactor={0.1}
        bottomFactor={0.1}
        // measuredElementStyle="w-full h-full flex items-center xl:justify-start"
      >
        <CatalogDisplayer expanded={expanded} setExpanded={setExpanded} />
      </InViewContainer>
    </div>
  );
};

export default CatalogHandler;

{
  /* <CatalogHandlerContent /> */
}
