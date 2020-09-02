import React, {useEffect} from "react";
import Categories from "./Categories/Categories";
import SortPopup from "./SortPopup/SortPopup";
import PizzaBlock from "./PizzaBlock/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {getPizzas,} from "../../redux/reducers/pizzasReducer";
import {addPizzaToCart} from "../../redux/reducers/cartReducer";

const Content = () => {
    const {pizzas, category, sortBy, cartItems} = useSelector((state) => {
        return {
            pizzas: state.pizzas.items,
            category: state.filter.category,
            sortBy: state.filter.sortBy,
            cartItems: state.cart.items
        }
    })
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPizzas(category, sortBy))

    }, [category, sortBy]);

    const onAddPizzaToCart = (pizzaObj) => {
        dispatch(addPizzaToCart(pizzaObj))

    }



    const categoriesItems = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
    const sortPopupItems = [{name: 'популярности', type: 'popular'}, { name: 'цене', type: 'price' }, { name: 'алфавиту', type: 'name' }];


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

                                <PizzaBlock key={pizza.id}
                                            onAddPizzaToCart={onAddPizzaToCart}
                                            howManyPizzasAdded={cartItems[pizza.id] && cartItems[pizza.id].length}
                                            {...pizza} />
                            )
                        })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Content