/**Tailwind Styles**/
import { styles } from '@/styles';

const HeaderCell = ({
  label,
  tailwindStyle,
  paddingStyle,
  rowSpan,
  colSpan,
  textStyles,
  isTopHeader = true,
}: {
  label: string;
  tailwindStyle?: string;
  paddingStyle?: string;
  rowSpan?: number;
  colSpan?: number;
  textStyles?: string;
  isTopHeader?: boolean;
}) => {
  /**JSX**/
  return (
    <th
      className={`
        ${tailwindStyle} ${
        paddingStyle ? paddingStyle : styles.tableStyles.cellPaddings
      }   ${
        textStyles ? textStyles : 'uppercase text-center text-xs text-light'
      } bg-greyShade2 ${isTopHeader ? '' : 'hover:bg-corpo'}  ${
        styles.basicAnimation
      }`}
      rowSpan={rowSpan}
      colSpan={colSpan}
    >
      {label}
    </th>
  );
};

export default HeaderCell;
