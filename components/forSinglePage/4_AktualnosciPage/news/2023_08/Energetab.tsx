/**Compoonents**/
import NewsWrapper from '../_atoms/newsWrapper/NewsWrapper';
import InViewContainer from '@/components/layout/containers/inView/InViewContainer';
import SquareWithNumber from '@/components/forMultiPage/squareWithNumber/SquareWithNumber';
import SectionText1 from './content/SectionText1';
import HeroBackground from './heroBackground/HeroBackground';
/**Basic Data**/
import { energatabText } from '@/data/textData';

const Energetab = () => {
  /**Data Destr...**/
  const {
    pageNews: { city, data, title2, where, pawilon, stoisko, text1 },
  } = energatabText;
  /**JSX**/
  return (
    <NewsWrapper date={'2023-08-28'}>
      <div className="grid  w-full min-h-[50vh]">
        <div className="z-10 flex items-center w-full h-full abs-cell bg-gradient-to-r from-dark via-dark to-transparent ">
          <div className="wrapper-1-l">
            <h1 className="flex flex-col pl-8 border-l border-corpo gap-y-1 ">
              <span className="text-medium">{title2[0]}</span> <br />
              <span className="text-large">{title2[1]}</span> <br />
              <span className="text-medium">{data}</span>
              <span className="text-medium">{city}</span>
            </h1>
          </div>
        </div>
        <div className="grid abs-cell z-1">
          <HeroBackground />
        </div>
      </div>
      <div className="flex-col w-full pt-24 wrapper-1">
        <div>
          <InViewContainer
            animationDelay={2}
            outherContainerStyle="relative flex flex-col"
            measuredElementStyle="fc flex-col md:flex-row md:justify-between md:items-center  gap-y-6 gap-x-6 w-full h-full "
            topFactor={0.5}
            bottomFactor={0.5}
          >
            <SectionText1 text={text1} containerStyle="w-full " />
          </InViewContainer>
        </div>
      </div>
      <div className="flex items-center w-full gap-12 pt-24 wrapper-1">
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
      {/* <div className="flex-col w-full pt-24 wrapper-1">
        <div>
          <InViewContainer
            animationDelay={2}
            outherContainerStyle="relative flex flex-col"
            measuredElementStyle="fc flex-col md:flex-row md:justify-between md:items-center  gap-y-6 gap-x-6 w-full h-full "
            topFactor={0.5}
            bottomFactor={0.5}
          >
            <SectionText1 text={text1} containerStyle="w-full " />
          </InViewContainer>
        </div>
      </div> */}
    </NewsWrapper>
  );
};

export default Energetab;
