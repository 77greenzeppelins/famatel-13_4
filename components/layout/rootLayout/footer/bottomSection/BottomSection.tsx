/**Components**/
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import Address from './contacts/Address';
import ContactsLinks from './contacts/ContactsLinks';
import CopyProtect from './copyProtect/CopyProtect';
import SocialMediaBar from './contacts/SocialMediaBar';
import SvgLogo from '../../../../SVG/logo/SvgLogo';
/**BasicData**/
import { corpoColors } from '@/data/basicData';
import { styles } from '@/styles';
import { footerText } from '@/data/textData';

const FooterBottomPart = () => {
  /**JSX**/
  return (
    <div className="flex flex-col w-full min-h-[300px] bg-corpo wrapper-1 py-8">
      <div className="flex flex-wrap w-full gap-y-10 ">
        <div className="items-center justify-start hidden h-full md:flex md:basis-1/3">
          <div
            //  className={`${corpoStandards.headerStyle}`}
            className="h-[52px] lg:h-[66px]"
          >
            <SvgLogo
              fillColorText={corpoColors.dark}
              hasSygnet={false}
              isHovered={false}
            />
          </div>
        </div>

        <div className="flex flex-col w-full gap-y-6 xs4xx:basis-1/2 md:basis-1/3">
          <BasicHeader
            text={footerText.bottomSectionHeaders[0]}
            textStyle="label-regular font-bold text-dark align-middle leading-none"
            // ornamentColor='bg-light'
            hasBox={true}
            hasVerticalOrnament={false}
            boxStyle="bg-dark h-[10px] aspect-square"
          />
          <Address />
        </div>
        <div className="flex flex-col w-full gap-y-6 xs4xx:basis-1/2 md:basis-1/3">
          <BasicHeader
            text={footerText.bottomSectionHeaders[1]}
            textStyle="label-regular text-dark font-bold align-middle leading-none"
            hasBox={true}
            hasVerticalOrnament={false}
            boxStyle="bg-dark h-[10px] aspect-square"
          />
          <ContactsLinks />

          <SocialMediaBar
            fillColor={corpoColors.light}
            fillColorWhileHover={corpoColors.dark}
          />
        </div>

        <div className="flex justify-between w-full">
          <CopyProtect labelStyle={styles.footer.dirContacts.label} />
          <div className="group disable-soft ">
            <p className={styles.footer.dirContacts.label}>
              web development: 77
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottomPart;
// const {
//   footer: {
//     dirContacts: { label },
//   },
// } = styles;
