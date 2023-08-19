import { ReactNode } from 'react';

/**TS**/
interface Props {
  children: ReactNode;
}

const CatalogGrid = ({ children }: Props) => {
  /**JSX**/
  return (
    <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr_1fr] gap-6 xl:gap-10 w-full">
      {children}
    </div>
  );
};

export default CatalogGrid;
