/**Tailwind Styles**/
import { styles } from '@/styles';

const HeaderCellMulticolor = ({
  label,
  tailwindStyle,
  rowSpan,
  colSpan,
  textStyles,
  backgroundColor,
}: {
  label: string;
  tailwindStyle?: string;
  rowSpan?: number;
  colSpan?: number;
  textStyles?: string;
  backgroundColor?: string;
}) => {
  /**JSX**/
  return (
    <th
      className={`
        ${tailwindStyle} ${styles.tableStyles.cellPaddings}   ${
        textStyles ? textStyles : 'uppercase text-center text-xs text-light'
      }  ${styles.basicAnimation}`}
      rowSpan={rowSpan}
      colSpan={colSpan}
      // style={{ backgroundColor: backgroundColor }}
    >
      {label}
    </th>
  );
};

export default HeaderCellMulticolor;
