import { useState } from 'react';
import { usePathname } from 'next/navigation';

/**Basic Data**/
import { headerSpecButtons } from '@/data/textData';
import { buttonsConfig } from '@/data/basicData';

interface Props {
  children: React.ReactNode;
  onClickHandler: () => void;
  //   setIsOverlay: React.Dispatch<React.SetStateAction<boolean | null>>;
  //   setContentType: React.Dispatch<React.SetStateAction<string>>;
  buttonStyle?: string;
}

const ButtonWithIcon = ({
  children,
  onClickHandler,
  //   setIsOverlay,
  //   setContentType,
  buttonStyle,
}: Props) => {
  /**...**/
  const pathname = usePathname();
  //   const styleCondition = pathname.split('/').length > 2;

  /**LocalState**/
  const [isDisabled, setIsDisabled] = useState(false);
  /**onClick Handler*/
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    //___disable button
    setIsDisabled(true);
    //___do what you need to do...
    // setIsOverlay(prev => !prev);
    // setContentType(headerSpecButtons.dropDownMenu);
    onClickHandler();
    //___set timer...
    const timer = setTimeout(() => {
      setIsDisabled(false);
    }, buttonsConfig.isDisabledDuration); // disable button for 1 seconds
    //___clear timer...
    return () => {
      clearTimeout(timer);
    };
  };
  /*
  ___1. 
  */

  /*JSX*/
  return (
    <button
      disabled={isDisabled}
      aria-label={'przycisk'}
      // aria-expanded={snap.isProductBrowserOpened ? 'true' : 'false'}
      onClick={onClick}
      className={
        buttonStyle
          ? buttonStyle
          : `w-6 h-6 origin-center fc focus:outline-none disable focus-visible:ring focus-visible:ring-offset-2 ring-offset-dark focus-visible:ring-corpo`
      }
      //___focus-visible:ring-2 focus-visible:ring-blue-500
      //___focus-visible:ring focus-visible:ring-offset-2 ring-offset-dark
    >
      {children}
    </button>
  );
};

export default ButtonWithIcon;
