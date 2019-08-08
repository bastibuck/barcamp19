import React from "react";
import { Slide, Heading, Image, Link } from "spectacle";

const images = {
  ama: require("../../assets/ama.gif")
};

const QA = () => {
  return (
    <Slide bgColor="primary">
      <Heading margin="0 0 40px">Ask me anything</Heading>
      <Image src={images.ama} height={"40vh"} />
      <Link
        href="https://giphy.com/gifs/dogs-puppy-confused-xT0xeuOy2Fcl9vDGiA"
        target="_blank"
        textSize={18}
        textColor={"tertiary"}
      >
        https://giphy.com/gifs/dogs-puppy-confused-xT0xeuOy2Fcl9vDGiA
      </Link>
    </Slide>
  );
};

export default QA;
