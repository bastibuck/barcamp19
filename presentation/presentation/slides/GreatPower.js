import React from "react";
import { Slide, BlockQuote, Quote, Cite, Text } from "spectacle";

const GreatPower = () => (
  <Slide bgColor="secondary" textColor="primary">
    <BlockQuote margin="0 0 35vh">
      <Quote>With great power comes great responsibility</Quote>
      <Cite margin="10px 0 0 30px">Spider-Man</Cite>
    </BlockQuote>
    <Text textColor="primary" textSize={22} textAlign="right">
      Oder: Was kann ich damit noch anstellen?
    </Text>
  </Slide>
);

export default GreatPower;
