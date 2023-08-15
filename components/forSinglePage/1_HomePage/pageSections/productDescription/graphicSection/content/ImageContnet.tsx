/**Components**/
import SVG_1_1_14307 from '@/components/SVG/techDrawings/0_dark/SVG_1.1_14307_d';
import InViewCSSAnimatedContent from '@/components/layout/containers/inView/InViewCSSAnimatedContent';
/** */
import { styles } from '@/styles';

const ImageContnet = ({
  componentIsInView,
}: {
  componentIsInView?: boolean;
}) => {
  /**Data Destr...**/
  const {
    inViewContentSubtleSide: {
      visible,
      invisibleFromRightBottom,
      containerStyle,
    },
  } = styles;

  /**JSX**/
  return (
    <InViewCSSAnimatedContent
      componentIsInView={componentIsInView}
      inViewTrue={visible}
      inViewFalse={invisibleFromRightBottom}
      containerStyle={containerStyle}
    >
      <SVG_1_1_14307 containerStyle="w-auto h-full fc" />
    </InViewCSSAnimatedContent>
  );
};

export default ImageContnet;
