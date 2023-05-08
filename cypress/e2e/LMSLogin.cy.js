/// <reference types="cypress" />

describe("LMS Login", function () {
    it("Validate WebPage", function () {
      cy.visit("https://tutor.enyata.com/");
  
      //Validate page title
      cy.title().should("contain", "Welcome to LMS");
    });
  
    it("Invalid Login", function () {
      //input Email
      cy.get('[data-testid="email"]').type("oluyemienyata@yopmail.com");
      //Input Password - Invalid
      cy.get("#field-2").type("P@ssw0rd1");
      //Click on Login Button
      cy.get('[data-testid="submit"]').click();
  
      //Validate Error message pop up on the screen
      cy.get(".ub-mt_0px").should("have.text", "Invalid credentials provided");
  
      //clear email and password fields
      cy.get('[data-testid="email"]').clear();
      cy.get("#field-2").clear();
    });
  
    it("Valid Login", function () {
      //input Email
      cy.get('[data-testid="email"]').type("oluyemienyata@yopmail.com");
      //Input Password - Invalid
      cy.get("#field-2").type("P@ssw0rd");
      //Click on Login Button
      cy.get('[data-testid="submit"]').click();
    });
  });
  