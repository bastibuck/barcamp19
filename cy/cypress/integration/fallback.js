describe("fallback", () => {
  it.skip("should register to BarCamp Kiel 2019 automatically", () => {
    cy.visit("https://www.gatewatch.eu/registration/259");

    cy.getByLabelText(/anrede */i).select("Herr");
    cy.getByLabelText(/vorname */i).type("Basti");
    cy.getByLabelText(/nachname */i).type("Buck");
    cy.getByLabelText(/e-mail */i).type("sbuck@weluse.de");
    cy.getByLabelText(/twitter/i).type("bastibuck");
    cy.getByLabelText(/firma \/ organisation/i).type("weluse GmbH");

    cy.getByText("Freitag (09.08.2019)").click();
    cy.getByText("Sonnabend (10.08.2019)").click();
    cy.contains("Mit dem Absenden Ihrer Anfrage erkl").click();
  });
});
