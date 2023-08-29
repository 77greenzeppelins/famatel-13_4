/**Components**/
import CatPageContent from '@/components/nestedPagesCat/CatPageContent';
/**Basic Data**/
import { mainCategoriesPath } from '@/data/routingData';

export default function RozlacznikiBezpieczenstwaPage() {
  /**JSX**/
  return <CatPageContent categoryIndex={5} path={mainCategoriesPath[5]} />;
}
