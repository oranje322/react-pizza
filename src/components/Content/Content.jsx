import React, {useEffect, useState} from "react";
import Categories from "../Categories";
import SortPopup from "../SortPopup";
import PizzaBlock from "../PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {getPizzas,} from "../../redux/reducers/pizzasReducer";

const Content = () => {
    const {pizzas, category, sortBy} = useSelector((state) => {
        return {
            pizzas: state.pizzas.items,
            category: state.filter.category,
            sortBy: state.filter.sortBy
        }
    })
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPizzas(category, sortBy))

    }, [category, sortBy]);



    const categoriesItems = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
    const sortPopupItems = [{name: 'популярности', type: 'popular'}, { name: 'цене', type: 'price' }, { name: 'алфавиту', type: 'name' }];
    const popupitems = ['популярности', 'цене',  'алфавиту'];

    return (
        <>
            <div className="content">
                <div className="container">
                    <div className="content__top">

                        <Categories items={categoriesItems}/>
                        <SortPopup activeSortType={sortBy} sortPopupItems={sortPopupItems}/>

                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        { pizzas &&
                        pizzas.map(pizza => {
                            return (

                                <PizzaBlock key={pizza.id} {...pizza} />
                            )
                        })
                        }

                        {/*{  category === 0 ? pizzas.map(pizza => <PizzaBlock key={pizza.id} {...pizza}  />) :*/}
                        {/*pizzas.filter(pizza => pizza.category === category).map(pizza => <PizzaBlock key={pizza.id} {...pizza} />)*/}
                        {/*}*/}


                    </div>
                </div>
            </div>
        </>
    )
}

export default Content