import * as yup from "yup";

const formSchema = yup.object().shape({

    pizzaSize: yup
        .string()
        .oneOf( ["small", "medium", "large"  ], "Please Choose One"),
    
    sauce: yup
        .string()
        .oneOf([ "OriginalRed", "GarlicRanch", "BBQSauce", "SpinachAlfredo" ], "Please Choose A Sauce"),
    
    cheese: yup.boolean(),
    sausage: yup.boolean(),
    pepperoni: yup.boolean(),
    mushrooms: yup.boolean(),

    // THE TOGGLE SWITCH
    // glutenFree: yup.oneOf([  ]), 
    // dairyFree: yup.oneOf([  ]),

    addOn: yup.string(),

});
export default formSchema