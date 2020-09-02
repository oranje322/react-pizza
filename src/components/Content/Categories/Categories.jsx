import React  from "react";
import {setCategory} from "../../../redux/reducers/filterReducer";
import {useDispatch, useSelector} from "react-redux";

const Categories = ( {items} ) => {

    const activeItem = useSelector(state => {
        return state.filter.category

    })

    const dispatch = useDispatch()

    const onSelectItem = (index) =>  {
        dispatch(setCategory(index))
    }


    return (

        <div className="categories">
            <ul>
                {
                    items.map((name, index) => (
                        <li key={`${name}${index}`} onClick={ ()=> onSelectItem(index) } className={index === activeItem ? 'active' : ''} > {name} </li>
                    ))
                }
            </ul>
        </div>
    )

}

export default Categories