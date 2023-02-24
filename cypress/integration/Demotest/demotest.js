/// <reference types = "Cypress" />

const { it } = require("mocha")



describe("first test suite", ()=>{

it( "open url", ()=>{

    cy.visit("https://en.wikipedia.org/");
    cy.title().should("contain","Wikipedia");
    cy.log("Title matches");
    cy.get("#searchInput", {timeout : 1000}).clear().type("Cypress{enter}");
    cy.url().should('include',"/wiki/Cypress");
    cy.get("#firstHeading").should("have.text","Cypress");
})
it.only( "new test", ()=>{

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type("ca");
    cy.wait(2000);
    cy.get('.product:visible').should('have.length',4);
    //cy.get('.products').find('.product').eq(3).find('.product-name').invoke('text').then((x)=> {
    //    cy.log(x)
   // })
   cy.get(".products").as('productsmain');
    cy.get('@productsmain').find('.product').eq(3).find('.product-name').then((element)=>{
        let a = element.text();
        console.log(a);
        cy.log(a);

    }) 
    cy.get('@productsmain').find('.product').eq(2).contains("ADD TO CART").click().then(()=>{
        console.log("Synchronous promise executed");
    })
    console.log('Aysnschrounius promise executed');
    //cy.get('.products').find('.product').eq(3).contains('ADD TO CART').click();
    //let v =cy.get('.products').find('.product').eq(3).find('.product-name').text();
    //cy.log(v);
    cy.get('@productsmain').find('.product').each(($el , index ,$list)=> {
        let val = $el.find('h4.product-name').text();
        if(val.includes("Cashew")){
            cy.wrap($el).find('button').click();
        }
        })
    
    cy.get(".cart-icon").click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.contains("Place Order").click();
    
    })

    
    })