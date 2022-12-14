import React from 'react';
import {Link} from "react-router-dom";
import {Meals, PageMeal} from "../../types";

interface Props {
    newMeals: Meals;
    onDelete: React.MouseEventHandler;
}

const MealsItem: React.FC<Props>= ({newMeals, onDelete}) => {


    return (
        <div className="card mb-2 d-flex justify-content-around w-25 ms-md-5">
            <div className="row no-gutters">
                <div className="col">
                    <div className="card-body bg-light">
                        <h5 className="card-title ">Category: {newMeals.name}</h5>
                        <p className="card-text mt-3">Descriptions: {newMeals.descriptions}</p>
                        <p className="card-text">Calories: {newMeals.calories}</p>
                        <p className="">
                            <Link className="btn btn-primary ms-2" to={`/edit-meals/${newMeals.id}`}>Edit</Link>
                            <button className="btn btn-danger ms-2" onClick={onDelete}>Delete</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealsItem;