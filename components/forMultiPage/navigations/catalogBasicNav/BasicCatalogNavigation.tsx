/**Components**/
import BasicHeader from '../../headers/basicHeader.tsx/BasicHeader';
import NavigationRow from './row/NavigationRow';

const BasicCatalogNavigation = () => {
  return (
    <div
      data-component="BasicCatalogNavigation"
      className="flex"
      //___border border-greyShade2
    >
      <div className="w-[10px]">
        <BasicHeader
          text="Katalog"
          hasBox={false}
          hasVerticalOrnament={false}
          containerStyle="flex disable-soft"
          inlineTextStyle={{ writingMode: 'vertical-rl' }}
          textStyle="label-regular text-greyShade1"
        />
      </div>
      <div className="w-[10px] border-r border-greyShade2"></div>
      <nav className="flex flex-col w-full gap-y-6 xl:gap-y-8 ">
        <NavigationRow
          label1="kategoria"
          label2="Przemysłowe wtyczki i gniazda"
        />
        <NavigationRow label1="podkategoria" label2="Gniazda przenośne" />
        <NavigationRow label1="model" label2="14307" />
        {/* {createLinks()}
        {createBottomLevel()}
        {createOptionalHeader()} */}
      </nav>
    </div>
  );
};

export default BasicCatalogNavigation;
