'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
/**Components**/
import SearchEngineButton from '@/components/basic/buttons/searchEngineButton/SearchEngineButton';
import DropDownMenuButton from '@/components/basic/buttons/dropDownMenuButton/DropDownMenuButton';
import DropDownPanel from './dropDownPanel/DropDownPanel';

const DropDownModule = () => {
  const [isOverlay, setIsOverlay] = useState<null | boolean>(false);
  const [contentType, setContentType] = useState<string>('');

  /**It allows to close dropdownMenu when url changes**/
  const pathname = usePathname();
  useEffect(() => {
    return () => {
      setIsOverlay(false);
    };
  }, [pathname]);

  /**JSX**/
  return (
    <>
      <div className="flex justify-between items-center w-[100px] h-[50px]">
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
      </div>
      <DropDownPanel isOverlay={isOverlay} contentType={contentType} />
    </>
  );
};

export default DropDownModule;
