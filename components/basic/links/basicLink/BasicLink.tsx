/**Components**/
import LinkAsContainer from './linkAsContainer/LinkAsContainer';
import LinkLabelWithIcon from './linkLabelWithIcon/LinkLabelWithIcon';
/**Framer Motion Staff**/
import { simpleOpacityVariants } from '@/lib/fmConfigs/framerMotionConfigs';

const BasicLink = () => {
  /**JSX**/
  return (
    <LinkAsContainer
      linkHref={'/'}
      ariaLabel="Link do strony: Kategorie Produktów"
      linkStyle="flex items-center w-fit px-4 py-2 rounded-sm border border-corpo hover:bg-corpo group ease-in duration-[0.4s] delay-[0.1s]"
    >
      <LinkLabelWithIcon
        customeVariants={simpleOpacityVariants}
        uniqueKey={'/'}
        label="Poznaj kategorie produktów"
        hasIcon={true}
        textStyle="text-corpo font-normal header-link-label group-hover:text-dark group-hover:font-bold ease-in duration-[0.4s] delay-[0.1s]"
        iconStyle="fc h-6 w-6 min-w-6 min-h-6 aspect-square stroke-corpo group-hover:stroke-dark group-hover:translate-x-1 ease-in duration-[0.4s] delay-[0.1s] origin-center flex-shrink-0"
      />
    </LinkAsContainer>
  );
};

export default BasicLink;
