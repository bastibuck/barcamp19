import React from "react";
import {
  Slide,
  Heading,
  Link,
  Image,
  List,
  ListItem,
  Layout,
  Fill,
  Quote,
  Cite
} from "spectacle";

const images = {
  robot: require("../../assets/robot.gif")
};

const EndToEndTest = () => {
  return (
    <Slide>
      <Heading size={4} margin="0 0 40px">
        EndToEnd Tests
      </Heading>

      <Layout>
        <Fill style={{ paddingRight: 30 }}>
          <Quote textSize={20} textColor="secondary">
            End-to-end testing is a Software testing methodology to test an
            application flow from start to end. <br />
            The purpose of End to end testing is to simulate the real user
            scenario.
          </Quote>
          <Cite textSize={16} textAlign="right" textColor="secondary">
            <Link
              target="_blank"
              textColor={"tertiary"}
              href="https://www.softwaretestinghelp.com/what-is-end-to-end-testing/"
            >
              https://www.softwaretestinghelp.com/what-is-end-to-end-testing/
            </Link>
          </Cite>
          <List>
            <ListItem textSize={26}>Login</ListItem>
            <ListItem textSize={26}>Bestellung tätigen</ListItem>
            <ListItem textSize={26}>Einstellungen ändern</ListItem>
            <ListItem textSize={26}>...</ListItem>
          </List>
        </Fill>
        <Fill>
          <Image src={images.robot} />
          <Link
            href="https://giphy.com/gifs/robot-ykdIn9MLP1fgs"
            target="_blank"
            textSize={18}
            textColor={"tertiary"}
          >
            https://giphy.com/gifs/robot-ykdIn9MLP1fgs
          </Link>
        </Fill>
      </Layout>
    </Slide>
  );
};

export default EndToEndTest;
