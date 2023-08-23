import { styles } from '@/styles';

const BodyCell = ({
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
        ${tailwindStyle} ${styles.tableStyles.cellPaddings} text-center text-xs text-dark  bg-greyTint2 hover:bg-greyShade1 hover:text-light ${styles.basicAnimation}`}
      rowSpan={rowSpan}
      colSpan={colSpan}
    >
      {label}
    </th>
  );
};

export default BodyCell;
