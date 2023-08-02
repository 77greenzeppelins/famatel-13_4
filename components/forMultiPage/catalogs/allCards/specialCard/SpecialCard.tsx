/**Components**/
import SvgLogoF from '@/components/SVG/logo/SvgLogoF';
import CardFrame from '../cardFrame/CardFrame';
// import CardFrame from '../../../../../../multipagesComponents/cardsCatalogs/__cardFrame/CardFrame';
// import Clock from '../../../../../../multipagesComponents/timeAndData/Clock';
// import DateDisplayer from '../../../../../../multipagesComponents/timeAndData/DateDisplayer';

const SpecialCard = () => {
  return (
    <CardFrame>
      <div className="flex w-full h-full group">
        <div className="relative flex flex-col items-center w-full lg:w-[70%] h-full">
          <div className="lg:w-[30%] border-l border-greyShade2"></div>
          <div className="flex justify-end items-center  w-full h-[25%] min-h-[18px] px-2 lg:px-6">
            {/* <DateDisplayer textStyle='text-small text-grey' /> */}
          </div>
          <div className="flex justify-between items-center w-full h-[75%] px-2 lg:px-5">
            <div className="">
              <p className="text-medium text-greyShade1">Bielawa</p>
            </div>
            {/* <Clock
              city={'Bielawa'}
              timeZone={'Europe/Warsaw'}
              textStyle={largeTextStyle}
            /> */}
          </div>
        </div>
        <div className="relative hidden lg:fc  lg:w-[30%] ">
          <div className="absolute left-0 h-[80%] w-[1px] border-l border-greyShade2" />
          <SvgLogoF svgStyle={'h-[50%]'} gStyle={'fill-corpo'} />
        </div>
      </div>
    </CardFrame>
  );
};

export default SpecialCard;
