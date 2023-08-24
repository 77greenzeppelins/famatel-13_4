/**Tailwind Styles**/
import { styles } from '@/styles';

const HeaderCell = ({
  label,
  tailwindStyle,
  rowSpan,
  colSpan,
  textStyles,
  isTopHeader = true,
}: {
  label: string;
  tailwindStyle?: string;
  rowSpan?: number;
  colSpan?: number;
  textStyles?: string;
  isTopHeader?: boolean;
}) => {
  /**JSX**/
  return (
    <th
      className={`
        ${tailwindStyle} ${styles.tableStyles.cellPaddings}   ${
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
