/**Components**/
import BasicCatalogNavigation from '@/components/forMultiPage/navigations/catalogBasicNav/BasicCatalogNavigation';
import InViewCSSAnimatedContent from '@/components/layout/containers/inView/InViewCSSAnimatedContent';
/** */
import { styles } from '@/styles';

const CatalogContnet = ({
  componentIsInView,
}: {
  componentIsInView?: boolean;
}) => {
  /**Data Destr...**/
  const {
    inViewContentSubtleSide: {
      visible,
      invisibleFromLeftBottom,
      containerStyle,
    },
  } = styles;

  /**JSX**/
  return (
    <InViewCSSAnimatedContent
      componentIsInView={componentIsInView}
      inViewTrue={visible}
      inViewFalse={invisibleFromLeftBottom}
      containerStyle={containerStyle}
    >
      <BasicCatalogNavigation />
    </InViewCSSAnimatedContent>
  );
};

export default CatalogContnet;
