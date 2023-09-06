'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**TS**/
interface Props {
  children: React.ReactNode; // empty if no animation needed
  linkHref: string;
  ariaLabel: string;
  linkStyle?: string;
}

/**----------------------------**/
const LinkAsContainer = ({
  children,
  linkHref,
  ariaLabel,
  linkStyle,
}: Props) => {
  /**staff for setting arai-current*/
  const path = usePathname();
  const isActive = path === linkHref;

  /**JSX**/
  return (
    <Link
      href={linkHref}
      aria-label={ariaLabel ? ariaLabel : 'link'}
      aria-current={isActive ? 'page' : undefined}
      scroll={false}
      className={linkStyle ? linkStyle : 'flex items-center py-1 group w-fit'}
    >
      {children}
    </Link>
  );
};

export default LinkAsContainer;
