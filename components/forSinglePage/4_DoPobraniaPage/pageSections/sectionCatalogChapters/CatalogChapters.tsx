'use client';
import { useState } from 'react';
/**Components**/
import InViewContainer from '@/components/layout/containers/inView/InViewContainer';
import InViewAnimatedContent from '@/components/layout/containers/inView/InViewAnimatedContent';
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import DownloadableLink from '@/components/basic/links/downloadableLink/DownloadableLink';
import ComponentsBasicSlider from '@/components/forMultiPage/sliders/componentsBasicSlider/ComponentsBasicSlider';
/**Framer Motion Staff**/
import { motion } from 'framer-motion';
/**Basic Data**/
import { doPobraniaPageData } from '@/data/basicData';
import { doPobraniaPageText } from '@/data/textData';
/**Tailwind Styles**/
import { styles } from '@/styles';

const CatalogChapters = () => {
  const [stateId, setStateId] = useState<string | null | undefined>('01');
  /**Handlers**/
  const handleHoverStart = (event: MouseEvent) => {
    const target = event.target as HTMLLIElement; // Cast the event.target property to HTMLDivElement
    const id = target.firstChild?.firstChild?.textContent;
    setStateId(id);
  };

  return (
    <InViewContainer
      animationDelay={2}
      outherContainerStyle="w-full"
      measuredElementStyle="relative "
      // topFactor={0.6}
      topFactor={0.3}
      bottomFactor={0.3}
    >
      <InViewAnimatedContent yFactor="" xFactor="" scaleFactor={0.95}>
        <div className="flex flex-col w-full gap-y-10 wrapper-1">
          <BasicHeader
            textStyle={`${styles.largeHeaderText} max-w-[10px]`}
            text={doPobraniaPageText.chaptersHeader}
          />
          <div className="flex gap-10 xxl:flex-row">
            <ul
              data-component="CatalogChapters"
              className="w-full lg:w-[50%]  flex flex-col gap-y-2"
            >
              {doPobraniaPageData.chaptersData.map(
                ({ id, label, path, size }, i) => (
                  <motion.li
                    onHoverStart={event => handleHoverStart(event)}
                    className="list-none"
                    key={i}
                  >
                    <DownloadableLink
                      id={id}
                      label={label}
                      path={path}
                      size={size}
                    />
                  </motion.li>
                )
              )}
            </ul>
            <div className="hidden lg:flex lg:w-[50%] h-auto">
              <ComponentsBasicSlider stateId={stateId} />
            </div>
          </div>
        </div>
      </InViewAnimatedContent>
    </InViewContainer>
  );
};

export default CatalogChapters;
