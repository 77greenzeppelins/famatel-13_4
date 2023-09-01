import React from 'react';
/*
___1. should be used aw wrapper for Table Section that includes header and table
*/
const TableSectionWrapper = ({ children }: { children: React.ReactNode }) => {
  /**JSX**/
  return (
    <div className="flex flex-col w-full gap-y-16">
      <div className="flex flex-col w-full gap-y-6">{children}</div>{' '}
    </div>
  );
};

export default TableSectionWrapper;
