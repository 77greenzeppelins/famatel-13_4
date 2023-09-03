import React from 'react';
/*
___1. should be used aw wrapper for Table Section that includes header and table
*/
const TableSectionWrapper = ({
  children,
  divStyle,
}: {
  children: React.ReactNode;
  divStyle?: string;
}) => {
  /**JSX**/
  return (
    <div
      data-component="TableSectionWrapper"
      className={divStyle ? divStyle : 'flex flex-col w-full gap-y-6'}
    >
      {children}
    </div>
  );
};

export default TableSectionWrapper;
