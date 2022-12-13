import React from 'react';
import {CartMeal, Meals} from '../../types';
import {Link} from 'react-router-dom';
import axiosApi from '../../axiosApi';

interface Props {
  pageMeals: CartMeal;
  meal: Meals;
  onDelete: React.MouseEventHandler;
}

const PageItem: React.FC<Props> = ({pageMeals, meal, onDelete}) => {
  const deleteMeal = async (id: string) => {
    if (window.confirm('Do you really want to delete this meal?')) {
      await axiosApi.delete('/meals/' + id + '.json');
      await fetchMeals();
    }
  };
  return (
    <div className="card mb-2 p-2">
      <div className="row align-items-center">
        <div className="col">{pageMeals.meal.name}</div>
        <div className="col-2">{pageMeals.meal.calories}</div>
        <Link className="btn btn-primary ms-2" to={`/edit-dish/${meal.id}`}>Edit</Link>
        <button className="btn btn-danger ms-2" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default PageItem;