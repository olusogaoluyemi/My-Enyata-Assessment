/// <reference types="cypress" />

//Generate random 2 digit number
const randomNum = Math.floor(Math.random() * 100).toString();
describe("SignUp Form", function () {
  it("Verify user is able to successfully sign up", function () {
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
});
