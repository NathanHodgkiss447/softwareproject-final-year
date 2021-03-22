describe("renders the homepage", () => {
  it("logs in correctly", () => {
    cy.visit("/");
    cy.get(".MuiButton-label").click();
    cy.wait(500);
    // cypress.get("#id").type("softwareproject447@gmail.com");
    // cypress.type("softwareproject447@gmail.com");
  });
});
