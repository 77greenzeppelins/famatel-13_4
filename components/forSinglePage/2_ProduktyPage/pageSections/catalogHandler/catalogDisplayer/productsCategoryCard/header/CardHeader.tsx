'use client';
import ArrowForLinkIcon from '@/components/SVG/icons/heroIcons/ArrowForLinkIcon';
/**Tailwind Styles**/
import { styles } from '@/styles';
/**Framer Motion Staff**/
import { motion } from 'framer-motion';
import Link from 'next/link';

const CardHeader = ({
  label,
  i,
  setExpanded,
  isOpen,
  categoryNumber,
}: {
  label: string;
  i: number;
  setExpanded: React.Dispatch<React.SetStateAction<number | false>>;
  isOpen: boolean;
  categoryNumber: string;
}) => {
  /**JSX**/
  return (
    <div className="flex w-full">
      <div
        onClick={() => setExpanded(isOpen ? false : i)}
        className={`flex w-11/12 items-end h-[80px] x3xx:h-[60px] py-1 cursor-pointer ${
          isOpen ? 'border-b' : 'border-none'
        } group hover:border-light ${styles.basicAnimation}  ${
          isOpen ? 'border-corpo' : 'border-dark'
        } `}
      >
        <p className="flex items-center w-full gap-x-4 text-medium-part">
          <span
            className={`w-[50px] group-hover:text-light  ${
              styles.basicAnimation
            }  ${isOpen ? 'text-corpo' : 'text-grey'}`}
          >
            {categoryNumber}
          </span>
          <span
            className={`w-full group-hover:text-light  ${
              styles.basicAnimation
            }  ${isOpen ? 'text-corpo' : 'text-grey'}`}
          >
            {label}
          </span>
        </p>
      </div>
      <div className="flex justify-end w-1/12 h-full pt-3 ">
        <Link href="/" className="flex items-center py-1 group w-fit">
          <span className="w-4 h-full shrink-0 fc">
            <ArrowForLinkIcon
              //   strokeWidth={1.5}
              containerStyle={`fc h-4 w-4 aspect-square stroke-2 stroke-corpo group-hover:stroke-light group-hover:rotate-45 origin-center flex-shrink-0 ${styles.lazyAnimation}`}
            />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CardHeader;
