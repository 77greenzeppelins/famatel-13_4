/**Components**/
import InViewContainer from '@/components/layout/containers/inView/InViewContainer';
import CatalogContnet from './content/CatalogContent';

const CatalogSection = () => {
  return (
    <div data-component="CatalogSection" className="w-full h-full ">
      <InViewContainer
        topFactor={0.7}
        bottomFactor={0.3}
        measuredElementStyle="w-full h-full flex items-center"
      >
        <CatalogContnet />
      </InViewContainer>
    </div>
  );
};

export default CatalogSection;
