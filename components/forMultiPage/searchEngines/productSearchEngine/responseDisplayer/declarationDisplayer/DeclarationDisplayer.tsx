import React, { useState } from 'react';
/**Components**/
import DownloadableLinkSimple from '@/components/basic/links/downloadableLink/DownloadableLinkSimple';
/**FramerMotion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
/**Basic Data**/
import { productSearchEngineText as labels } from '@/data/textData';

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
        <div key={wantedModelDeclaration}>
          <DownloadableLinkSimple
            label={labels.hasDeclaration}
            path={wantedModelDeclaration}
            iconStyle=" sm:w-6 sm:h-6 stroke-corpo group-hover:stroke-light"
          />
        </div>
      )}
    </AnimatePresence>
  );
};

export default DeclarationDisplayer;

{
  /* <motion.a
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
              {labels.hasDeclaration}
              <ArrowDownloadIcon
                containerStyle={
                  'w-4 h-4 sm:w-6 sm:h-6 stroke-grey group-hover:stroke-light ease-in duration-300 delay-100'
                  //___animate-bounce animate-ping group-hover:translate-y-1 group-hover:translate-x-1 group-hover:scale-[1.1]
                  //___group-hover:translate-y-1 ease-in duration-300 delay-300
                }
              />
            </span>
          </motion.a> */
}
