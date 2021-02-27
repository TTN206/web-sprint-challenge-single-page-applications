import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import formSchema from "./Validation/formSchema";
import Home from "./Components/Home";
import Order from "./Components/Order";
import Checkout from "./Components/Checkout";

//////////////// INITIAL VALUES, ERRORS ////////////////
const initialFormValues = {
  pizzaSize: "",
  pizzaSauce: "",
  cheese: false,
  sausage: false,
  pepperoni: false,
  mushrooms: false,
  addOn: "",
}

const initialFormErrors = {
  pizzaSize: "",
  pizzaSauce: "",
}
//////////////// INITIAL STATE ////////////////
const initialPizza = [];
const initialDisabled = true;

const App = () => {
    //////////////// STATES ////////////////
  const [ pizza, setPizza ] = useState( initialPizza );
  const [ formValues, setFormValues ] = useState( initialFormValues );
  const [ formErrors,setFormErrors ] = useState( initialFormErrors );
  const [ disabled, setDisabled ] = useState( initialDisabled );
    //////////////// HELPERS ////////////////
  const postPizza = newPizza => {
    axios
      .post( `https:.//reqres.in/api/orders`, newPizza )
      .then(( response ) => setPizza(
        [ response.data, ...pizza ]
      ))
      .catch(( error ) => {
        console.log( error, "Houston, we have a problem" )
      })
      setFormValues( initialFormValues )
  };
    //////////////// EVENT HANDLERS ////////////////
  const inputChange = ( name, value ) => {
    yup
    .reach ( formSchema, name)
    .validate ( value )
    .then(() => {
      setFormErrors({
        ...formErrors, [ name ]: "",
      })
    })
    .catch(( error ) => {
      setFormErrors({
        ...formErrors, [ name ]: error.errors[ 0 ],  
      })
    })
    setFormValues({
      ...formErrors, [ name ]: value,
      })
  }
  const formSubmit = () => {
    const newPizza = {
      // ADD VALUES HERE, 
      pizzaSize: formValues.pizzaSize,
      pizzaSauce: formValues.pizzaSauce,
      toppings: [ "cheese", "sausage", "pepperoni", "mushroom" ].filter( topping => {
        return formValues[ topping ];
      }), 
    }
    postPizza( newPizza );
  };
  //////////////// SIDE EFFECTS ////////////////
  useEffect(() => {
    formSchema.isValid( formValues ).then( valid => setDisabled( !valid ))
  }, [ formValues ]);
  //////////////// SET ROUTES, SWITCH ////////////////
  return(
    <div>
      <Switch>
        <Route path = "/order">
          <Order
            values = { formValues }
            errors = { formErrors }
            disabled = { disabled }
            submit = { formSubmit }
            change = { inputChange }
          />
        </Route>

        <Route path = "/checkout">
          <Checkout details = { pizza } />
        </Route>

        <Route path = "/" component = { Home } />

      </Switch>
    </div>
  );
};
export default App;
