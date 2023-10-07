'use client';

import { useState } from "react";

export default function NewItem() {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');

    const resetStates = () => {
        setName('');
        setQuantity(1);
        setCategory('produce');
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {name, quantity, category};

        console.log(item);
        alert(`Item: ${item.name}\nQuantity: ${item.quantity}\nCategory: ${item.category}`);

        resetStates();
    }



    return (
        <form onSubmit={handleSubmit} className='max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-lg'>
        <div className='mb-4'>
            <label htmlFor="name" className=''>Name: </label>
            <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className='border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300 text-black'
            />
        </div>

        <div>
            <label htmlFor="quantity">Quantity: </label>
            <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
            max="99"
            required
            className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300 mb-4 text-black" 
            />
        </div>

    </form>
    )
}