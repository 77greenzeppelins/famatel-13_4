import { styles } from '@/styles';
/**TS**/
interface Props {
  label: string;
  scope?: 'row' | 'col';
  rowSpan?: number;
  colSpan?: number;
  customeStyle?: string;
}

const HeaderCell = ({ ...props }: Props) => {
  /**JSX**/
  return (
    <th
      scope={props.scope ? props.scope : 'col'}
      rowSpan={props.rowSpan}
      colSpan={props.colSpan}
      className={`w-[300px] bg-greyShade2  group-hover:bg-corpo ${
        props.customeStyle
          ? props.customeStyle
          : `${styles.tableStyles.cellPaddings} text-xs uppercase text-light`
      } ${styles.basicAnimation} `}
    >
      {props.label}
    </th>
  );
};

export default HeaderCell;
