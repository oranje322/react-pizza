import * as axios from "axios";

const SET_PIZZAS = 'SET_PIZZAS'

const initialState = {
    items: [],
    isLoaded: false
}

export const pizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZAS:
            return {
                ...state,
                items: action.payload
            }
        default: return state
    }
}


//actions

export const setPizzas = (pizzaName) => ({type: SET_PIZZAS, payload: pizzaName})

export const getPizzas = (category, sortBy) => (dispatch) => {
    axios.get(`http://localhost:3000/pizzas?${category === 0 ? '' : `category=${category}`}&_sort=${sortBy}&_order=asc`).then(response => dispatch(setPizzas(response.data)))
}