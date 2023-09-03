import React from 'react';
import { CreateTable1, CreateTable2 } from './handlers/createUI';

/*
___1. Two "TypeGuards"
*/
function isCatalogItemVer1_5aType(
  item: CatalogItemVer1_5aType | CatalogItemVer1_5bType
): item is CatalogItemVer1_5aType {
  return (item as CatalogItemVer1_5aType).line1 !== undefined;
}

function isCatalogItemVer1_5bType(
  item: CatalogItemVer1_5aType | CatalogItemVer1_5bType
): item is CatalogItemVer1_5bType {
  return (item as CatalogItemVer1_5bType).header !== undefined;
}

const CatalogTableVer1_5 = (
  data: CatalogItemVer1_5aType | CatalogItemVer1_5bType
) => {
  const createUI = () => {
    if (isCatalogItemVer1_5aType(data)) {
      return CreateTable1(data);
    } else if (isCatalogItemVer1_5bType(data)) {
      return CreateTable2(data);
    }
  };

  /**JSX**/
  return createUI();
};

export default CatalogTableVer1_5;
