import React from "react";
import { Heading, Slide, Layout, Fill, List, ListItem, Image } from "spectacle";

const images = {
  basti: require("../../assets/basti.jpg")
};

const BastiBuck = () => (
  <Slide>
    <Heading size={3} margin="0 0 30px">
      Basti, 29
    </Heading>
    <Layout>
      <Fill>
        <List>
          <ListItem>Geburt</ListItem>
          <ListItem>...</ListItem>
          <ListItem>Studium</ListItem>
          <ListItem>Softwareentwickler</ListItem>
          <ListItem margin="0 0 40px">@bastibuck</ListItem>
          <ListItem textColor="quaternary">
            FunFact: <br />7 Weisheitszähne
          </ListItem>
        </List>
      </Fill>
      <Fill>
        <Image height="60vh" src={images.basti} />
      </Fill>
    </Layout>
  </Slide>
);

export default BastiBuck;
