'use client';

/**Framer Motion Staff**/
import { AnimatePresence, motion } from 'framer-motion';
/**Tailwind Styles**/
import { styles } from '@/styles';
import DescriptionSection from './description/DescriptionSection';

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
  const isOpen = i === expanded;
  return (
    <>
      <motion.li
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
        className={`flex items-end h-[80px] x3xx:h-[60px] py-1 cursor-pointer border-b hover:border-light ${
          styles.basicAnimation
        }  ${isOpen ? 'border-corpo' : 'border-greyShade2'}`}
      >
        <p
          className={`flex gap-x-4 text-medium hover:text-light  ${
            styles.basicAnimation
          }  ${isOpen ? 'text-corpo' : 'text-grey'}`}
        >
          <span className="w-[50px]">{i + 1}</span>
          <span>{label}</span>
        </p>
      </motion.li>
      <AnimatePresence initial={false}>
        {isOpen && <DescriptionSection i={i} />}
      </AnimatePresence>
    </>
  );
};

export default ProductsCategoryCard;
