'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
/**...**/
import { createLinkStyle } from '@/lib/handlers/styleCreators';

createLinkStyle;

/**TS**/
interface Props {
  url: string;
  label: string;
  labelStyle?: string;
}

const FooterLink = ({ url, label, labelStyle }: Props) => {
  /*useRouter Section
  why: for style sake;  I want link to be in corpo color when user is on its corresponding page
  */
  const pathname = usePathname();
  const isActive = pathname === url;
  /**JSX**/
  return (
    <Link
      href={url}
      aria-label={`Link do strony ${label}`}
      aria-current={isActive ? 'page' : undefined}
      scroll={false}
      className={'relative flex flex-col gap-y-[3px] w-full group'}
    >
      <span className={createLinkStyle(isActive)}>{label}</span>
      <span className=" w-full h-[1px] border-b border-dark group-hover:border-greyTint2 duration-300 delay-100 ease-in" />
    </Link>
  );
};

export default FooterLink;

// className={`text-small  text-left ${
//   isActive
//     ? 'text-corpo font-bold'
//     : 'text-dark font-bold group-hover:text-greyTint2 duration-[0.3s] delay-[0.1s] ease-in'
// } ${isActive ? 'cursor-default' : 'cursor-pointer'}`}
