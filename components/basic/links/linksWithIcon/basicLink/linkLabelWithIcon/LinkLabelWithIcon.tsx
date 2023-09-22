/*
___1. <ArrowForLinkIcon> is defoult as it's most frequentlly used
___2. take "iconStyle" and apply to each alternative icon
*/
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
  label?: string;
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
  //___icon
  hasIcon = true,
  children,
  iconWrapperStyle,
  iconStyle,
  //___label
  label,
  textStyle,
}: Props) => {
  return (
    <>
      <p className={textStyle ? textStyle : textDefaultStyle}>{label}</p>
      <span className={iconWrapperStyle}>{children}</span>
      {hasIcon && (
        <span className={iconWrapperStyle}>
          <ArrowForLinkIcon
            containerStyle={
              iconStyle
                ? iconStyle
                : `fc h-6 w-6 min-w-6 min-h-6 aspect-square stroke-corpo group-hover/link:stroke-dark group-hover/link:rotate-45 group-hover/link:translate-x-1 ${styles.lazyAnimation} origin-center flex-shrink-0`
            }
          />
        </span>
      )}
    </>
  );
};

export default LinkLabelWithIcon;
