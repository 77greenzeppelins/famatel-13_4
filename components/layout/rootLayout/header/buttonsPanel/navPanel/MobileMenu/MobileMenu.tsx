import React, { useState } from 'react';
/**Components**/
import ButtonWithIconAnimated from '@/components/basic/buttons/buttonWithIcon/ButtonWithIconAnimated';
import HamburgerIcon from '@/components/SVG/icons/heroIcons/HamburgerIcon';
import MobileContactPanel from './mobileContactPanel/MobileContactPanel';
import MobileMenuContent from './mobileMenuContent/MobileMenuContent';
import XMarkIcon from '@/components/SVG/icons/heroIcons/XMarkIcon';
import { usePathname } from 'next/navigation';

interface Props {
    mobileMenuState: boolean;
    mobileMenuSetter: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ mobileMenuState, mobileMenuSetter }: Props) => {
    /*
  __1. this condition is crucial as we have "colorTheme" change when url reaches products categories; 
  */
    const pathname = usePathname();
    const styleCondition = pathname.split('/').length > 2;

    // const [promptState, setPromptState] = useState(false);

    /**JSX**/
    return (
        <>
            <div className="flex justify-end h-full w-[60px]">
                <ButtonWithIconAnimated stateSetter={mobileMenuSetter} containerStyle="w-10 h-10 lg:hidden flex items-center">
                    {mobileMenuState ? (
                        <XMarkIcon pathStyle={styleCondition ? 'stroke-grey duration-300 ease-linear' : 'stroke-dark duration-300 ease-linear'} />
                    ) : (
                        <HamburgerIcon pathStyle={styleCondition ? 'w-6 h-6 stroke-grey duration-300 ease-linear' : 'w-6 h-6 stroke-dark duration-300 ease-linear'} />
                    )}
                </ButtonWithIconAnimated>
            </div>
            <MobileMenuContent mobileMenuState={mobileMenuState} />
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
