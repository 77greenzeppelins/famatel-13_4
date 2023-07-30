import React from 'react';
/**Icon**/
import { PhoneIcon } from '@heroicons/react/24/solid';
/**Basic Data**/
import { linksToInstantContactData } from '@/data/basicData';

interface Props {
  aStyle: string;
  iconStyle: string;
  labelStyle: string;
}

/**--------------------------------------------------------------------------------**/
const DirectPhoneGK: React.FC<Props> = ({ aStyle, iconStyle, labelStyle }) => {
  return (
    <a href={linksToInstantContactData.mailGK} className={aStyle}>
      <PhoneIcon className={iconStyle} />
      <p className={labelStyle}>Telefon: +48 601 460 307</p>
    </a>
  );
};

export default DirectPhoneGK;
