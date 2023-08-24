import React from 'react';

const Cat1Schemas = ({ catIndex, subCatIndex, modelIndexd }: catSchemaType) => {
  return (
    <div className="h-[50vh] bg-blue-500">
      <p>Cat1Schemas - {catIndex}</p>
      <p>Cat1Schemas - {subCatIndex}</p>
      <p>Cat1Schemas - {modelIndexd}</p>
    </div>
  );
};

export default Cat1Schemas;
