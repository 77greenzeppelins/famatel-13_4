'use client';
import { mainCategoriesNames } from '@/data/routingData';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

mainCategoriesNames;

const ProductsCategory = ({
  label,
  i,
  expanded,
  setExpanded,
}: {
  label: string;
  i: number;
  expanded: number | false;
  setExpanded: React.Dispatch<React.SetStateAction<number | false>>;
}) => {
  const isOpen = i === expanded;
  return (
    <>
      <motion.header
        // initial={false}
        // animate={{ backgroundColor: isOpen ? '#FF0088' : '#0055FF' }}
        onClick={() => setExpanded(isOpen ? false : i)}
        className="h-[50px] my-1"
      >
        {label}
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div
              style={{
                width: '200px',
                height: '400px',
                backgroundColor: 'black',
              }}
            />
            {i % 2 ? (
              <motion.div
                // variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
                // transition={{ duration: 0.8 }}
                // className="content-placeholder"
                style={{
                  width: '200px',
                  height: '100px',
                  backgroundColor: 'green',
                }}
              />
            ) : null}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

const Tested = () => {
  const [expanded, setExpanded] = useState<false | number>(0);
  return mainCategoriesNames.map((label, i) => (
    <ProductsCategory
      key={i}
      i={i}
      label={label}
      expanded={expanded}
      setExpanded={setExpanded}
    />
  ));
};

export default Tested;
