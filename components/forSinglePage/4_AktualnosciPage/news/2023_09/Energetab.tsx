import React from 'react';
import NewsWrapper from '../_atoms/newsWrapper/NewsWrapper';
import SquareWithNumber from '@/components/forMultiPage/squareWithNumber/SquareWithNumber';
import { energatabText } from '@/data/textData';
import InViewContainer from '@/components/layout/containers/inView/InViewContainer';

const Energetab = () => {
  /**Data Destr...**/
  const {
    pageNews: { intro, data, title2, where, pawilon, stoisko },
  } = energatabText;
  /**JSX**/
  return (
    <NewsWrapper date={'2023-08-28'}>
      <div className="w-full pt-12 fc ">
        <div className="w-full min-h-[50vh] lg:w-1/2 wrapper-1-l">
          <h1 className="flex flex-col pl-8 border-l border-corpo gap-y-1">
            {/* <span className="text-large">{intro}</span> <br />{' '} */}
            <span className="text-medium">{title2[0]}</span> <br />
            <span className="text-large">{title2[1]}</span> <br />
            <span className="text-medium">{data}</span>
          </h1>
        </div>
        <div className="w-full min-h-[50vh] lg:w-1/2 bg-greyShade2"></div>

        {/* <h3 className="text-center text-medium">{title}</h3> */}
      </div>
      <div className="flex-col w-full gap-12 pt-24 fc wrapper-1">
        <h3 className="text-medium text-grey">{where}</h3>
        <div>
          <InViewContainer
            animationDelay={2}
            outherContainerStyle="relative flex flex-col"
            measuredElementStyle="fc flex-col md:flex-row md:justify-between md:items-center  gap-y-6 gap-x-6 w-full h-full "
            topFactor={0.5}
            bottomFactor={0.5}
          >
            <SquareWithNumber
              pseudoNumber={pawilon[0]}
              label={pawilon[1]}
              containerStyle="fc flex-col duration-[0.9s] delay-[0.6] p-2 disable-soft w-[120px] h-[120px] md:w-[200px] md:h-[200px] aspect-square origin-bottom-left"
              pseudoNumberStyle="text-large"
              labelStyle="text-regular uppercase"
            />
            <SquareWithNumber
              pseudoNumber={stoisko[0]}
              label={stoisko[1]}
              containerStyle="fc flex-col duration-[0.9s] delay-[0.6] p-2 disable-soft w-[120px] h-[120px] md:w-[200px] md:h-[200px] aspect-square origin-bottom-left"
              pseudoNumberStyle="text-large"
              labelStyle="text-regular uppercase"
            />
          </InViewContainer>
        </div>
      </div>
    </NewsWrapper>
  );
};

export default Energetab;
