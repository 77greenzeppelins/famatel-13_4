/**Components**/
import SectionAdres from './section2/SectionAdres';
import SectionKontakt from './section1/SectionKontakt';
import SectionDojazd from './section3/SectionDojazd';
/**Basic Data**/
import { styles } from '@/styles';

const PageSections = () => {
  /**Data Dest...**/
  const {
    kontaktPageStyles: {
      sectionContainerStyle,
      container,
      label,
      iconTrans,
      textBlock,
    },
  } = styles;
  /**JSX**/
  return (
    <div className="flex flex-col justify-between w-full gap-y-20 xs:gap-36 ">
      <SectionKontakt
        textBlock={textBlock}
        containerStyle={container}
        labelStyle={label}
        iconStyle={iconTrans}
      />
      <SectionAdres
        sectionContainerStyle={sectionContainerStyle}
        textBlock={textBlock}
        containerStyle={`${container} group`}
        labelStyle={label}
        iconStyle={iconTrans}
      />
      <SectionDojazd
        sectionContainerStyle={sectionContainerStyle}
        textBlock={textBlock}
        containerStyle={`${container} group`}
        labelStyle={label}
        iconStyle={iconTrans}
      />
    </div>
  );
};

export default PageSections;
