/// <reference types="cypress" />

describe("ENYATA ASSESSMENT", function () {



  //LMS URL is Launched
  it("Validate LMS WebPage url is Launched", function () {
    cy.visit("https://tutor.enyata.com/");
    cy.wait(5000);
    cy.get('.css-1jdqmi1').contains

    //Login Page
  cy.wait(3000);



  //SignUp Form
  it("Verify user is able to sign up successfully", function () {
    //Visit WebPage
    cy.visit("https://tutor.enyata.com/");
    //Click on sign up Button
    cy.get(".css-mwqezh").click();
    // Validate user is on the sign up page
    cy.get(".css-6kc43q").should("contain", "Create an Account");
    //input First Name
    cy.get("#field-1").type("Test");
    //Input Last Name
    cy.get("#field-2").type("Oluyemi" + randomNum);
    //Input Email, and add generated number so Email can be unique
    cy.get('[data-testid="email"]').type(
      "testoluyemi" + randomNum + "@mailinator.com"
    );
    //Input Password
    cy.get("#field-4").type("Password@99");
    //Click on the SUbmit button
    cy.get('[data-testid="submit"]').click();
    // Validate Account was created successfully
    cy.get(".ub-bs_17sc08g").should("contain", "Account created successfully");
  });

  
  })
  it("Validate Login Page is displayed", function () {
    cy.visit("https://tutor.enyata.com/");

  })

  it("Test Login with valid credentials", function () {
    cy.visit("https://tutor.enyata.com/");

    //Validate page title
    cy.wait(3000);
    cy.title().should("contain", "Welcome to LMS");

    //Input Valid credentials
    cy.viewport(1200, 600)
    cy.get('[data-testid="email"]').type("oluyemienyata@yopmail.com");
    cy.get('#field-2').type("P@ssw0rd");
    //Click Login button
    cy.get('[data-testid="submit"]').click();
    cy.wait(5000);

  })

    
  it("Test Login with invalid credentials", function () {
    cy.visit("https://tutor.enyata.com/");

    //Validate page title
    cy.wait(3000);
    cy.title().should("contain", "Welcome to LMS");

    //Input Invalid credentials
    cy.viewport(1200, 600)
    cy.get('[data-testid="email"]').type("olusogaenyata@yopmail.com");
    cy.get('#field-2').type("P@ssw0rd");
    //Click Login button
    cy.get('[data-testid="submit"]').click();
    cy.wait(6000);
    //cy.get('.ub-mt_0px').contains("Invalid credentials provided")

  })
    it("Relogin back with valid credentials", function () {
      cy.visit("https://tutor.enyata.com/");
  
      //Validate page title
      cy.wait(3000);
      cy.title().should("contain", "Welcome to LMS");
  
      //Input Valid credentials
      cy.viewport(1200, 600)
      cy.get('[data-testid="email"]').type("oluyemienyata@yopmail.com");
      cy.get('#field-2').type("P@ssw0rd");
      //Click Login button
      cy.get('[data-testid="submit"]').click();
      cy.wait(5000);
  
    })





  

  });









  //it("Test Login with Invalid credentials", function () {
    //cy.visit("https://tutor.enyata.com/");



  