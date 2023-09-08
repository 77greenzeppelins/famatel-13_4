import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
/**HardCoded Data**/
//___delay to create a sort of "animation sequence" => image - overlay - sniper
const delayForSniper = 2;

const PseudoTechPanel = () => {
  /**JSX**/
  return (
    <motion.div
      data-component="PseudoTechPanel"
      className="absolute hidden xs3xx:flex bottom-[2%] left-[2%] h-[80px] w-[96%] overflow-hidden pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: delayForSniper, duration: 0.9 },
      }}
    >
      <div className="relative w-full h-full fc">
        <div className={` absolute top-0 left-0 h-[20%] w-[20%] `} />
        <div className={`absolute bottom-0 left-0 h-[50%] w-[50%]`}>
          <div className="relative flex items-end w-full h-full">
            <div className="flex flex-col w-full pl-2">
              <div className="flex items-center ">
                <div className="flex flex-col ">
                  <p className="text-small text-greyShade1">IP 67 </p>
                  <p className="text-small text-greyShade1">125 A </p>
                  <p className="text-small text-greyShade1">400 V</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`absolute flex justify-end items-end p-2 sm:p-3 bottom-0 right-0 h-[20%] w-[20%]`}
        >
          <div className="animate-spin-slow ">
            <button
              aria-label="Click!"
              className="w-4 h-4 border rounded-sm aspect-square sm:w-6 sm:h-6 border-greyShade2 animate-pulse"
              //___animate-pulse glow
            />
          </div>
        </div>
        <div className={`absolute top-0 right-0 h-[50%] w-[50%]`}>
          <div className="relative w-full h-full">
            <div className={`absolute top-0 right-0 h-[20%] w-[20%] `} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PseudoTechPanel;
