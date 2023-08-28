'use client';
import Link from 'next/link';
/**Hooks Staff*/
// import { usePathname } from 'next/navigation';
/**Components**/
import CardFrameGrid from '../cardFrame/CardFrameGrid';
import CardContent from './content/CardContent';

const CatalogCardWithModel = ({
  modelIndex,
  modelImage,
  modelPath,
  type,
  collection,
  textIcons,
}: // ,
CardWithModelType) => {
  /**JSX**/
  return (
    <li
      //___className="grid py-2 w-[96%]"
      className={`relative h-[220px] md:h-[240px] lg:h-[300px] xl:h-[320px] cursor-pointer group select-none no-sparkling`}
      //___h-[220px] sm:h-[240px]
      //___${isActive ? '' : 'group'}
    >
      <CardFrameGrid innerContainerStyle="grid relative col-span-full row-span-full w-full h-full rounded-md bg-dark z-10">
        <Link
          aria-label={`Karta modelu: ${type}`}
          role="link"
          className="z-10 w-full h-full pointer-events-auto abs-cell"
          href={modelPath}
          // scroll={false}
          prefetch={false}
        />
        <div
          // className="absolute inset-0 z-5"
          className="z-0 w-full abs-cell"
          role="region"
          aria-label={`Tekstowo-graficzna zawartość karty kategorii: ${type}`}
        >
          <CardContent
            modelIndex={modelIndex}
            modelImage={modelImage}
            type={type}
            collection={collection}
            textIcons={textIcons}
          />
        </div>
      </CardFrameGrid>
    </li>
  );
};

export default CatalogCardWithModel;
