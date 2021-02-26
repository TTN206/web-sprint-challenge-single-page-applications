import React from "react";

export default function Card( props ) {
    const { img, price, name } = props;

    return (
        <div className = "pCard">
            <h2>{ name }</h2>
            <img src = { img } />
            <h3> ${ price } </h3>
            <button>Order</button>
        </div>
    )
};