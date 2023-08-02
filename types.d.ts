// type StaticImageData = {
//   src: string;
//   height: number;
//   width: number;
//   blurDataURL?: string;
// };
type ImageType = {
  path: string;
  // path: '/images/1_homePage/dirtyPlug_1200_1200.png'; // (!) is correct
  // path:"/public/images/1_homePage/dirtyPlug_1200_1200.png" // (!) is wrong
  width?: number;
  height?: number;
  alt: string;
};

type DropDownMenuCardType = {
  catIndex: number;
  catName: string;
  catPath: string;
  catImage: StaticImageData;
};
