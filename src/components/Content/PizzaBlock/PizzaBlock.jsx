import React, {useState} from "react";
import classNames from 'classnames'
import Button from "./Button";

const PizzaBlock = ( {id, name, imageUrl, price, types, sizes, onAddPizzaToCart, howManyPizzasAdded}) => {



    const availableTypes = ['тонкое', 'традиционное'];
    const availableSizes = [26, 30, 40];

    const [activeType, setActiveType] = useState(types[0]);
    const [activeSize, setActiveSize] = useState(0);



    const onSelectSize = (index) => {
        setActiveSize(index)
    }

    const onSelectType = (index) => {
        setActiveType(index)
    }

    const onClickPizzaButton = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            type: activeType,
            size: activeSize
        }
        onAddPizzaToCart(obj)
    }

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {
                        availableTypes.map((type, index) => {
                            return (
                                <li onClick={()=>onSelectType(index)} key={type} className={classNames({
                                    active: activeType === index,
                                    disabled: !types.includes(index)
                                })}>{type}</li>
                            )
                        })
                    }
                </ul>
                <ul>
                    {
                        availableSizes.map((size, index) => {
                            let needToActive = !sizes.includes(size) ? false : true;

                            return (
                                <li onClick={()=>onSelectSize(index)} key={size} className={classNames({
                                    disabled: !sizes.includes(size),
                                    active: needToActive && activeSize === index,
                                })}>{size} см</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <Button onClick={onClickPizzaButton} howManyPizzasAdded={howManyPizzasAdded}/>
            </div>
        </div>
    )
}

export default PizzaBlock