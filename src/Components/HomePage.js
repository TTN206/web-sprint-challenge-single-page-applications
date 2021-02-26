import React from "react";
import Card from "./Card";

// Got to import images for 6 cards'
import mcdonalds from "../Assets/mcdonalds.jpg";
import sweetgreen from "../Assets/sweetgreen.jpg";
import startbucks from "../Assets/starbucks.png";
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
                    img = { mcdonalds }
                />
                <Card
                    name = "Sweetgreen"
                    price = "$"
                    img = { sweetgreen }
                />
                <Card
                    name = "Starbucks"
                    price = "$"
                    img = { startbucks }
                />
                <Card
                    name = "Chick-Fil-a"
                    price = "$"
                    img = { chickfila }
                />
                <Card
                    name = "Taco-Del-Mar"
                    price = "$"
                    img = { tacodelmar }
                />
                <Card
                    name = "Popeyes"
                    price = "$"
                    img = { popeyes }
                />
            </div>
        </div>
    )
};
