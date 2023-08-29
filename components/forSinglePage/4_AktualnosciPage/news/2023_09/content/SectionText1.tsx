/**Components**/
import InViewCSSAnimatedContent from '@/components/layout/containers/inView/InViewCSSAnimatedContent';
/**Tailwins Styles**/
import { styles } from '@/styles';

/**TS**/
type Props = {
  text: string;
  componentIsInView?: boolean;
  containerStyle?: string;
};

const SectionText1 = ({ text, componentIsInView, containerStyle }: Props) => {
  /** */
  const {
    numberTextModule: {
      visible,
      invisible,
      containerStyle: inViewContainerStyle,
    },
  } = styles;

  /**JSX**/
  return (
    <InViewCSSAnimatedContent
      componentIsInView={componentIsInView}
      inViewTrue={visible}
      inViewFalse={invisible}
      containerStyle={containerStyle ? containerStyle : inViewContainerStyle}
    >
      <p className="text-center text-medium text-grey">{text}</p>
    </InViewCSSAnimatedContent>
  );
};

export default SectionText1;
