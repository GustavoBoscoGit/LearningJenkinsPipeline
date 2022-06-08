const hml = "https://demoqa.com/";

beforeEach(() => {
    cy.visit(hml);
});

describe('jenkins pipeline', ()=>{
    it('simple test script', ()=>{
        cy.get(':nth-child(2) > :nth-child(1) > .card-up').click()
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click()
        cy.get('#firstName').type('test')
        cy.get('#lastName').type('test')
        cy.get('#userEmail').type('test.test@gmail.com')
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()
        cy.get('#userNumber').type('7688879999')
        cy.get('#submit').click({force : true})
    })
})

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})