import { styles } from '@/styles';

const HeaderCell = ({
  label,
  scope,
  customeStyle,
}: {
  label: string;
  scope?: 'row' | 'col';
  customeStyle?: string;
}) => {
  return (
    <th
      scope={scope ? scope : 'col'}
      className={`px-6 py-3 text-xs uppercase  text-light bg-greyShade2  group-hover:bg-corpo ${customeStyle} ${styles.basicAnimation} min-w-[100px]`}
    >
      {label}
    </th>
  );
};

export default HeaderCell;
