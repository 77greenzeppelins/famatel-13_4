/**Components**/
import CatalogSection from './catalogSection/CatalogSection';
import GraphicSection from './graphicSection/GraphicSection';

const ProductDescription = () => {
  /**JSX**/
  return (
    <div className="flex flex-col xl:flex-row wrapper-1">
      <div className=" flex flex-col justify-center items-start gap-y-8 w-full xl:w-[40%] ">
        <CatalogSection />
      </div>
      <div className="flex justify-center items-center w-full max-w-[1000px] xl:w-[60%] ">
        <GraphicSection />
      </div>
    </div>
  );
};

export default ProductDescription;
