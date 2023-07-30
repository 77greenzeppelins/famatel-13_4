'use client';
/**Components**/
import FadingFrame from '@/components/forMultiPage/lines/fadingLine/FadingFrame';
import FadingLine from '@/components/forMultiPage/lines/fadingLine/FadingLine';

/**TS**/
type Props = {
  componentIsInView?: boolean;
  pseudoNumber?: string;
  label?: string;
};

/**------------------------------------------------**/
const SquareWithNumber: React.FC<Props> = ({
  componentIsInView = false,
  pseudoNumber = '000',
  label = 'lorem',
}) => {
  /**JSX**/
  return (
    <div
      className={`fc flex-col  ${
        componentIsInView
          ? ' translate-x-0 opacity-1'
          : ' translate-x-4 opacity-0'
      } duration-[0.9s] delay-[0.6] p-2 disable-soft w-[80px] h-[80px] md:w-[120px] md:h-[120px] aspect-square`}
    >
      <FadingFrame />

      <p
        // ref={ref}
        className="text-center text-[1.25rem] xs:text-[1.5rem]  md:text-[1.75rem] lg:text-[2rem] xl:text-[2.25rem] font-bold tracking-[2px] leading-tight text-libht  duration-[0.9s] delay-[0.6] pb-1"
        // style={{ width: 'content-fit' }}
      >
        {pseudoNumber}
      </p>
      <div className="w-full flex h-[1px] duration-[0.9s] delay-[0.6]">
        <FadingLine gradientTo="toLeft" />
        <FadingLine />
      </div>
      <p
        className="label-regular text-center text-grey  duration-[0.9s] delay-[0.6] pt-[2px]"
        // style={{ width: 'content-fit' }}
      >
        {label}
      </p>
    </div>
  );
};

export default SquareWithNumber;
