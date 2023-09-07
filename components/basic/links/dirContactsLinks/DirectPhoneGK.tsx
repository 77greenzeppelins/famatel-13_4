import React from 'react';
/**Icon**/
import { PhoneIcon } from '@heroicons/react/24/solid';
/**Basic Data**/
import { linksToInstantContactData } from '@/data/basicData';

interface Props {
  aStyle: string;
  iconStyle: string;
  labelStyle?: string;
  hasLabel?: boolean;
}

/**--------------------------------------------------------------------------------**/
const DirectPhoneGK: React.FC<Props> = ({
  aStyle,
  iconStyle,
  labelStyle,
  hasLabel = true,
}) => {
  return (
    <a href={linksToInstantContactData.mobileGK} className={aStyle}>
      <PhoneIcon className={iconStyle} />
      {hasLabel ? <p className={labelStyle}>Telefon: +48 601 460 307</p> : null}
    </a>
  );
};

export default DirectPhoneGK;
