import React from 'react';
import {CartMeal, Meals} from "../../types";
import axiosApi from "../../axiosApi";
import Spinner from "../Spinner/Spinner";
import PageMeals from '../Page/PageMeals';

interface Props {
    mealsLoading: boolean;
    meals: Meals[];
    addToPage: (dish: Meals) => void;
    pageMeals: CartMeal[];
    fetchMeals: () => void;
}

const Home: React.FC<Props> = ({mealsLoading, meals, addToPage, pageMeals, fetchMeals}) => {


    const deleteMeal = async (id: string) => {
        if (window.confirm('Do you really want to delete this meal?')) {
            await axiosApi.delete('/meals/' + id + '.json');
            await fetchMeals();
        }
    };
    return (
        <div className="row mt-2">
            <div className="col-7">
                {mealsLoading ? <Spinner/> : (
                   <PageMeals pageMeals={pageMeals}/>

                )}
            </div>
        </div>
    );
};

export default Home;