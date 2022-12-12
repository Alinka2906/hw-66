import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import {Route, Routes} from 'react-router-dom';
import {useLocation, useNavigate} from 'react-router-dom';
import {ApiMeals, CartMeal, Meals, MealsList} from './types';
import axiosApi from './axiosApi';
import Home from './components/Home/Home';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [creating, setCreating] = useState(false);
  const [meals, setMeals] = useState<Meals[]>([]);
  const [pageMeals, setPageMeals] = useState<CartMeal[]>([]);

  const [loading, setLoading] = useState(false);

  const fetchMeals = useCallback(async () => {
    try {
      setLoading(true);
      const mealsResponse = await axiosApi.get<MealsList | null>('/meals.json');
      const meals = mealsResponse.data;
      console.log(meals)

      let newMeals: Meals[] = [];

      if (meals) {
        newMeals = Object.keys(meals).map(id => {
          const meal = meals[id];
          return {
            ...meal,
            id,
          }
        });
        return;
      }
      setMeals(newMeals);
    } finally {
      setLoading(false)
    }
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      void fetchMeals()
    }
  }, [fetchMeals, location]);

  const addToPage = (meal: Meals) => {
    setPageMeals(prev => {
      const existingIndex = prev.findIndex(item => {
        return item.meal.id === meal.id;
      });

      return [...prev, {meal, amount: 1}];
    });
  };


  return (
    <div className="App">
      <Layout/>
      <Routes>
        <Route path='/' element={(
          <Home mealsLoading={loading} meals={meals} addToPage={addToPage} pageMeals={pageMeals}
                fetchMeals={fetchMeals}/>
        )}
        />
      </Routes>
    </div>
  );
}

export default App;
