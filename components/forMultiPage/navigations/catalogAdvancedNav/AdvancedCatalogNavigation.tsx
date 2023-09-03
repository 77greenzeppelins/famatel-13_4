'use client';

/**Components**/
import BasicHeader from '../../headers/basicHeader.tsx/BasicHeader';
import NavigationRow from './row/NavigationRow';
/**Basic Data**/
import { AdvancedCatalogNavigationData, advCatNav } from '@/data/basicData';

/**TS**/
interface Props {
  catalogLevel: string[];
  mainCategoryName: string;
  subCategoryData: {
    subCatIndex: number;
    subCategoryName: string;
  } | null;
  modelData: {
    modelIndex: number;
    modelLabel: string | false | undefined;
  } | null;
}

const AdvancedCatalogNavigation = ({
  catalogLevel,
  mainCategoryName,
  subCategoryData,
  modelData,
}: Props) => {
  /**Data destr...**/
  const { navLevels } = AdvancedCatalogNavigationData;
  // console.log('...catalogLevel:', catalogLevel);
  // console.log('...subCategoryData:', subCategoryData);
  // console.log('...modelData:', modelData);

  /*
  ___1. create subCatName
  */
  const createSubCatName = () => {
    if (subCategoryData?.subCategoryName === undefined) {
      return '';
    }
    return subCategoryData.subCategoryName;
  };

  const createModelName = () => {
    if (modelData === undefined) {
      return '';
    }
    if (modelData?.modelLabel === undefined) {
      return '';
    }
    return modelData.modelLabel;
  };

  /**JSX**/
  /*
  ___1. styles remarks: main tresholde are: md & xl
  */
  return (
    <div
      data-component="BasicCatalogNavigation"
      className="flex "
      //___border border-greyShade2
    >
      <div className="w-[10px] xl:w-[16px]">
        <BasicHeader
          text={advCatNav.mainHeader}
          hasBox={false}
          hasVerticalOrnament={false}
          containerStyle="flex disable-soft"
          inlineTextStyle={{ writingMode: 'vertical-rl' }}
          textStyle="label-regular text-greyShade1"
        />
      </div>
      <div className="w-[10px] xl:w-[16px] border-r border-greyShade2"></div>
      <nav className="flex flex-col w-full md:pl-4 gap-y-6 xl:gap-y-8">
        {Array.from({ length: navLevels }).map((_, index) => (
          <NavigationRow
            key={index}
            mainCategoryName={mainCategoryName}
            subCategoryName={createSubCatName()}
            modelName={createModelName()}
            //___ rowIndex & catalogLevel are used to create some boolean values that allows conditional logic in styling
            rowIndex={index}
            catalogLevel={catalogLevel}
            //___
          />
        ))}
      </nav>
    </div>
  );
};

export default AdvancedCatalogNavigation;
