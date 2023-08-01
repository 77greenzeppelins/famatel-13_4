import React from 'react';
import CatalogChapters from './sectionCatalogChapters/CatalogChapters';
import DeclarationsList from './sectionDeclarations/DeclarationsList';
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import { styles } from '@/styles';
import { doPobraniaPageText } from '@/data/textData';

const PageSections = () => {
  return (
    <div className="flex flex-col w-full gap-y-20">
      <div className="flex flex-col w-full gap-y-10 wrapper-1">
        <BasicHeader
          textStyle={`${styles.largeHeaderText} max-w-[10px]`}
          text={doPobraniaPageText.chaptersHeader}
        />
        <CatalogChapters />{' '}
      </div>
      <div className="flex flex-col w-full gap-y-10 wrapper-1">
        <BasicHeader
          textStyle={`${styles.largeHeaderText} max-w-[10px]`}
          text={doPobraniaPageText.declarations}
        />
        <DeclarationsList />
      </div>
    </div>
  );
};

export default PageSections;
