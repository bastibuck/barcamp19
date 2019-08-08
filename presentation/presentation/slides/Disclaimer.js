import React from "react";
import { Slide, BlockQuote, Quote, Cite, Text } from "spectacle";

const Disclaimer = () => (
  <Slide bgColor="tertiary" textColor="primary">
    <BlockQuote>
      <Quote>
        Anti-Pattern: Trying to visit or interact with sites or servers you do
        not control.
      </Quote>
      <Cite textColor="secondary">Cypress</Cite>
    </BlockQuote>
  </Slide>
);

export default Disclaimer;
