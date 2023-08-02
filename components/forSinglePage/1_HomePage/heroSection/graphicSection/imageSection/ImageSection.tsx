import React from 'react';
import Image from 'next/image';
import { dirtyPlugImage } from '@/public/images/1_homePage/';

const ImageSection = () => {
  /**JSX**/
  return (
    <div className="relative flex justify-end w-full h-full">
      <Image
        className="aspect-square"
        alt={dirtyPlugImage.alt}
        // src={dirtyPlugImg}
        src={dirtyPlugImage.path}
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
