import React, {useState} from 'react';
import {CATEGORIES} from "../../Categories";
import {Meals, MealsMutation} from "../../types";
import ButtonSpinner from '../../components/ButtonSpinner/ButtonSpinner';

interface Props {
    onSubmit: (meal: Meals) => void;
    existingMeal?: MealsMutation;
  isEdit?: boolean;
  isLoading?: boolean;
}

const initialState: MealsMutation = {
  name: '',
  descriptions: '',
  calories: '',
};


const MealsForm: React.FC<Props> = ({onSubmit, existingMeal = initialState, isEdit, isLoading}) => {
    const [meal, setMeal] =useState<MealsMutation>(existingMeal);

    const changeMeal = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target;

        setMeal(prev => ({...prev, [name]: value}));
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            id: Math.random().toString(),
            ...meal,
            calories: parseFloat(meal.calories),
        })
    };

   return (
        <div className='row mt-2 w-50 position-absolute top-10'>
            <div className='container-fluid'>
              <h4>{isEdit ? 'Edit' : 'Add new meal'}</h4>
            </div>
            <form onSubmit={onFormSubmit} className='form-group  ms-5'>
                <select
                    id='name' name='name'
                    className='form-select mb-2'
                    required
                    value={meal.name}
                    onChange={changeMeal}
                >
                    <option value=''>Select category</option>
                    {CATEGORIES.map(meal => (
                        <option key={meal.id} value={meal.id}>{meal.name}</option>
                      ))}
                </select>
                <textarea
                    id='descriptions' name='descriptions'
                    className='form-select mb-2'
                    required
                    value={meal.descriptions}
                    onChange={changeMeal}
                >
                </textarea>
                <input
                    id='calories' name='calories'
                    className='form-select mb-2'
                    required type="number"
                    value={meal.calories}
                    onChange={changeMeal}
                >
                </input>
              <button type="submit" disabled={isLoading} className="btn btn-primary">
                {isLoading && <ButtonSpinner/>}
                {isEdit ? 'Update' : 'Create'}
              </button>
            </form>

        </div>

    );
};

export default MealsForm;