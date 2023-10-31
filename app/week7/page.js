'use client';

import ItemList from './item-list';
import NewItem from './new-item.js';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';
import Link from 'next/link';
import { useState } from 'react';

export default function Page() {

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    function handleAddItem(newItem) {
        setItems([...items, newItem]);
      }

    function handleItemSelect(selectedItem) {
        const cleanedName = selectedItem.name.replace(/,.*|([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');
        setSelectedItemName(cleanedName);
    }


    return (
        <main>
            <div className='flex justify-around'>
                <div className='bg-slate-900 px-4 py-8 w-1/2 rounded-lg shadow-md'>
                    <p className='px-4 mb-4 bg-slate-700 hover:underline'><Link href='/'>Home</Link></p>
                    <h1 className='text-2xl mb-4 text-white'>Shopping List</h1>
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className='bg-slate-900 px-4 py-8 w-1/2 rounded-lg shadow-md'>
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    )
}