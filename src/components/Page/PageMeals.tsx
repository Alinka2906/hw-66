import React from 'react';
import {CartMeal, Meals} from '../../types';
import PageItem from './PageItem';
import {NavLink} from 'react-router-dom';

interface Props {
  pageMeals: CartMeal[];
 }

const PageMeals: React.FC<Props> = ({pageMeals}) => {
  const total = pageMeals.reduce((sum, pageMeal) => {
    return sum + pageMeal.meal.calories;
  }, 0)

  return (
    <>
      {pageMeals.map(pageMeal => (
        <PageItem key={pageMeal.meal.id} pageMeals={pageMeal}/>
      ))}
      <div className="card border-0 p-2">
        <div className="row">
          <div className="col text-right">
            Total calories:
          </div>
          <div className="col-3 text-right">
            <strong>{total}</strong>
          </div>
          <NavLink to={'/new-meal'} className="col-3 text-right btn btn-primary">
            Add new meal
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default PageMeals;