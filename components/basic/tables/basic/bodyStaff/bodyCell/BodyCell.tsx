import { styles } from '@/styles';

const BodyCell = ({ label, colSpan }: { label: string; colSpan?: number }) => {
  return (
    <td
      className={`px-6 py-3 text-xs font-bold text-center bg-greyTint2 group-hover:bg-light ${styles.basicAnimation}`}
      colSpan={colSpan}
    >
      {label}
    </td>
  );
};

export default BodyCell;
