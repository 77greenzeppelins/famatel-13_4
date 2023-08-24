import { styles } from '@/styles';

/*
___1. used in: basic | links | <FooterLink>
*/
export const createLinkStyle = (
  isActive: boolean,
  isNested: boolean
): string => {
  return `text-small  text-left ${
    isActive
      ? 'text-corpo font-bold ${styles.nestedAnimation}'
      : isNested
      ? `text-grey group-hover:text-light ${styles.nestedAnimation}`
      : `text-dark font-bold group-hover:text-greyTint2 ${styles.nestedAnimation}`
  } ${isActive ? 'cursor-default' : 'cursor-pointer'}`;
};
