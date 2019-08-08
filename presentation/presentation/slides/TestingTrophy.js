import React from "react";
import { Slide, Heading, Link, Image } from "spectacle";

const images = {
  trophy: require("../../assets/testing-trophy.png")
};

const TestingTrophy = () => (
  <Slide>
    <Image src={images.trophy} height="80vh" />
    <Link
      textSize={18}
      target="_blank"
      textColor={"tertiary"}
      href="https://testingjavascript.com/"
    >
      https://testingjavascript.com/
    </Link>
  </Slide>
);

export default TestingTrophy;
