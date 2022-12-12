import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {ApiMeals} from '../../types';
import axiosApi from '../../axiosApi';
import MealsForm from '../MealsForm/MealsForm';

const NewMeals = () => {
  const navigate = useNavigate();
  const [creating, setCreating] = useState(false)

  const createMeal = async (meal: ApiMeals) => {
    try {
      setCreating(true);
      await axiosApi.post('/meals.json', meal);
      navigate('/');
    } finally {
      setCreating(false);
    }

  };
  return (
    <div className="row mt-2">
      <div className="col">
        <MealsForm onSubmit={createMeal} isLoading={creating}/>
      </div>

    </div>
  );
};

export default NewMeals;