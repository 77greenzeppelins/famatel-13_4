import React, { useState } from 'react';
/**Components**/
import ButtonWithIconAnimated from '@/components/basic/buttons/buttonWithIcon/ButtonWithIconAnimated';
import HamburgerIcon from '@/components/SVG/icons/heroIcons/HamburgerIcon';
import { XMarkIcon } from '@heroicons/react/24/solid';
import MobileContactPanel from './mobileContactPanel/MobileContactPanel';

interface Props {
  mobileMenuState: boolean;
  mobileMenuSetter: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ mobileMenuState, mobileMenuSetter }: Props) => {
  const [promptState, setPromptState] = useState(false);

  /**JSX**/
  return (
    <>
      <div className="flex justify-end h-full w-[60px]">
        <ButtonWithIconAnimated
          stateSetter={mobileMenuSetter}
          containerStyle="w-10 h-10 lg:hidden flex items-center"
        >
          {mobileMenuState ? <XMarkIcon /> : <HamburgerIcon />}
        </ButtonWithIconAnimated>
      </div>
      <div
        className={`top-[53px] bottom-0 right-0 left-0 fixed bg-dark lg:hidden ${
          mobileMenuState ? 'flex' : 'hidden'
        }`}
      ></div>
      <MobileContactPanel
        // promptState={promptState}
        // setPromptState={setPromptState}
        isMobileMenuOpen={mobileMenuState}
        maxW={500}
        minH={500}
      />
      {/* <div
        className={`fixed fc bottom-0 left-0 right-0 top-0 z-[551] bg-grey wrapper-1`}
      >
        666
      </div> */}
    </>
  );
};

export default MobileMenu;
