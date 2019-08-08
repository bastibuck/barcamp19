import React from "react";
import { Slide, Image, Link } from "spectacle";

const images = {
  goodWork: require("../../assets/good-work.gif")
};

const GoodWork = () => {
  return (
    <Slide bgColor="primary">
      <Image src={images.goodWork} height={"50vh"} />
      <Link
        href="https://giphy.com/gifs/retro-thumbs-up-XreQmk7ETCak0"
        target="_blank"
        textSize={18}
        textColor={"tertiary"}
      >
        https://giphy.com/gifs/retro-thumbs-up-XreQmk7ETCak0
      </Link>
    </Slide>
  );
};

export default GoodWork;
