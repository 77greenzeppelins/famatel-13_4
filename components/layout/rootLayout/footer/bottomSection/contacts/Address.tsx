import React from 'react';
/**ICOns**/
import { MapPinIcon } from '@heroicons/react/24/solid';

/**Basic Data**/
import { KontaktPageText, footerText } from '@/data/textData';
import { styles } from '@/styles';

/**TS**/
interface Props {
  labelStyle?: string;
  iconStyle?: string;
}

/**-------------------------------------**/
const Address = ({ labelStyle, iconStyle }: Props) => {
  const {
    footer: {
      address: { label: labelDefaultStyle, icon: iconDefaultStyle },
    },
  } = styles;
  /**JSX**/
  return (
    <address className="not-italic">
      <ul className="flex flex-col gap-y-5 ">
        {KontaktPageText.daneFirmy.map(label => (
          <li key={label}>
            <p className={labelStyle ? labelStyle : labelDefaultStyle}>
              {label}
            </p>
          </li>
        ))}
        <li className="flex items-end gap-2 ">
          <div>
            <MapPinIcon
              className={iconStyle ? iconStyle : iconDefaultStyle}
              //___animate-pulse glow
            />
          </div>
          <p className={labelStyle ? labelStyle : labelDefaultStyle}>
            {footerText.dojazdPrompt}
          </p>
        </li>
      </ul>
    </address>
  );
};

export default Address;
