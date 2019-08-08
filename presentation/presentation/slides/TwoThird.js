import React from "react";
import { Slide, Image, Link } from "spectacle";

const images = {
  twothird: require("../../assets/hellyes.gif")
};

const TwoThird = () => {
  return (
    <Slide bgColor="primary">
      <Image src={images.twothird} height={"50vh"} />
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
};

export default TwoThird;
