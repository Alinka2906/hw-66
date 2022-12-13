export interface Meals {
    id: string;
    name: string;
    descriptions: string;
    calories: number;
}

export type ApiMeals = Omit <Meals, 'id'>

export interface MealsMutation {
    name: string;
    descriptions: string;
    calories: string;
}

export interface PageMeal {
    meal: Meals;
    amount: number;
}

export interface MealsList {
    [id: string]: ApiMeals;
}