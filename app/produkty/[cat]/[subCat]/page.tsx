/**Components**/
// import MainWrapper from '@/components/forMultiPage/pageWrappers/MainWrapper/MainWrapper';

interface Props {
  params: { subCat: string };
}

export default function CategoryPage({ params }: Props) {
  return (
    // <MainWrapper>
    <div className="w-full min-h-screen fc ">
      current category: {params.subCat}
    </div>
    // </MainWrapper>
  );
}
