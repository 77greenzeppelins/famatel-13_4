import { styles } from '@/styles';

const BodyCell = ({ label }: { label: string }) => {
  return (
    <td
      className={`px-6 py-3 text-xs font-bold text-center border border-dark bg-greyTint2 group-hover:bg-light ${styles.basicAnimation}`}
    >
      {label}
    </td>
  );
};

export default BodyCell;
