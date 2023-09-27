import React, { useState } from 'react';
import { useRouter } from 'next/router';
/**...**/
import axios from 'axios';
/**Components**/
import FormRow from '@/components/basic/forms/basicForm/formRow/FormRow';
/**Basic Data**/
import { mongoTestData } from '@/data/basicData';

const EditItemPageContent = () => {
    const {
        addItemPage: { forId, type, placeholders }
    } = mongoTestData;

    /**...**/
    const router = useRouter();
    const [inputs, setInputs] = useState({ name: '', desc: '' });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        axios
            .post('/api/categories', inputs)
            .then((res) => console.log(res))
            .catch((err) => console.log(`axios error => ${err}`))
            .finally(() => {
                setInputs({ name: '', desc: '' });
                // router.refresh()
            });
    };

    const handleChange = (e: any) => {
        const name = e.target.name;
        const desc = e.target.desc;
        setInputs((prevState) => ({ ...prevState, [name]: desc }));
    };

    console.log(`name: ${inputs.name} / desc: ${inputs.desc} `);
    /**JSX**/
    return (
        <div className="w-full pt-24 wrapper-1">
            <h1>AddItemPageContent</h1>
            <div>
                <input
                    onChange={handleChange}
                    value={inputs.name || ''}
                    type={type[0]}
                    id={forId[0]}
                    className="bg-greyShade2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder={'..........'}
                    required
                />
                <input
                    onChange={handleChange}
                    value={inputs.desc || ''}
                    type={type[1]}
                    id={forId[1]}
                    className="bg-greyShade2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
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
            </div>
        </div>
    );
};

export default EditItemPageContent;

{
    /* {forId.map((item, i) => (
                    <React.Fragment key={i}>
                        <FormRow labelFor={item} inputType={type[i]} inputId={item} placeholder={placeholders[i]} />
                    </React.Fragment>
                ))} */
}
