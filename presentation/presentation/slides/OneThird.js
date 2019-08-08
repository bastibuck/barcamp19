import React from "react";
import { Slide, Image, Link } from "spectacle";

const images = {
  onethird: require("../../assets/yes.gif")
};

const OneThird = () => {
  return (
    <Slide bgColor="primary">
      <Image src={images.onethird} height={"50vh"} />
      <Link
        textSize={18}
        href="https://giphy.com/gifs/win-nXxOjZrbnbRxS"
        target="_blank"
        textColor={"tertiary"}
      >
        https://giphy.com/gifs/win-nXxOjZrbnbRxS
      </Link>
    </Slide>
  );
};

export default OneThird;
