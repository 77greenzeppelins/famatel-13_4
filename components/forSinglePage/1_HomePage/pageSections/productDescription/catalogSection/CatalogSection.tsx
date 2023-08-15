/**Components**/
import InViewContainer from '@/components/layout/containers/inView/InViewContainer';
import CatalogContnet from './content/CatalogContent';

const CatalogSection = () => {
  return (
    <div data-component="CatalogSection" className="w-full ">
      <InViewContainer topFactor={0.7} bottomFactor={0.3}>
        <CatalogContnet />
      </InViewContainer>
    </div>
  );
};

export default CatalogSection;
