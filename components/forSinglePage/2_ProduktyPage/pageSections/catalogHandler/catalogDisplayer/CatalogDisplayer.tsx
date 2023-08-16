/**Components*/
import InViewCSSAnimatedContent from '@/components/layout/containers/inView/InViewCSSAnimatedContent';
import ProductsCategoryCard from './productsCategoryCard/ProductsCategoryCard';
/**Tailwind Styles**/
import { styles } from '@/styles';
/**Basic Data*/
import { mainCategoriesNames } from '@/data/basicData';
import GraphicSection from '../graphicSection/GraphicSection';

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
      <div className="flex w-full">
        <div className="w-full lg:w-8/12">
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
        </div>
        <div className="hidden lg:block lg:w-4/12">
          <GraphicSection />
        </div>
      </div>
    </InViewCSSAnimatedContent>
  );
};

export default CatalogDisplayer;
