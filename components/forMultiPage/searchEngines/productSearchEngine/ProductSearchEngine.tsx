import React, { useEffect, useState } from 'react';
/**Components**/
import ErrorDisplayer from './errorDisplayer/ErrorDisplayer';
import ResponseDisplayer from './responseDisplayer/ResponseDisplayer';
/**Formik Staff**/
import { Formik, FormikHelpers } from 'formik';
/**Validation Staff**/
import * as Yup from 'yup';
/**Utils*/
import {
  findUrlByModel,
  findDeclarationByModel,
} from './utils/productBrowserUtils';

/**Basic Data**/
import { productSearchEngine } from '@/data/textData';
// import { story } from '../../../../data/_data';
// import { allProductsForBrowser } from './productBrowser_data';
// import { allDeclarations } from '../../../pagesComponents/doPobrania/sectionDeclarations/declarations/declarationList_data';

/**HardCoded Staff**/
const numMinLength = 4;
const numMaxLength = 11;
const inputMaxLength = 12;

/**TS**/
interface MyFormValues {
  model: string;
}

const ProductSearchEngine = () => {
  return (
    <div className="w-full h-full pointer-events-auto fc bg-zinc-700">
      {/* <ProductBrowser /> */}
      {/* <ProductBrowserByFormik /> */}
    </div>
  );
};

export default ProductSearchEngine;
