/**Hooks section**/
import useWindowSize from '@/lib/hooks/useWindowSize';
/**Basic Data**/
import { dropDownMenuConfig } from '@/data/basicData';

interface Props {
  label: string;
  //   imageData: StaticImageDat;
  heightMattersCondition?: boolean;
  textStyle?: string;
}
const CardContent = ({
  catIndex,
  catName,
  catPath,
  catImage,
}: DropDownMenuCardType) => {
  const { height, width } = useWindowSize();
  const isGraphicSection = height < dropDownMenuConfig.minHeight;

  /**JSX**/
  return (
    <div data-component="CardContent" className="flex flex-col w-full h-full ">
      {/* {condition ? null : <BasicCardGraphicSection imageData={imageData} />} */}
      <div
        data-layout="BasicCardMainSection__textSection"
        className={`${
          true
            ? 'flex h-full items-start justify-center px-4 xs3xx:px-6'
            : 'fc h-[45%]'
        }  w-full p-1`}
      >
        <p className="text-small text-light">{catName}</p>
      </div>
    </div>
  );
};

export default CardContent;
