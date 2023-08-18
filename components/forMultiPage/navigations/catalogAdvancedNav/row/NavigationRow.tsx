import Link from 'next/link';
/**Components**/
import ArrowForLinkIcon from '@/components/SVG/icons/heroIcons/ArrowForLinkIcon';
/**Tailwind Styles**/
import { styles } from '@/styles';
/**Basic Data**/
import { advCatNav } from '@/data/basicData';
import { catalogStructureData } from '@/data/catalogStructureData';
import { wtyczkiGniazdaSubCatFullPaths } from '@/data/routingData';

/**TS**/
interface Props {
  rowIndex: number;
  catalogLevel: string[];
  pathSegments: string[];
}

const NavigationRow = ({ rowIndex, catalogLevel, pathSegments }: Props) => {
  /*
  ___1. there are three <NR>; each has index from range [0,2] --> (0,1,2)
  */
  // console.log('rowIndex', rowIndex);
  // console.log('catalogLevel[rowIndex]', catalogLevel[rowIndex]);
  // console.log('pathSegments', pathSegments);
  // console.log('wtyczkiGniazdaSubCatFullPaths', wtyczkiGniazdaSubCatFullPaths);

  const linkCondition = rowIndex < catalogLevel.length - 1;

  const fakeF = (level: number) => {
    return `/produkty/${catalogLevel[level]}`;
  };

  const creatHref = (level: number) => {
    switch (level) {
      case 0:
        return `/produkty/${catalogLevel[level]}`;
      // return fakeF(level);
      case 1:
        return `/produkty/${catalogLevel[level - 1]}/${catalogLevel[level]}`;
      // case 2:
      //   return `/produkty/${catalogLevel[rowIndex - 2]}/${
      //     catalogLevel[rowIndex - 1]
      //   }/${catalogLevel[rowIndex]}`;

      default:
        return `/produkty`;
    }
  };
  const createLabel1 = (level: number) => {
    return catalogStructureData.map(
      ({ mainCategoryPath, mainCategoryName }) => {
        // console.log('......createLabel1');
        const catName = mainCategoryPath.split('/').reverse()[0];
        return catName === catalogLevel[level] ? mainCategoryName : null;
      }
    );
  };
  const createLabel2 = (level: number) => {
    return catalogStructureData.map(
      ({ subCategoriesPaths, subCategoriesNames }) => {
        // console.log('......createLabel1');
        // const catName = mainCategoryPath.split('/').reverse()[0];
        // return catName === catalogLevel[level] ? mainCategoryName : null;
        subCategoriesPaths.map((path, index) => {
          const subCat = path.split('/').reverse()[0];
          console.log('...subCat:', subCat);
          console.log('...catalogLevel[level]:', catalogLevel[level]);

          return subCat === catalogLevel[level]
            ? subCategoriesNames[index]
            : null;
        });
      }
    );
  };
  const cL = (level: number) => {
    switch (level) {
      case 0:
        return createLabel1(level);
      // catalogStructureData.map(({ mainCategoryPath, mainCategoryName }) => {
      //   const catName = mainCategoryPath.split('/').reverse()[0];
      //   return catName === catalogLevel[rowIndex] ? mainCategoryName : null;
      // });

      case 1:
        return createLabel1(level);
      case 2:
        return createLabel1(level);

      default:
        return `/produkty`;
    }
  };

  // const createLabel = catalogStructureData.map(
  //   ({ mainCategoryPath, mainCategoryName }) => {
  //     const catName = mainCategoryPath.split('/').reverse()[0];
  //     return catName === catalogLevel[rowIndex] ? mainCategoryName : null;
  //   }
  // );

  // console.log('createLabel1(level);:', createLabel1(0));
  // console.log('createLabel2(level);:', createLabel2(1));

  /**JSX**/
  return (
    <div className={`${catalogLevel[rowIndex] ? 'flex flex-col' : 'hidden'} `}>
      <div className="flex items-center py-1 group">
        <div className="w-10 h-full shrink-0 fc"></div>
        <p className="text-greyShade1 label-regular">
          {advCatNav.headers[rowIndex]}
        </p>
      </div>
      <Link
        href={creatHref(rowIndex)}
        className={`flex items-center py-1 group w-fit ${
          linkCondition ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        // className={`flex items-center py-1 group w-fit`}
      >
        <span className="w-10 h-full shrink-0 fc">
          <ArrowForLinkIcon
            containerStyle={`fc h-6 w-6 min-w-6 min-h-6 aspect-square ${
              linkCondition
                ? 'stroke-corpo group-hover:stroke-light group-hover:rotate-45'
                : 'stroke-grey pointer-events-none'
            }   origin-center flex-shrink-0 ${styles.lazyAnimation}`}
          />
        </span>
        {catalogLevel[rowIndex] ? (
          <p
            className={`text-grey text-regular group-hover:text-light ${styles.lazyAnimation}`}
          >
            {/* {`${catalogLevel[rowIndex]}-${rowIndex}`} */}
            {cL(rowIndex)}
            {/* {createLabel1()} */}
          </p>
        ) : null}
        {/* <p
          className={`text-grey text-regular group-hover:text-light ${styles.lazyAnimation}`}
        >
          {`${catalogLevel[rowIndex]}-${rowIndex}`}
        </p> */}
      </Link>
    </div>
  );
};

export default NavigationRow;
