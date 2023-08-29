'use client';
/**Components**/
import CardFrame from '@/components/forMultiPage/catalogs/allCards/cardFrame/CardFrame';
import DraggableSlider from '@/components/forMultiPage/sliders/draggableSlider/DraggableSlider';

/*TS**/
interface Props {
  expanded: number | false;
  height: number;
  axis: 'x' | 'y';
}
const GraphicSection = ({ expanded, height, axis }: Props) => {
  /**JSX**/
  return (
    <CardFrame>
      <div className="relative w-full h-full p-4 overflow-hidden fc">
        {/* <div className="w-full h-full border border-greyShade2"> */}
        <DraggableSlider
          axis={axis}
          axisSize={height}
          currentCategory={expanded as number}
        />
        {/* </div> */}
      </div>
    </CardFrame>
  );
};

export default GraphicSection;
{
  /* <p className="text-small">
        {typeof expanded === 'number' ? expanded.toString() : 'all are close'}
      </p> */
}
