import Link from 'next/link';
/**Components**/
import ArrowForLinkIcon from '@/components/SVG/icons/heroIcons/ArrowForLinkIcon';
/**Tailwind Styles**/
import { styles } from '@/styles';
/**Basic Data**/
import { advCatNav } from '@/data/basicData';
import { catalogStructureData } from '@/data/catalogStructureData';
import { wtyczkiGniazdaSubCatFullPaths } from '@/data/routingData';
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';

/**TS**/
interface Props {
  rowIndex: number;
  catalogLevel: string[];
  mainCategoryName: string;
  subCategoryName: string;
  modelName: string | false;
}

const NavigationRow = ({
  rowIndex,
  catalogLevel,
  mainCategoryName,
  subCategoryName,
  modelName,
}: Props) => {
  /*
  ___1. there are three <NR>; each has index from range [0,2] --> (0,1,2)
  */
  // console.log('rowIndex', rowIndex);
  // console.log('catalogLevel.length - 1', catalogLevel.length - 1);
  // console.log('pathSegments', pathSegments);
  // console.log('wtyczkiGniazdaSubCatFullPaths', wtyczkiGniazdaSubCatFullPaths);
  const isActive = rowIndex === catalogLevel.length - 1;
  const linkCondition = rowIndex < catalogLevel.length - 1;
  // console.log('isActive', isActive);

  /*
  ___1. allows to create 
  */
  const creatHref = (level: number) => {
    switch (level) {
      //___link to main categories
      case 0:
        return `/produkty/${catalogLevel[level]}`;
      //___link to main subCategories
      case 1:
        return `/produkty/${catalogLevel[level - 1]}/${catalogLevel[level]}`;
      //___there is no need to create model link as it's final level...
      default:
        return `/produkty`;
    }
  };

  const createLabel = (level: number) => {
    switch (level) {
      case 0:
        return mainCategoryName;
      case 1:
        return subCategoryName;
      case 2:
        return modelName;

      default:
        return `/produkty`;
    }
  };

  // console.log('createLabel1(level);:', createLabel1(0));
  // console.log('createLabel2(level);:', createLabel2(1));

  /**JSX**/
  return (
    <div className={`${catalogLevel[rowIndex] ? 'flex flex-col' : 'hidden'} `}>
      <div className="flex items-center py-1 pl-[40px] group">
        <BasicHeader
          text={advCatNav.headers[rowIndex]}
          hasBox={true}
          hasVerticalOrnament={false}
          textStyle="label-regular text-greyShade1"
        />
      </div>
      <Link
        href={creatHref(rowIndex)}
        // href='/'
        className={`flex items-center py-1 group w-fit ${
          linkCondition ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <span className="w-10 h-full shrink-0 fc">
          <ArrowForLinkIcon
            containerStyle={`fc h-6 w-6 min-w-6 min-h-6 aspect-square ${
              linkCondition
                ? 'stroke-corpo group-hover:stroke-light group-hover:rotate-45'
                : 'stroke-dark pointer-events-none'
            }   origin-center flex-shrink-0 ${styles.lazyAnimation}`}
          />
        </span>
        {catalogLevel[rowIndex] ? (
          <p
            className={` ${
              isActive
                ? 'text-light text-xs md:text-base lg:text-2xl xxl:text-3xl tracking-[2px] word-spacing-0125 lg:word-spacing-025'
                : 'text-grey text-xs md:text-base group-hover:text-light'
            }  ${styles.lazyAnimation}`}
          >
            {createLabel(rowIndex)}
          </p>
        ) : null}
      </Link>
    </div>
  );
};

export default NavigationRow;

// const createLabel2 = (level: number) => {
//   return catalogStructureData.map(
//     ({ subCategoriesPaths, subCategoriesNames }) => {
//       // console.log('......createLabel1');
//       // const catName = mainCategoryPath.split('/').reverse()[0];
//       // return catName === catalogLevel[level] ? mainCategoryName : null;
//       subCategoriesPaths.map((path, index) => {
//         const subCat = path.split('/').reverse()[0];
//         console.log('...subCat:', subCat);
//         console.log('...catalogLevel[level]:', catalogLevel[level]);

//         return subCat === catalogLevel[level]
//           ? subCategoriesNames[index]
//           : null;
//       });
//     }
//   );
// };
