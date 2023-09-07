import React from 'react';
/**Components**/
import DirectPhoneGK from '@/components/basic/links/dirContactsLinks/DirectPhoneGK';
import DirectMailGK from '@/components/basic/links/dirContactsLinks/DirectMailGK';
import RoadPrompt from './roadPrompt/RoadPrompt';
/**Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
/**Hook Staff*/
import useWindowSize from '@/lib/hooks/useWindowSize';

/**Basic Data**/
// import { linksToInstantContactData } from '../../../../data/_data';

/**-------------------------------------------------------**/
const MobileContactPanel: React.FunctionComponent<{
  //   roadPrompt: boolean;
  //   setRoadPrompt: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileMenuOpen: boolean;
  maxW: number;
  minH: number;
}> = ({ isMobileMenuOpen, maxW, minH }) => {
  /**Hook Section**/
  const { width, height } = useWindowSize();
  /**Mounting Condition**/
  const mountingCondition = isMobileMenuOpen && width < maxW && height > minH;

  // useEffect(() => {
  //   mountingCondition && console.log('.............MobileContactPanel');
  // }, [isMobileMenuOpen]);

  /**JSX**/
  return (
    <AnimatePresence>
      {mountingCondition && (
        <motion.div
          datat-component="MobileContactPanel__container"
          key={isMobileMenuOpen.toString()}
          className={`fixed fc bottom-0 left-0 right-0 h-[80px] z-[550] bg-dark wrapper-1`}
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          <motion.div
            className="w-full h-full border-t border-greyShade2"
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0, y: '100%', transition: { duration: 0.4 } }}
          >
            <ul className="w-full h-full grid grid-cols-[3fr_5fr_3fr] gap-[0.125rem]">
              <li className="fc">
                <DirectPhoneGK
                  hasLabel={false}
                  aStyle={'fc w-14 h-14 border border-greyShade2'}
                  iconStyle={'w-6 h-6 fill-grey'}
                />
              </li>
              <li className="fc">{/* <RoadPrompt /> */}</li>
              <li className="fc ">
                <DirectMailGK
                  hasLabel={false}
                  aStyle={'fc w-14 h-14 border border-greyShade2'}
                  iconStyle={'w-6 h-6 fill-grey'}
                />
              </li>
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileContactPanel;
