import React from 'react';
import CatalogChapters from './sectionCatalogChapters/CatalogChapters';
import DeclarationsList from './sectionDeclarations/DeclarationsList';

const PageSections = () => {
  return (
    <div className="flex-col justify-between w-full fc">
      <div className="w-full wrapper-1">
        <CatalogChapters />{' '}
      </div>
      <div className="w-full wrapper-1">
        {' '}
        <DeclarationsList />{' '}
      </div>
    </div>
  );
};

export default PageSections;
