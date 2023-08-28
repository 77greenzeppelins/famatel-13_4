/**Components*/
import EnergatabLogo from '@/components/SVG/other/energetab/EnergetabLogo';

const EnergetabOverlay = () => {
  /**JSX* */
  return (
    <div
      className="fixed  w-full p-4 overflow-x-hidden overflow-y-auto inset-0  max-h-full z-[501] bg-dark flex items-center wrapper-1"
      //___h-[calc(100%-10rem)] top-0 left-0 right-0
    >
      <div className="flex flex-col items-center justify-center w-full gap-y-12">
        <EnergatabLogo
          containerStyle="max-w-[50vw] lg:max-w-[300px]  flex-shrink-0"
          //___w-[600px] h-[360px]
        />
      </div>
    </div>
  );
};

export default EnergetabOverlay;
