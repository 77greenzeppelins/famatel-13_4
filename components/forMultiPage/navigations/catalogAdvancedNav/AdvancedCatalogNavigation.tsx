'use client';

/**Components**/
import BasicHeader from '../../headers/basicHeader.tsx/BasicHeader';
import NavigationRow from './row/NavigationRow';
/**Basic Data**/
import { AdvancedCatalogNavigationData, advCatNav } from '@/data/basicData';

/**TS**/
interface Props {
  catalogLevel: string[];
  pathSegments: string[];
}

const AdvancedCatalogNavigation = ({ pathSegments, catalogLevel }: Props) => {
  /**Data destr...**/
  const { navLevels } = AdvancedCatalogNavigationData;
  /**JSX**/
  return (
    <div
      data-component="BasicCatalogNavigation"
      className="flex"
      //___border border-greyShade2
    >
      <div className="w-[10px]">
        <BasicHeader
          text={advCatNav.mainHeader}
          hasBox={false}
          hasVerticalOrnament={false}
          containerStyle="flex disable-soft"
          inlineTextStyle={{ writingMode: 'vertical-rl' }}
          textStyle="label-regular text-greyShade1"
        />
      </div>
      <div className="w-[10px] border-r border-greyShade2"></div>
      <nav className="flex flex-col w-full gap-y-6 xl:gap-y-8 ">
        {Array.from({ length: navLevels }).map((_, index) => (
          <NavigationRow
            key={index}
            rowIndex={index}
            pathSegments={pathSegments}
            catalogLevel={catalogLevel}
          />
        ))}
      </nav>
    </div>
  );
};

export default AdvancedCatalogNavigation;
