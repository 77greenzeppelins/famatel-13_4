import { FC, useState } from 'react';
import Image from 'next/image';

/**Components**/
import NavSection from './navSection/NavSection';
/**FramerMotion Staff**/
import { AnimatePresence, motion } from 'framer-motion';
/** */
interface Props {
  imageContent: ImageType_C;
  subCatSvg: IndexFileOfSvgTechItemsType | IndexFileOfSvgTechItemsVar2Type;
}

const SvgImageSwitcher = ({ imageContent, subCatSvg }: Props) => {
  /**localState__1: to follow slideIndex changes**/
  const [basicState, setBasicState] = useState(0);

  const CreateSvg = () => {
    const SvgComponent = subCatSvg.find(({ model, Component }) => {
      if (model === imageContent.model) {
        return Component;
      }
    })?.Component as FC<SvgTechComponent>;

    return <SvgComponent />;
  };

  /*
  ___1. it is likety that some images don't have svg equivalent
  ___2. it means that in some cases slides changes should be disabled ==> arrows in <NavSection> shouldn't be rendered
  ___3. svgStaff returns obj or undefined ==> then I'm going to apply double NOT operator (!!) to it ==> as a result we get boolean value;
  */
  const svgStaff = subCatSvg.find(({ model, Component }) => {
    if (model === imageContent.model) {
      return true;
    }
  });
  // console.log('svgStaff', svgStaff);
  // console.log('subCatSvg', subCatSvg);

  /**JSX**/
  return (
    <div
      data-component="SvgImageSwitcher__container"
      className="flex flex-col items-center w-full h-full gap-4"
    >
      <div className="w-full h-[40px] xl:max-w-[600px] ">
        <NavSection
          basicState={basicState}
          setBasicState={setBasicState}
          modelName={imageContent.model}
          showArrows={!!svgStaff}
        />
      </div>
      <div
        className="relative w-full h-full overflow-hidden "
        //___
      >
        {/* <AnimatePresence> */}
        {basicState ? (
          <motion.div
            key={basicState}
            className="w-full m-auto max-w-[640px] p-4"
            //className="container "
            // className="absolute inset-0 w-full m-auto max-w-[640px] p-4"
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.2, duration: 0.4 },
            }}
            exit={{
              opacity: 0,
              scale: 0.5,
              transition: { delay: 0, duration: 0.4 },
            }}
          >
            <div className="w-full p-4 bg-light">{CreateSvg()}</div>
          </motion.div>
        ) : (
          <motion.div
            key={basicState}
            className="w-full fc"
            // className="absolute top-0 bottom-0 left-0 right-0 "
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.2, duration: 0.4 },
            }}
            exit={{
              opacity: 0,
              scale: 0.5,
              transition: { delay: 0, duration: 0.4 },
            }}
          >
            <Image
              src={imageContent.path}
              alt={imageContent.alt}
              width={imageContent.width}
              height={imageContent.height}
              className="container max-w-[500px]"
            />
          </motion.div>
        )}
        {/* </AnimatePresence> */}

        {/* <SlidesSection imageData={imageData} basicState={basicState} /> */}
      </div>
    </div>
  );
};

export default SvgImageSwitcher;
