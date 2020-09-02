const ADD_PIZZA_CART = 'ADD_PIZZA_CART';
const DELETE_PIZZA_ITEM = 'DELETE_PIZZA_ITEM';
const CLEAR_CART = 'CLEAR_CART';
const DELETE_ONE_PIZZA = 'DELETE_ONE_PIZZA'

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}


const getAllPizzasLength = (keyInObj) => {
    return [].concat.apply([], Object.values(keyInObj))
}

const getTotalPrice = (pizzas) => {
    return pizzas.reduce((sum, pizza) => sum + pizza.price, 0)
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZA_CART: {
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload]
            }

            const allPizzas = getAllPizzasLength(newItems);

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice: getTotalPrice(allPizzas)
            };
        };
        case DELETE_PIZZA_ITEM: {
            const newItems = {
                ...state.items
            };

            delete newItems[action.payload]

            const allPizzas = getAllPizzasLength(newItems)

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice: getTotalPrice(allPizzas)

            };
        }
        case DELETE_ONE_PIZZA:

            const newItems = {
                ...state.items
            }

           newItems[action.payload].shift()

           if (newItems[action.payload].length === 0) {
               delete newItems[action.payload]
           }

            const allPizzas = getAllPizzasLength(newItems)

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice: getTotalPrice(allPizzas)
            }

        case CLEAR_CART:
            return {
                ...state,
                items: {},
                totalPrice: 0,
                totalCount: 0
            }
        default: return state
    }
}


//actions

export const addPizzaToCart = (pizzaObj) => ({type: ADD_PIZZA_CART, payload: pizzaObj})
export const deletePizzaItem = (id) => ({type: DELETE_PIZZA_ITEM, payload: id})
export const deleteOnePizza = (id) => ({type: DELETE_ONE_PIZZA, payload: id})
export const clearCart = () => ({type: CLEAR_CART})