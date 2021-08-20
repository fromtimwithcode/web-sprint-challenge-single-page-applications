describe('Verifying pizza form', () => {
    beforeEach(() => {
     cy.visit('http://localhost:3000/pizza');
    })

    const nameInput = () => cy.get('input[name="name"]')
    const submitBtn = () => cy.get('button[id="order-button"]')
    const topping1 = () => cy.get('input[name="sausage"]')
    const topping2 = () => cy.get('input[name="pepperoni"]')


it('Can add text to box', () => {
    nameInput()
        .should("have.value", "")
        .type("Tim")
        .should("have.value", "Tim")
    })
it('Can select multiple toppings', () => {
    topping1().click()
    topping2().click()
    }) 
it('Can submit form', () => {
    nameInput()
        .should("have.value", "")
        .type("Tim")
        .should("have.value", "Tim")
    submitBtn().click()
})

}) 