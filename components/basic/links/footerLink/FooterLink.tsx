'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
/**...**/
import { createLinkStyle } from '@/lib/handlers/styleCreators';
import { styles } from '@/styles';

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
  const styleCondition = pathname.split('/').length > 2;
  /**JSX**/
  return (
    <Link
      href={url}
      aria-label={`Link do strony ${label}`}
      aria-current={isActive ? 'page' : undefined}
      scroll={false}
      className={'relative flex flex-col gap-y-[3px] w-full group'}
    >
      <span className={createLinkStyle(isActive, styleCondition)}>{label}</span>
      <span
        className={`w-full h-[1px] border-b ${
          styleCondition
            ? `border-grey group-hover:border-light ${styles.nestedAnimation}`
            : `border-dark group-hover:border-greyTint2 ${styles.nestedAnimation}`
        }`}
      />
    </Link>
  );
};

export default FooterLink;

// className={`text-small  text-left ${
//   isActive
//     ? 'text-corpo font-bold'
//     : 'text-dark font-bold group-hover:text-greyTint2 duration-[0.3s] delay-[0.1s] ease-in'
// } ${isActive ? 'cursor-default' : 'cursor-pointer'}`}
