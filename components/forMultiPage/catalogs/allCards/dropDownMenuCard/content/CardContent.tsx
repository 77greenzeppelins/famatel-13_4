/**Hooks section**/
import useWindowSize from '@/lib/hooks/useWindowSize';
/**Components**/
import GraphicSection from './graphicSection/GraphicSection';
/**Basic Data**/
import { dropDownMenuConfig } from '@/data/basicData';
import { styles } from '@/styles';
/**TS**/
const CardContent = ({ catName, catImage }: DropDownMenuCardType) => {
  const { height, width } = useWindowSize();
  const isGraphicSection = height < dropDownMenuConfig.minHeight;

  /**JSX**/
  return (
    <div
      data-component="CardContent"
      className="flex items-center w-full h-full sm:flex-col"
    >
      {isGraphicSection ? null : <GraphicSection {...catImage} />}
      <div
        data-layout="BasicCardMainSection__textSection"
        className={`${
          isGraphicSection ? 'fc h-full  px-4 xs3xx:px-6' : 'fc h-[45%]'
        }  w-full p-1`}
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
