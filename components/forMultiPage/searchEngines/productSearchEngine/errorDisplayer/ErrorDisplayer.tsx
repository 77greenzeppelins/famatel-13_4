import React from 'react';
/**Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
/**Basic Data**/
import { productSearchEngineText as labels } from '@/data/textData';

/**TS**/
interface Props {
  mountingCondition?: boolean | string;
  errorText?: string;
  submitCount: number;
}
/**-------------------------------------------------------**/
const ErrorDisplayer = ({
  mountingCondition,
  errorText,
  submitCount,
}: Props) => {
  /**..**/
  // console.log('mountingCondition', mountingCondition);
  /**JSX**/
  return (
    <AnimatePresence mode="wait">
      {mountingCondition ? (
        <motion.div
          key={`${errorText}-${submitCount}`}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.2, delay: 0 }}
        >
          <p className="text-left p-regular text-corpo">{errorText}</p>
        </motion.div>
      ) : submitCount > 0 ? (
        <motion.div
          key={`${errorText}-${submitCount}`}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.2, delay: 0 }}
        >
          <p className="text-left p-regular text-corpo">{labels.noError}</p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default ErrorDisplayer;
