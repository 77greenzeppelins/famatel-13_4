/*
___1. 
*/

/**Components**/
import LinkAsContainer from './linkAsContainer/LinkAsContainer';
import LinkLabelWithIcon from './linkLabelWithIcon/LinkLabelWithIcon';
/**Framer Motion Staff**/
import { simpleOpacityVariants } from '@/lib/fmConfigs/framerMotionConfigs';
/**Tailwind styles**/
import { styles } from '@/styles';

/**TS**/
interface Props {
  //___for icon
  isIcon?: boolean;
  iconWrapperStyle?: string;
  iconStyle?: string;
  isIconFirst?: boolean;
  children?: React.ReactNode;
  hasIcon?: boolean;
  //___forLink
  href?: string;
  ariaLabel?: string;
  linkStyle?: string;
  //___for label text
  linkLabel?: string;
  textStyle?: string;
}

const BasicLink = ({
  isIcon = true,
  isIconFirst = false,
  hasIcon,
  children, // alternative icon
  iconStyle,
  href = '/produkty',
  ariaLabel,
  linkStyle,
  linkLabel,
  textStyle,
  iconWrapperStyle,
}: Props) => {
  /**JSX**/
  return (
    <LinkAsContainer
      linkHref={href}
      ariaLabel={ariaLabel ? ariaLabel : 'Link do strony'}
      linkStyle={
        linkStyle
          ? linkStyle
          : `flex items-center w-fit px-4 py-2 rounded-sm border border-corpo hover:bg-corpo group/link ${styles.lazyAnimation}`
        //___flex-row-reverse
      }
    >
      <LinkLabelWithIcon
        customeVariants={simpleOpacityVariants}
        label={linkLabel}
        hasIcon={hasIcon}
        textStyle={
          textStyle
            ? textStyle
            : `text-corpo font-normal label-regular group-hover/link:text-dark group-hover/link:font-bold ${styles.lazyAnimation}`
        }
        iconWrapperStyle={iconWrapperStyle}
        iconStyle={iconStyle}
      >
        {children}
      </LinkLabelWithIcon>
    </LinkAsContainer>
  );
};

export default BasicLink;
