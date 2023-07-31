import React from 'react';
/**Components**/
import FooterLink from '@/components/basic/links/footerLink/FooterLink';
/**Basic Data*/
import { regulacjeUrl } from '@/data/basicData';

/**----------------------**/
const Regulacje = () => {
  const labelsArray = Object.values(regulacjeUrl);
  /**JSX**/
  return (
    <div className="w-full sm:w-[80%]">
      <ul className="flex flex-col gap-y-4">
        {labelsArray.map(({ url, label }, i) => (
          <li key={label} className="relative flex-col overflow-hidden fc">
            <FooterLink url={url} label={label} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Regulacje;
