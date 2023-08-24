/**TS**/
interface Props {
  children: React.ReactNode;
  tableStyle?: string;
}

const TableWrapper = ({ children, tableStyle }: Props) => {
  /**JSX**/
  return (
    <div className="relative w-full pb-10 overflow-x-auto table-scrollbar">
      <table
        className={
          tableStyle
            ? tableStyle
            : 'border-separate border-spacing-[2px] table-fixed w-full'
        }
      >
        {children}
      </table>
    </div>
  );
};

export default TableWrapper;
