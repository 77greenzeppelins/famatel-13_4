import Link from 'next/link';
/**Hooks Staff*/
import { usePathname } from 'next/navigation';
/**Components**/
import ArrowLongRightIcon from '@/components/SVG/icons/heroIcons/ArrowLongRightIcon';
import TwoDigitsDisplayer from '@/components/forMultiPage/atomsLike/digitsDisplayer/twoDigitsDisplayer/TwoDigitsDisplayer';
import CardContent from './content/CardContent';

const DropDownMenuCard = ({
  catIndex,
  catName,
  catPath,
  catImage,
}: DropDownMenuCardType) => {
  const pathname = usePathname();
  const isActive = pathname === catPath;

  const routDrivenTextStyle = `${
    isActive ? 'text-corpo' : 'text-dark'
  }  text-center text-[0.5rem] xs3xx:text-[0.625rem] md:text-[0.75rem] xxxl:text-[1.125rem] tracking-[0.09rem] leading-normal ${
    isActive ? '' : 'group-hover:text-light ease-in duration-300'
  }  `;
  /**JSX**/
  return (
    <div
      className={`relative w-full h-full cursor-pointer ${
        isActive ? '' : 'group'
      }`}
    >
      <Link
        aria-label={`Karta kategorii: ${catName}`}
        role="link"
        className="relative z-10 block w-full h-full"
        href={catPath}
        // scroll={false}
      />
      <div
        className="absolute inset-0 z-5"
        role="region"
        aria-label={`Tekstowo-graficzna zawartość karty kategorii: ${catName}`}
      >
        <div className="relative flex-col w-full h-full fc xs:flex-row">
          <div className="flex items-center justify-between  w-full h-[40%] xs:w-[20%] xs:h-[80%]">
            <div className="flex items-center justify-start w-[50%] h-[50%]  xs:h-full xs:w-full">
              <TwoDigitsDisplayer
                index={catIndex}
                textStyle={routDrivenTextStyle}
                containerStyle={`fc xs:border-r ${
                  isActive ? 'border-corpo' : 'border-dark'
                } w-full max-w-[30px] md:max-w-[50px] h-full p-[0.25rem]  group-hover:border-light ease-in duration-300`}
              />
            </div>
            <div className="flex items-center justify-end xs:hidden w-[50%] h-full ">
              <ArrowLongRightIcon
                containerStyle={`fc h-6 w-6 aspect-square ${
                  isActive ? 'stroke-corpo' : 'stroke-dark'
                }  group-hover:stroke-light group-hover:translate-x-1 ease-in duration-[0.4s] delay-[0.1s] origin-center`}
              />
            </div>
          </div>
          <div className="w-full h-[60%] xs:w-[80%] xs:h-full ">
            <CardContent
              catIndex={catIndex}
              catName={catName}
              catPath={catPath}
              catImage={catImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDownMenuCard;