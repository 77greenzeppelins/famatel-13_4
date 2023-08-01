/**Components**/
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import ContactsLinks from '@/components/layout/rootLayout/footer/bottomSection/contacts/ContactsLinks';

/**Basic Data**/
import { styles } from '@/styles';
import { KontaktPageText } from '@/data/textData';
import Address from '@/components/layout/rootLayout/footer/bottomSection/contacts/Address';

/**TS**/
interface Props {
  labelStyle: string;
  iconStyle: string;
}

const Section1 = ({ labelStyle, iconStyle }: Props) => {
  /**JSX**/
  return (
    <div className="flex w-full wrapper-1-l ">
      <div className="flex flex-col gap-y-20 w-full lg:w-1/2 min-h-[50vh]">
        <div className="flex flex-col w-full gap-y-10">
          <BasicHeader
            textStyle={`${styles.largeHeaderText} max-w-[10px]`}
            text={KontaktPageText.headers[0]}
          />
          <ContactsLinks labelStyle={labelStyle} iconStyle={iconStyle} />
        </div>
        <div className="flex flex-col w-full gap-y-10">
          <BasicHeader
            textStyle={`${styles.largeHeaderText} max-w-[10px]`}
            text={KontaktPageText.headers[1]}
          />
          <Address labelStyle={labelStyle} iconStyle={iconStyle} />
        </div>
      </div>
      <div className="fc hidden w-0 lg:w-1/2 min-h-[50vh] lg:border border-yellow-800 overflow-hidden">
        2
      </div>
    </div>
  );
};

export default Section1;
