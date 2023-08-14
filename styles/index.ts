export const styles = {
  /*
  ___some general settings
  */
  headerHeight: 'h-[64px] lg:h-[78px]',
  heroSectionOffset: 'pb-[64px] lg:pb-[78px]',
  fixedOverlayOffset: 'top-[64px] lg:top-[78px]',
  basicHeaderText: 'label-regular text-grey align-middle leading-none',
  largeHeaderText: 'text-large text-light',
  largeHeaderOrnamentStyle: 'border-l-[2px] pl-6',
  basicHeaderBoxStyle: 'h-[10px] aspect-square bg-corpo',
  basicAnimation: 'duration-300 delay-100 ease-in',
  /*
  ___footer settings
  */
  footer: {
    dirContacts: {
      linkContainer: 'flex items-center gap-6 group no-sparkling w-fit',
      label:
        'text-small text-left text-dark font-bold group-hover:text-light group-hover:font-light duration-[0.3s] delay-[0.1s] ease-in',
      iconTrans:
        'h-4 w-4 text-light group-hover:text-dark group-hover:translate-x-1 ease-in duration-300  origin-center',
    },
    address: {
      label: 'text-small text-left text-dark font-bold ',
      icon: 'h-4 w-4 text-light', // animate-pulse glow
    },
  },
  /*
  used in: oFirmiePage | HeroSection ==> as concept of hero with image and text that starts as flex and ends as grid (to avoid absolute position)
  */
  mainHeroSection: {
    containerAsFlex: 'flex flex-col-reverse',
    containerAsGrid: 'md:grid',
    graphicAsFlex: 'flex items-center w-full pl-2 xs:pl-8 min-h-[60vh]',
    graphicAsGrid:
      'md:col-span-full md:row-span-full md:justify-self-end md:self-end xl:self-center  md:max-w-[550px] lg:max-w-[650px] xl:max-w-[780px] xxxl:max-w-[900px]',
    textAsFlex: 'flex justify-end items-end min-h-[40vh]',
    textAsGrid:
      'md:h-[50vh] min-h-[450px] xl:min-h-[550px] md:col-span-full md:row-span-full md:self-start   ',
  },
  /*
  ___kontaktPage | mapModules
  */
  mapModule: {
    container: 'grid justify-items-center',
    background:
      'abs-cell aspect-square min-h-[300px] xs:min-h-[400px] max-h-[600px] special-gradient -z-1 scale-[0.99] rotate-180',
    foreground:
      'abs-cell w-full min-h-[300px] xs:min-h-[400px] max-h-[600px] z-1 scale-100',
  },
  /*
  ___Page ===> produkty
  */
  produktyPageStyles: {
    marqueeContainer: 'gap-8', // 8 = 32px
    svgContainerSizes: 'w-[50px] h-[50px]', //value associated with: basicData / doPobraniaPageData
  },
  /*
  ___Page ===> doPobrania 
  */
  doPobraniaPageStyles: {
    svgMaxHeight: 'max-h-[540px]',
    svgContainerSizes: 'w-[220px] h-[220px]', //value associated with: basicData / doPobraniaPageData
  },
  /*
  ___Page ===> kontak 
  */
  kontaktPageStyles: {
    svgContainerSizes: 'w-[140px] h-[140px]', //value associated with: basicData / kontaktPageData
    sectionContainerStyle:
      'flex flex-col w-full gap-y-14 lg:gap-y-0 lg:items-center lg:justify-start lg:flex-row wrapper-2 ',
    textBlock: 'flex flex-col w-full gap-y-10 lg:gap-y-16',
    container: 'flex flex-col justify-center gap-y-4 no-sparkling w-fit',
    label:
      'text-basic text-left text-grey group-hover:text-light group-hover:font-light duration-[0.3s] delay-[0.1s] ease-in',
    iconTrans:
      'h-6 w-6 text-light group-hover:text-corpo group-hover:translate-x-1 ease-in duration-300  origin-center',
  },
};

/*
(!) add: ./styles/... in tailwind.config.js
*/

//   paddings: 'sm:p-16 xs:p-8 px-6 py-12',
//   yPaddings: 'sm:py-16 xs:py-8 py-12',
//   xPaddings: 'sm:px-16 px-6',
//   topPaddings: 'sm:pt-16 xs:pt-8 pt-12',
//   bottomPaddings: 'sm:pb-16 xs:pb-8 pb-12',
//   flexCenter: 'flex justify-center items-center',
//   flexStart: 'flex justify-start items-start',
//   flexEnd: 'flex justify-end',
//   navPadding: 'pt-[98px]',

