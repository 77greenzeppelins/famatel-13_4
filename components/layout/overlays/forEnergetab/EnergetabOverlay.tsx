import Image from 'next/image';
/**Components*/
import EnergatabLogo from '@/components/SVG/other/energetab/EnergetabLogo';
/**Assets**/
import { indexImgEnergetab } from '@/public/images/for_energetab/indexImgEnergatab';
/**Basic Data**/
import { energatabText } from '@/data/textData';
import SvgLogo from '@/components/SVG/logo/SvgLogo';

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
        {/* <SvgLogo
          svgStyle="max-w-[50vw] lg:max-w-[440px]"
          lettersStyle="fill-light"
          fStyle="fill-corpo"
        /> */}
        {/* <p className="text-corpo text-large">{energatabText.overlay.line1}</p> */}
        {/* <p className="text-light text-medium">{energatabText.overlay.line2}</p> */}
        {/* <Image
          alt={indexImgEnergetab.alt}
          src={indexImgEnergetab.path}
          width={indexImgEnergetab.width}
          height={indexImgEnergetab.height}
          className="w-[400px] max-w-[50vw]"
        /> */}
      </div>
    </div>
  );
};

export default EnergetabOverlay;
