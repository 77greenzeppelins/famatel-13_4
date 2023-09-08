/**Components**/
// import MainWrapper from '@/components/forMultiPage/pageWrappers/MainWrapper/MainWrapper';
import NotaPrawnaContent from '@/components/forSinglePage/10_NotaPrawna/NotaPrawnaContent';
import { metadataText } from '@/data/textData';

export const metadata = {
  title: { absolute: metadataText.notaPrawnaPage.title },
  description: metadataText.notaPrawnaPage.desc,
};

export default function NotaPrawnaPage() {
  /**JSX**/
  return (
    // <MainWrapper>
    <NotaPrawnaContent />
    // </MainWrapper>
  );
}
