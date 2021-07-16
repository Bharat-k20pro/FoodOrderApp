import React from 'react';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItems/MealItem';
import Card from '../UI/Card';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Aloo Parantha',
        description: 'Lots of potato stuffed in a Flatbread',
        price: 50.00,
    },
    {
        id: 'm2',
        name: 'Kadai Paneer',
        description: "Paneer's dish with lots of masalas.",
        price: 160.00,
    },
    {
        id: 'm3',
        name: 'Palak Paneer',
        description: 'Combination of soft Paneer with Sahi Palak.',
        price: 175.00,
    },
    {
        id: 'm4',
        name: 'Sandwich',
        description: 'Potato stuffed between breads.',
        price: 35.00,
    },
];

const AvailableMeals = props => {

    const mealList = DUMMY_MEALS.map(meal => {

        return (
            <MealItem
                id={meal.id}
                key={meal.id}
                title={meal.name}
                description={meal.description}
                price={meal.price}

            />
        )
    })

    return (
        <section className={classes.meals} >
            <Card>
                <ul>
                    {mealList}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;