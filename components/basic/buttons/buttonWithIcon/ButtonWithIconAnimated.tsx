import React, { useState, MouseEvent } from 'react';
/**Basic Data**/
import { buttonsConfig } from '@/data/basicData';
/**TS**/
interface Props {
    children?: React.ReactNode;
    containerStyle?: string;
    stateSetter: React.Dispatch<React.SetStateAction<boolean>>;
    ariaLabel?: string;
}
/**---------------------------------**/
const ButtonWithIconAnimated = ({ children, stateSetter, containerStyle, ariaLabel }: Props) => {
    /**LocalState**/
    const [isDisabled, setIsDisabled] = useState(false);
    /**onClick Handler*/
    const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
        //___disable button
        setIsDisabled(true);
        //___do what you need to do...
        stateSetter((prev) => !prev);
        //___set timer...
        const timer = setTimeout(() => {
            setIsDisabled(false);
        }, buttonsConfig.isDisabledDuration); // disable button for 1 seconds
        //___clear timer...
        return () => {
            clearTimeout(timer);
        };
    };

    /**JSX**/
    return (
        <div className={containerStyle ? containerStyle : `w-10 h-10 border fc border-grey duration-300 ease-linear`}>
            <button
                disabled={isDisabled}
                aria-label={`przycisk ${ariaLabel}`}
                // aria-expanded={condition ? 'true' : 'false'}
                onClick={onClickHandler}
                className={`w-6 h-6 origin-center focus:outline-none disable focus-visible:ring focus-visible:ring-offset-2 ring-offset-dark focus-visible:ring-corpo  `}
            >
                {children}
            </button>
        </div>
    );
};

export default ButtonWithIconAnimated;

{
    /* <MagGlassIcon
          //   pathStyle={`${
          //     condition ? 'stroke-corpo ' : 'stroke-dark'
          //   } transition-all duration-[400] delay-100 ease-in`}
          pathStyle={
            styleCondition
              ? 'stroke-grey duration-300 ease-linear'
              : 'stroke-dark duration-300 ease-linear'
          }
          strokeWidth={1.5}
        /> */
}
