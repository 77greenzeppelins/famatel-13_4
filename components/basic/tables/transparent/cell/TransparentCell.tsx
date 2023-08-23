import { styles } from '@/styles';
import React from 'react';

const TransparentCell = ({
  label,
  cellIndex,
}: {
  label: string;
  cellIndex: number;
}) => {
  return (
    <td
      className={`pt-6 text-xs border-b group-hover:text-light text-grey border-greyShade1 group-hover:border-light ${
        styles.basicAnimation
      } ${cellIndex === 0 ? 'min-w-[200px] ' : 'min-w-[200px] text-center'}`}
    >
      {label}
    </td>
  );
};

export default TransparentCell;
