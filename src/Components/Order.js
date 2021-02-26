import React from "react";
import Form from "./Form";
import NavBar from "./Navigation";
import Footer from "./Footer";

export default function Order ( props ) {
    
    const {  values, errors , disabled, submit, change  } = props;
// RETURN THE NAV, FORM, AND FOOTER
    return (
        <div>
            <NavBar />
            <Form
                values = { values }
                errors = { errors }
                disabled = { disabled }
                submit = { submit }
                change = { change }
            />
            <Footer />
        </div>





    )
}
