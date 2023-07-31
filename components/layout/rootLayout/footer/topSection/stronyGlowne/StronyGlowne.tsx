/**Components**/
import FooterLink from '@/components/basic/links/footerLink/FooterLink';
/**Basic Data**/
import { mainPagesData } from '@/data/basicData';

/**TS**/
interface Props {
  labelStyle?: string;
}
/**------------------------------**/
const StronyGlowne = ({ labelStyle }: Props) => {
  /**JSX**/
  return (
    <nav className="w-full sm:w-[80%]">
      <ul className="flex flex-col gap-y-4">
        {mainPagesData.map((item, i) => (
          <li key={i} className="relative flex-col overflow-hidden fc">
            <FooterLink {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default StronyGlowne;
