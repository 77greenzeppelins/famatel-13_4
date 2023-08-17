/**Components**/
// import MainWrapper from '@/components/forMultiPage/pageWrappers/MainWrapper/MainWrapper';

interface Props {
  params: { cat: string };
}

export default function CategoryPage({ params }: Props) {
  return (
    // <MainWrapper>
    <div className="w-full min-h-screen fc ">
      current category: {params.cat}
    </div>
    // </MainWrapper>
  );
}
