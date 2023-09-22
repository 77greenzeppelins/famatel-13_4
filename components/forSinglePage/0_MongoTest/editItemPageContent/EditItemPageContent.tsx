/**Components**/
import FormRow from '@/components/basic/forms/basicForm/formRow/FormRow';
/**Basic Data**/
import { mongoTestData } from '@/data/basicData';

const EditItemPageContent = () => {
  const {
    addItemPage: { forId, type, placeholders },
  } = mongoTestData;
  /**JSX**/
  return (
    <div className="w-full pt-24 wrapper-1">
      <h1>AddItemPageContent</h1>
      <div>
        {forId.map((item, i) => (
          <FormRow
            key={i}
            labelFor={item}
            inputType={type[i]}
            inputId={item}
            placeholder={placeholders[i]}
          />
        ))}
        <button
          type="submit"
          className="text-card text-corpo uppercase bg-greyShade2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          //___ dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
        >
          Update Item
        </button>
      </div>
    </div>
  );
};

export default EditItemPageContent;
