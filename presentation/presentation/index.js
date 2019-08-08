// Import React
import React from "react";

import { Deck } from "spectacle";
import createTheme from "spectacle/lib/themes/default";
require("normalize.css");

// slides
import Title from "./slides/Title";
import RoadmapOne from "./slides/RoadmapOne";
import RoadmapTwo from "./slides/RoadmapTwo";
import OneThird from "./slides/OneThird";
import QA from "./slides/QA";
import WhoAmI from "./slides/WhoAmI";
import BastiBuck from "./slides/BastiBuck";
import AutomatedTesting from "./slides/AutomatedTesting";
import TestingTrophy from "./slides/TestingTrophy";
import UnitTest from "./slides/UnitTest";
import IntegrationTest from "./slides/IntegrationTest";
import EndToEndTest from "./slides/EndToEndTest";
import GoodTesting from "./slides/GoodTesting";
import Mantra from "./slides/Mantra";
import Cypress from "./slides/Cypress";
import LiveCoding from "./slides/LiveCoding";
import End from "./slides/End";
import GreatPower from "./slides/GreatPower";
import Disclaimer from "./slides/Disclaimer";
import TwoThird from "./slides/TwoThird";
import GoodWork from "./slides/GoodWork";
import StaticTypeCheck from "./slides/StaticTypeCheck";
import Why from "./slides/Why";
import TestLikeAUser from "./slides/TestLikeAUser";

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide", "fade"]}
        transitionDuration={500}
        theme={theme}
      >
        <Title />
        <WhoAmI />
        <BastiBuck />
        <RoadmapOne />
        <OneThird />
        <AutomatedTesting />
        <Why />
        <TestingTrophy />
        <StaticTypeCheck />
        <UnitTest />
        <IntegrationTest />
        <EndToEndTest />
        <GoodTesting />
        <TestLikeAUser />
        <Mantra />
        <RoadmapTwo />
        <TwoThird />
        <Cypress />
        <LiveCoding />
        <GreatPower />
        <GoodWork />
        <Disclaimer />
        <QA />
        <End />
      </Deck>
    );
  }
}

export default Presentation;
