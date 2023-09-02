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
___1. used in file: catalogStructureData.ts
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
  catAllTechData: Cat1AllTechDataType | cat8AllTechDataType;
};

/*
___1. types for catalogTables...
*/
type CatalogItemVar1Type = {
  tableType: 'catalogTableCat1_1' | 'catalogTableCat1_6';
  headerTopData: string[][];
  headerBottomData: string[][];
  rowsData: string[][][];
};
type CatalogDataVar1Type = CatalogItemVar1Type[];

type KeyValueLineType = { label: string; value: string };
type CatalogItemVar2Type = {
  tableType: 'noCatalogData' | 'catalogTableCat1_4';
  line1?: KeyValueLineType;
  line2?: KeyValueLineType;
  line3?: KeyValueLineType;
  line4?: KeyValueLineType;
  line5?: KeyValueLineType;
  line6?: KeyValueLineType;
}; // for cat1_subCat4_jednofazoweScienne
type CatalogDataVar2Type = CatalogItemVar2Type[];

type CatalogItemEmptyType = {
  tableType: 'noCatalogData';
}; // for cat1_subCat4_jednofazoweScienne
type CatalogDataEmptyType = CatalogItemEmptyType[];

type CatalogItemVer3Type = {
  tableType: 'catalogTableCat1_5';
  line1: {
    label: string;
    value: string;
  };
  lines: Array<Array<string>>; //string[][]
};

type CatalogItemVer4Type = {
  tableType: 'catalogTableCat1_5';
  header: {
    label: string;
    value: string;
  };
  tableBody: Array<Array<string>>;
};
type CatalogDataVar3And4Type = (CatalogItemVer3Type | CatalogItemVar4Type)[];

type CategoryCatalogDataType =
  | (
      | CatalogDataVar1Type
      | CatalogDataVar2Type
      | CatalogDataEmptyType
      | CatalogDataVar3And4Type
    )[];

type AllCatalogDataType = CategoryCatalogDataType[];

type ModelCatalogsTypes =
  | CatalogItemVar1Type
  | CatalogItemVar2Type
  | CatalogItemVer3Type
  | CatalogItemVer4Type
  | CatalogItemEmptyType;

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
___types for tables ==> naither catalog nor techSpec
*/
type BasicTableRowType = string[];
type BasicTableDataType = {
  headerData: BasicTableRowType;
  bodyData: BasicTableRowType[];
  headerColSpan?: number | number[];
  sideHeaderStyle?: string;
};
type DataAsTuple = [string, string];
type TransparentTableSimpleDataType = string[][];
type TransparentTableDataType = DataAsTuple[];

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
___section with types for techspecTables
___for model techSpecData ==> including "indxFiles" that stores individual files in arrays 
*/
/*
____(!) should replace ObudowaPustaTechDataType...
*/
type ObudowaType1TechDataType = {
  tableType: 'techSpecTableVer1';
  header: string[][];
  tablesData: { label: string; value: string }[][];
  norma: DataAsTuple;
  description: TransparentTableDataType;
  iconHolderData: { svgLabel: string[] };
  opis?: string[];
};
type ObudowyType1TechDataType = ObudowaType1TechDataType[];

type cat8AllTechDataType = ObudowyType1TechDataType[];

