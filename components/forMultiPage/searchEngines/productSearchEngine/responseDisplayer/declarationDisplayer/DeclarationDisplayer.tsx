import React, { useState } from 'react';
/**Components**/
import ArrowDownloadIcon from '@/components/SVG/icons/heroIcons/ArrowDownloadIcon';
/**FramerMotion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
/**Basic Data**/
import { productSearchEngine } from '@/data/textData';

/**TS**/
interface Props {
  wantedModelDeclaration: string | null;
}
/**-------------------------------------**/
const DeclarationDisplayer = ({ wantedModelDeclaration }: Props) => {
  const [isHovered, SetIsHovered] = useState(false);

  /**JSX**/
  return (
    <AnimatePresence mode="wait">
      {wantedModelDeclaration && (
        <motion.div
          key={wantedModelDeclaration}
          // className=" bg-vB"
          onHoverStart={e => {
            // console.log('onHoverStart');
            SetIsHovered(true);
          }}
          onHoverEnd={e => {
            // console.log('onHoverEnd');
            SetIsHovered(false);
          }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.a
            // className="flex items-center justify-between min-w-[92px] gap-3"s
            href={wantedModelDeclaration}
            target="_blank"
            rel="noopener noreferrer"
            //___
            download
          >
            <span
              className={`flex items-center gap-x-4 p-regular ${
                isHovered ? 'text-light' : 'text-grey'
              } ease-in duration-[0.4s] delay-[0.1s] group`}
            >
              {productSearchEngine.hasDeclaration}

              <ArrowDownloadIcon
                className={
                  'w-4 h-4 sm:w-6 sm:h-6 stroke-grey group-hover:stroke-light ease-in duration-300 delay-100'
                  //___animate-bounce animate-ping group-hover:translate-y-1 group-hover:translate-x-1 group-hover:scale-[1.1]
                  //___group-hover:translate-y-1 ease-in duration-300 delay-300
                }
              />
            </span>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DeclarationDisplayer;
