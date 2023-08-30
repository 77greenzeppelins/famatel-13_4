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
  model?: string;
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
  mainCatIndex: number;
  subCatIndex: number;
};
/*
___1 used in <ModelPageContent>
___2 it "expands" some existing type...
*/
type DynamicModelContent = DynamicSubCatContent & {
  modelIndex: number;
};

/*
used in file: catalogStructureData.ts
*/
type CatalogStructureData = CategoryStructureData[];
type CategoryStructureData = {
  mainCategoryIndex: number;
  mainCategoryName: string;
  mainCategoryPath: string;
  mainCategoryImage: indexImgCat;
  subCategoriesNames: string[];
  subCategoriesSegments: string[];
  subCategoriesPaths: string[];
  subCategoriesImages: ImageType_C[];
  svgIcons?: string[];
  labeledIcons?: string[];
  //nested arrays for selecting model data
  catAllProductsImages: ImageType_C[][] | undefined;
  catAllModels: modelCardsDataType[][];
  //___
  catAllCatalogData: CategoryCatalogDataType | undefined;
  catAllTechData: CategoryTechDataType;
};

type CatalogItemVar1Type = {
  tableType: string;
  headerTopData: string[][];
  headerBottomData: string[][];
  rowsData: string[][][];
};
type CatalogDataVar1Type = CatalogItemVar1Type[];
type KeyValueLineType = { label: string; value: string };
type CatalogItemVar2Type = {
  tableType: string;
  line1?: KeyValueLineType;
  line2?: KeyValueLineType;
  line3?: KeyValueLineType;
  line4?: KeyValueLineType;
  line5?: KeyValueLineType;
  line6?: KeyValueLineType;
}; // for cat1_subCat4_jednofazoweScienne
type CatalogDataVar2Type = CatalogItemVar2Type[];

type CategoryCatalogDataType = (CatalogDataVar1Type | CatalogDataVar2Type)[];
type allCatalogDataType = CategoryCatalogDataType[];

/*
idea: all data for each model
is used in: card in catalog rendered on [subCat] page.tsx; this data are passed to relevant model card & CardWithModelType
is used in: schemas on [model] page.tsx | <ModelPageContent>
*/
type modelCardsDataType = {
  arrayIndex: number;
  modelPathSegmant: string;
  textIcons?: string[];
  type?: string;
  collection?: string[] | string;
  altName?: string;
  model?: string; // rarely
  //___
};
/*
___used in: <CatalogCardWithModel>
*/
type CardWithModelType = {
  modelIndex?: number;
  modelImage: ImageType_C;
  modelPath: string;
  textIcons?: string[];
  type?: string;
  collection?: string | string[];
  altName?: string;
  model?: string;
};

type CardContentProps = Omit<CardWithModelType, 'modelPath'>;

/*
___types for tables 
*/
type BasicTableRowType = string[];
type BasicTableDataType = {
  headerData: BasicTableRowType;
  bodyData: BasicTableRowType[];
  headerColSpan?: number | number[];
  sideHeaderStyle?: string;
};
type DataAsTuple = [string, string];
type TransparentTableDataType = DataAsTuple[];
type TransparentTableSimpleDataType = string[][];

/*
___used in: S
*/
type CatSchemaType = {
  catIndex: number;
  subCatIndex: number;
  modelIndex: number;
};

type SubCatSchemaType = Omit<CatSchemaType, 'catIndex'>;
type ModelSchemaType = Omit<SubCatSchemaType, 'subCatIndex'>;

/*
___for model techSpecData ==> including "indxFiles" that stores individual files in arrays 
*/
type ObudowaPustaTechDataType = {
  tableType: string;
  header: string[][];
  tablesData: { label: string; value: string }[][];
  header3col?: string[];
  tablesData3col?: {
    label: string;
    value1: string;
    value2: string;
  }[];
  norma: DataAsTuple;
  description: TransparentTableDataType | TransparentTableSimpleDataType;
  iconHolderData: { svgLabel: string[] };
  opis?: string[];
  packageDetails?: DataAsTuple[];
};
type ObudowyPusteTechDataType = ObudowaPustaTechDataType[];
/*
____(!) should replace ObudowaPustaTechDataType...
*/
type ObudowaType1TechDataType = {
  tableType: string;
  header: string[][];
  tablesData: { label: string; value: string }[][];
  norma: DataAsTuple;
  description: TransparentTableDataType;
  iconHolderData: { svgLabel: string[] };
  opis?: string[];
};
type ObudowyType1TechDataType = ObudowaType1TechDataType[];

// type ObudowaGumowaTechDataType = {
//   tableType: string;
//   header: string[];
//   tablesData: string[][];
//   iconHolderData: { svgLabel: string[] };
//   opis?: string[];
// };
// type ObudowyGumoweTechDataType = ObudowaGumowaTechDataType[];
/*
then:
type ObudowaXXXTechDataType = {
  tableType: string;
};
type ObudowyXXXTechDataType = ObudowaPustaTechDataType[];

type CategoryTechDataType = (ObudowyPusteTechDataType | ObudowyXXXTechDataType)[];
*/

type CategoryTechDataType = ObudowyPusteTechDataType[];
type allTechDataType = CategoryTechDataType[];

/*
___1. SvgTechComponent ==> for each svg component
___2. SvgTechItemType ==> for "index.ts" files to specify type of array items;
*/
type SvgTechComponent = {
  basicSize?: number;
  className?: string;
};
type SvgTechItemType = {
  model: string;
  Component: React.FC<SvgTechComponent>;
};

type IndexFileOfSvgTechItemsType = SvgTechItemType[];
