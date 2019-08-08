import React from "react";
import { Slide, Heading, Text, List, ListItem } from "spectacle";
import styled from "styled-components";

const StyledButton = styled.button`
  background: ${props =>
    props.disabled ? "#ccc" : props.bgColor ? props.bgColor : "deeppink"};
  padding: 10px 20px;
  font-size: 1.8rem;
  color: ${props => (props.disabled ? "#666" : "#fcfcfc")};
  border-radius: 2px;
  border: none;
  min-width: 120px;
  outline: none;
  margin: 10px;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    box-shadow: ${props => !props.disabled && "0 0 10px 2px #888;"};
  }
`;

const Button = props => {
  return (
    <StyledButton onClick={props.handleClick} title={props.tooltip} {...props}>
      {props.text}
    </StyledButton>
  );
};

const UnitTest = () => {
  const [showMultiBtns, setShowMultiBtns] = React.useState(false);
  const [lastClicked, setLastClicked] = React.useState(null);

  return (
    <Slide>
      <Heading size={4}>Unit Tests</Heading>

      {!showMultiBtns ? (
        <>
          <Button
            text="Simple Button"
            handleClick={() => setShowMultiBtns(true)}
          />

          <Text margin="20px 0" style={{ opacity: lastClicked ? 1 : 0 }}>
            Last Click: {lastClicked}
          </Text>
        </>
      ) : (
        <>
          <Button text="Test" handleClick={() => setLastClicked("Test")} />
          <Button
            text="Secondary"
            bgColor="#2790B0"
            tooltip="Optionaler Tooltip"
            handleClick={() => setLastClicked("Secondary")}
          />
          <Button
            text="Disabled"
            disabled
            handleClick={() => setLastClicked("Disabled")}
          />
          <Text margin="20px 0" style={{ opacity: lastClicked ? 1 : 0 }}>
            Last Click: {lastClicked}
          </Text>
          <List>
            <ListItem textSize={26}>Beschriftung</ListItem>
            <ListItem textSize={26}>Hintergrundfarbe</ListItem>
            <ListItem textSize={26}>Aktion</ListItem>
            <ListItem textSize={26}>Tooltip</ListItem>
            <ListItem textSize={26}>Deaktivieren</ListItem>
            <ListItem textSize={26}>...</ListItem>
          </List>
        </>
      )}
    </Slide>
  );
};

export default UnitTest;
