/**Components**/
import LargeHeader from '@/components/forMultiPage/headers/largeHeader/LargeHeader';
import CatalogHandler from './catalogHandler/CatalogHandler';
import { styles } from '@/styles';

const PageSections = () => {
  /**JSX**/
  return (
    <div
      className="w-full wrapper-1"
      //___min-h-screen
    >
      <LargeHeader
        containerStyle="relative flex items-center disable-soft w-fit pb-10"
        ornamentStyle={styles.largeHeaderOrnamentStyle}
        textStyle={`${styles.largeHeaderText} max-w-[10px]`}
        text={'Kategorie produktów'}
      />
      <CatalogHandler />
    </div>
  );
};

export default PageSections;
