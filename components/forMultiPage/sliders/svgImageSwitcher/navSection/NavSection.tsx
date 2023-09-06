/**Components* */
import CountedNumbersDisplayer from '@/components/forMultiPage/atomsLike/digitsDisplayer/countedNumbersDisplayer/CountedNumbersDisplayer';
import NamesDisplayer from '@/components/forMultiPage/atomsLike/labelsDisplayer/NamesDisplayer';
import ButtonWithIcon from '@/components/basic/buttons/buttonWithIcon/ButtonWithIcon';
import ChevronLeftIcon from '@/components/SVG/icons/heroIcons/ChevronLeftIcon';
import ChevronRightIcon from '@/components/SVG/icons/heroIcons/ChevronRightIcon';
/**Basic Data*/
import { corpoColors } from '@/data/basicData';

/**TS**/
interface Props {
  basicState: number;
  setBasicState: React.Dispatch<React.SetStateAction<number>>;
  // modelName?: string;
  modelsLabels: (string | undefined)[];
  // modelsNames?: string[]
  showArrows: boolean;
}
/*
Comments:
1__ it works as a switcher

**********************************************************************************/
const NavSection: React.FunctionComponent<Props> = ({
  basicState,
  setBasicState,
  // modelName,
  // modelsNames,
  modelsLabels,
  showArrows,
}) => {
  /**Basic Data**/
  // const modelsLabels = [`Model: ${modelName}`, `Model: ${modelName} / tech`];
  const min = 0;
  const max = modelsLabels.length - 1;
  /**OnClick Handlers*/
  const nextCategory = () => {
    setBasicState(Math.min(basicState + 1, max));
  };
  const prevCategory = () => {
    setBasicState(Math.max(basicState - 1, min));
  };
  /*
  JSX
  */
  return (
    <div className="relative flex items-center justify-between w-full h-full ">
      {showArrows ? (
        <ButtonWithIcon onClickHandler={prevCategory}>
          <ChevronLeftIcon
            className={`w-6 h-6`}
            strokeColor={corpoColors.grey}
            scale={basicState !== min ? 1.2 : 1}
            strokeColorWhileHover={
              basicState !== min ? corpoColors.orange : corpoColors.grey
            }
          />
        </ButtonWithIcon>
      ) : (
        <div className="w-6 h-6" />
      )}

      <div className="flex-col fc gap-y-2">
        <NamesDisplayer
          names={modelsLabels}
          index={basicState}
          containerStyle={'flex justify-center'}
          // labelName={'Model: '}
          textStyle="text-xs text-light"
        />

        <CountedNumbersDisplayer
          currentCategoryIndex={basicState}
          digitStyle="text-xs text-light"
          // digitContainerStyle="fc w-[20px]"
          countedStaff={max + 1}
        />
      </div>
      {showArrows ? (
        <ButtonWithIcon
          // buttonStyle="flex items-center justify-start focus:outline-none disable"
          //___border border-greyShade2
          onClickHandler={nextCategory}
        >
          <ChevronRightIcon
            className={`w-6 h-6`}
            strokeColor={corpoColors.grey}
            scale={basicState !== min ? 1.2 : 1}
            strokeColorWhileHover={
              basicState !== min ? corpoColors.orange : corpoColors.grey
            }
          />
        </ButtonWithIcon>
      ) : (
        <div className="w-6 h-6" />
      )}
    </div>
  );
};

export default NavSection;
