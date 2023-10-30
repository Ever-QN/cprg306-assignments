'use client';

import { useState } from 'react';

export default function NewItem({ onAddItem }) {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');
    const [customItemId, setCustomItemId] = useState(1);

    const resetStates = () => {
        setName('');
        setQuantity(1);
        setCategory('produce');
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {id: customItemId, name, quantity, category};

        console.log(item);

        onAddItem(item);

        setCustomItemId((prevItemId) => prevItemId + 1);

        resetStates();
    }



    return (
        <form onSubmit={handleSubmit} className='flex flex-col max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-lg'>
            <div className='mb-4'>
                <label htmlFor='name' className=''>Name: </label>
                <input
                type='text'
                id='name'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className='border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300 text-black'
                />
            </div>

            <div>
                <label htmlFor='quantity'>Quantity: </label>
                <input
                type='number'
                id='quantity'
                name='quantity'
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min='1'
                max='99'
                required
                className='border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300 mb-4 text-black' 
                />
            </div>

            <div>
                <label htmlFor='category'>Category: </label>
                <select
                id='category'
                name='category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className='border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300 mb-4 text-black' 
                >
                <option value='Produce'>Produce</option>
                <option value='Dairy'>Dairy</option>
                <option value='Bakery'>Bakery</option>
                <option value='Meat'>Meat</option>
                <option value='Frozen Foods'>Frozen Foods</option>
                <option value='Canned Goods'>Canned Goods</option>
                <option value='Dry Goods'>Dry Goods</option>
                <option value='Beverages'>Beverages</option>
                <option value='Snacks'>Snacks</option>
                <option value='Household'>Household</option>
                <option value='Other'>Other</option>
                </select>
            </div>

            <div className='flex justify-end'>
                <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 '>Submit</button>
            </div>
    </form>
    )
}