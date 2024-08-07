// test.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:

const { log } = require("console");
const { cp } = require("fs");

// https://on.cypress.io/writing-first-test
describe("skill smatch", function()
{


    it("Open",()=>
    {

        cy.visit("https://skillsmatch.mdx.ac.uk/")
        
    })


    it("Total matches",()=>
    {
        cy.visit("https://skillsmatch.mdx.ac.uk/")


        cy.get("#username").type("doaa").should("have.value","doaa")


       // cy.get("<input type="password" id="password" name="password" class="form-control">")
       cy.get("input[name='password']").type("doaa1234")

       cy.get(".btn").click()
       //open page search
       cy.get(':nth-child(3) > .nav-link').click()



       //enter word 

       cy.get('.tagify__input').type('software{enter}')

       cy.get(".btn").click()
   
       cy.get('#search-result').should('be.visible')

       cy.xpath("(//a[contains(text(),'Learn Python Programming Masterclass')])[1]").invoke('removeAttr','target').click();
     
       const list = []

       var counter=0
       
       cy.get(".container > div:nth-child(9)").find('p').each(($p)=>{

        list.push($p.text().split(' ').forEach(pelement=>{
            if(pelement=="software"){
             counter++;} }))}).then(()=>{
             
            cy.get(".container > div:nth-child(9)").find('li').each(($li)=>{
                list.push($li.text().split(' ').forEach(ilelement=>{
                    if(ilelement=="software"){
                     counter++;}}))}).then(()=>{
         
                    cy.get(':nth-child(3) > .nav-link').click()
                    
                    cy.get('.tagify__input').type('software{enter}')

                    cy.get(".btn").click()
                    
                    cy.get('#search-result').should('be.visible')
                    cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > span:nth-child(3)").should('have.text',  '\n            Total Matches :  9\n        ' ).contains(counter.toString())
                })}) })




                it("Search tow words",()=>
                {
                    cy.visit("https://skillsmatch.mdx.ac.uk/")
            
            
                    cy.get("#username").type("doaa").should("have.value","doaa")
            
            
                   // cy.get("<input type="password" id="password" name="password" class="form-control">")
                   cy.get("input[name='password']").type("doaa1234")
            
                   cy.get(".btn").click()
                   //open page search
                   cy.get(':nth-child(3) > .nav-link').click()
            
            
            
                   //enter word 
            
                   cy.get('.tagify__input').type('software{enter}')

                   cy.get('.tagify__input').type('python{enter}')

            
                   cy.get(".btn").click()
               
                   cy.get('#search-result').should('be.visible')
            
                   cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > span:nth-child(4)").should('have.text',  '\n            software\n        ' )
                   cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > span:nth-child(5)").should('have.text',  '\n            python\n        ' )


            
                                
                                
                                
             })  });


      
                
        
        
        
        
        


       
       
   
    
    






