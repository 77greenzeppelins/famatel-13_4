'use client';

/**Components**/
import FadingFrame from '@/components/forMultiPage/atomsLike/lines/fadingLine/FadingFrame';
import FadingLine from '@/components/forMultiPage/atomsLike/lines/fadingLine/FadingLine';
import InViewCSSAnimatedContent from '@/components/layout/containers/inView/InViewCSSAnimatedContent';
/**Tailwind Styles**/
import { styles } from '@/styles';

/**TS**/
type Props = {
  componentIsInView?: boolean;
  pseudoNumber?: string;
  label?: string;
};

/**------------------------------------------------**/
const SquareWithNumber: React.FC<Props> = ({
  componentIsInView,
  pseudoNumber = '000',
  label = 'Default Label',
}) => {
  /** */
  const {
    numberTextModule: { visible, invisible, containerStyle },
  } = styles;
  /**JSX**/
  return (
    <InViewCSSAnimatedContent
      componentIsInView={componentIsInView}
      inViewTrue={visible}
      inViewFalse={invisible}
      containerStyle={containerStyle}
    >
      <FadingFrame />
      <p className="text-center text-[1.25rem] xs:text-[1.5rem]  md:text-[1.75rem] lg:text-[2rem] xl:text-[2.25rem] font-bold tracking-[2px] leading-tight text-libht  duration-[0.9s] delay-[0.6] pb-1">
        {pseudoNumber}
      </p>
      <div className="w-full flex h-[1px] duration-[0.9s] delay-[0.6]">
        <FadingLine gradientTo="toLeft" />
        <FadingLine />
      </div>
      <p className="label-regular text-center text-grey  duration-[0.9s] delay-[0.6] pt-[2px]">
        {label}
      </p>
    </InViewCSSAnimatedContent>
  );
};

export default SquareWithNumber;
