/**Components**/
import GraphicSection from './graphicSection/GraphicSection';
/**Basic Data**/
import { styles } from '@/styles';
/**TS**/
const CardContent = ({ catName, catImage }: CatalogCardType) => {
  /**JSX**/
  return (
    <div
      data-component="CardContent"
      className="flex items-center w-full h-full sm:flex-col"
    >
      <GraphicSection {...catImage} />
      <div
        data-layout="BasicCardMainSection__textSection"
        className="h-full px-4 fc xs3xx:px-6"
      >
        <p
          className={`text-small uppercase text-center text-grey group-hover:text-light ${styles.basicAnimation}`}
        >
          {catName}
        </p>
      </div>
    </div>
  );
};

export default CardContent;
