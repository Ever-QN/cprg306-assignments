'use client';

import Item from "./item";
import items from "./items.json";
import { useState } from "react";

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = items.sort((a, b) => {
      if (sortBy === 'name') {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      } else if (sortBy === 'category') {
        if (a.category < b.category) return -1;
        if (a.category > b.category) return 1;
        return 0;
      }
    });

    const handleSortChange = (newSortBy) => {
      setSortBy(newSortBy);
    };

    return (
      <div>
        <div className="mb-4">
          <button
            onClick={() => handleSortChange('name')}
            className={`ml-4 mr-2 ${
              sortBy === 'name' ? 'bg-blue-500' : 'bg-slate-500'
            } text-white px-4 py-2 rounded`}
          >
            Sort by Name
          </button>
          <button
            onClick={() => handleSortChange('category')}
            className={`${
              sortBy === 'category' ? 'bg-blue-500' : 'bg-slate-500'
            } text-white px-4 py-2 rounded`}
          >
            Sort by Category
          </button>
        </div>

        <div>
          {sortedItems.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </div>
    </div>
    )
}
