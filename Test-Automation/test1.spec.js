
it('login', function(){
cy.visit('https://skillsmatch.mdx.ac.uk/accounts/login/?next=/en')

cy.get('#username').type('gf')
cy.get('#password').type(1230)
cy.get('.btn').click()


cy.get("a[href='/en/profile/']").click()

cy.get(".btn.btn-primary.btn-lg.active.mt-5").click()
cy.get(".btn.btn-primary.btn-lg.active.mt-4").click()
//1
cy.get('[id="8"]').click()
//next
cy.get(':nth-child(3) > .next').click()
//2:1
cy.get('[id="13"]').click()
//2:2
cy.get('[id="18"]').click()
//2:3
cy.get('[id="23"]').click()
//2:4
cy.get('[id="28"]').click()
//next
cy.get('[style="display: block; opacity: 1;"] > .next').click()

cy.get('[id="33"]').click()
cy.get('[id="38"]').click()
cy.get('[id="43"]').click()

cy.get('[style="display: block; opacity: 1;"] > .next').click()
cy.get('[id="48"]').click()
cy.get('[id="53"]').click()
cy.get('[id="58"]').click()
cy.get('[id="63"]').click()
cy.get('[style="display: block; opacity: 1;"] > .next').click()

cy.get('[id="68"]').click()
cy.get('[id="73"]').click()
cy.get('[id="78"]').click()
cy.get('[style="display: block; opacity: 1;"] > .next').click()

cy.get('[id="83"]').click()
cy.get('[id="88"]').click()
cy.get('[id="93"]').click()
cy.get('[style="display: block; opacity: 1;"] > .next').click()

cy.get('[id="98"]').click()
cy.get('[id="103"]').click()
cy.get('[id="108"]').click()
cy.get('[id="113"]').click()
cy.get('[id="118"]').click()
cy.get('[style="display: block; opacity: 1;"] > .next').click()

cy.get('[id="123"]').click()
cy.get('[id="128"]').click()
cy.get('[id="133"]').click()
cy.get('[style="display: block; opacity: 1;"] > .next').click()
})





it('Show courses', function(){
    cy.visit('https://skillsmatch.mdx.ac.uk/accounts/login/?next=/en')
    
    cy.get('#username').type('gf')
    cy.get('#password').type(1230)
    cy.get('.btn').click()
    

    cy.get("a[href='/en/profile/']").click()
    


cy.get('[test-data="area_1"] > .row > .col-3 > .nav-link').click()
cy.wait(4000)
cy.get("a[href='/en/profile/']").click()


cy.get('[test-data="area_2"] > .row > .col-3 > .nav-link').click()
cy.wait(4000)
cy.get("a[href='/en/profile/']").click()


cy.get('[test-data="area_3"] > .row > .col-3 > .nav-link').click()
cy.wait(4000)
cy.get("a[href='/en/profile/']").click()


cy.get('[test-data="area_4"] > .row > .col-3 > .nav-link').click()
cy.wait(4000)
cy.get("a[href='/en/profile/']").click()


cy.get('[test-data="area_5"] > .row > .col-3 > .nav-link').click()
cy.wait(4000)
cy.get("a[href='/en/profile/']").click()


cy.get('[test-data="area_6"] > .row > .col-3 > .nav-link').click()
cy.wait(4000)
cy.get("a[href='/en/profile/']").click()
})

