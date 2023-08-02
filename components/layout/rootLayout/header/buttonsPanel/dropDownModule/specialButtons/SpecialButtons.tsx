'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
/**Components**/
import SearchEngineButton from '@/components/basic/buttons/searchEngineButton/SearchEngineButton';
import DropDownMenuButton from '@/components/basic/buttons/dropDownMenuButton/DropDownMenuButton';
import DropDownCategoriesCatalog from '@/components/forMultiPage/catalogs/dropDownCategorier/DropDownCategoriesCatalog';
import ProductSearchEngine from '@/components/forMultiPage/searchEngines/productSearchEngine/ProductSearchEngine';
/**Framer Motion**/
import { motion } from 'framer-motion';
/**Tailwind Staff**/
import { styles } from '@/styles';

const SpecialButtons = () => {
  const [isOverlay, setIsOverlay] = useState<null | boolean>(false);
  const [contentType, setContentType] = useState<string>('');

  const createOverlay = () => {
    return isOverlay ? (
      <div
        className={`fc left-0 right-0 ${styles.fixedOverlayOffset} bottom-0 fixed bg-dark opacity-100`}
      >
        {contentType === 'menu' ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full h-full bg-black fc"
          >
            <DropDownCategoriesCatalog />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full h-full fc "
          >
            <ProductSearchEngine />
          </motion.div>
        )}
      </div>
    ) : null;
  };

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

      {createOverlay()}
    </>
  );
};

export default SpecialButtons;
