import React from "react";
import { Slide, Heading, List, ListItem, Link } from "spectacle";

const images = {
  weluse: require("../../assets/logo-white.svg")
};

const End = () => {
  return (
    <Slide bgColor="secondary" transition={["fade"]}>
      <Heading margin="12vh 0 0">Danke</Heading>
      <Link
        style={{ marginBottom: "20vh", display: "inline-block" }}
        href="https://github.com/bastibuck/barcamp19"
        textColor="primary"
        textSize={22}
        target="_blank"
      >
        https://github.com/bastibuck/barcamp19
      </Link>

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
