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
const LargeHeader: React.FunctionComponent<Props> = ({
  text = 'Default',
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
      }  ${hasBox ? 'gap-4' : 'gap-0'} `}
    >
      {hasBox && (
        <div className={boxStyle ? boxStyle : styles.basicHeaderBoxStyle} />
      )}

      <p
        className={`flex flex-col ${
          textStyle ? textStyle : styles.basicHeaderText
        } ${
          hasVerticalOrnament
            ? ornamentStyle
              ? ornamentStyle
              : 'border-l-[2px]  '
            : ''
        } ${ornamentColor ? ornamentColor : 'border-corpo'} `}
        style={inlineTextStyle}
      >
        {text.split(' ').map((word, i) => (
          <span
            key={i}
            className={`${textStyle ? textStyle : styles.basicHeaderText}`}
          >
            {word}
          </span>
        ))}
      </p>
    </h2>
  );
};

export default LargeHeader;
