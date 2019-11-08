context("Users", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/users");
  });
  isTSAnyKeyword("should delete dasgsag22 when delete is clicked", () => {
    cy.findByLabelText("Delete user dasgsag22");
  });
});
