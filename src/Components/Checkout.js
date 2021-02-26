import React from "react";
// IMPORT THE NAV, PIZZA BODY, FOOTER
import NavBar from "./Navigation";
import Pizza from "./Pizza";
import Footer from "./Footer";

export default function Checkout( props ){

    const { details } = props;

    return(
        <div>
            <NavBar />
            <div>
                {   
                details.map((pizza) => {
                    return(
                        <Pizza details = { pizza } />
                    )
                })
                }
            </div>
            <Footer />
        </div>
    )
};