/**Components**/
import ArrowForLinkIcon from '@/components/SVG/icons/heroIcons/ArrowForLinkIcon';
/**Basic Data**/
import { styles } from '@/styles';

/**HardCoded Staff*/
// const containerDefaultStyle =
//   'flex items-center w-fit  disable-soft origin-left group gap-x-4';
//___max-w-[750px] h-[72px] lg:h-[60px]
const textDefaultStyle =
  'text-grey text-medium group-hover:text-light ease-in duration-[0.4s] delay-[0.1s]';

/**TS**/
interface Props {
  children?: React.ReactNode;
  uniqueKey: number | string;
  label: string;
  customeVariants?: {};
  containerStyle?: string;
  textStyle?: string;
  hasIcon?: boolean;
  iconWrapperStyle?: string;
  iconStyle?: string;
}

/*
used in: various types of links
*/
/**---------------------------**/
const LinkLabelWithIcon = ({
  children,
  uniqueKey,
  label,
  customeVariants,
  containerStyle,
  textStyle,
  iconWrapperStyle,
  iconStyle,
  hasIcon = false,
}: Props) => {
  return (
    <>
      <p className={textStyle ? textStyle : textDefaultStyle}>{label}</p>
      {children}
      {hasIcon && (
        <span className={iconWrapperStyle}>
          <ArrowForLinkIcon
            containerStyle={
              iconStyle
                ? iconStyle
                : `fc h-4 w-4 aspect-square stroke-2 stroke-corpo group-hover:stroke-light group-hover:rotate-45 origin-center flex-shrink-0 ${styles.lazyAnimation}`
            }
          />
        </span>
        // <ArrowLongRightIcon
        //   containerStyle={
        //     iconStyle
        //       ? iconStyle
        //       : 'fc h-6 w-6 min-w-6 min-h-6 aspect-square stroke-greyShade1 group-hover:stroke-light group-hover:translate-x-1 ease-in duration-[0.4s] delay-[0.1s] origin-center flex-shrink-0'
        //   }
        // />
      )}
    </>
  );
};

export default LinkLabelWithIcon;
