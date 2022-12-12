import React, {useCallback} from 'react';
import {Meals} from "./types";
import axiosApi from "./axiosApi";

const Cart = () => {

    // const addMealsToPage = (meal: Meals) => {
    //     setPageDishes(prev => {
    //         const existingIndex = prev.findIndex(item => {
    //             return item.meal.id === meal.id
    //         })
    //
    //         if (existingIndex !== -1) {
    //             const itemsCopy = [...prev];
    //             const itemCopy = {...prev[existingIndex]};
    //             itemCopy.amount++;
    //             itemsCopy[existingIndex] = itemCopy;
    //             return itemsCopy;
    //         }
    //
    //         return [...prev, {meal, amount: 1}];
    //     });
    // };
    //
    // const fetchDishes = useCallback(async () => {
    //     try {
    //         setLoading(true);
    //         const dishesResponse = await axiosApi.get<ApiDishesList | null>('/dishes.json');
    //         const dishes = dishesResponse.data;
    //
    //         let newDishes: Dish[] = []
    //
    //         if (dishes) {
    //             newDishes = Object.keys(dishes).map(id => {
    //                 const dish = dishes[id];
    //                 return {
    //                     ...dish,
    //                     id
    //                 }
    //             });
    //             return;
    //         }
    return (
        <div>

        </div>
    );
};

export default Cart;