import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import MealsForm from "./containers/MealsForm/MealsForm";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {ApiMeals, PageMeal, Meals, MealsList} from "./types";
import axiosApi from "./axiosApi";
import Home from "./containers/MainMeals/Home";
import MealsEdit from './containers/MealsForm/MealsEdit';
import MealsNew from './containers/MealsForm/MealsNew';

function App() {
    const navigate = useNavigate();
    const [meals, setMeals] = useState<Meals[]>([]);
    const [creating, setCreating] = useState(false);
    const [pageMeal, setPageMeal] = useState<PageMeal[]>([]);

    const [loading, setLoading] = useState(false);

    const addMeal = async (meal: ApiMeals) => {
        try {
            setCreating(true);
            await axiosApi.post('/meals.json', meal);
            navigate('/');
        } finally {
            setCreating(false)
        }
    };

    const fetchMeals = useCallback(async () => {
        try {
            setLoading(true);
            const mealsResponse = await axiosApi.get<MealsList | null>('/meals.json');
            const meals = mealsResponse.data;
            console.log(meals);

            let newMeals: Meals[] = [];

            if (meals) {
                newMeals = Object.keys(meals).map(id => {
                    const meal = meals[id];
                    return {
                        ...meal,
                        id
                    };
                });
            }
            setMeals(newMeals);
        } finally {
            setLoading(false)
        }
    },[]);

    useEffect(()=> {
        fetchMeals().catch(console.error);
    },[fetchMeals]);



return (
    <div className="App">
        <Layout/>
        <Routes>
            <Route path='/' element={(
              <Home newMeals={meals} fetchMeals={fetchMeals} mealsLoading={loading}/>
              )}/>
            <Route path='/meals-form' element={(<MealsForm onSubmit={addMeal}/>)}/>
            <Route path="/edit-meals/:id" element={(<MealsEdit/>)}/>
        </Routes>
    </div>
);
}

export default App;
