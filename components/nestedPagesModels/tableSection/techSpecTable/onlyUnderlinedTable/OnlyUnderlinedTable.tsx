import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import { allHeaders } from '@/data/textData';
import React from 'react';

const OnlyUnderlinedTable = (data: WtyczkaGniazdoType1TechDataType) => {
  const features = data;
  return (
    <div className="flex flex-col w-full gap-y-16">
      <div className="flex flex-col w-full gap-y-6">
        <BasicHeader
          hasVerticalOrnament={false}
          hasBox={true}
          text={allHeaders.tableHeaders[0]}
        />
        <p> OnlyUnderlinedTable</p>
      </div>{' '}
    </div>
  );
};

export default OnlyUnderlinedTable;
