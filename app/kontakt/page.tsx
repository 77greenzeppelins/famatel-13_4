/**Components**/
// import MainWrapper from '@/components/forMultiPage/pageWrappers/MainWrapper/MainWrapper';
import KontaktPageContent from '@/components/forSinglePage/5_KontaktPage/KontaktPageContent';
import { metadataText } from '@/data/textData';

export const metadata = {
  title: metadataText.contactPage.title,
  description: metadataText.contactPage.desc,
};

export default function KontaktPage() {
  return (
    // <MainWrapper>
    <KontaktPageContent />
    // </MainWrapper>
  );
}
