//Cypress test to test resource functionality
describe("Access resource section", () => {
  it("clicks on resource section", () => {
    cy.visit("/");
    cy.get(".resourceSidebar").contains("Resources").click();
  });

  it("searches a resource", () => {
    cy.get("[data-testid=search-input-bar]").type("Java");
    cy.contains("Search").click();
  });

  it("clicks a resource", () => {
    cy.contains("More Info").click();
  });
});
