import React from 'react';
/**Components**/
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import Regulacje from './regulacje/Regulacje';
import StronyGlowne from './stronyGlowne/StronyGlowne';
import KategorieProduktow from './kategorie/KategorieProduktow';
/**Basic Data**/
import { footerText } from '@/data/textData';

const TopSection = () => {
  /**JSX**/
  return (
    <div className="flex flex-wrap gap-y-8 w-full min-h-[200px] wrapper-1 bg-grey py-6">
      <div className="flex flex-col w-full gap-y-6 xs4xx:w-1/2 xs4xx:pr-2 md:pr-0 md:basis-1/3">
        <BasicHeader
          text={footerText.topSectionHeaders[0]}
          textStyle="label-regular font-bold text-dark align-middle leading-none"
          // ornamentColor='bg-light'
          hasBox={true}
          hasVerticalOrnament={false}
          boxStyle="bg-dark h-[10px] aspect-square"
        />
        <Regulacje />
      </div>
      <div className="flex flex-col w-full gap-y-6 xs4xx:w-1/2 xs4xx:pl-2 md:pl-0 md:basis-1/3">
        <BasicHeader
          text={footerText.topSectionHeaders[1]}
          textStyle="label-regular font-bold text-dark align-middle leading-none"
          // ornamentColor='bg-light'
          hasBox={true}
          hasVerticalOrnament={false}
          boxStyle="bg-dark h-[10px] aspect-square"
        />
        <StronyGlowne />
      </div>
      <div className="flex flex-col w-full gap-y-6 xs4xx:basis-1/1 md:basis-1/3">
        <BasicHeader
          text={footerText.topSectionHeaders[2]}
          textStyle="label-regular font-bold text-dark align-middle leading-none"
          // ornamentColor='bg-light'
          hasBox={true}
          hasVerticalOrnament={false}
          boxStyle="bg-dark h-[10px] aspect-square"
        />
        <KategorieProduktow />
      </div>
    </div>
  );
};

export default TopSection;
