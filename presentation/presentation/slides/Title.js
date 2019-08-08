import React from "react";
import { Slide, Heading, Text } from "spectacle";

const Title = () => {
  return (
    <Slide bgColor="secondary">
      <Heading size={1} textColor="primary">
        Automatisiertes Softwaretesting
      </Heading>
      <Text margin="24px 0 0" textColor="tertiary" fit bold>
        Einführung | Konzepte | Beispiele
      </Text>
    </Slide>
  );
};

export default Title;
