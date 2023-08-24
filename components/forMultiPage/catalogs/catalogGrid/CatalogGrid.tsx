import { ReactNode } from 'react';

/**TS**/
interface Props {
  children: ReactNode;
  containerStyle?: string;
}

const CatalogGrid = ({ children, containerStyle }: Props) => {
  /**JSX**/
  return (
    <ul
      className={
        containerStyle
          ? containerStyle
          : 'grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr_1fr] gap-6 xl:gap-10 w-full'
      }
    >
      {children}
    </ul>
  );
};

export default CatalogGrid;
