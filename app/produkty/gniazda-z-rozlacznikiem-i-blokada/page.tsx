/**Components**/
import CatPageContent from '@/components/nestedPagesCat/CatPageContent';
/**Basic Data**/
import { mainCategoriesPath } from '@/data/routingData';

export default function GniazdaZRozlacznikiemIBlokadaPage() {
  /**JSX**/
  return <CatPageContent categoryIndex={1} path={mainCategoriesPath[1]} />;
}
