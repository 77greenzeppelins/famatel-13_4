'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**TS**/
interface Props {
  label: string;
  url: string;
}

interface State {
  isHovered: boolean;
}

/**---------------------------------------------------------------------**/
const HeaderLink: React.FC<Props> = ({ label, url }) => {
  /*
  useRouter Section
  why: for style sake;  I want link to be in corpo color and has no border-bottom when user is on its corresponding page
  */
  const pathname = usePathname();
  const isActive = pathname === url;

  const styleCondition = pathname.split('/').length > 2;

  /**JSX*/
  return (
    <li
      data-component="NavLink_container"
      className="relative hidden ml-6 fc lg:block"
    >
      <Link
        href={url}
        aria-label={`Link do strony ${label}`}
        aria-current={isActive ? 'page' : undefined}
        // scroll={false}
        className={`relative ${
          styleCondition ? 'text-light' : 'text-dark font-bold'
        } text-dark  label-regular disable h-[40px] fc  ${
          isActive ? 'hover:text-dark' : 'hover:text-corpo'
        }  delay-100 duration-300 ease-linear`}
      >
        {isActive && (
          <span
            className={`absolute bottom-[8px] block h-[1px] bg-corpo origin-center ${
              isActive ? 'w-full' : 'w-0'
            } duration-500 ease-linear delay-100`}
            //   initial={{ width: 0 }}
            //   animate={{ width: '100%' }}
            //   transition={{ duration: 0.6, delay: 0.2 }}
          />
        )}

        {label}
      </Link>
    </li>
  );
};

export default HeaderLink;
