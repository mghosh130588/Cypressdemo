describe("Second Test ", ()=>{

beforeEach("run before each test", ()=>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

})

    it("First Tets case check box ",()=>{

        
        cy.get("#checkBoxOption1").check().should('be.checked').and('have.value',"option1").then(()=>{
            cy.log("The checkbox is checked");

        })
        cy.get("#checkBoxOption1").uncheck().should("not.be.checked").then(()=>{

            cy.log("The checkbox is unchecked");

        })
        cy.get("[type = 'checkbox']").each(($elemnt)=>{
          
            cy.wrap($elemnt).invoke('val').then((x)=>{
                cy.log(x);
                if(x.includes("option3"))
                {
                cy.wrap($elemnt).check();
                }
            })
            


        })

    })

    it("Dropdown static test", function(){
        cy.get('select#dropdown-class-example').select("Option1").should("have.value","option1").then(()=>{
            cy.log("Option 1 dropdown selected");

        })
        
    })

    it("Dynamic drop test", function(){
        cy.get("#autocomplete").type("Ind");
        cy.get(".ui-menu-item div").each(($el , $index)=>{
            if($el.text()=="India")
            {
                cy.wrap($el).click();
                cy.log("Option selected "+ $index);
            }
        })
        
    })
    it("show hide elements", ()=>{
        cy.get("#displayed-text").should('be.visible').then(()=>{
            cy.log("The element is visible");
        })
        cy.get("#hide-textbox").should('be.visible').click();
        cy.get("#displayed-text").should('be.not.visible').then(()=>{
            cy.log("The element is not visible");
        })
        cy.get("#show-textbox").should('be.visible').click();
        cy.get("#displayed-text").should('be.visible').then(()=>{
            cy.log("The element is  visible again ");
        })
    })
    it("RadioButton", ()=>{
        cy.get("[name='radioButton']").each(($el , index)=>{
            /*if($el.text().includes('Radio3')){
            cy.wrap($el).select().then(()=>{
                cy.log($el.text() + "is selected");
            
            })
        }*/
        cy.wrap($el).invoke('val').then((x)=>{
            if(x.includes("radio3"))
            {
                cy.wrap($el).check();
                cy.log($el.text());
            }
        })
        })

    })
})