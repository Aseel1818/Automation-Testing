// searchmatch.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe("skill smatch", function()
{


    it("Open",()=>
    {

        cy.visit("https://skillsmatch.mdx.ac.uk/");
        
    })

    it("Login",()=>
    {
        cy.visit("https://skillsmatch.mdx.ac.uk/");


        cy.get("#username").type("doaa").should("have.value","doaa");


       // cy.get("<input type="password" id="password" name="password" class="form-control">");
       cy.get("input[name='password']").type("doaa1234");

       cy.get(".btn").click();
       cy.get(':nth-child(3) > .nav-link').click();





       //enter word 

       cy.get('.tagify__input').type('software{enter}');

       cy.get(".btn").click();
   
       cy.get('#search-result').should('be.visible');

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


                    cy.get('.tagify__input').type('python{enter}')

            
                    cy.get(".btn").click()
                
                    cy.get('#search-result').should('be.visible')
             
                    cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > span:nth-child(4)").should('have.text',  '\n            software\n        ' )
                    cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > span:nth-child(5)").should('have.text',  '\n            python\n        ' )
                   
 
                })})


                

     







      // cy.get(".tagify__tag__removeBtn").click()
       cy.get('.collapsed').click();

       cy.get('#match_all').click();
       cy.get(".btn").click();
       cy.get('#search-result').should('be.visible');

       cy.get('#match_all').click();
       cy.get(".btn").click();


       //2 advance

       cy.get('#case_sensitive').click();

       cy.get(".btn").click();

       cy.get('#search-result').should('be.visible');


       cy.get('#case_sensitive').click();

       cy.get(".btn").click();





        //3 advance
        cy.get('#search_in_title').click();

        cy.get(".btn").click();

        cy.get('#search-result').should('be.visible');


        cy.get('#search_in_title').click();

        cy.get(".btn").click()




       



    // cy.get('.tagify__input').type('see{enter}')

    //   cy.get('.collapsed').click()

   




   

     // cy.get('.tagify__input').type('see{enter}')

      // cy.get('.collapsed').click()

      //4 advance

       cy.get('#sort_by_user_reviews').click();

       cy.get(".btn").click();

       cy.get('#search-result').should('be.visible');



       cy.get('#sort_by_user_reviews').click();

       cy.get(".btn").click();




       //all advance
       cy.get('#match_all').click();
       cy.get('#case_sensitive').click();
       cy.get('#search_in_title').click();
       cy.get('#sort_by_user_reviews').click();
        cy.get('select#translateInput.form-control');
     // cy.xpath('//*[@id="translateInput"]').select('English')
     // cy.get('select#translateToEnglish.form-control')
      // cy.ge('select.translateToEnglish.form-control').click()
       cy.get(".btn").click();
       cy.get('#search-result').should('be.visible');




       cy.get(':nth-child(2) > .nav-link').click();
       cy.get(".btn").click();
       cy.get(".btn").click();
       cy.get("#8").type("radio").click();




       cy.get(":nth-child(3) > .next").click();


       //arri 1
       cy.get("#13").type("radio").click();
       cy.get("#18").type("radio").click();
       cy.get("#23").type("radio").click();
       cy.get("#28").type("radio").click();
       cy.get(":nth-child(4) > .next").click();


       //arria 2

       cy.get("#33").type("radio").click();
       cy.get("#38").type("radio").click();
       cy.get("#43").type("radio").click();
       cy.get(":nth-child(5) > .next").click();

       //arria 3
       cy.get("#48").type("radio").click();
       cy.get("#53").type("radio").click();
       cy.get("#58").type("radio").click();
       cy.get("#63").type("radio").click();
       cy.get(":nth-child(6) > .next").click();

       //aria 4
       cy.get("#68").type("radio").click();
       cy.get("#73").type("radio").click();
       cy.get("#78").type("radio").click();
       cy.get(":nth-child(7) > .next").click();

      //aria 5

     
      cy.get("#83").type("radio").click();
      cy.get("#88").type("radio").click();
      cy.get("#93").type("radio").click();
      cy.get(":nth-child(8) > .next").click();

      //aria 6
      cy.get("#98").type("radio").click();
      cy.get("#103").type("radio").click();
      cy.get("#108").type("radio").click();
      cy.get("#113").type("radio").click();
      cy.get("#118").type("radio").click();
      cy.get(":nth-child(9) > .next").click();

      //aria 7
      cy.get("#123").type("radio").click();
      cy.get("#128").type("radio").click();
      cy.get("#133").type("radio").click();
      cy.get(":nth-child(10) > .next").click();



     cy.get('[test-data="area_1"] > .row > .col-3 > .nav-link').click();
cy.wait(4000);
cy.get(':nth-child(2) > .nav-link').click();


cy.get('[test-data="area_2"] > .row > .col-3 > .nav-link').click();
cy.wait(4000);
cy.get(':nth-child(2) > .nav-link').click();


cy.get('[test-data="area_3"] > .row > .col-3 > .nav-link').click();
cy.wait(4000);
cy.get(':nth-child(2) > .nav-link').click();


cy.get('[test-data="area_4"] > .row > .col-3 > .nav-link').click();
cy.wait(4000);
cy.get(':nth-child(2) > .nav-link').click();


cy.get('[test-data="area_5"] > .row > .col-3 > .nav-link').click();
cy.wait(4000);
cy.get(':nth-child(2) > .nav-link').click();


cy.get('[test-data="area_6"] > .row > .col-3 > .nav-link').click();
cy.wait(4000)
cy.get(':nth-child(2) > .nav-link').click();








 //cy.get('[test-data="area_1"] > .row > .col-6 > label')

 //cy.xpath('/html/body/div[2]/div[1]/legend[2]/div/div[1]/label/sapn').should('contain.text','(0/16)');
 //cy.xpath('/html/body/div[2]/div[1]/legend[3]/div/div[1]/label/sapn').should('contain.text','(16/16)')
 //cy.get('[test-data="area_2_Scor"]').should('contain.text','(12/16)');
 cy.get('[test-data="area_2_Scor"]').should('contain.text','(12/12)');
 cy.get('[test-data="area_3_Scor"]').should('contain.text','(16/16)');
 cy.get('[test-data="area_4_Scor"]').should('contain.text','(12/12)');
 cy.get('[test-data="area_5_Scor"]').should('contain.text','(12/12)');
 cy.get('[test-data="area_6_Scor"]').should('contain.text','(20/20)');
 
 
 //cy.xpath('.//*[@test-data="area_1_Scor"]"').contains('(16/16)')
 //cy.xpath('.//*[@test-data="area_2_Scor"]"').contains('(12/16)')
 //cy.xpath('.//*[@test-data="area_3_Scor"]"').contains('(16/16)')
 //cy.xpath('.//*[@test-data="area_4_Scor"]"').contains('(12/12)')
 //cy.xpath('.//*[@test-data="area_5_Scor"]"').contains('(12/12)')
// cy.xpath('.//*[@test-data="area_6_Scor"]"').contains('(20/20)')









      // cy.get(".test-data > searchItem_1 > div:h4")

      })




            

    



    
});
