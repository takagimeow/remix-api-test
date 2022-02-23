describe("/api/hello", () => {
  it("keyが\"value\"で、valueが\"Hello, World\"のJSONを返す", () => {
    cy.request("/api/hello").then((response) => {
      expect(response.body).to.have.property("value", "Hello, World");
    });
  });
});
