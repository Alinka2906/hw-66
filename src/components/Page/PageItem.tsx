import React from 'react';
import {CartMeal} from '../../types';

interface Props {
  pageMeals: CartMeal;
}

const PageItem: React.FC<Props> = ({pageMeals}) => {
  return (
    <div className="card mb-2 p-2">
      <div className="row align-items-center">
        <div className="col">{pageMeals.meal.name}</div>
        <div className="col-2">{pageMeals.meal.calories}</div>
      </div>
    </div>
  );
};

export default PageItem;