import React from 'react';
/**Icon**/
import { EnvelopeIcon } from '@heroicons/react/24/solid';
/**Basic Data**/
import { linksToInstantContactData } from '@/data/basicData';

interface Props {
  aStyle: string;
  iconStyle: string;
  labelStyle: string;
}

/**--------------------------------------------------------------------------------**/
const DirectMailGK: React.FC<Props> = ({ aStyle, iconStyle, labelStyle }) => {
  return (
    <a href={linksToInstantContactData.mailGK} className={aStyle}>
      <EnvelopeIcon className={iconStyle} />
      <p className={labelStyle}>grzegorz.kowcz@famatel.pl</p>
    </a>
  );
};

export default DirectMailGK;
