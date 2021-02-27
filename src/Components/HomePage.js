import React from "react";
import Card from "./Card";

// Got to import images for 6 cards'
import mcdonalds from "../Assets/mcdonalds.jpg";
import sweetgreen from "../Assets/sweetgreen.jpg";
import starbucks from "../Assets/starbucks.png";
import chickfila from "../Assets/chickfila.jpg";
import tacodelmar from "../Assets/tacodelmar.jpg";
import popeyes from "../Assets/popeyes.jpg";

export default function HomePage( props ) {
    // return the values of the 6 cards'
    return (
        <div>
            <h3>Food delivery in Gotham City</h3>
            <div className = "info">
                <Card
                    name = "McDonalds"
                    price = "$"
                    img src = { mcdonalds }
                    alt = "McDonalds"
                />
                <Card
                    name = "Sweetgreen"
                    price = "$"
                    img = { sweetgreen }
                    alt = "Sweetgreen"
                />
                <Card
                    name = "Starbucks"
                    price = "$"
                    img = { starbucks }
                    alt = "Starbucks"
                />
                <Card
                    name = "Chick-Fil-a"
                    price = "$"
                    img = { chickfila }
                    alt = "Chick-Fli-A"
                />
                <Card
                    name = "Taco-Del-Mar"
                    price = "$"
                    img = { tacodelmar }
                    alt = "Taco-Del-Mar"
                />
                <Card
                    name = "Popeyes"
                    price = "$"
                    img = { popeyes }
                    alt = "Popeyes"
                />
            </div>
        </div>
    )
};
