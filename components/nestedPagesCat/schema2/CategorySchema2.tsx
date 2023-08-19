'use client';
import CatalogCard from '@/components/forMultiPage/catalogs/allCards/catalogCard/CatalogCard';
/**Components**/
import CatalogGrid from '@/components/forMultiPage/catalogs/catalogGrid/CatalogGrid';
/**BasicData**/
import { catalogStructureData } from '@/data/catalogStructureData';

const CategorySchema2 = ({ index }: { index: number }) => {
  /**Data Destr...**/
  const { subCategoriesNames, subCategoriesPaths, subCategoriesImages } =
    catalogStructureData[index];

  /**Data Mapper**/
  const createCard = (index: number) => {
    return subCategoriesNames.map((name, i) => (
      <CatalogCard
        key={i}
        catIndex={i}
        catName={name}
        catPath={subCategoriesPaths[i]}
        catImage={subCategoriesImages[i]}
      />
    ));
  };

  /**JSX**/
  return (
    <div
      data-component="CategorySchema1"
      className="flex flex-col pt-20 gap-y-10"
    >
      <CatalogGrid>{createCard(index)}</CatalogGrid>
      <div className="fc h-[400px] w-full border border-greyShade2">
        {' '}
        some additional info
      </div>
    </div>
  );
};

export default CategorySchema2;
