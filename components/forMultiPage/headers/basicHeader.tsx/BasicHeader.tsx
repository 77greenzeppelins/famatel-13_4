/**Basic Data**/
import { styles } from '@/styles';
/**TS**/
interface Props {
  text?: string;
  containerStyle?: string;
  textStyle?: string;
  inlineTextStyle?: {};
  boxStyle?: string;
  hasVerticalOrnament?: boolean;
  ornamentStyle?: string;
  ornamentColor?: string;
  hasHorizontalOrnament?: boolean;
  hasBox?: boolean;
}
/**-----------------------------------------------------**/
const BasicHeader: React.FunctionComponent<Props> = ({
  text = 'Default text',
  containerStyle,
  textStyle,
  inlineTextStyle,
  boxStyle,
  hasVerticalOrnament = true,
  ornamentStyle,
  ornamentColor,
  hasBox = false,
}) => {
  /**JSX**/
  return (
    <h2
      role="heading"
      className={`${
        containerStyle
          ? containerStyle
          : 'relative flex items-center disable-soft w-fit'
      }  ${hasBox ? 'gap-2' : 'gap-0'} `}
    >
      {hasBox && (
        <div className={boxStyle ? boxStyle : styles.basicHeaderBoxStyle} />
      )}

      <p
        className={`${textStyle ? textStyle : styles.basicHeaderText} ${
          hasVerticalOrnament
            ? ornamentStyle
              ? ornamentStyle
              : 'border-l-[2px]'
            : ''
        } ${ornamentColor ? ornamentColor : 'border-corpo'} `}
        style={inlineTextStyle}
      >
        {text}
      </p>
    </h2>
  );
};

export default BasicHeader;
