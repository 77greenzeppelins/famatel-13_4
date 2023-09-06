/**Components**/
import GniazdaPodwieszane from './cat4/GniazdaPodwieszane';
import RozlacznikiBezpieczenstwa from './cat6/RozlacznikiBezpieczenstwa';
import LadowarkiSamochodowe from './cat7/LadowarkiSamochodowe';
import CategorySchema1 from './schema1/CategorySchema1';
import CategorySchema2 from './schema2/CategorySchema2';

/**TS**/
interface Props {
  categoryIndex: number;
}

const CatPageContent = ({ categoryIndex }: Props) => {
  /*
  ___1.
  */
  const schemaSwitcher = (index: number) => {
    switch (index) {
      case 0:
      case 1:
      case 2:
      case 4:
      case 7:
      case 8:
      case 9:
        return <CategorySchema1 index={index} />;
      // case 1:
      //   return <CategorySchema2 index={index} />;
      case 3:
        return <GniazdaPodwieszane index={index} />;
      case 5:
        return <RozlacznikiBezpieczenstwa index={index} />;
      case 6:
        return <LadowarkiSamochodowe index={index} />;
      default:
        return <div className="w-full h-full bg-dark fc">...</div>;
    }
  };
  /*
  ___1. this approach has one aim ==> to narrow down the type of categoryIndex props
  */
  // if (typeof categoryIndex === 'number') {
  //   return (
  //     <div className="flex flex-col text-greyShade2 text-medium wrapper-1">
  //       {schemaSwitcher(categoryIndex)}
  //       <p className="text-medium">{categoryIndex}</p>
  //     </div>
  //   );
  // }

  /**JSX**/
  return (
    <div className="flex flex-col text-greyShade2 text-medium wrapper-1">
      {schemaSwitcher(categoryIndex)}
    </div>
  );
};

export default CatPageContent;
