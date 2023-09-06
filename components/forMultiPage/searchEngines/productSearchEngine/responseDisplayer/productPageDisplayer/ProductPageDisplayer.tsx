import React, { useState } from 'react';
/**Components**/
// import LinkWithSpanAndIcon from '../../../../links/linkWithSpanAndIcon/LinkWithSpanAndIcon';
/**FramerMotion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
/**Basic Data**/
import { productSearchEngineText as labels } from '@/data/textData';
import Link from 'next/link';
import ArrowForLinkIcon from '@/components/SVG/icons/heroIcons/ArrowForLinkIcon';
import { styles } from '@/styles';

/**TS**/
interface Props {
  wantedModel: string | null;
}
/**-------------------------------------**/
const ProductPageDisplayer = ({ wantedModel }: Props) => {
  const [isHovered, SetIsHovered] = useState(false);

  console.log(
    'ProductPageDisplayer / wantedModel ==>',
    wantedModel === '' ? 'empty' : wantedModel
  );

  /**JSX**/
  return (
    <AnimatePresence mode="wait">
      {wantedModel === null ? (
        <motion.div
          key={wantedModel}
          className="min-h-[20px]"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-left p-regular text-corpo"></p>
        </motion.div>
      ) : (
        <motion.div
          key={wantedModel}
          className="flex gap-2 "
          onHoverStart={e => {
            SetIsHovered(true);
          }}
          onHoverEnd={e => {
            SetIsHovered(false);
          }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href={wantedModel}
            className="flex items-center py-1 group w-fit"
          >
            {/* <span className="w-4 h-full shrink-0 fc">
              <ArrowForLinkIcon
                containerStyle={`fc h-4 w-4 aspect-square stroke-2 stroke-corpo group-hover:stroke-light group-hover:rotate-45 origin-center flex-shrink-0 ${styles.lazyAnimation}`}
              />
            </span> */}
            <p
              className={`text-grey text-regular group-hover:text-light ${styles.lazyAnimation} pr-3`}
            >
              Zobacz kategorię
            </p>
            <span className="w-4 h-full shrink-0 fc">
              <ArrowForLinkIcon
                containerStyle={`fc h-4 w-4 aspect-square stroke-2 stroke-corpo group-hover:stroke-light group-hover:rotate-45 origin-center flex-shrink-0 ${styles.lazyAnimation}`}
              />
            </span>
          </Link>
          {/* <Link href={wantedModel}>{wantedModel}</Link> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductPageDisplayer;
