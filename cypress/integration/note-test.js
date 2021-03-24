//Cypress test to test note funcitonality
describe("Testing note section", () => {
  it("clicks on a note section", () => {
    cy.visit("/");
    cy.get(".resourceSidebar").contains("Notes").click();
    cy.contains("Testing Notes").click();
    cy.get(".EditorComponent-editorContainer-10");
    cy.wait(500);
  });

  it("creates a note", () => {
    cy.get(".MuiButton-label").contains("New Note").click();
    cy.get(".EditorComponent-titleInput-8").type("Cypress Test{enter}");
    cy.get(".ql-editor").type("Testing Cypress{enter}");
    cy.wait(500);
  });
});
