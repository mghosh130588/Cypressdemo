const { it } = require("mocha")
/// <reference types="Cypress" >

describe("Session 7 test",()=>{

    beforeEach("run before each test", ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    
    })
    it("Alerthandle",()=>{
        cy.get("#alertbtn").click();
        cy.on("window:alert",(str)=>{
            expect(str).to.equal("Hello , share this practice page and share your knowledge");
            cy.on("window:confirm",()=>true);
        })
    cy.get("#confirmbtn").click();
    cy.on("window:confirm",(str)=>{
        expect(str).to.equal("Hello , Are you sure you want to confirm?");
        cy.on("window:confirm",()=>false);

    })
    })
    it("child window",()=>{
        cy.get("#opentab").invoke("removeAttr","target").click();
        cy.url().then((x)=>{
            expect(x).to.equal("https://www.rahulshettyacademy.com/");
            cy.log("The url matched");
        })
        cy.go("back");
        cy.url().should("include","AutomationPractice");
    })

    it("Web tables",()=>{
        let coursemap;
        let text = "";
        cy.get("#product").find(`th:contains('Course')`).invoke('index')
       .then((x)=>{
            cy.get('[name = "courses"] tbody tr td:nth-child('+ (x+1) + ')')
            .each(($el ,index)=>{
            let coursename = $el.text();

            if(coursename.includes("Automation"))
            {   //cy.log(coursename);
                /*cy.wrap($el).next().then((price)=>{
                    const priceval = price.text();
                    expect(priceval).to.equal("25");
                })*/
            
                cy.wrap($el).next().invoke("text").then((x)=>{
                    //cy.log(coursename);
                    //cy.log(x);
                    coursemap.set(x,coursename);

                    });
                    //cy.log("mapvalue" + coursemap);
                    
               
                //const priceval = price.text()
                //coursemap.set(coursename,pricevalue);

            }

        })
     })
       console.log(coursemap);
       console.log(coursemap.size());
       coursemap.forEach((k,v)=>{
           cy.log("key = " +k + "Value = " +v);
       })
    
    })
it("webtables updated",async()=>{

        let text = "";
        let coursemap = new Map();
        //let coursename;
        await cy.get("#product").find(`th:contains('Course')`).invoke('index')
        .then((x)=>{
            cy.get('[name = "courses"] tbody tr td:nth-child('+ (x+1) + ')')
            .each(($el,index,$list)=>{
                const coursename = $el.text();
                cy.wrap($el).next()
                .then(async($price)=>{
                    const priceval = $price.text();
                    cy.log("price value" , priceval);
                    cy.log("element coursename", coursename);
                    if(coursename.includes("Automation"))
                    {
                    coursemap.set($el.text(),$price.text());
                    }
                    //cy.log(coursename,coursemap.get(coursename));
                })
            })
        })
        .then(()=>{
            for(const z of coursemap.entries())
                    {
                        text+= z;
                    }

                }).then(()=>{
                    cy.log("values - ",text)
                })
        })
        
                
        it.only("Mouse Hover",()=>{
            //cy.get(".mouse-hover-content").invoke('show');
            cy.contains('Top').click({force: true});
            cy.url().should('include','top')

        })
            
                
            


        })

