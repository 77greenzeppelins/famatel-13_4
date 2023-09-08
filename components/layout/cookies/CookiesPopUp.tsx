'use client';
import React, { useEffect, useState } from 'react';
import { GetServerSidePropsContext } from 'next';
/**Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
/**BasicData */
import { cookiesText } from '@/data/textData';

/**-----------------------------**/
const CookiesPopUp: React.FC = () => {
  /** */
  const [accepted, setAccepted] = useState(false);
  /**...WTF...**/
  const onClickHandler = () => {
    setAccepted(true);
    document.cookie = 'cookiesAccepted=true; path=/';
  };
  useEffect(() => {
    const cookiesAccepted = document.cookie.includes('cookiesAccepted=true');
    if (cookiesAccepted) {
      setAccepted(true);
    }
    // const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    // if (cookiesAccepted) {
    //   setAccepted(true);
    // }
    // console.log('accepted:', accepted);
  }, [accepted]);
  /**JSX**/
  return (
    <AnimatePresence>
      {accepted ? null : (
        <motion.aside
          data-component="Header__container"
          className={`fixed w-full bottom-0 left-0 right-0 fc min-h-[100px] z-[999] backdrop-blur-xl pb-[20px]`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 4 } }}
          exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.4 } }}
        >
          <div className="flex-col gap-4 fc xs:flex-row wrapper-1">
            <p className="font-bold p-small text-light">
              {cookiesText.popup}
              {/* &nbsp; */}
              {/* <LinkWithSpanAndIcon
                linkHref="/"
                uniqueKeyToAnimate={''}
                linkLabel={story.cookies.link}
                ariaLabel={'Link do strony: Cookies'}
                linkStyle=" flex gap-1 w-full h-full"
                iconStyle=" h-4 w-4 aspect-square stroke-light origin-center flex-shrink-0"
              /> */}
            </p>
            <button className="px-4 py-1 bg-corpo" onClick={onClickHandler}>
              {' '}
              <p className="font-bold p-small text-light">Akceptuję</p>{' '}
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default CookiesPopUp;

/*...*/
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookies = context.req.headers.cookie;

  // If cookies are already accepted, set the accepted state variable to true
  if (cookies && cookies.includes('cookiesAccepted=true')) {
    return {
      props: {
        cookiesAccepted: true,
      },
    };
  }

  // If cookies are not accepted, return an empty object
  return {
    props: {},
  };
  // const cookiesAccepted = context.req.cookies.cookiesAccepted;

  // // If cookies are already accepted, set the accepted state variable to true
  // if (cookiesAccepted === 'true') {
  //   return {
  //     props: {
  //       cookiesAccepted: true,
  //     },
  //   };
  // }

  // // If cookies are not accepted, return an empty object
  // return {
  //   props: {},
  // };
}
