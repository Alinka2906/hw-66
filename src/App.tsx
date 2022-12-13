import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import MealsForm from "./containers/MealsForm/MealsForm";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {ApiMeals, PageMeal, Meals, MealsList} from "./types";
import axiosApi from "./axiosApi";
import MainMeals from "./containers/MainMeals/MainMeals";
import Home from "./containers/Home/Home";
import MealsItem from "./containers/MainMeals/MealsItem";

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
                return;
            }
            setMeals(newMeals);
        } finally {
            setLoading(false)
        }
    },[]);

    useEffect(()=> {
        void fetchMeals();
    },[fetchMeals]);



return (
    <div className="App">
        <Layout/>
        <main className='d-flex justify-content-between mt-2'>
            <MealsForm onSubmit={addMeal}/>
            <MainMeals newMeals={pageMeal}/>
        </main>
    </div>
);
}

export default App;
