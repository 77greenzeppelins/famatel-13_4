import React from 'react';

interface Props {
  children: React.ReactNode;
}

const MainWrapper = ({ children }: Props) => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen ">
      {children}
    </main>
  );
};

export default MainWrapper;
