/**TS**/
interface Props {
  children: React.ReactNode;
  wrapperStyle?: string;
  tableStyle?: string;
}

const TableWrapper = ({ children, tableStyle, wrapperStyle }: Props) => {
  /**JSX**/
  return (
    <div
      className={
        wrapperStyle
          ? wrapperStyle
          : 'relative w-full overflow-x-auto table-scrollbar pb-6'
      }
    >
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
