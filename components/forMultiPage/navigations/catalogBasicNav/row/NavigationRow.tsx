import Link from 'next/link';
/**Components**/
import ArrowForLinkIcon from '@/components/SVG/icons/heroIcons/ArrowForLinkIcon';
/**Tailwind Styles**/
import { styles } from '@/styles';

const NavigationRow = ({
  label1,
  label2,
  path = '/',
}: {
  label1: string;
  label2: string;
  path?: string;
}) => {
  /**JSX**/
  return (
    <div className="flex flex-col">
      <div className="flex items-center py-1 group">
        <div className="w-10 h-full shrink-0 fc">
          {/* <div className="w-2 h-2 bg-corpo" /> */}
        </div>
        <p className="text-greyShade1 label-regular">{label1}</p>
      </div>
      <Link href={path} className="flex items-center py-1 group w-fit">
        <span className="w-10 h-full shrink-0 fc">
          <ArrowForLinkIcon
            containerStyle={`fc h-6 w-6 min-w-6 min-h-6 aspect-square stroke-corpo group-hover:stroke-light group-hover:rotate-45 origin-center flex-shrink-0 ${styles.lazyAnimation}`}
          />
        </span>
        <p
          className={`text-grey text-regular group-hover:text-light ${styles.lazyAnimation}`}
        >
          {label2}
        </p>
      </Link>
    </div>
  );
};

export default NavigationRow;
