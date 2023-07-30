import React from 'react';
/**Components**/
import InViewContainer from '@/components/layout/containers/inView/InViewContainer';
import InViewAnimatedContent from '@/components/layout/containers/inView/InViewAnimatedContent';

const Contacts = () => {
  /**JSX**/
  return (
    <div className="relative flex flex-col gap-y-1">
      <InViewContainer
        animationDelay={2}
        outherContainerStyle="w-full"
        measuredElementStyle="relative "
        // topFactor={0.6}
        topFactor={0.3}
        bottomFactor={0.3}
      >
        <InViewAnimatedContent>
          {/* <FadingHeader label={'Kontakt'} /> */}
          <address className="not-italic">
            <ul className="flex flex-col gap-y-5 ">
              {/* <li>
                <DirectPhoneGK
                  aStyle={aStyle}
                  iconStyle={iconsStyle}
                  labelStyle={labelStyle}
                />
              </li>

              <li>
                <DirectMailB
                  aStyle={aStyle}
                  iconStyle={iconsStyle}
                  labelStyle={labelStyle}
                />
              </li> */}

              {/* <div>
                <DirectMailGK
                  aStyle={aStyle}
                  iconStyle={iconsStyle}
                  labelStyle={labelStyle}
                />
              </div> */}
            </ul>
          </address>
        </InViewAnimatedContent>
      </InViewContainer>

      {/* <OverlayWithGradient
        initial={{ x: '-50%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 3, delay: 0.6 }}
      /> */}
    </div>
  );
};

export default Contacts;
