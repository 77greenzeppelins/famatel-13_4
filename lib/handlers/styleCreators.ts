/*
___1. used in: basic | links | <FooterLink>
*/
export const createLinkStyle = (isActive: boolean): string => {
  return `text-small  text-left ${
    isActive
      ? 'text-corpo font-bold'
      : 'text-dark font-bold group-hover:text-greyTint2 duration-[0.3s] delay-[0.1s] ease-in'
  } ${isActive ? 'cursor-default' : 'cursor-pointer'}`;
};
