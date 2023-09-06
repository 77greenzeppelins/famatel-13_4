/**Components**/
import LinkAsContainer from './linkAsContainer/LinkAsContainer';
import LinkLabelWithIcon from './linkLabelWithIcon/LinkLabelWithIcon';
/**Framer Motion Staff**/
import { simpleOpacityVariants } from '@/lib/fmConfigs/framerMotionConfigs';
/**Tailwind styles**/
import { styles } from '@/styles';

/**TS**/
interface Props {
  //___forLink
  href?: string;
  ariaLabel?: string;
  linkStyle?: string;
  //___for label text
  linkLabel?: string;
  textStyle?: string;
  //___for icon
  isIcon?: boolean;
  iconWrapperStyle?: string;
  iconStyle?: string;
  isIconFirst?: boolean;
}

const BasicLink = ({
  href = '/produkty',
  ariaLabel,
  linkStyle,
  linkLabel,
  textStyle,
  iconWrapperStyle,
  iconStyle,
  isIcon = true,
  isIconFirst = false,
}: Props) => {
  /**JSX**/
  return (
    <LinkAsContainer
      linkHref={href}
      ariaLabel={ariaLabel ? ariaLabel : 'Link do strony'}
      linkStyle={
        linkStyle
          ? linkStyle
          : `flex items-center w-fit px-4 py-2 rounded-sm border border-corpo hover:bg-corpo group ${styles.lazyAnimation}`
        //___flex-row-reverse
      }
    >
      <LinkLabelWithIcon
        customeVariants={simpleOpacityVariants}
        uniqueKey={'/'}
        // label="Poznaj kategorie produktów"
        label={linkLabel ? linkLabel : 'Poznaj produkty'}
        hasIcon={true}
        textStyle={
          textStyle
            ? textStyle
            : `text-corpo font-normal label-regular group-hover:text-dark group-hover:font-bold ${styles.lazyAnimation}`
        }
        iconWrapperStyle={iconWrapperStyle}
        iconStyle={
          iconStyle
            ? iconStyle
            : `fc h-6 w-6 min-w-6 min-h-6 aspect-square stroke-corpo group-hover:stroke-dark group-hover:rotate-45 group-hover:translate-x-1 ${styles.lazyAnimation} origin-center flex-shrink-0`
          //___
        }
      />
    </LinkAsContainer>
  );
};

export default BasicLink;