// background-image: linear-gradient(242deg, rgba(195, 195, 195, 0.02) 0%, rgba(195, 195, 195, 0.02) 16.667%,rgba(91, 91, 91, 0.02) 16.667%, rgba(91, 91, 91, 0.02) 33.334%,rgba(230, 230, 230, 0.02) 33.334%, rgba(230, 230, 230, 0.02) 50.001000000000005%,rgba(18, 18, 18, 0.02) 50.001%, rgba(18, 18, 18, 0.02) 66.668%,rgba(163, 163, 163, 0.02) 66.668%, rgba(163, 163, 163, 0.02) 83.33500000000001%,rgba(140, 140, 140, 0.02) 83.335%, rgba(140, 140, 140, 0.02) 100.002%),linear-gradient(152deg, rgba(151, 151, 151, 0.02) 0%, rgba(151, 151, 151, 0.02) 16.667%,rgba(11, 11, 11, 0.02) 16.667%, rgba(11, 11, 11, 0.02) 33.334%,rgba(162, 162, 162, 0.02) 33.334%, rgba(162, 162, 162, 0.02) 50.001000000000005%,rgba(171, 171, 171, 0.02) 50.001%, rgba(171, 171, 171, 0.02) 66.668%,rgba(119, 119, 119, 0.02) 66.668%, rgba(119, 119, 119, 0.02) 83.33500000000001%,rgba(106, 106, 106, 0.02) 83.335%, rgba(106, 106, 106, 0.02) 100.002%),linear-gradient(11deg, rgba(245, 245, 245, 0.01) 0%, rgba(245, 245, 245, 0.01) 16.667%,rgba(23, 23, 23, 0.01) 16.667%, rgba(23, 23, 23, 0.01) 33.334%,rgba(96, 96, 96, 0.01) 33.334%, rgba(96, 96, 96, 0.01) 50.001000000000005%,rgba(140, 140, 140, 0.01) 50.001%, rgba(140, 140, 140, 0.01) 66.668%,rgba(120, 120, 120, 0.01) 66.668%, rgba(120, 120, 120, 0.01) 83.33500000000001%,rgba(48, 48, 48, 0.01) 83.335%, rgba(48, 48, 48, 0.01) 100.002%),linear-gradient(27deg, rgba(106, 106, 106, 0.03) 0%, rgba(106, 106, 106, 0.03) 14.286%,rgba(203, 203, 203, 0.03) 14.286%, rgba(203, 203, 203, 0.03) 28.572%,rgba(54, 54, 54, 0.03) 28.572%, rgba(54, 54, 54, 0.03) 42.858%,rgba(75, 75, 75, 0.03) 42.858%, rgba(75, 75, 75, 0.03) 57.144%,rgba(216, 216, 216, 0.03) 57.144%, rgba(216, 216, 216, 0.03) 71.42999999999999%,rgba(39, 39, 39, 0.03) 71.43%, rgba(39, 39, 39, 0.03) 85.71600000000001%,rgba(246, 246, 246, 0.03) 85.716%, rgba(246, 246, 246, 0.03) 100.002%),linear-gradient(317deg, rgba(215, 215, 215, 0.01) 0%, rgba(215, 215, 215, 0.01) 16.667%,rgba(72, 72, 72, 0.01) 16.667%, rgba(72, 72, 72, 0.01) 33.334%,rgba(253, 253, 253, 0.01) 33.334%, rgba(253, 253, 253, 0.01) 50.001000000000005%,rgba(4, 4, 4, 0.01) 50.001%, rgba(4, 4, 4, 0.01) 66.668%,rgba(183, 183, 183, 0.01) 66.668%, rgba(183, 183, 183, 0.01) 83.33500000000001%,rgba(17, 17, 17, 0.01) 83.335%, rgba(17, 17, 17, 0.01) 100.002%),linear-gradient(128deg, rgba(119, 119, 119, 0.03) 0%, rgba(119, 119, 119, 0.03) 12.5%,rgba(91, 91, 91, 0.03) 12.5%, rgba(91, 91, 91, 0.03) 25%,rgba(45, 45, 45, 0.03) 25%, rgba(45, 45, 45, 0.03) 37.5%,rgba(182, 182, 182, 0.03) 37.5%, rgba(182, 182, 182, 0.03) 50%,rgba(243, 243, 243, 0.03) 50%, rgba(243, 243, 243, 0.03) 62.5%,rgba(162, 162, 162, 0.03) 62.5%, rgba(162, 162, 162, 0.03) 75%,rgba(190, 190, 190, 0.03) 75%, rgba(190, 190, 190, 0.03) 87.5%,rgba(148, 148, 148, 0.03) 87.5%, rgba(148, 148, 148, 0.03) 100%),linear-gradient(90deg, rgb(185, 139, 80),rgb(176, 26, 6));
