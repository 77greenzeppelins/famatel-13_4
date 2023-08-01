'use client';
/**Components**/
import DownloadableLink from '@/components/basic/links/downloadableLink/DownloadableLink';
/**Framer Motion Staff*/
import { motion } from 'framer-motion';
/**Basic Data**/
import { doPobraniaPageData } from '@/data/basicData';

const DeclarationsList = () => {
  /**JSX**/
  return (
    <ul
      data-component="CatalogChapters"
      className="flex flex-col w-full gap-y-2"
    >
      {doPobraniaPageData.declarationsData.map(
        ({ id, label, path, size }, i) => (
          <motion.li
            //   onHoverStart={event => handleHoverStart(event)}
            className="list-none"
            key={i}
          >
            <DownloadableLink id={id} label={label} path={path} size={size} />
          </motion.li>
        )
      )}
    </ul>
  );
};

export default DeclarationsList;
