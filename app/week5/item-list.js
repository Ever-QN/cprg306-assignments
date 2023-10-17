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
      
    )
}