/**Components**/
import SvgLogo from '../../../../SVG/logo/SvgLogo';
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import Address from './contacts/Address';
import ContactsLinks from './contacts/ContactsLinks';
// import SmallPseudoHeader from '../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
// import ContactsLinks from '../contacts/ContactsLinks';
// import Address from '../contacts/Address';
// import SocialMediaBar from '../contacts/SocialMediaBar';
// import CopyProtect from '../copyProtect/CopyProtect';
/**BasicData**/
import { corpoColors } from '@/data/basicData';
import { styles } from '@/styles';

/**HardCoded Staff*/
const labelStyle =
  'p-small text-left text-dark font-bold group-hover:text-light group-hover:font-light duration-[0.3s] delay-[0.1s] ease-in';
// const iconStyle =
//   'h-4 w-4 text-light group-hover:animate-pulse ease-in duration-300 delay-100';
// const iconStyleTrans =
//   'h-4 w-4 text-light group-hover:text-dark group-hover:translate-x-1 ease-in duration-300  origin-center';
// const aStyle = 'flex items-center gap-6 group no-sparkling w-fit';

const FooterBottomPart = () => {
  const {
    footer: {
      dirContacts: { linkContainer, label, iconTrans },
    },
  } = styles;
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
            text="Dane Firmowe"
            textStyle="label-regular font-bold text-dark align-middle leading-none"
            // ornamentColor='bg-light'
            hasBox={true}
            hasVerticalOrnament={false}
            boxStyle="bg-light h-[10px] aspect-square"
          />
          <Address />
        </div>
        <div className="flex flex-col w-full gap-y-6 xs4xx:basis-1/2 md:basis-1/3">
          <BasicHeader
            text="Kontakt"
            textStyle="label-regular text-dark font-bold align-middle leading-none"
            hasBox={true}
            hasVerticalOrnament={false}
            boxStyle="bg-light h-[10px] aspect-square"
          />
          <ContactsLinks />

          {/* <SocialMediaBar
            fillColor={corpoColors.light}
            fillColorWhileHover={corpoColors.dark}
          /> */}
        </div>

        <div className="flex justify-between w-full">
          {/* <CopyProtect labelStyle={labelStyle} /> */}
          <p className={labelStyle}>web development: 77</p>
        </div>
      </div>
    </div>
  );
};

export default FooterBottomPart;
