'use client';

import ItemList from './item-list';
import NewItem from './new-item.js';
import MealIdeas from './meal-ideas';
import { getItems, addItem } from '../_services/shopping-list-service';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useUserAuth } from '../_utils/auth-context';

export default function Page() {

    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');
    const { user } = useUserAuth();

    if (!user) {
        return <p>You are not authenticated. Please log in.</p>;
    }

    useEffect(() => {
        const loadItems = async () => {
            try {
                const userItems = await getItems(user.uid);
                setItems(userItems);
            } catch (error) {
                console.error('Error loading items:', error.message);
            }
        };

        loadItems();
    }, [user]);

    async function handleAddItem(newItem) {
        try {
            const newItemId = await addItem(user.uid, newItem);
            
            setItems([...items, { itemId: newItemId, data: newItem }]);
        } catch (error) {
            console.error('Error adding item:', error.message);
        }
    }

    function handleItemSelect(selectedItem) {
        const cleanedName = selectedItem.name.replace(/,.*/g, '').replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{1FAB0}-\u{1FABF}\u{1FAC0}-\u{1FAFF}\u{1FAD0}-\u{1FADF}\u{1FAE0}-\u{1FAFF}\u{1F3FB}-\u{1F3FF}\u{1F004}\u{1F0CF}\u{1F004}\u{1F004}\u{1F004}\u{1F004}\u{1F005}\u{1F005}\u{1F0CF}]/gu, '');
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