/**Coimponents**/
import DropDownCategoriesCatalog from '@/components/forMultiPage/catalogs/dropDownCategorier/DropDownCategoriesCatalog';
import ProductSearchEngine from '@/components/forMultiPage/searchEngines/productSearchEngine/ProductSearchEngine';
/**Framer Motion**/
import { motion } from 'framer-motion';
/**Tailwind Staff**/
import { styles } from '@/styles';

/**TS**/
interface Props {
  isOverlay: null | boolean;
  contentType: string;
}

const DropDownPanel = ({ isOverlay, contentType }: Props) => {
  /**JSX**/
  return isOverlay ? (
    <div
      className={`fc left-0 right-0 ${styles.fixedOverlayOffset} bottom-0 fixed bg-dark opacity-100`}
    >
      {contentType === 'menu' ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full h-full bg-black fc"
        >
          <DropDownCategoriesCatalog />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full h-full fc "
        >
          <ProductSearchEngine />
        </motion.div>
      )}
    </div>
  ) : null;
};

export default DropDownPanel;
/*
const createOverlay = () => {
    return isOverlay ? (
      <div
        className={`fc left-0 right-0 ${styles.fixedOverlayOffset} bottom-0 fixed bg-dark opacity-100`}
      >
        {contentType === 'menu' ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full h-full bg-black fc"
          >
            <DropDownCategoriesCatalog />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full h-full fc "
          >
            <ProductSearchEngine />
          </motion.div>
        )}
      </div>
    ) : null;
  };
*/
