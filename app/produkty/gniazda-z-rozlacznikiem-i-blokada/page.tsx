/**Components**/
import CatPageContent from '@/components/nestedPagesCat/CatPageContent';
/**Basic Data**/
import { catalogStructureData } from '@/data/catalogStructureData';

export default function GniazdaZRozlacznikiemIBlokadaPage() {
  /**JSX**/
  return (
    <CatPageContent categoryIndex={catalogStructureData[1].mainCategoryIndex} />
  );
}
