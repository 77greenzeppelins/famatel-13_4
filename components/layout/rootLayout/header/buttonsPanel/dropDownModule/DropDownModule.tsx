'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
/**Components**/
import SearchEngineButton from '@/components/basic/buttons/searchEngineButton/SearchEngineButton';
import DropDownMenuButton from '@/components/basic/buttons/dropDownMenuButton/DropDownMenuButton';
import DropDownPanel from './dropDownPanel/DropDownPanel';

/**TS**/
interface Props {
  mobileMenuState: boolean;
}

const DropDownModule = ({ mobileMenuState }: Props) => {
  const [isOverlay, setIsOverlay] = useState<null | boolean>(false);
  const [contentType, setContentType] = useState<string>('');

  /**It allows to close dropDownMenu when url changes**/
  const pathname = usePathname();
  useEffect(() => {
    return () => {
      setIsOverlay(false);
    };
  }, [pathname]);

  /**JSX**/
  return (
    <>
      <div className="relative flex justify-between items-center w-[100px] h-[50px]">
        <SearchEngineButton
          setIsOverlay={setIsOverlay}
          setContentType={setContentType}
          contentType={contentType}
          isOverlay={isOverlay}
        />
        <DropDownMenuButton
          setIsOverlay={setIsOverlay}
          setContentType={setContentType}
          contentType={contentType}
          isOverlay={isOverlay}
        />
        <div
          className={`absolute lg:hidden ${
            mobileMenuState
              ? 'scale-100 opacity-100 duration-300 ease-in origin-bottom'
              : 'scale-0 opacity-0 duration-300 ease-in origin-top'
          } inset-0 bg-dark`}
        />
      </div>
      <DropDownPanel isOverlay={isOverlay} contentType={contentType} />
    </>
  );
};

export default DropDownModule;
