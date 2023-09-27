'use client';
import React, { useState } from 'react';
// import { useRouter } from 'next/router';
/**...**/
import axios from 'axios';
/**Components**/
import FormRow from '@/components/basic/forms/basicForm/formRow/FormRow';
/**Basic Data**/
import { mongoTestData } from '@/data/basicData';

const AddItemPageContent = () => {
    const {
        addItemPage: { forId, type, placeholders }
    } = mongoTestData;

    /**...**/
    // const router = useRouter();

    const [objState, setObjState] = useState({ name: '', desc: '' });

    const handleSubmit = (event: any) => {
        event.preventDefault();
        axios
            .post('/api/categories', objState)
            .then((res) => console.log(res))
            .catch((err) => console.log(`axios error => ${err}`))
            .finally(() => {
                setObjState({ name: '', desc: '' });
                // router.refresh()
            });
    };

    const nameOnChange = (e: any) => {
        const stateKey = e.target.name;
        setObjState({ ...objState, [stateKey]: e.target.value });
        // console.log('e.target', e.target);
    };

    // console.log('objState', objState);

    /**JSX**/
    return (
        <div className="w-full pt-24 wrapper-1">
            <h1>AddItemPageContent</h1>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <input
                    value={objState.name}
                    onChange={nameOnChange}
                    type={type[0]}
                    id={forId[0]}
                    name={placeholders[0]}
                    className="bg-greyShade2 border border-gray-300 text-light text-card rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder={placeholders[0]}
                    required
                />
                <input
                    value={objState.desc}
                    onChange={nameOnChange}
                    type={type[1]}
                    id={forId[1]}
                    name={placeholders[1]}
                    className="bg-greyShade2 border border-gray-300 text-light text-card  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder={placeholders[1]}
                    required
                />

                <button
                    type="submit"
                    className="text-card text-corpo uppercase bg-greyShade2 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    //___ dark:bg-blue-600 dark:hover:bg-blue-700  focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
                >
                    Update Item
                </button>
            </form>
        </div>
    );
};

export default AddItemPageContent;

{
    /* {forId.map((item, i) => (
                    <React.Fragment key={i}>
                        <FormRow labelFor={item} inputType={type[i]} inputId={item} placeholder={placeholders[i]} />
                    </React.Fragment>
                ))} */
}

// /**Components**/
// import FormRow from '@/components/basic/forms/basicForm/formRow/FormRow';
// /**Basic Data**/
// import { mongoTestData } from '@/data/basicData';

// const AddItemPageContent = () => {
//   const {
//     addItemPage: { forId, type, placeholders },
//   } = mongoTestData;
//   /**JSX**/
//   return (
//     <div className="w-full pt-24 wrapper-1">
//       <h1>AddItemPageContent</h1>
//       <div>
//         {forId.map((item, i) => (
//           <FormRow
//             key={i}
//             labelFor={item}
//             inputType={type[i]}
//             inputId={item}
//             placeholder={placeholders[i]}
//           />
//         ))}
//         <button
//           type="submit"
//           className="text-card text-corpo uppercase bg-greyShade2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddItemPageContent;

{
    /* <input
                    onChange={handleChange}
                    value={inputs.name}
                    type={type[0]}
                    id={forId[0]}
                    name={placeholders[0]}
                    className="bg-greyShade2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder={placeholders[0]}
                    required
                /> */
}
{
    /* <input
                    onChange={handleChange}
                    value={inputs.desc}
                    type={type[1]}
                    id={forId[1]}
                    name={placeholders[1]}
                    className="bg-greyShade2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder={placeholders[1]}
                    required
                /> */
}
