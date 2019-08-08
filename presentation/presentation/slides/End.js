import React from "react";
import { Slide, Heading, Image, List, ListItem } from "spectacle";

const images = {
  weluse: require("../../assets/logo-white.svg")
};

const End = () => {
  return (
    <Slide bgColor="secondary" transition={["fade"]}>
      <Heading margin="12vh 0 30vh">Danke</Heading>

      <List textColor="primary" textAlign="right">
        <ListItem bulletStyle=" ">Basti Buck</ListItem>
        <ListItem bulletStyle=" " textSize={24} margin="0 0 6px">
          sbuck@weluse.de
        </ListItem>
        <ListItem bulletStyle=" " textSize={24} margin="0 0 1.6em">
          @bastibuck
        </ListItem>
        <ListItem bulletStyle=" ">
          <img src={images.weluse} width={140} />
        </ListItem>
      </List>
    </Slide>
  );
};

export default End;
