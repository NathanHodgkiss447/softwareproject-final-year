//Cypress test to test chat room functionality
describe("Access chat room", () => {
  it("clicks on chat room", () => {
    cy.visit("/");
    cy.get(".sidebarOption__channel").contains("general").click();
  });

  it("enters text into a chat room", () => {
    cy.get("form input").type("Cypress test");
  });
});
