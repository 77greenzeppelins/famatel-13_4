import Link from 'next/link';
/**Hooks Staff*/
import { usePathname } from 'next/navigation';
/**Components**/
import ArrowLongRightIcon from '@/components/SVG/icons/heroIcons/ArrowLongRightIcon';
import TwoDigitsDisplayer from '@/components/forMultiPage/atomsLike/digitsDisplayer/twoDigitsDisplayer/TwoDigitsDisplayer';
import CardContent from './content/CardContent';
/**Tailwind Styles*/
import { styles } from '@/styles';

const DropDownMenuCard = ({
  catIndex,
  catName,
  catPath,
  catImage,
}: DropDownMenuCardType) => {
  const pathname = usePathname();
  const isActive = pathname === catPath;

  const routDrivenTextStyle = `${
    isActive ? 'text-corpo' : 'text-grey'
  }  text-center text-[0.5rem] xs3xx:text-[0.625rem] md:text-[0.75rem] xxxl:text-[1.125rem] tracking-[0.09rem] leading-normal ${
    isActive ? '' : `group-hover:text-light ${styles.basicAnimation}`
  } `;
  /**JSX**/
  return (
    <div
      className={`relative w-full h-full cursor-pointer ${
        isActive ? '' : 'group'
      } border border-greyShade2 `}
    >
      <Link
        aria-label={`Karta kategorii: ${catName}`}
        role="link"
        className="relative z-10 block w-full h-full"
        href={catPath}
        // scroll={false}
      />
      <div
        className="absolute inset-0 z-5 bg-light"
        role="region"
        aria-label={`Tekstowo-graficzna zawartość karty kategorii: ${catName}`}
      >
        <div
          className={`relative flex-col w-full h-full fc sm:flex-row bg-dark `}
        >
          {/*----*/}
          <div
            className={`absolute left-0 h-full w-[1px] bg-dark border border-dark group-hover:border-greyShade2 ${styles.basicAnimation} origin-center`}
          />
          <div
            className={`absolute right-0 h-full w-[1px] bg-dark border border-dark o group-hover:border-greyShade2 ${styles.basicAnimation} origin-center`}
          />
          <div
            className={`absolute top-0 w-full h-[1px] bg-dark border border-dark group-hover:border-greyShade2 ${styles.basicAnimation} origin-center`}
          />
          <div
            className={`absolute bottom-0 w-full h-[1px] bg-dark border border-dark group-hover:border-greyShade2 ${styles.basicAnimation} origin-center`}
          />
          {/*----*/}
          <div className="flex items-center justify-between  w-full h-[40%] sm:w-[20%] sm:h-[80%]">
            <div className="flex items-center justify-start w-[50%] h-[50%]  sm:h-full sm:w-full">
              <TwoDigitsDisplayer
                index={catIndex}
                textStyle={routDrivenTextStyle}
                containerStyle={`fc sm:border-r ${
                  isActive ? 'border-corpo' : 'border-greyShade2'
                } w-full max-w-[30px] md:max-w-[50px] h-full p-[0.25rem]  group-hover:border-light ${
                  styles.basicAnimation
                }`}
              />
            </div>
            <div className="flex items-center justify-end sm:hidden w-[50%] h-full pr-2">
              <ArrowLongRightIcon
                containerStyle={`fc h-6 w-6 aspect-square ${
                  isActive ? 'stroke-corpo' : 'stroke-grey'
                }  group-hover:stroke-light group-hover:translate-x-1 ${
                  styles.basicAnimation
                } origin-center`}
              />
            </div>
          </div>
          <div
            className="w-full h-[60%] xs:w-[80%] xs:h-full"
            // className="w-full h-full "
          >
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
