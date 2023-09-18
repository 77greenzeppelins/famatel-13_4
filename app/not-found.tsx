import { styles } from '@/styles';
import Link from 'next/link';
/**Components**/
import ArrowForLinkIcon from '@/components/SVG/icons/heroIcons/ArrowForLinkIcon';

export default function NotFound() {
  /**JSX**/
  return (
    <div className="flex-col min-h-screen fc min-w-screen">
      <h2 className="text-medium">Podana strona nie istnieje...</h2>

      <Link href="/" className={`flex items-center py-1 group w-fit`}>
        <span className="w-10 h-full shrink-0 fc">
          <ArrowForLinkIcon
            containerStyle={`fc h-6 w-6 min-w-6 min-h-6 aspect-square 
                stroke-corpo group-hover:stroke-light group-hover:rotate-45
               origin-center flex-shrink-0 ${styles.lazyAnimation}`}
          />
        </span>
        <p
          className={`text-grey text-regular group-hover:text-light ${styles.lazyAnimation}`}
        >
          Powrót do strony głównej
        </p>
      </Link>
    </div>
  );
}
