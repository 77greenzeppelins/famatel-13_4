/*Components*/
import DirectMailB from '@/components/basic/links/dirContactsLinks/DirectMailB';
import DirectMailGK from '@/components/basic/links/dirContactsLinks/DirectMailGK';
import DirectPhoneGK from '@/components/basic/links/dirContactsLinks/DirectPhoneGK';
/**Basic Data**/
import { styles } from '@/styles';

/**TS**/
interface Props {
  aStyle?: string;
  iconStyle?: string;
  labelStyle?: string;
}
/**---------------------------**/
const ContactsLinks = ({ aStyle, iconStyle, labelStyle }: Props) => {
  const {
    footer: {
      dirContacts: {
        linkContainer,
        label: labelDefaultStyle,
        iconTrans: iconDefaultStyle,
      },
    },
  } = styles;
  /**JSX**/
  return (
    <address className="not-italic">
      <ul className="flex flex-col gap-y-5 ">
        <li>
          <DirectPhoneGK
            aStyle={aStyle ? aStyle : linkContainer}
            iconStyle={iconStyle ? iconStyle : iconDefaultStyle}
            labelStyle={labelStyle ? labelStyle : labelDefaultStyle}
          />
        </li>

        <li>
          <DirectMailB
            aStyle={aStyle ? aStyle : linkContainer}
            iconStyle={iconStyle ? iconStyle : iconDefaultStyle}
            labelStyle={labelStyle ? labelStyle : labelDefaultStyle}
          />
        </li>

        <li>
          <DirectMailGK
            aStyle={aStyle ? aStyle : linkContainer}
            iconStyle={iconStyle ? iconStyle : iconDefaultStyle}
            labelStyle={labelStyle ? labelStyle : labelDefaultStyle}
          />
        </li>
      </ul>
    </address>
  );
};

export default ContactsLinks;
