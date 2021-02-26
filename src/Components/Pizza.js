import React from "react";

export default function Pizza ( props ) {

    const { details } = props;

    return (
        <div className = "pCard">
            <div>
                <h1>Yay! Its Pizza Time! Inbound.....20 mins</h1>
                <h2>Here's what you ordered?</h2>
                <div className = "pizzaOrderDetails">
                    <p>Size: {details.pizzaSize}</p>
                    <p>Sauce: {details.pizzaSauce}</p>
                    {
                        !!details.toppings && !!details.toppings.length &&
                        <div className="pizza-toppings-list">
                            <h4>Toppings:</h4>
                            <ul>
                                {details.toppings.map( ( topping, index ) => <li key={ index }>{ topping }</li>)}
                            </ul>
                        </div>
                    }
                </div>
            </div>
            <div>
                <h3>Enjoy this Dog with Pizza</h3>
                <img className = "dogPizza" link = "src\Assets\pizza-dog-gif.gif" alt = "Dog Pizza GIF"></img>
            </div>
        </div>
    )
}
