import React from "react";
import { Slide, Heading, Image, Link } from "spectacle";

const images = {
  why: require("../../assets/why.gif")
};

const Why = () => (
  <Slide>
    <Heading margin="0 0 20px" size={4}>
      Warum testen?
    </Heading>
    <Image src={images.why} height={"50vh"} />
    <Link
      href="https://giphy.com/gifs/DffShiJ47fPqM"
      target="_blank"
      textSize={18}
      textColor={"tertiary"}
    >
      https://giphy.com/gifs/DffShiJ47fPqM
    </Link>
  </Slide>
);

export default Why;
