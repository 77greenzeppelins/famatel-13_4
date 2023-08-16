'use client';
/**Components**/
import CardFrame from '@/components/forMultiPage/catalogs/allCards/cardFrame/CardFrame';
import CardHeader from './header/CardHeader';
import DescriptionSection from './description/DescriptionSection';
/**Framer Motion Staff**/
import { AnimatePresence } from 'framer-motion';
import CardFrameGrid from '@/components/forMultiPage/catalogs/allCards/cardFrame/CardFrameGrid';

const ProductsCategoryCard = ({
  label,
  i,
  expanded,
  setExpanded,
}: {
  label: string;
  i: number;
  expanded: number | false;
  setExpanded: React.Dispatch<React.SetStateAction<number | false>>;
}) => {
  /**...*/
  const isOpen = i === expanded;
  const categoryNumber = i + 1 < 10 ? `0${i + 1}` : `${i + 1}`;
  /**JSX**/
  return (
    <li className="grid py-2 w-[96%]">
      <div className="relative col-span-full row-span-full -z-1 group ">
        <CardFrameGrid isActive={isOpen} />
      </div>
      <div
        //    className="relative flex w-full h-full px-4 pointer-events-auto"
        className="relative flex w-full h-full px-4 col-span-full row-span-full z-1"
      >
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
