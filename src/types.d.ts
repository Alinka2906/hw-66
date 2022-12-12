export interface Meals {
    id: string;
    name: string;
    descriptions: string;
    calories: number
}

export type ApiMeals = Omit <Meals, 'id'>

export interface ApiMealsMutation {
    name: string;
    descriptions: string;
    calories: string
}

export interface CartMeal {
    meal: Meals;
}

export interface MealsList {
    [id: string]: ApiMeals;
}