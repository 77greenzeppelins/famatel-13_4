/**Components*/
import InViewCSSAnimatedContent from '@/components/layout/containers/inView/InViewCSSAnimatedContent';
import ProductsCategoryCard from './productsCategoryCard/ProductsCategoryCard';
import GraphicSection from '../graphicSection/GraphicSection';
/**Hooks Staff**/
import useMeasure from 'react-use-measure';
/**Tailwind Styles**/
import { styles } from '@/styles';
/**Basic Data*/
import { mainCategoriesNames, mainPagesPaths } from '@/data/routingData';
import { createPath } from '@/lib/handlers/functions';

/**TS**/
interface Props {
    componentIsInView?: boolean;
    expanded: number | false;
    setExpanded: React.Dispatch<React.SetStateAction<number | false>>;
}
const CatalogDisplayer = ({ componentIsInView, expanded, setExpanded }: Props) => {
    /**Data Destr...**/
    const {
        inViewContentSubtleSide: { visible, invisibleFromLeftBottom, containerStyle }
    } = styles;

    /*
  ___1. graphic section should has height of <ul> 
  */
    const [ref, bounds] = useMeasure(); //{ scroll: true,}
    // console.log('bounds', bounds);

    /*
  ___1. is used in map() to creat card for each category
  ___2. createPath(label) takes category name and convert it into dashed path
  */
    const createProductsCategoryCard = mainCategoriesNames.map((label, i) => {
        const categoryPath = createPath(label);
        return <ProductsCategoryCard href={`${mainPagesPaths.produkty}/${categoryPath}`} key={i} i={i} label={label} expanded={expanded} setExpanded={setExpanded} />;
    });

    /**JSX**/
    return (
        <InViewCSSAnimatedContent componentIsInView={componentIsInView} inViewTrue={visible} inViewFalse={invisibleFromLeftBottom} containerStyle={containerStyle}>
            <div className="flex w-full">
                <div className="w-full lg:w-8/12">
                    <ul ref={ref} className="flex flex-col w-full">
                        {createProductsCategoryCard}
                    </ul>
                </div>
                <div className="flex-col hidden lg:flex lg:w-4/12" style={{ height: bounds.height }}>
                    <GraphicSection expanded={expanded} height={bounds.height} axis={'y'} />
                </div>
            </div>
        </InViewCSSAnimatedContent>
    );
};

export default CatalogDisplayer;
