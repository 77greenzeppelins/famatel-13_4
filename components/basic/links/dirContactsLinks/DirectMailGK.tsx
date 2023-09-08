import React from 'react';
/**Icon**/
import { EnvelopeIcon } from '@heroicons/react/24/solid';
/**Basic Data**/
import { linksToInstantContactData } from '@/data/basicData';

interface Props {
  aStyle: string;
  iconStyle: string;
  labelStyle?: string;
  hasLabel?: boolean;
}

/**--------------------------------------------------------------------------------**/
const DirectMailGK: React.FC<Props> = ({
  hasLabel = true,
  aStyle,
  iconStyle,
  labelStyle,
}) => {
  return (
    <a href={linksToInstantContactData.mailGK} className={aStyle}>
      <EnvelopeIcon className={iconStyle} />
      {hasLabel ? (
        <p className={labelStyle}>grzegorz.kowcz@famatel.pl</p>
      ) : null}
    </a>
  );
};

export default DirectMailGK;
