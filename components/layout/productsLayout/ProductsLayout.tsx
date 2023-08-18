'use client';
// import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
/**Components**/
import AdvancedCatalogNavigation from '@/components/forMultiPage/navigations/catalogAdvancedNav/AdvancedCatalogNavigation';
import { someFakePath } from '@/data/routingData';

someFakePath;

const ProductsLayout = () => {
  // const [state, setState] = useState(0);
  // useEffect(() => {
  //   setState(prev => prev + 1);
  // }, []);
  // console.log('state:', state);
  /*
  ___1. get current path
  ___2. split path and count how many item the array has ==> first two items refers to space before initial "/" and "produkty" and we can ommit them ==> we are actually interested in items with index 2 & 3 that are categoryName and subCategoryName respectivelly; 
  ___3. value of of array.length allows to mount or dismount the whole component  
  */
  const pathname = usePathname();
  const pathSegments = pathname.split('/'); // exemple: ['', 'produkty', 'przemyslowe-wtyczki-i-gniazda', 'some-subCategory' , 'some-model']
  const mountingCondition = pathSegments.length > 2;
  //   console.log('pathSegments', pathSegments);
  const catalogLevel = pathSegments.slice(2); // strats from ['some-category', 'some-subCategory', 'some-model'] ==> min / max length  [1,3]
  /**JSX**/
  return mountingCondition ? (
    <div className="flex flex-col gap-y-6 w-full h-[400px] py-6 border-b border-b-greyShade2 wrapper-1">
      <AdvancedCatalogNavigation
        pathSegments={pathSegments}
        catalogLevel={catalogLevel}
      />
      <Link href={`${pathname}/wtyczki-i-gniazda-przenosne`}>
        go to subCat{' '}
      </Link>
      <Link href={`${pathname}/666`}>go to model </Link>
      <p>{someFakePath}</p>
    </div>
  ) : null;
};

export default ProductsLayout;
