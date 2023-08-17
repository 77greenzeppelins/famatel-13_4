/**Components*/
import InViewCSSAnimatedContent from '@/components/layout/containers/inView/InViewCSSAnimatedContent';
import ProductsCategoryCard from './productsCategoryCard/ProductsCategoryCard';
/**Tailwind Styles**/
import { styles } from '@/styles';
/**Basic Data*/
import { mainCategoriesNames, mainPagesPaths } from '@/data/routingData';
import GraphicSection from '../graphicSection/GraphicSection';
import { createPath } from '@/lib/handlers/functions';

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

  /*
  ___1. is used in map() to creat card for each category
  */
  const createProductsCategoryCard = mainCategoriesNames.map((label, i) => {
    const categoryPath = createPath(label);

    return (
      <ProductsCategoryCard
        href={`${mainPagesPaths.produkty}/${categoryPath}`}
        key={i}
        i={i}
        label={label}
        expanded={expanded}
        setExpanded={setExpanded}
      />
    );
  });

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
          <ul className="flex flex-col w-full">{createProductsCategoryCard}</ul>
        </div>
        <div className="hidden lg:block lg:w-4/12">
          <GraphicSection />
        </div>
      </div>
    </InViewCSSAnimatedContent>
  );
};

export default CatalogDisplayer;
