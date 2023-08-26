/**Tailwind Styles**/
import { styles } from '@/styles';

const HeaderCellMulticolor = ({
  label,
  tailwindStyle,
  rowSpan,
  colSpan,
  textStyle,
  backgroundColor,
  paddingStyle,
}: {
  label: string;
  tailwindStyle?: string;
  rowSpan?: number;
  colSpan?: number;
  textStyle?: string;
  backgroundColor?: string;
  paddingStyle?: string;
}) => {
  /**JSX**/
  return (
    <th
      className={`
        ${tailwindStyle} ${
        paddingStyle ? paddingStyle : styles.tableStyles.cellPaddings
      }   ${textStyle ? textStyle : 'text-center text-xs text-light'}  ${
        styles.basicAnimation
      }`}
      rowSpan={rowSpan}
      colSpan={colSpan}
      // style={{ backgroundColor: backgroundColor }}
    >
      {label}
    </th>
  );
};

export default HeaderCellMulticolor;
