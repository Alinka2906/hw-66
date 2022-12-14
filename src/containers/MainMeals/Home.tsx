import React from 'react';
import {Meals, PageMeal} from "../../types";
import MealsItem from "./MealsItem";
import {NavLink} from 'react-router-dom';
import axiosApi from '../../axiosApi';

interface Props {
    newMeals: Meals[];
    fetchMeals: () => void;
    mealsLoading: boolean;
}

const Home: React.FC<Props> = ({newMeals, fetchMeals}) => {
  const deleteMeal = async (id: string) => {
    if (window.confirm('Do you really want to delete this meal?')) {
      await axiosApi.delete('/dishes/' + id + '.json');
      await fetchMeals();
    }
  };

  const totalCalories = newMeals.reduce((sum, newMeals) => {
    return sum + newMeals.calories;
  }, 0)


    return (
        <>
          <div className="card mb-2 d-flex bg-light justify-content-around">
            <h4>Total calories</h4>
            <h4 className='text-danger'><strong>{totalCalories}</strong></h4>
          <NavLink to='/meals-form' className='btn btn-primary'><strong>Add new meal</strong></NavLink>
          </div>
          <div className='d-flex flex-wrap justify-content-around'>
            {newMeals.map((newMeal) => (
                <MealsItem  key={newMeal.id} newMeals={newMeal} onDelete={() => deleteMeal(newMeal.id)}/>
            ))}
          </div>
        </>

    );
};



export default Home;