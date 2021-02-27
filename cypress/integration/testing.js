describe( "Pizza App - Test", () => {
    beforeEach( () => {
        cy.visit("http://localhost:3000/order")
    })
    
    const addOn = () => cy.get( 'input[name="addOn"]' );
    const sizeInput = () => cy.get( 'select[name="pizzaSize"]' );
    const sauceInput = () => cy.get( 'input[name="pizzaSauce"]' );
    const pepperoni = () => cy.get( 'input[name="pepperoni"]' );
    const sausage = () => cy.get( 'input[name="sausage"]' );
    const submitBtn = () => cy.get( 'button[id="subBtn"]' );

    it( 'Sanity check', () => {
        expect( 1 + 2 ).to.equal( 3 );
    })
    it( "Test input fields", () => {
        sizeInput().select('large');
        sauceInput().check( 'Original-Red' );
        pepperoni().check();
        sausage().check();
        submitBtn().click();
    } )
})