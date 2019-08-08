import React from "react";
import { Slide, Heading, List, ListItem } from "spectacle";
import styled from "styled-components";

const Icon = styled.span`
  -webkit-filter: ${props => (props.disabled ? "grayscale(100%)" : "none")};
  filter: ${props => (props.disabled ? "grayscale(100%)" : "none")};
`;

const Roadmap = () => {
  return (
    <Slide bgColor="primary">
      <Heading>Wo stehen wir?</Heading>
      <List>
        <ListItem margin="15px 0" bulletStyle=" ">
          <Icon>👋</Icon> Moin!
        </ListItem>
        <ListItem margin="15px 0" bulletStyle=" ">
          <Icon>👨‍💻</Icon> Wer ist der Typ?
        </ListItem>
        <ListItem margin="15px 0" bulletStyle=" ">
          <Icon>🧪</Icon> Automatisiertes Testing
        </ListItem>
        <ListItem margin="15px 0" bulletStyle=" ">
          <Icon>🤩</Icon> Gute Tests
        </ListItem>
        <ListItem margin="15px 0" bulletStyle=" " textColor="quaternary">
          <Icon disabled={true}>🌲</Icon> Cypress
        </ListItem>
        <ListItem margin="15px 0" bulletStyle=" " textColor="quaternary">
          <Icon disabled={true}>✍️</Icon> Live Coding
        </ListItem>
      </List>
    </Slide>
  );
};

export default Roadmap;
