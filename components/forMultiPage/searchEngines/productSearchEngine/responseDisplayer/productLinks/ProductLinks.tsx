import React from 'react';
/**Components**/
import DeclarationDisplayer from '../declarationDisplayer/DeclarationDisplayer';
import ProductPageDisplayer from '../productPageDisplayer/ProductPageDisplayer';
/**FramerMotion Staff*/
import { AnimatePresence, motion } from 'framer-motion';

/**TS**/
interface Props {
  wantedModel: string | null;
  wantedModelDeclaration: string | null;
}

/**-----------------------------------------------------------------------**/
const ProductLinks = ({ wantedModel, wantedModelDeclaration }: Props) => {
  /**JSX**/
  return (
    <AnimatePresence mode="wait">
      {wantedModel === '' ? null : (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col justify-center w-full sm:w-auto sm:justify-start gap-y-4"
        >
          <ProductPageDisplayer wantedModel={wantedModel} />
          <DeclarationDisplayer
            wantedModelDeclaration={wantedModelDeclaration}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductLinks;
