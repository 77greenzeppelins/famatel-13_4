import React from 'react';
/*
___1. should be used aw wrapper for Table Section that includes header and table
*/
const TableSectionWrapper = ({
  children,
  divStyle,
  forTransparentTable = true,
}: {
  children: React.ReactNode;
  divStyle?: string;
  forTransparentTable?: boolean;
}) => {
  /**JSX**/
  return (
    <div
      data-component="TableSectionWrapper"
      className={
        divStyle
          ? divStyle
          : forTransparentTable
          ? 'flex flex-col w-full gap-y-6'
          : 'flex flex-col w-full'
      }
    >
      {children}
    </div>
  );
};

export default TableSectionWrapper;
