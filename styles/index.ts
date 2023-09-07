export const styles = {
  /*
  ___some general settings
  */
  headerHeight: 'h-[64px] lg:h-[78px]',
  heroSectionOffset: 'pb-[64px] lg:pb-[78px]',
  heroSectionContainer: `relative flex items-center justify-center min-h-screen pb-[64px] lg:pb-[78px] before:absolute before:h-full before:left-0 before:w-[5%] before:max-w-[40px] before:bg-gradient-to-r before:from-dark before:to-transparent before:z-10 after:absolute after:h-full after:right-0 after:w-[5%] after:max-w-[40px] after:bg-gradient-to-l after:from-dark after:to-transparent`,
  fixedOverlayOffset: 'top-[64px] lg:top-[78px]',
  basicHeaderText: 'label-regular text-grey', //___align-middle leading-none
  largeHeaderText: 'text-large text-light',
  largeHeaderOrnamentStyle: 'border-l-[2px] pl-6',
  basicHeaderBoxStyle: 'w-[10px] h-[10px] aspect-square bg-corpo',
  basicAnimation: 'duration-300 delay-100 ease-in',
  lazyAnimation: 'duration-[0.6s] delay-100 ease-in',
  nestedAnimation: 'duration-300 ease-linear', //__used when pathName is at least on products cat level

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
  used in: ProductsSearchEngine |  
  */
  productsSearchEngine: {
    rowContainer:
      'flex flex-col w-full gap-y-6 sm:gap-y-0 sm:gap-x-10 sm:flex-row',
    leftPart: 'flex justify-center w-full sm:w-[300px] sm:justify-start ',
    rightPart: 'flex min-w-[200px]',
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
  ___used in: kontaktPage | mapModules
  */
  mapModule: {
    container: 'grid justify-items-center',
    background:
      'abs-cell aspect-square min-h-[300px] xs:min-h-[400px] max-h-[600px] special-gradient -z-1 scale-[0.99] rotate-180',
    foreground:
      'abs-cell w-full min-h-[300px] xs:min-h-[400px] max-h-[600px] z-1 scale-100',
  },
  /*
  used as: default settings in each instance of InViewCSSAnimatedContent if not custom settings available
  */
  inViewContentContainer: {
    visible: 'translate-x-0  scale-100 opacity-1',
    invisible: 'translate-x-4  scale-50 opacity-0',
    containerStyle: 'fc duration-[0.9s] delay-[0.6] disable',
  },

  inViewContentSubtleSide: {
    visible: 'translate-x-0 translate-y-0 opacity-1',
    invisibleFromRightBottom: 'translate-x-4 translate-y-4 opacity-0',
    invisibleFromLeftBottom: '-translate-x-4 translate-y-4 opacity-0',
    containerStyle: 'duration-[0.9s] delay-[0.6] disable',
  },

  /*
  used as: params for <InVievCssAnimatedContent>
  used in: homePage | NumberTextModule 
  */
  numberTextModule: {
    visible: 'translate-x-0 rotate-0 scale-100 opacity-1',
    invisible: 'translate-x-4 rotate-12 scale-50 opacity-0',
    containerStyle:
      'fc flex-col duration-[0.9s] delay-[0.6] p-2 disable-soft w-[80px] h-[80px] md:w-[120px] md:h-[120px] aspect-square origin-bottom-left',
  },
  /*
  ___used in: 
  */
  cardFrameStyle: {
    outerContainerStyle:
      'absolute inset-0 bg-[#111110] blur-[4px] hover:bg-black  duration-300 delay-100 ease-in',
    innerContainerStyle: 'relative fc w-full h-full rounded-md  bg-dark',
    //___pointer-events-none
  },
  /*
  ___used in: CardFrameGrid; the idea is to use grid as general layout + give the frame its individual group name ==> this allows to nest groups...
  */
  cardFrameGridStyle: {
    outerContainerStyle:
      'relative col-span-full row-span-full -z-1 bg-[#111110] blur-[4px] group-hover/frame:bg-black duration-300 delay-100 ease-in',
    innerContainerStyle:
      'relative col-span-full row-span-full fc w-full h-full rounded-md bg-dark z-1',
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

  tableStyles: {
    cellPaddings: 'px-6 py-3',
    cellMinWidth1: 'w-[109px]',
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
