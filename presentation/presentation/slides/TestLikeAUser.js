import React from "react";
import { Slide, Heading, List, ListItem } from "spectacle";

const TestLikeAUser = () => (
  <Slide>
    <Heading size={4}>Gute Tests...</Heading>
    <List>
      <ListItem textSize={30}>✅ imitieren das Verhalten des Nutzers</ListItem>
      <ListItem textSize={30}>
        ✅ schlagen nur fehl, wenn die Anwendung nicht mehr geht
      </ListItem>
      <ListItem textSize={30}>
        ✅ testen Verhalten der Software, nicht Implementierung
      </ListItem>
      <ListItem textSize={30}>
        ✅ decken Schwachstellen in der Accessibility auf
      </ListItem>
    </List>
  </Slide>
);

export default TestLikeAUser;
