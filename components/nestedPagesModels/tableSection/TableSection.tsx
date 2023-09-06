/**Components**/
import CatalogTableHolder from './catalogTable/CatalogTableHolder';
import TechSpecTableHolder from './techSpecTable/TechSpecTableHolder';

const TableSection = (props: DynamicModelContent) => {
  /**JSX**/
  return (
    <div className="flex flex-col w-full h-full gap-6 ">
      <div className="w-full pb-12">
        <CatalogTableHolder {...props} />
      </div>
      <div className="w-full pb-12">
        <TechSpecTableHolder {...props} />
      </div>
    </div>
  );
};

export default TableSection;
