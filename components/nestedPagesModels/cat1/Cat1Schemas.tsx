import React from 'react';
import SubCat1Schema from './subCat1/SubCat1Schema';

const Cat1Schemas = ({ catIndex, subCatIndex, modelIndex }: CatSchemaType) => {
  /***/
  const schemaSwitcher = (subCatIndex: number, modelIndex: number) => {
    switch (subCatIndex) {
      case 0:
        return (
          <SubCat1Schema subCatIndex={subCatIndex} modelIndex={modelIndex} />
        );
      // case 1:
      //   return <Cat2Schemas catIndex={index} />;
      // case 4:
      // case 7:
      // case 8:
      // case 9:
      //   return <CategorySchema1 index={index} />;
      // case 1:
      //   return <CategorySchema2 index={index} />;
      // case 3:
      //   return <GniazdaPodwieszane index={index} />;
      // case 5:
      //   return <RozlacznikiBezpieczenstwa index={index} />;
      // case 6:
      //   return <LadowarkiSamochodowe index={index} />;
      default:
        return <div className="w-full h-full bg-dark fc">...</div>;
    }
  };

  return (
    <div className="h-[50vh] bg-blue-500">
      <p>Cat1Schemas - catIndex - {catIndex}</p>
      {schemaSwitcher(subCatIndex, modelIndex)}
    </div>
  );
};

export default Cat1Schemas;
