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
___2: wrong approaches: path:"/public/images/1_homePage/dirtyPlug_1200_1200.png" // (!) is wrong
  correct: path: '/images/1_homePage/dirtyPlug_1200_1200.png';
*/
type ImageType_C = {
  path: string;
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

type CatalogCardType = {
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

type DynamicCatIndex = {
  categoryIndex: number | false | undefined;
};

/*
___1. used in: <SubCatPageContent>
*/
type DynamicSubCatContent = {
  mainCatPath: string;
  mainCatIndex: number;
  subCatPath: string;
  subCatIndex: number;
};

type CatalogStructureData = {
  mainCategoryIndex: number;
  mainCategoryName: string;
  mainCategoryPath: string;
  mainCategoryImage: indexImgCat;
  subCategoriesNames: string[];
  subCategoriesPaths: string[];
  subCategoriesImages: ImageType_C[];
  svgIcons?: string[];
  labeledIcons?: string[];
  allProductsImages: ImageType_C[][];
};

/*
is used in: 
idea: data for model card in catalog rendered on [subCat] page.tsx; this data are passed to relevant model card & CardWithModelType
*/
type modelCardsDataType = {
  arrayIndex: number;
  modelPathSegmant: string;
  textIcons?: string[];
  // imageData: imgWtyczkiGniazda_02_tablicowe[1],
  type?: string;
  collection?: string[];
  altName?: string;
  model?: string; // rarely
};

type CardWithModelType = {
  modelIndex?: number;
  catName?: string;
  catPath?: string; //temporaily... till I define them all...
  catImage: ImageType_C;
};

type modelCardsDataType = {};

/*
used in files with images ==> should by delayed ?
*/
// type IF_ImgStaticData = {
//   image: StaticImageData;
//   model?: string;
// };
