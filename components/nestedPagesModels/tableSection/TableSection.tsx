/**Components**/
import CatalogTableHolder from './catalogTable/CatalogTableHolder';

const TableSection = (props: DynamicModelContent) => {
  /**JSX**/
  return (
    <div className="flex flex-col w-full h-full gap-2">
      <div className="w-full py-6">
        <CatalogTableHolder {...props} />
      </div>
      <div className="w-full py-6 bg-yellow-600">TechSpec Table</div>
    </div>
  );
};

export default TableSection;
