"use client";

import ItemList from "./item-list";
import NewItem from "./new-item.js";
import itemsData from "./items.json";
import Link from "next/link";
import { useState } from "react";

export default function Page() {

    const [items, setItems] = useState(itemsData);

    function handleAddItem(newItem) {
        setItems([...items, newItem]);
      }


    return (
        <main>
            <p className="px-4 mb-4 bg-slate-700 hover:underline"><Link href='/'>Home</Link></p>
            <h1>Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    )
}