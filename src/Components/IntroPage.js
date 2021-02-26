import react from "react";
import { Link } from "react-router-dom";

export default function StartBody( props ){

    return(
        <div>
            <h2>Your favorite food, delivered while coding</h2>
            <Link to = "/order">Order Now!</Link>
        </div>
    )
};