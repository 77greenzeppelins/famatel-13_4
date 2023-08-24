import React from 'react';

/**TS**/
interface Props {
  children: React.ReactNode;
}
const ModelWrapper = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default ModelWrapper;
