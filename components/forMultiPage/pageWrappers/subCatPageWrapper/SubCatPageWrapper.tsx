import React from 'react';

const SubCatPageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col w-full fc">{children}</div>;
};

export default SubCatPageWrapper;
