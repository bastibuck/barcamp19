describe("BarCamp 2019", () => {
  it("should visit barcamp website, check sponsors and should find barcamp rules", () => {
    const slowed = true;
    const slowMode = (slow = false) => {
      cy.wait(slow ? 2000 : 0);
    };

    cy.visit("https://barcamp-kiel.de/");

    slowMode(slowed);

    cy.getAllByText(/sponsoren/i)
      .last()
      .scrollIntoView({ duration: slowed ? 1200 : 0 });

    slowMode(slowed);

    cy.getAllByText(/unterstützer/i)
      .last()
      .scrollIntoView({ duration: slowed ? 1200 : 0 });

    slowMode(slowed);

    cy.getByText(/über das barcamp/i).click();
    cy.getByText(/barcamp-regeln/i).scrollIntoView({
      duration: slowed ? 1200 : 0,
      offset: { top: -100 }
    });
  });
});
