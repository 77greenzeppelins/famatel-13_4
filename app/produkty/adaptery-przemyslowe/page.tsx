/**Components**/
import CatPageContent from '@/components/nestedPagesCat/CatPageContent';
/**Basic Data**/
import { mainCategoriesPath } from '@/data/routingData';

export default function AdapteryPrzemyslowePage() {
  /**JSX**/
  return <CatPageContent categoryIndex={2} path={mainCategoriesPath[2]} />;
}