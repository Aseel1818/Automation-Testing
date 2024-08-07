// test.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe("skill smatch", function()
{


    it("Open",()=>
    {

        cy.visit("https://skillsmatch.mdx.ac.uk/")
        
    })


    it("Login",()=>
    {
        cy.visit("https://skillsmatch.mdx.ac.uk/")


        cy.get("#username").type("doaa").should("have.value","doaa")


       // cy.get("<input type="password" id="password" name="password" class="form-control">")
       cy.get("input[name='password']").type("doaa1234")

       cy.get(".btn").click()
       //open page search
       cy.get(':nth-child(3) > .nav-link').click()



       //enter word 

       cy.get('.tagify__input').type('interaction{enter}')

       cy.get(".btn").click()
   
       cy.get('#search-result').should('be.visible')


       
      
      //  cy.get('.tagify__input').type('see{enter}')
      //first advance
        cy.get('.collapsed').click()

        cy.get('#match_all').click()
        cy.get(".btn").click()
        cy.get('#search-result').should('be.visible')

        cy.get('#match_all').click()
        cy.get(".btn").click()


        //2 advance

        cy.get('#case_sensitive').click()

        cy.get(".btn").click()

        cy.get('#search-result').should('be.visible')


        cy.get('#case_sensitive').click()

        cy.get(".btn").click()





         //3 advance
         cy.get('#search_in_title').click()

         cy.get(".btn").click()
 
         cy.get('#search-result').should('be.visible')


         cy.get('#search_in_title').click()

         cy.get(".btn").click()




        
 


     // cy.get('.tagify__input').type('see{enter}')

     //   cy.get('.collapsed').click()

    




    

      // cy.get('.tagify__input').type('see{enter}')

       // cy.get('.collapsed').click()

       //4 advance

        cy.get('#sort_by_user_reviews').click()

        cy.get(".btn").click()

        cy.get('#search-result').should('be.visible')



        cy.get('#sort_by_user_reviews').click()

        cy.get(".btn").click()




        //all advance
        cy.get('#match_all').click()
        cy.get('#case_sensitive').click()
        cy.get('#search_in_title').click()
        cy.get('#sort_by_user_reviews').click()
        cy.get(".btn").click()
        cy.get('#search-result').should('be.visible')




        //remove word

       
       

        cy.get(".tagify__tag__removeBtn").click()
        cy.get('.tagify__input').type('see{enter}')
        cy.get(".btn").click()
        cy.get('#search-result').should('be.visible')



    })
    it("search",()=>
    {
        
        
    })


    




});



