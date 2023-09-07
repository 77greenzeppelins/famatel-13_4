'use client';
import React, { useState } from 'react';
/**Components**/
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

  // console.log('ProductPageDisplayer / wantedModel', wantedModel);
  // console.log(
  //   'ProductPageDisplayer / wantedModel ==>',
  //   wantedModel === '' ? 'empty' : wantedModel
  // );

  /**JSX**/
  return (
    <AnimatePresence mode="wait">
      {wantedModel === null ? (
        <motion.div
          key={wantedModel}
          // className="min-h-[20px] w-full flex just-center sm:justify-start"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <p className="text-center sm:text-left text-regular text-corpo">
            {labels.noProduct}
          </p>
        </motion.div>
      ) : (
        <motion.div
          key={wantedModel}
          // className="flex gap-2 bg-black"
          onHoverStart={e => {
            SetIsHovered(true);
          }}
          onHoverEnd={e => {
            SetIsHovered(false);
          }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Link
            href={wantedModel}
            className="flex items-center justify-center px-2 sm:px-0 sm:justify-start group"
          >
            <p
              className={`text-grey text-regular group-hover:text-light ${styles.lazyAnimation} pr-3`}
            >
              {labels.isProduct}
            </p>
            <span className="w-4 h-full shrink-0 fc">
              <ArrowForLinkIcon
                containerStyle={`fc h-4 w-4 aspect-square stroke-2 stroke-corpo group-hover:stroke-light group-hover:rotate-45 origin-center flex-shrink-0 ${styles.lazyAnimation}`}
              />
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductPageDisplayer;

{
  /* <span className="w-4 h-full shrink-0 fc">
              <ArrowForLinkIcon
                containerStyle={`fc h-4 w-4 aspect-square stroke-2 stroke-corpo group-hover:stroke-light group-hover:rotate-45 origin-center flex-shrink-0 ${styles.lazyAnimation}`}
              />
            </span> */
}