//___cat1 / wtyczki gniazda przenośne /
type WtyczkaGniazdoType1TechDataType = {
  tableType: 'techTableWtyczkiGniazdaVer1' | 'onlyUnderlinedTable'; //___not just a string...
  ampers: string[];
  poles: string[];
  bodyData: string[][];
  connectionType: string[];
  mm: string[];
  weight: string[];
  features?: TransparentTableDataType;
};
type WtyczkaGniazdoType2TechDataType = {
  tableType: 'techTableWithRegularColumns';
  header: string[];
  tableBody: string[][];
};
type WtyczkaGniazdoType3TechDataType = {
  tableType: 'techTableWtyczkiGniazdaVer2' | 'noTechTable';
  header?: string[][];
  tableBody?: string[][];
  features?: string[][];
};
//___estradowe
type WtyczkaGniazdoType5TechDataType = {
  tableType: 'techTableWtyczkiGniazdaVer5' | 'noTechTable';
  header?: string[];
  tableBody?: string[][];
  catalogLike?: {
    line1: string[];
    line2: string[];
    line3: string[];
  };
  underlinedRow?: string[][];
  header2a?: string[];
  header2b?: string[];
  tableBody2?: string[][];
  description?: string;
};
//___campingowe
type WtyczkaGniazdoType6TechDataType = {
  tableType: 'techTableWtyczkiGniazdaVer6' | 'noTechTable';
  tableHeader?: string[];
  tableBody?: string[][];
  underlinedRows?: string[][];
  tableBodySpecialRows?: string[][];
  twoTables?: {
    tableHeader: string[];
    tableBody: string[][];
  }[];
};

type TechTableItemEmptyType = {
  tableType: 'noTechDate';
}; // for cat1_subCat4_jednofazoweScienne

type WtyczkiGniazdaType1TechDataType = WtyczkaGniazdoType1TechDataType[];
type WtyczkiGniazdaType2TechDataType = WtyczkaGniazdoType2TechDataType[];
type WtyczkiGniazdaType3TechDataType = WtyczkaGniazdoType3TechDataType[];
type WtyczkiGniazdaType5TechDataType = WtyczkaGniazdoType5TechDataType[];
type WtyczkiGniazdaType6TechDataType = WtyczkaGniazdoType6TechDataType[];
type TechTableEmptyType = TechTableItemEmptyType[];

type Cat1AllTechDataType = (
  | WtyczkiGniazdaType1TechDataType
  | WtyczkiGniazdaType2TechDataType
  | WtyczkiGniazdaType3TechDataType
  | WtyczkiGniazdaType5TechDataType
  | WtyczkiGniazdaType6TechDataType
  | TechTableEmptyType
)[];

type AllTechSpecData = (
  | Cat1AllTechDataType
  | cat8AllTechDataType
  | TechTableEmptyType
)[];

type ModelTechDataTypes =
  | WtyczkaGniazdoType1TechDataType
  | WtyczkaGniazdoType2TechDataType
  | WtyczkaGniazdoType3TechDataType
  | WtyczkaGniazdoType5TechDataType
  | WtyczkaGniazdoType6TechDataType
  | TechTableItemEmptyType
  | ObudowaType1TechDataType;

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

//________________________________________________________________________________________

//__cat 8,9,10
// type ObudowaPustaTechDataType = {
//   tableType: string;
//   header: string[][];
//   tablesData: { label: string; value: string }[][];
//   header3col?: string[];
//   tablesData3col?: {
//     label: string;
//     value1: string;
//     value2: string;
//   }[];
//   norma: DataAsTuple;
//   description: TransparentTableDataType | TransparentTableSimpleDataType;
//   iconHolderData: { svgLabel: string[] };
//   opis?: string[];
//   packageDetails?: DataAsTuple[];
// };
// type ObudowaVer2TechDataType = {
//   tableType: string;
// };
// type ObudowyVer2TechDataType = ObudowaVer2TechDataType[]
// type ObudowyPusteTechDataType = (
//   | ObudowaPustaTechDataType
//   | ObudowaVer2TechDataType
// )[];

// type WtyczkiGniazdaType2TechDataType = {
//   tableType: string;
//   ampers: string[];
// }[]; // <===temp / fake
// type Cat1AllTechDataType = (
//   | WtyczkiGniazdaType1TechDataType
//   | WtyczkiGniazdaType2TechDataType
// )[];

// type ObudowaXXXTechDataType = {
//   tableType: string;
// };
// type CategoryTechDataType = (
//   | ObudowyPusteTechDataType
//   | ObudowaXXXTechDataType
// )[];

// type modelTechSpecDataType =
//   | ObudowyPusteTechDataType
//   | ObudowaXXXTechDataType
//   | WtyczkiGniazdaType1TechDataType
//   | WtyczkiGniazdaType2TechDataType;
