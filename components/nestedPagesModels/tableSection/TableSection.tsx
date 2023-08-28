/**Components**/
import CatalogTableHolder from './catalogTable/CatalogTableHolder';
import TechSpecTableHolder from './techSpecTable/TechSpecTableHolder';

const TableSection = (props: DynamicModelContent) => {
  /**JSX**/
  return (
    <div className="flex flex-col w-full h-full gap-6 pt-14">
      <div className="w-full py-6">
        <CatalogTableHolder {...props} />
      </div>
      <div className="w-full py-6">
        <TechSpecTableHolder {...props} />
      </div>
    </div>
  );
};

export default TableSection;
