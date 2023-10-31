'use client';

import { useEffect, useState } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error('Error fetching meal ideas:', error);
      return [];
    }
  };

  const loadMealIdeas = async () => {
    const ideas = await fetchMealIdeas(ingredient);
    setMeals(ideas);
    setLoading(false);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h1 className='text-xl font-bold underline'>Meal Ideas with {ingredient}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {meals.length === 0 ? (
            <p>No meals for the selected item</p>
          ) : (
            meals.map((meal) => (
              <li key={meal.idMeal}>{meal.strMeal}</li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}