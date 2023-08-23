import { styles } from '@/styles';

const HeaderCell = ({
  label,
  tailwindStyle,
  rowSpan,
  colSpan,
}: {
  label: string;
  tailwindStyle?: string;
  rowSpan?: number;
  colSpan?: number;
}) => {
  return (
    <th
      className={`
        ${tailwindStyle} ${styles.tableStyles.cellPaddings} text-center text-xs text-light uppercase bg-greyShade2 group-hover:bg-corpo ${styles.basicAnimation}`}
      rowSpan={rowSpan}
      colSpan={colSpan}
    >
      {label}
    </th>
  );
};

export default HeaderCell;
