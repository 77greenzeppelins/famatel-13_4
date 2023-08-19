// type StaticImageData = {
//   src: string;
//   height: number;
//   width: number;
//   blurDataURL?: string;
// };
/*
___1. syntax: "_C" means "custome"; is used when type name sound as native TS name...
*/
/*
___1. used in: various "index.ts" files that organizes images within images folders
*/
type ImageType_C = {
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
  catImage: ImageType_C;
};

type svgCatalogIcon = {
  svgStyle?: string;
  colorFG?: string;
  colorBG?: string;
  colorBGOpacity?: string;
};

/*
used in files with images ==> should by delayed ?
*/
type IF_ImgStaticData = {
  image: StaticImageData;
  model?: string;
};

type DynamicCatIndex = {
  categoryIndex: number | false | undefined;
};
