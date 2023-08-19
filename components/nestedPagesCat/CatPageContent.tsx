'use client';

interface Props {
  categoryIndex: number | false | undefined;
  path: string;
}
const CatPageContent = ({ categoryIndex, path }: Props) => {
  console.log('...path:', path);
  console.log('...categoryIndex:', categoryIndex);

  return (
    <div className="flex flex-col text-greyShade2 text-medium wrapper-1">
      <div className="">current path: {path}</div>
      <div className="">categoryIndex: {categoryIndex}</div>
    </div>
  );
};

export default CatPageContent;
