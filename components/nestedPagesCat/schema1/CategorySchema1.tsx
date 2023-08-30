/**Components**/
import CatalogGrid from '@/components/forMultiPage/catalogs/catalogGrid/CatalogGrid';
import CatalogCardWithSubCat from '@/components/forMultiPage/catalogs/allCards/cardWithSubCat/CatalogCardWithSubCat';
/**BasicData**/
import { catalogStructureData } from '@/data/catalogStructureData';

const CategorySchema1 = ({ index }: { index: number }) => {
  /**Data Destr...**/
  const { subCategoriesNames, subCategoriesPaths, subCategoriesImages } =
    catalogStructureData[index];

  /**Data Mapper**/
  const createCard = () => {
    return subCategoriesNames.map((name, i) => (
      <CatalogCardWithSubCat
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
    <div data-component="CategorySchema1" className="pt-20">
      <CatalogGrid>{createCard()}</CatalogGrid>
    </div>
  );
};

export default CategorySchema1;
