describe("fallback", () => {
  it("should register to BarCamp Kiel 2019 automatically", () => {
    cy.visit("https://www.gatewatch.eu/registration/259");

    cy.findByLabelText(/anrede */i).select("Herr");
    cy.findByLabelText(/vorname */i).type("Basti");
    cy.findByLabelText(/nachname */i).type("Buck");
    cy.findByLabelText(/e-mail */i).type("sbuck@weluse.de");
    cy.findByLabelText(/twitter/i).type("bastibuck");
    cy.findByLabelText(/firma \/ organisation/i).type("weluse GmbH");

    cy.findByText("Freitag (09.08.2019)").click();
    cy.findByText("Sonnabend (10.08.2019)").click();
    cy.contains("Mit dem Absenden Ihrer Anfrage erkl").click();
  });
});
