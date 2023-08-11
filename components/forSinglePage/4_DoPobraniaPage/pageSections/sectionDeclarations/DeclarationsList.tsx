'use client';
/**Components**/
import InViewAnimatedContent from '@/components/layout/containers/inView/InViewAnimatedContent';
import InViewContainer from '@/components/layout/containers/inView/InViewContainer';
import LargeHeader from '@/components/forMultiPage/headers/largeHeader/LargeHeader';
import DownloadableLink from '@/components/basic/links/downloadableLink/DownloadableLink';
/**Framer Motion Staff*/
import { motion } from 'framer-motion';
/**Basic Data**/
import { doPobraniaPageData } from '@/data/basicData';
import { doPobraniaPageText } from '@/data/textData';
/**Tailwind Styles**/
import { styles } from '@/styles';

const DeclarationsList = () => {
  /**JSX**/
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
          <LargeHeader
            ornamentStyle={styles.largeHeaderOrnamentStyle}
            textStyle={`${styles.largeHeaderText} `}
            text={doPobraniaPageText.declarations}
          />

          <ul
            data-component="CatalogChapters"
            className="flex flex-col w-full gap-y-2"
          >
            {doPobraniaPageData.declarationsData.map(
              ({ id, label, path, size }, i) => (
                <motion.li className="list-none" key={i}>
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
        </div>
      </InViewAnimatedContent>
    </InViewContainer>
  );
};

export default DeclarationsList;
