import { useRouter } from 'next/router';
import React, { memo, useEffect } from 'react';

/**Components**/
import BottomSection from './bottomSection/BottomSection';
// import GoToTopButton from './goToTopButton/GoToTopButton';
// import FooterBottomPart from './_sectionBottom/FooterBottomPart';
// import FooterTopPart from './_sectionTop/FooterTopPart';

/**HardCoded Staff*/
// const headerTextStyle =
//   'header-link-label text-dark font-bold align-middle leading-none';
// const ornamentColor = 'border-light';
// const labelStyle =
//   'p-small text-left text-dark font-bold group-hover:text-light group-hover:font-light duration-[0.3s] delay-[0.1s] ease-in';
// const iconStyle =
//   'h-4 w-4 text-light group-hover:animate-pulse ease-in duration-300 delay-100';
// const iconStyleTrans =
//   'h-4 w-4 text-light group-hover:text-dark group-hover:translate-x-1 ease-in duration-300  origin-center';

const Footer = () => {
  // const router = useRouter();
  // useEffect(() => {
  //   console.log('Footer rendered or re-rendered');
  //   // count < 1 && console.log('count:', count);
  // });
  // console.log('router.pathname', router.pathname);
  // console.log('router.route', router.route);
  // console.log('router.asPath', router.asPath);

  // if(router.pathname)

  /**JSX**/
  return (
    <footer className="flex flex-col w-full pt-20 ">
      <div className="w-full pb-2 fc">{/* <GoToTopButton /> */}</div>
      {/* <FooterTopPart
        headerTextStyle={headerTextStyle}
        ornamentColor={ornamentColor}
        labelStyle={labelStyle}
      /> */}
      {/* <div className="fc w-full h-[40vh] p-v-large text-dark bg-yellow-600">
        {router.pathname}
      </div> */}
      <BottomSection />
    </footer>
  );
};

export default Footer;
