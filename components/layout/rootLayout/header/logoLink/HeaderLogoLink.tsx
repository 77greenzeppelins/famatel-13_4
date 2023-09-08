import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
/*Components*/
import SvgLogo from '../../../../SVG/logo/SvgLogo';
/**BasicData*/
// import { corpoColors } from '@/data/basicData';

/**------------------------------**/
const HeaderLogoLink = ({ styleCondition }: { styleCondition: boolean }) => {
  /**staff for setting aria-current*/
  const pathname = usePathname();
  const isActive = pathname === '/';
  /**JSX*/
  return (
    <Link
      href={'/'}
      aria-label={`Link do strony O Firmie`}
      aria-current={isActive ? 'page' : undefined}
      scroll={false}
      className={`${
        styleCondition
          ? 'scale-75 duration-300 ease-linear'
          : 'scale-75 xl:scale-100 duration-300 ease-linear '
      }  pointer-events-auto fc origin-left h-[52px]`}
    >
      <SvgLogo
        fStyle="fill-corpo"
        lettersStyle={
          styleCondition
            ? 'fill-light duration-300 ease-linear'
            : 'fill-dark duration-300 ease-linear '
        }
      />
    </Link>
  );
};

export default HeaderLogoLink;
