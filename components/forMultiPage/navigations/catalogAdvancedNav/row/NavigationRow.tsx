import Link from 'next/link';
/**Components**/
import ArrowForLinkIcon from '@/components/SVG/icons/heroIcons/ArrowForLinkIcon';
/**Tailwind Styles**/
import { styles } from '@/styles';
/**Basic Data**/
import { advCatNav } from '@/data/basicData';
/**TS**/
interface Props {
  rowIndex: number;
  path?: string;
  catalogLevel: string[];
  pathSegments: string[];
}

const NavigationRow = ({
  rowIndex,
  catalogLevel,
  pathSegments,
  path = '/',
}: Props) => {
  // console.log('rowIndex', rowIndex);
  // console.log('catalogLevel.length', catalogLevel.length);
  // console.log('pathSegments', pathSegments);
  // console.log('catalogLevel', catalogLevel);

  const linkCondition = rowIndex < catalogLevel.length - 1;

  /**JSX**/
  return (
    <div className="flex flex-col">
      <div className="flex items-center py-1 group">
        <div className="w-10 h-full shrink-0 fc"></div>
        <p className="text-greyShade1 label-regular">
          {advCatNav.headers[rowIndex]}
        </p>
      </div>
      <Link
        href={path}
        className={`flex items-center py-1 group w-fit ${
          linkCondition ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <span className="w-10 h-full shrink-0 fc">
          <ArrowForLinkIcon
            containerStyle={`fc h-6 w-6 min-w-6 min-h-6 aspect-square ${
              linkCondition
                ? 'stroke-corpo group-hover:stroke-light group-hover:rotate-45'
                : 'stroke-grey pointer-events-none'
            }   origin-center flex-shrink-0 ${styles.lazyAnimation}`}
          />
        </span>
        <p
          className={`text-grey text-regular group-hover:text-light ${styles.lazyAnimation}`}
        >
          defaultName
        </p>
      </Link>
    </div>
  );
};

export default NavigationRow;
