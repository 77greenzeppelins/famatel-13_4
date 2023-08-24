import React from 'react';
import ModelType0 from './model1/ModelType1';

const SubCat1Schema = ({ subCatIndex, modelIndex }: SubCatSchemaType) => {
  /***/
  const schemaSwitcher = (modelIndex: number) => {
    switch (modelIndex) {
      case 0:
        return <ModelType0 modelIndex={modelIndex} />;
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
    <div>
      <p>SubCat1Schema - catIndex - {subCatIndex}</p>
      {schemaSwitcher(modelIndex)}
    </div>
  );
};

export default SubCat1Schema;
