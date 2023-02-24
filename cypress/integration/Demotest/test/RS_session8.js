/// <reference types = "Cypress" />
/// <reference types = "Cypress-iframe" />
const { it } = require("mocha")
import 'cypress-iframe'
describe("Session 8 Examples",()=>{
    beforeEach("run before each test", ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    
    })
    it("child window alternative",()=>{
        cy.get("#opentab")
        .then((el)=>{
            const url = el.prop("href");
            cy.visit(url);
            expect(url).to.equal("https://www.rahulshettyacademy.com/");
            cy.go("back");

        })

    })

    it.only("Iframe scenario",()=>{
        cy.frameLoaded("#courses-iframe");
        cy.iframe("#courses-iframe").find("a[href='mentorship']").eq(0).click();
        cy.wait(1000);
        cy.iframe("#courses-iframe").find("h1[class='pricing-title text-white ls-1']").eq(0).should("have.text","BRONZE");

    })

})