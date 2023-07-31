import React from 'react';

const labelDefaultStyle =
  'p-small text-left text-grey font-bold group-hover:text-corpo group-hover:font-light duration-[0.3s] delay-[0.1s] ease-in';

/**TS**/
interface Props {
  labelStyle?: string;
}
/**------------------------------------------------**/
const CopyProtect = ({ labelStyle }: Props) => {
  return (
    <div className="flex gap-x-1">
      <p className={labelStyle}>&copy;</p>
      <p className={labelStyle}>2023. Famatel Polska</p>
    </div>
  );
};

export default CopyProtect;
