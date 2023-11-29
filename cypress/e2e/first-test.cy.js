describe("Loading and validating test", () => {
  it("opens the page correctly", () => {
    cy.visit("http://localhost:5173");
  });

  it("validates the 6 elements are there in the page", () => {
    cy.visit("http://localhost:5173");
    cy.get("li").should("have.length", 6);
  });
});
