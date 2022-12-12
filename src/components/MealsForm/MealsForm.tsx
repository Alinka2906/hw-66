import React, {useState} from 'react';
import {CATEGORIES} from "../../Categories";
import {useNavigate} from "react-router-dom";
import {ApiMeals, ApiMealsMutation} from "../../types";
import axiosApi from "../../axiosApi";

interface Props {
    onSubmit: (meal: ApiMeals) => void;
    existingMeal?: ApiMealsMutation;
    isEdit?: boolean;
    isLoading?: boolean;
}

const initialState: ApiMealsMutation = {
    name: '',
    descriptions: '',
    calories: ''
};

const MealsForm: React.FC<Props> = ({onSubmit, existingMeal= initialState}) => {
    const [meals, setMeals] = useState<ApiMealsMutation>(existingMeal);

       const onMealChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setMeals(prev => ({...prev, [name]: value}));
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
      onSubmit ({
          ...meals,
          calories: parseFloat(meals.calories),
      });
    };

    return (
        <div className='row mt-2 w-50 position-absolute top-10'>
            <div className='container-fluid'>
                <strong>Total calories: </strong>
            </div>
            <form className='form-group  ms-5' onSubmit={onFormSubmit}>
                <select
                    id='name' name='name'
                    className='form-select mb-2'
                    required
                    value={meals.name}
                    onChange={onMealChange}
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
                    value={meals.descriptions}
                    onChange={onMealChange}
                >
                </textarea>
                <input
                    id='calories' name='calories'
                    className='form-select mb-2'
                    required type="number"
                    value={meals.calories}
                    onChange={onMealChange}
                >
                </input>
                <button className="btn btn-primary" type="submit">
                    Save
                </button>
            </form>

        </div>
    );
};

export default MealsForm;