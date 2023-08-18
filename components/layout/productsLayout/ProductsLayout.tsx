'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ProductsLayout = () => {
  const [state, setState] = useState(0);
  useEffect(() => {
    setState(prev => prev + 1);
  }, []);

  /*
  ___1. get current path
  ___2. split path and check how many item the array has ==> firs two items refers to space before initial "/" and "produkty" ==> we are actually interested in items with index 2 & 3 that are categotyName and subCategoryName respectivelly;  
  */
  const pathname = usePathname();
  const pathSegments = pathname.split('/'); // exemple: ['', 'produkty', 'przemyslowe-wtyczki-i-gniazda', 'some-subCategory' , 'some-model']
  const mountingCondition = pathSegments.length > 2;
  //   console.log('pathSegments', pathSegments);
  const catalogLevel = pathSegments.slice(2); // strats from ['some-category', 'some-subCategory', 'some-model'] ==> min / max length  [1,3]
  /**JSX**/
  return mountingCondition ? (
    <div className="fc flex-col w-full h-[200px] border-b border-b-greyShade2">
      <p className="text-regular">
        {' '}
        ProductsLayout - Katalog - {state.toString()}
      </p>
      <p className="text-regular">{pathname}</p>
      <p className="text-regular">{pathSegments.length}</p>

      <Link href={`${pathname}/x`}>LINK</Link>
    </div>
  ) : null;
};

export default ProductsLayout;
