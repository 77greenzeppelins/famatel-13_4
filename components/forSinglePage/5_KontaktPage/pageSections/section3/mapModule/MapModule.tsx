/**Components**/
import SvgBielawaMap from '@/components/SVG/maps/SvgBielawaMap';
import InViewAnimatedContent from '@/components/layout/containers/inView/InViewAnimatedContent';
import InViewContainer from '@/components/layout/containers/inView/InViewContainer';
import Link from 'next/link';

const MapModule = () => {
  /**JSX**/
  return (
    <>
      <Link
        aria-label={'Link do GoogleMap'}
        role="link"
        className="absolute z-10 h-full opacity-50 left-10 right-10"
        target="_blank"
        rel="noopener"
        href="https://www.google.com/maps/search/Famatel+Polska+Sp.o.o+ul.+Willowa+5,+58+260+Bielawa+Polska"
        scroll={false}
      />
      <InViewContainer
        outherContainerStyle="z-5 w-full h-full"
        animationDelay={2}
        topFactor={0.3}
        bottomFactor={0.1}
      >
        <InViewAnimatedContent scaleFactor={0.95} xFactor={''} yFactor={''}>
          <SvgBielawaMap containerStyle="relative w-full min-h-[400px] max-h-[700px]" />
        </InViewAnimatedContent>
      </InViewContainer>
    </>
  );
};

export default MapModule;

{
  /* <div className="relative flex w-[96%] gap-x-6 min-h-[400px] xl:h-[80vh] lg:w-1/2 xl:w-[55%] md:justify-center pt-2">
  <Link
    aria-label={'Link do GoogleMap'}
    role="link"
    className="absolute z-10 w-full h-full"
    target="_blank"
    rel="noopener"
    href="https://www.google.com/maps/search/Famatel+Polska+Sp.o.o+ul.+Willowa+5,+58+260+Bielawa+Polska"
    scroll={false}
  />
  <SvgBielawaMap containerStyle="relative w-full z-5" />
</div>; */
}
