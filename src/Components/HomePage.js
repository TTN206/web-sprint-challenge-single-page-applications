import React from "react";
import Card from "./Card";

// Got to import images for 6 cards'
import mcdonalds from "../Assets/mcdonalds.jpg";


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
                    img = "src\Assets\sweetgreen.jpg"
                />
                <Card
                    name = "Starbucks"
                    price = "$"
                    img = "src\Assets\starbucks.png"
                />
                <Card
                    name = "Chick-Fil-a"
                    price = "$"
                    img = "src\Assets\chickfila.jpg"
                />
                <Card
                    name = "Taco-Del-Mar"
                    price = "$"
                    img = "src\Assets\tacodelmar.jpg"
                />
                <Card
                    name = "Popeyes"
                    price = "$"
                    img = "src\Assets\popeyes.jpg"
                />
            </div>
        </div>
    )
};
