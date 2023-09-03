/*
___1. should be used as wrapper if more then one table is rendered...
*/
const MultiTablesWrapper = ({
  children,
  divStyle,
}: {
  children: React.ReactNode;
  divStyle?: string;
}) => {
  /**JSX**/
  return (
    <div
      data-component="MultiTablesWrapper"
      className={
        divStyle
          ? divStyle
          : 'flex flex-col w-full gap-y-12 lg:gap-y-20 xxl:gap-y-24'
      }
    >
      {children}
    </div>
  );
};

export default MultiTablesWrapper;
