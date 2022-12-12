import React from 'react';
import {useNavigate} from "react-router-dom"
import {CartMeal} from '../../types';
import PageMeals from './PageMeals';

interface Props {
  pageMeals: CartMeal[];
}

const Pages: React.FC<Props> = ({pageMeals}) => {
  const navigate = useNavigate();

  let page = (
    <>
      <PageMeals pageMeals={pageMeals}/>
    </>
  );

  return (
    <div>
      <>
        <h4>Calories</h4>
        {page}
      </>
    </div>
  );
};

export default Pages;