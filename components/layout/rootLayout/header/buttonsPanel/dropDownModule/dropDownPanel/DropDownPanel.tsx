/**Components**/
import DropDownMenu from '@/components/forMultiPage/catalogs/dropDownMenu/DropDownMenu';
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
/*
___1. this panel handles DropDownMenu and ProductSearchEngine in mode "either or" ==> only one can be visible at a time ==> both share the same boolean state 
*/

const DropDownPanel = ({ isOverlay, contentType }: Props) => {
  /**JSX**/
  return isOverlay ? (
    <div
      className={`fc left-0 right-0 ${
        styles.fixedOverlayOffset
      } bottom-0 fixed ${
        contentType === 'menu' ? 'bg-dark' : 'bg-transparent'
      } opacity-100`}
    >
      {contentType === 'menu' ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full h-full"
        >
          <DropDownMenu />
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
