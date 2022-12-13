import React, {useCallback, useEffect} from 'react';
import { useState } from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import MealsForm from '../MealsForm/MealsForm';
import {ApiMeals} from '../../types';
import axiosApi from '../../axiosApi';

const EditMeals = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [meal, setMeal] = useState<ApiMeals | null>(null);
  const [updating, setUpdating] = useState(false);

  const fetchOneMeal = useCallback(async () => {
    const mealResponse = await axiosApi.get<ApiMeals>('/meals/' + id + '.json');
    setMeal(mealResponse.data);
  }, [id]);

  useEffect(() => {
    void fetchOneMeal();
  }, [fetchOneMeal]);

  const updateMeal = async (meal: ApiMeals) => {
    try {
      setUpdating(true);
      await axiosApi.put('/meals/' + id + '.json', meal);
      navigate('/');
    } finally {
      setUpdating(false);
    }

  };

  const existingMeal = meal && {
    ...meal,
    calories: meal.calories.toString(),
  };

  return (
    <div className="row mt-2">
      <div className="col">
        {existingMeal && (
          <MealsForm
            onSubmit={updateMeal}
            isEdit
            isLoading={updating}
            existingMeal={existingMeal}
          />
        )}
      </div>
    </div>
  );
};

export default EditMeals;