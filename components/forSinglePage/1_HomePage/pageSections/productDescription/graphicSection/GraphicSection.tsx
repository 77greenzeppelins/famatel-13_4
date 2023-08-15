/**Components**/
import InViewContainer from '@/components/layout/containers/inView/InViewContainer';
import ImageContnet from './content/ImageContnet';

const GraphicSection = () => {
  /**JSX**/
  return (
    <InViewContainer topFactor={0.7} bottomFactor={0.3}>
      <ImageContnet />
    </InViewContainer>
  );
};

export default GraphicSection;
