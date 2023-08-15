/**Components**/
import CatalogHandler from './catalogHandler/CatalogHandler';

const PageSections = () => {
  /**JSX**/
  return (
    <div className="w-full min-h-screen wrapper-1">
      {' '}
      <CatalogHandler />
      {/* <p className="text-medium text-grey min-h-[300px]">
        Product Page Section bottom
      </p> */}
    </div>
  );
};

export default PageSections;
