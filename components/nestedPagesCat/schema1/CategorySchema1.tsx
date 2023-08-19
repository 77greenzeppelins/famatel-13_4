'use client';
/**Components**/
import CatalogGrid from '@/components/forMultiPage/catalogs/catalogGrid/CatalogGrid';
/**BasicData**/
import { catalogStructureData } from '@/data/catalogStructureData';

const CategorySchema1 = ({ index }: { index: number }) => {
  console.log('catalogStructureData[index]', catalogStructureData[index]);
  const createCard = (index: number) => {
    return catalogStructureData[index].subCategoriesNames.map((name, i) => (
      <div key={name}>{name}</div>
    ));
  };
  return (
    <CatalogGrid>
      {/* {catalogStructureData[index].subCategoriesNames.map((name, i) => (
        <div key={name}>{name}</div>
      ))} */}
      {createCard(index)}
    </CatalogGrid>
  );
};

export default CategorySchema1;
