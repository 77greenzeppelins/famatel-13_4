import { useRouter } from 'next/router';
import React, { memo, useEffect } from 'react';

/**Components**/
import BottomSection from './bottomSection/BottomSection';
import TopSection from './topSection/TopSection';
// import GoToTopButton from './goToTopButton/GoToTopButton';

const Footer = () => {
  /**JSX**/
  return (
    <footer className="flex flex-col w-full pt-20 ">
      <div className="w-full pb-2 fc">{/* <GoToTopButton /> */}</div>
      <TopSection />
      {/* <div className="fc w-full h-[40vh] p-v-large text-dark bg-yellow-600">
        {router.pathname}
      </div> */}
      <BottomSection />
    </footer>
  );
};

export default Footer;
