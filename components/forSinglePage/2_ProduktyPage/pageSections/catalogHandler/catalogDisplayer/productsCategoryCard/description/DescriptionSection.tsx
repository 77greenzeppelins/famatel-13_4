import Link from 'next/link';
/**FramerMotion Staff*/
import ArrowForLinkIcon from '@/components/SVG/icons/heroIcons/ArrowForLinkIcon';
/**Tailwind Styles**/
import { styles } from '@/styles';
/**Framer Motion Staff**/
import { motion } from 'framer-motion';
/**Basic Data**/
import { ProduktyPageText } from '@/data/textData';
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';

const DescriptionSection = ({ i }: { i: number }) => {
  /** */
  const { categoriesDescritpions } = ProduktyPageText;
  /**JSX**/
  return (
    <motion.section
      key="content"
      initial="collapsed"
      animate="open"
      exit="collapsed"
      variants={{
        open: { opacity: 1, height: 'auto' },
        collapsed: { opacity: 0, height: 0 },
      }}
      transition={{
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98],
        //   ease: 'linear',
        restDelta: 0.0001,
      }}
      className="overflow-hidden "
    >
      <motion.div
        variants={{ collapsed: { scale: 0.9 }, open: { scale: 1 } }}
        transition={{ duration: 0.8 }}
        className="flex flex-col w-full gap-6 pt-6 origin-top-center"
      >
        <Link href="/" className="flex items-center py-1 group w-fit">
          <span className="w-4 h-full shrink-0 fc">
            <ArrowForLinkIcon
              //   strokeWidth={1.5}
              containerStyle={`fc h-4 w-4  aspect-square stroke-2 stroke-corpo group-hover:stroke-light group-hover:rotate-45 origin-center flex-shrink-0 ${styles.lazyAnimation}`}
            />
          </span>
          <p
            className={`text-grey text-regular group-hover:text-light ${styles.lazyAnimation} pl-3`}
          >
            Zobacz kategorię
          </p>
        </Link>
        <div className="flex flex-col gap-y-2">
          <BasicHeader text="opis" hasBox={true} hasVerticalOrnament={false} />
          <p className="text-regular text-grey">{categoriesDescritpions[i]}</p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default DescriptionSection;
