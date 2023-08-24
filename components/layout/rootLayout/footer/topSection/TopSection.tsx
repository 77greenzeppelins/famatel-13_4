import { usePathname } from 'next/navigation';
/**Components**/
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import Regulacje from './regulacje/Regulacje';
import StronyGlowne from './stronyGlowne/StronyGlowne';
import KategorieProduktow from './kategorie/KategorieProduktow';
/**Basic Data**/
import { footerText } from '@/data/textData';

const TopSection = () => {
  /** */
  const pathname = usePathname();
  const styleCondition = pathname.split('/').length > 2;
  /**JSX**/
  return (
    <div
      className={`w-full min-h-[200px] wrapper-1 ${
        styleCondition
          ? 'bg-dark duration-300 ease-linear'
          : 'bg-grey duration-300 ease-linear'
      }  py-6`}
    >
      <div
        className={`flex flex-wrap pt-6 md:pt-12 gap-y-8 ${
          styleCondition ? ' border-t border-greyShade2' : ''
        }`}
      >
        <div className="flex flex-col w-full gap-y-6 xs4xx:w-1/2 xs4xx:pr-2 md:pr-0 md:basis-1/3">
          <BasicHeader
            text={footerText.topSectionHeaders[0]}
            textStyle={`label-regular align-middle leading-none
          ${
            styleCondition
              ? 'text-grey duration-300 ease-linear'
              : 'font-bold text-dark duration-300 ease-linear'
          }
          `}
            hasBox={true}
            hasVerticalOrnament={false}
            boxStyle={` h-[10px] aspect-square  ${
              styleCondition
                ? 'bg-corpo duration-300 ease-linear'
                : 'bg-dark duration-300 ease-linear'
            }`}
          />
          <Regulacje />
        </div>
        <div className="flex flex-col w-full gap-y-6 xs4xx:w-1/2 xs4xx:pl-2 md:pl-0 md:basis-1/3">
          <BasicHeader
            text={footerText.topSectionHeaders[1]}
            textStyle={`label-regular align-middle leading-none
          ${
            styleCondition
              ? 'text-grey duration-300 ease-linear'
              : 'font-bold text-dark duration-300 ease-linear'
          }
          `}
            hasBox={true}
            hasVerticalOrnament={false}
            boxStyle={` h-[10px] aspect-square  ${
              styleCondition
                ? 'bg-corpo duration-300 ease-linear'
                : 'bg-dark duration-300 ease-linear'
            }`}
          />
          <StronyGlowne />
        </div>
        <div className="flex flex-col w-full gap-y-6 xs4xx:basis-1/1 md:basis-1/3">
          <BasicHeader
            text={footerText.topSectionHeaders[2]}
            textStyle={`label-regular align-middle leading-none
          ${
            styleCondition
              ? 'text-grey duration-300 ease-linear'
              : 'font-bold text-dark duration-300 ease-linear'
          }
          `}
            // ornamentColor='bg-light'
            hasBox={true}
            hasVerticalOrnament={false}
            boxStyle={` h-[10px] aspect-square  ${
              styleCondition
                ? 'bg-corpo duration-300 ease-linear'
                : 'bg-dark duration-300 ease-linear'
            }`}
          />
          <KategorieProduktow />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
