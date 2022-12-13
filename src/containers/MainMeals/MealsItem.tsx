import React from 'react';
import {Link} from "react-router-dom";
import {Meals, PageMeal} from "../../types";

interface Props {
    newMeals: PageMeal;
}

const MealsItem: React.FC<Props>= ({newMeals}) => {


    return (
        <div className="card mb-2">
            <div className="row no-gutters">
                <div className="col-sm-4 rounded-start"/>
                <div className="col-sm-8">
                    <div className="card-body">
                        <h5 className="card-title">Category: {newMeals.meal.name}</h5>
                        <p className="card-text small">Descriptions: {newMeals.meal.descriptions}</p>
                        <p className="card-text">Calories: {newMeals.meal.calories}</p>
                        <p className="d-flex gap-2">
                            <Link className="btn btn-primary ms-2" to='/edit-meal/'>Edit</Link>
                            <button className="btn btn-danger ms-2">Delete</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealsItem;