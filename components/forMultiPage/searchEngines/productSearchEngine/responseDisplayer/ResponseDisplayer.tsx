import React from 'react';
/**Componenets**/
import ProductLinks from './productLinks/ProductLinks';
/**FramerMotion Staff**/
import { AnimatePresence, motion } from 'framer-motion';
/**Basic Data**/
import { productSearchEngineText as labels } from '@/data/textData';

/**TS**/
interface Props {
  wantedModel: string | null;
  submitCount: number; //__initial value is 0;
  wantedModelDeclaration: string | null;
}
/**------------------------------**/
const ResponseDisplayer = ({
  wantedModel,
  wantedModelDeclaration,
  submitCount,
}: Props) => {
  /**JSX**/
  return (
    <AnimatePresence mode="wait">
      {
        /*
        why: "submitCount" is a condition to prevent displaying responseSection when ProductBrowser is triggered; in other words: firts submit then any response;
        addityionally, wantedModels remains "emptystring" until the very first "positive Submit"
        */
        submitCount > 0 && wantedModel !== '' ? (
          <motion.div
            key={`${submitCount}`}
            // className="flex items-center w-full gap-x-10 sm:flex-row sm:items-start "
            className="flex flex-col items-center w-full gap-y-6 sm:gap-y-0 sm:gap-x-10 sm:flex-row sm:items-start "
          >
            <div className="flex justify-center w-full sm:w-[300px] md:w-[400px] lg:w-[500px] sm:justify-start">
              <p className="p-medium text-grey">{`${labels.header2} `}</p>
            </div>
            <div className="flex flex-col gap-6 pt-2 lg:pt-3">
              <ProductLinks
                wantedModel={wantedModel}
                wantedModelDeclaration={wantedModelDeclaration}
              />
            </div>
          </motion.div>
        ) : null
      }
    </AnimatePresence>
  );
};

export default ResponseDisplayer;
