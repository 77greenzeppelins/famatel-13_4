/*
___(1) "htmlFor" & "id" work together
___1a. if email's label ==> htmlFor =['email']
___1b. if email's input ==> type=['email']; id=['email']
*/

/**TS**/
interface Props {
  containerStyle?: string;
  hoverable?: boolean;
  label?: string;
  placeholder?: string;
  labelFor?: string;
  inputType?: string;
  inputId?: string;
}

const FormRow = ({
  containerStyle,
  hoverable,
  label,
  placeholder,
  labelFor,
  inputType,
  inputId,
}: Props) => {
  return (
    <div
      className={`${containerStyle ? containerStyle : 'mb-6'} ${
        hoverable ? 'group/form' : ''
      }`}
    >
      <label
        htmlFor={labelFor ? labelFor : 'email'}
        className="block mb-2 text-sm font-medium text-greyTint2"
      >
        {label}
      </label>
      <input
        type={inputType ? inputType : 'email'}
        id={inputId ? inputId : 'email'}
        className="bg-greyShade2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        //___ dark:bg-greyShade2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default FormRow;
