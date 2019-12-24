describe("Sample Test", () => {
  it('Check for "Learn React"', () => {
    cy.visit("http://localhost:3000");
    cy.contains("Learn React");
  });
});
