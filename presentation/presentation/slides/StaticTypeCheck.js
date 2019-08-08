import React from "react";
import { Slide, Heading, Image } from "spectacle";

const images = {
  ts: require("../../assets/TS.png")
};

const StaticTypeCheck = () => (
  <Slide>
    <Heading size={4}>Static TypeChecking</Heading>
    <Image src={images.ts} />
  </Slide>
);

export default StaticTypeCheck;
