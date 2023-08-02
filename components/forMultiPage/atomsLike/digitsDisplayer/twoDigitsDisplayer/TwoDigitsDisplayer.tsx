import React from 'react';
/**Hardcoded Data**/
const containerDefaultStyle =
  'fc xs:border-r border-dark w-full max-w-[30px] md:max-w-[50px] h-full p-[0.25rem]  group-hover:border-light ease-in duration-300';

/**TS**/
interface Props {
  index: number;
  textStyle?: string;
  containerStyle?: string;
}

const TwoDigitsDisplayer = ({ index, containerStyle, textStyle }: Props) => {
  /**JSX**/
  return (
    <div
      data-component="CardCounter__container"
      className={containerStyle ? containerStyle : containerDefaultStyle}
    >
      <p className={textStyle}>
        {index + 1 < 10 ? `0${index + 1}` : `${index + 1}`}
      </p>
    </div>
  );
};

export default TwoDigitsDisplayer;
