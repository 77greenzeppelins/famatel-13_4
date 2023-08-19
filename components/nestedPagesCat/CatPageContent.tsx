'use client';
/**components**/
import CatalogCardsSection from './catalogCardsSection/CatalogCardsSection';

/**TS**/
interface Props extends DynamicCatIndex {
  path: string;
}

const CatPageContent = ({ categoryIndex, path }: Props) => {
  /*
  ___1.
  */
  const schemaSwitcher = (index: number) => {
    switch (index) {
      case 0:
      case 2:
      case 4:
      case 7:
      case 8:
      case 9:
        return <div className="w-full h-full fc bg-corpo">schema1</div>;
      case 1:
        return <div className="w-full h-full fc bg-grey">schema2</div>;
      case 3:
      case 5:
      case 6:
        return <div className="w-full h-full fc bg-greyTint1">schema2</div>;
      default:
        return <div className="w-full h-full bg-yellow-600 fc">no schema</div>;
    }
  };
  /*
  ___1. this approach has one aim ==> to narrow down the type of categoryIndex props
  */
  if (typeof categoryIndex === 'number') {
    return (
      <div className="flex flex-col text-greyShade2 text-medium wrapper-1">
        <CatalogCardsSection categoryIndex={categoryIndex} />
        {schemaSwitcher(categoryIndex)}
        <div className="">current path: {path}</div>
        <div className="">categoryIndex: {categoryIndex}</div>
      </div>
    );
  }

  /**JSX**/
  return null;
};

export default CatPageContent;
