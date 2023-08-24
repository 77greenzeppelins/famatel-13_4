'use client';
import Link from 'next/link';
/**Hooks Staff*/
import { usePathname } from 'next/navigation';
/**Components**/
import CardFrameGrid from '../cardFrame/CardFrameGrid';
import CardContent from './content/CardContent';

const CatalogCardWithSubCat = ({
  catIndex,
  catName,
  catPath,
  catImage,
}: CatalogCardType) => {
  /**...**/
  const pathname = usePathname();
  const isActive = pathname === catPath;

  /**JSX**/
  return (
    <li
      //___className="grid py-2 w-[96%]"
      className={`relative h-[220px] md:h-[240px] lg:h-[280px] cursor-pointer group select-none no-sparkling`}
    >
      <CardFrameGrid innerContainerStyle="grid relative col-span-full row-span-full w-full h-full rounded-md bg-dark z-10">
        <Link
          aria-label={`Karta kategorii: ${catName}`}
          role="link"
          className="z-10 w-full h-full pointer-events-auto abs-cell"
          href={catPath}
          // scroll={false}
        />
        <div
          // className="absolute inset-0 z-5"
          className="z-0 w-full h-full abs-cell"
          role="region"
          aria-label={`Tekstowo-graficzna zawartość karty kategorii: ${catName}`}
        >
          <CardContent
            catIndex={catIndex}
            catName={catName}
            catPath={catPath}
            catImage={catImage}
          />
        </div>
      </CardFrameGrid>
    </li>
  );
};

export default CatalogCardWithSubCat;
