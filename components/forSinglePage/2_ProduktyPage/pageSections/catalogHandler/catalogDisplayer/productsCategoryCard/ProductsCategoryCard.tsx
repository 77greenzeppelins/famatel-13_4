'use client';
/**Components**/
import CardHeader from './header/CardHeader';
import DescriptionSection from './description/DescriptionSection';
/**Framer Motion Staff**/
import { AnimatePresence } from 'framer-motion';
import CardFrameGrid from '@/components/forMultiPage/catalogs/allCards/cardFrame/CardFrameGrid';
/**TS**/
interface Props {
  label: string;
  href: string;
  i: number;
  expanded: number | false;
  setExpanded: React.Dispatch<React.SetStateAction<number | false>>;
}

const ProductsCategoryCard = ({
  label,
  href,
  i,
  expanded,
  setExpanded,
}: Props) => {
  /**...*/
  const isOpen = i === expanded;
  const categoryNumber = i + 1 < 10 ? `0${i + 1}` : `${i + 1}`;
  /**JSX**/
  return (
    <li className="grid py-2 w-[96%]">
      <CardFrameGrid>
        <div className="relative col-span-full row-span-full -z-1 group "></div>
        <div
          //    className="relative flex w-full h-full px-4 pointer-events-auto"
          className="relative flex w-full h-full px-4 col-span-full row-span-full z-1"
        >
          <div className="w-full">
            <CardHeader
              label={label}
              href={href}
              categoryNumber={categoryNumber}
              i={i}
              setExpanded={setExpanded}
              isOpen={isOpen}
            />
            <AnimatePresence initial={false}>
              {isOpen && <DescriptionSection i={i} href={href} />}
            </AnimatePresence>
          </div>
        </div>
      </CardFrameGrid>
    </li>
  );
};

export default ProductsCategoryCard;

/*
 <li className=" py-2 w-[96%]">
      <CardFrameGrid>
        <div className="relative flex w-full h-full px-4 pointer-events-auto">
          <div className="w-full">
            <CardHeader
              label={label}
              categoryNumber={categoryNumber}
              i={i}
              setExpanded={setExpanded}
              isOpen={isOpen}
            />
            <AnimatePresence initial={false}>
              {isOpen && <DescriptionSection i={i} />}
            </AnimatePresence>
          </div>
        </div>
      </CardFrameGrid>
    </li>
*/
