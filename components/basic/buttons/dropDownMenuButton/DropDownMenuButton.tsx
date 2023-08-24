import { useState } from 'react';
import { usePathname } from 'next/navigation';
/**Components**/
import ListIcon from '@/components/SVG/icons/heroIcons/ListIcon';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
/**Basic Data**/
import { headerSpecButtons } from '@/data/textData';
import { buttonsConfig } from '@/data/basicData';

/**TS**/
interface Props {
  setIsOverlay: React.Dispatch<React.SetStateAction<boolean | null>>;
  setContentType: React.Dispatch<React.SetStateAction<string>>;
  contentType: string;
  isOverlay: null | boolean;
}

const DropDownMenuButton = ({
  setIsOverlay,
  setContentType,
  contentType,
  isOverlay,
}: Props) => {
  /**...**/
  const pathname = usePathname();
  const styleCondition = pathname.split('/').length > 2;

  /**LocalState**/
  const [isDisabled, setIsDisabled] = useState(false);
  /**onClick Handler*/
  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    //___disable button
    setIsDisabled(true);
    //___do what you need to do...
    setIsOverlay(prev => !prev);
    setContentType(headerSpecButtons.dropDownMenu);
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
  const condition = contentType === headerSpecButtons.dropDownMenu && isOverlay;
  const conditionDisable =
    contentType !== headerSpecButtons.dropDownMenu && isOverlay;

  /*JSX*/
  return (
    <div
      className={`w-10 h-10 ${
        condition
          ? 'border fc border-corpo duration-300 ease-linear'
          : styleCondition
          ? 'border fc border-dark duration-300 ease-linear'
          : 'border fc border-grey duration-300 ease-linear'
      } `}
      //___transition-all duration-[300] delay-100 ease-in
    >
      <motion.button
        disabled={isDisabled}
        aria-label={'przycisk'}
        // aria-expanded={snap.isProductBrowserOpened ? 'true' : 'false'}
        onClick={onClickHandler}
        className={`w-6 h-6 ${
          conditionDisable ? 'pointer-events-none ' : 'pointer-events-auto'
        } origin-center fc focus:outline-none disable focus-visible:ring focus-visible:ring-offset-2 ring-offset-dark focus-visible:ring-corpo`}
        //___focus-visible:ring-2 focus-visible:ring-blue-500
        //___focus-visible:ring focus-visible:ring-offset-2 ring-offset-dark
        animate={{
          //   rotateY: snap.isProductBrowserOpened ? 180 : 0,
          transition: { duration: 0.6, delay: 0.1, ease: 'easeOut' },
        }}
      >
        <ListIcon
          //   pathStyle={`${
          //     condition ? 'stroke-corpo ' : 'stroke-dark'
          //   } transition-all duration-[400] delay-100 ease-in`}
          pathStyle={
            styleCondition
              ? 'stroke-grey duration-300 ease-linear'
              : 'stroke-dark duration-300 ease-linear'
          }
          strokeWidth={1.5}
        />
      </motion.button>
    </div>
  );
};

export default DropDownMenuButton;
