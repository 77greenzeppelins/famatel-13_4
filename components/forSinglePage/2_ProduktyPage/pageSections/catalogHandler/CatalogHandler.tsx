/**Components**/
import InViewContainer from '@/components/layout/containers/inView/InViewContainer';
import CatalogHandlerContent from './content/CatalogHandlerContent';

const CatalogHandler = () => {
  return (
    <div data-component="CatalogHandler" className="w-full h-full">
      <InViewContainer
        topFactor={0.7}
        bottomFactor={0.3}
        measuredElementStyle="w-full h-full flex items-center xl:justify-start"
      >
        <CatalogHandlerContent />
      </InViewContainer>
    </div>
  );
};

export default CatalogHandler;
