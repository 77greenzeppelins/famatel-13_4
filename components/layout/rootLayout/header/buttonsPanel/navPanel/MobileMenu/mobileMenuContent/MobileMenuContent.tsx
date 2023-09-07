import FooterLink from '@/components/basic/links/footerLink/FooterLink';
import StronyGlowne from '@/components/layout/rootLayout/footer/topSection/stronyGlowne/StronyGlowne';
import { mainPagesData } from '@/data/basicData';
import { createLinkStyle } from '@/lib/handlers/styleCreators';
import { styles } from '@/styles';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
/**TS**/
interface Props {
  mobileMenuState: boolean;
}

const MobileMenuContent = ({ mobileMenuState }: Props) => {
  const pathname = usePathname();
  //   const isActive = pathname === url;
  /**JSX**/
  return (
    <div
      className={`top-[52px] bottom-0 right-0 left-0 fixed flex items-center wrapper-1 bg-dark lg:hidden ${
        mobileMenuState ? 'flex' : 'hidden'
      }`}
    >
      <nav className="w-full sm:w-[80%]">
        <ul className="flex flex-col gap-y-8">
          {mainPagesData.map(({ label, url }, i) => (
            <li key={i} className="relative flex-col overflow-hidden fc">
              <Link
                href={url}
                aria-label={`Link do strony ${label}`}
                aria-current={pathname === url ? 'page' : undefined}
                scroll={false}
                className={'relative flex flex-col gap-y-[3px] w-full group'}
              >
                <span
                  className={`text-small text-left ${
                    pathname === url
                      ? 'text-corpo font-bold ${styles.nestedAnimation} cursor-default'
                      : 'text-grey font-bold ${styles.nestedAnimation} cursor-pointer group-hover:text-light'
                  } ${styles.lazyAnimation}`}
                >
                  {label}
                </span>
                <span
                  className={`w-full h-[1px] border-b 
                      border-grey group-hover:border-light ${styles.lazyAnimation}`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenuContent;
