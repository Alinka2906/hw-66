import React from 'react';
import {Meals, PageMeal} from "../../types";
import MealsItem from "./MealsItem";

interface Props {
    newMeals: PageMeal[];
}

const MainMeals: React.FC<Props> = ({newMeals}) => {
    const total = newMeals.reduce((sum, newMeals) => {
        return sum + newMeals.amount * newMeals.meal.calories;
    }, 0);

    return (
        <>
            <h4>Meals</h4>
            {newMeals.map((newMeal) => (
                <MealsItem
                    key={newMeal.meal.id}
                    newMeal={newMeal}
                />
            ))}
        </>

    );
};

export default MainMeals;