import Link from 'next/link';
/**Hooks Staff*/
import { usePathname } from 'next/navigation';
/**Components**/
import CardFrameGrid from '../cardFrame/CardFrameGrid';
import TwoDigitsDisplayer from '@/components/forMultiPage/atomsLike/digitsDisplayer/twoDigitsDisplayer/TwoDigitsDisplayer';
import CardContent from './content/CardContent';
/**Tailwind Styles*/
import { styles } from '@/styles';

const CatalogCard = ({
  catIndex,
  catName,
  catPath,
  catImage,
}: CatalogCardType) => {
  const pathname = usePathname();
  const isActive = pathname === catPath;

  const routDrivenTextStyle = `${
    isActive ? 'text-corpo' : 'text-grey'
  }  text-center text-[0.5rem] xs3xx:text-[0.625rem] md:text-[0.75rem] xxxl:text-[1.125rem] tracking-[0.09rem] leading-normal ${
    isActive ? '' : `group-hover:text-light ${styles.basicAnimation}`
  } `;
  /**JSX**/
  return (
    <li
      //___className="grid py-2 w-[96%]"
      className={`relative h-[220px] sm:h-[240px] cursor-pointer group select-none no-sparkling ${
        isActive ? '' : 'group'
      }`}
    >
      <CardFrameGrid innerContainerStyle="grid relative col-span-full row-span-full w-full h-full rounded-md bg-dark z-10">
        <Link
          aria-label={`Karta kategorii: ${catName}`}
          role="link"
          className="z-10 w-full h-full pointer-events-auto abs-cell"
          href={catPath}
          // scroll={false}
        />
        <div
          // className="absolute inset-0 z-5"
          className="z-0 w-full h-full abs-cell"
          role="region"
          aria-label={`Tekstowo-graficzna zawartość karty kategorii: ${catName}`}
        >
          {/* <div className="flex items-center justify-between  w-full h-[40%] sm:w-[20%] sm:h-[80%]">
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
            </div> */}

          <CardContent
            catIndex={catIndex}
            catName={catName}
            catPath={catPath}
            catImage={catImage}
          />
        </div>
      </CardFrameGrid>
    </li>
  );
};

export default CatalogCard;
