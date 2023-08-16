/**Components*/
import InViewCSSAnimatedContent from '@/components/layout/containers/inView/InViewCSSAnimatedContent';
import ProductsCategoryCard from './productsCategoryCard/ProductsCategoryCard';
/**Tailwind Styles**/
import { styles } from '@/styles';
/**Basic Data*/
import { mainCategoriesNames } from '@/data/basicData';

const CatalogDisplayer = ({
  componentIsInView,
  expanded,
  setExpanded,
}: {
  componentIsInView?: boolean;
  expanded: number | false;
  setExpanded: React.Dispatch<React.SetStateAction<number | false>>;
}) => {
  /**Data Destr...**/
  const {
    inViewContentSubtleSide: {
      visible,
      invisibleFromLeftBottom,
      containerStyle,
    },
  } = styles;

  /**JSX**/
  return (
    <InViewCSSAnimatedContent
      componentIsInView={componentIsInView}
      inViewTrue={visible}
      inViewFalse={invisibleFromLeftBottom}
      containerStyle={containerStyle}
    >
      <ul className="flex flex-col w-full">
        {mainCategoriesNames.map((label, i) => (
          <ProductsCategoryCard
            key={i}
            i={i}
            label={label}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        ))}
      </ul>
    </InViewCSSAnimatedContent>
  );
};

export default CatalogDisplayer;
