import FooterLink from '@/components/basic/links/footerLink/FooterLink';
import { catalogStructureData } from '@/data/catalogStructureData';

const KategorieProduktow = () => {
  /*
  ___1. I need a new array that includes only two properties in each item of original array
  */
  const newArray = catalogStructureData.map(
    ({ mainCategoryName, mainCategoryPath }) => ({
      label: mainCategoryName,
      url: mainCategoryPath,
    })
  );
  /**JSX**/
  return (
    <nav className="w-full sm:w-[80%]">
      <ul className="flex flex-col gap-y-4">
        {newArray.map((item, i) => (
          <li key={i} className="relative flex-col overflow-hidden fc">
            <FooterLink {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default KategorieProduktow;
