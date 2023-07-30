/**Components**/
import SMFacebook from '@/components/SVG/icons/socialM/SMFacebook';
import SMInstagram from '@/components/SVG/icons/socialM/SMInstagram';
import SMLinkIn from '@/components/SVG/icons/socialM/SMLinkIn';

/**TS**/
interface Props {
  fillColor?: string;
  fillColorWhileHover?: string;
}
const SocialMediaBar = ({ fillColor, fillColorWhileHover }: Props) => {
  /**JSX**/
  return (
    <div className="flex gap-x-8">
      <SMInstagram
        className={'w-4 h-4'}
        fillColor={fillColor}
        fillColorWhileHover={fillColorWhileHover}
      />
      <SMLinkIn
        className={'w-4 h-4'}
        fillColor={fillColor}
        fillColorWhileHover={fillColorWhileHover}
      />
      <SMFacebook
        className={'w-4 h-4'}
        fillColor={fillColor}
        fillColorWhileHover={fillColorWhileHover}
      />
    </div>
  );
};

export default SocialMediaBar;
