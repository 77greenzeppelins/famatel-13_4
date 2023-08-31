import React from 'react';

const ModelPageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col w-full fc">{children}</div>;
};

export default ModelPageWrapper;
