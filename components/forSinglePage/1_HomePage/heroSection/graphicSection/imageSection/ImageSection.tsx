import React from 'react';
import Image from 'next/image';
import { dirtyPlugImage } from '@/public/images/1_homePage/';
// import dirtyPlugImg from '@/public/images/1_homePage/dirtyPlug_1200_1200.webp';
import dirtyPlugImg from '@/public/images/1_homePage/dirtyPlug_1200_1200.png';

const ImageSection = () => {
  /**JSX**/
  return (
    <div className="relative flex justify-end w-full h-full">
      <Image
        className="aspect-square"
        alt={dirtyPlugImage.alt}
        src={dirtyPlugImg}
        width={dirtyPlugImage.width}
        height={dirtyPlugImage.height}
        // fill
        // sizes="1200"
        // fill // intrinsic|fixed|responsive|fill allowed;  fill your parent
      />
    </div>
  );
};

export default ImageSection;
