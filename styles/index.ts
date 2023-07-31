export const styles = {
  headerHeight: 'h-[64px] lg:h-[78px]',
  heroSectionOffset: 'pb-[64px] lg:pb-[78px]',
  basicHeaderText: 'label-regular text-grey align-middle leading-none',
  basicHeaderBoxStyle: 'h-[10px] aspect-square bg-corpo',
  //   paddings: 'sm:p-16 xs:p-8 px-6 py-12',
  //   yPaddings: 'sm:py-16 xs:py-8 py-12',
  //   xPaddings: 'sm:px-16 px-6',
  //   topPaddings: 'sm:pt-16 xs:pt-8 pt-12',
  //   bottomPaddings: 'sm:pb-16 xs:pb-8 pb-12',
  //   flexCenter: 'flex justify-center items-center',
  //   flexStart: 'flex justify-start items-start',
  //   flexEnd: 'flex justify-end',
  //   navPadding: 'pt-[98px]',
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
};

/*
(!) add: ./styles/... in tailwind.config.js
*/