import React from 'react';
/**Icons**/
import { MapPinIcon } from '@heroicons/react/24/solid';

/**Basic Data**/
import { kontaktPageText, footerText } from '@/data/textData';
import { styles } from '@/styles';

/**TS**/
interface Props {
  containerStyle?: string;
  labelStyle?: string;
  iconStyle?: string;
  isFooter?: boolean;
}

/**-------------------------------------**/
const Address = ({
  containerStyle,
  labelStyle,
  iconStyle,
  isFooter = true,
}: Props) => {
  const {
    footer: {
      address: { label: labelDefaultStyle, icon: iconDefaultStyle },
    },
  } = styles;
  /**JSX**/
  return (
    <address className="not-italic">
      <ul
        className={containerStyle ? containerStyle : 'flex flex-col gap-y-5 '}
      >
        {kontaktPageText.daneFirmy.map(label => (
          <li key={label}>
            <p className={labelStyle ? labelStyle : labelDefaultStyle}>
              {label}
            </p>
          </li>
        ))}
        {isFooter ? (
          <li className="flex items-center gap-2 ">
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
        ) : null}
      </ul>
    </address>
  );
};

export default Address;
