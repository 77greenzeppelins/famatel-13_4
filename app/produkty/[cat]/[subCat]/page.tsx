/**Components**/
// import MainWrapper from '@/components/forMultiPage/pageWrappers/MainWrapper/MainWrapper';

/*
export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}


*/
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
