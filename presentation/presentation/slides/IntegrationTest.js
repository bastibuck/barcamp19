import React from "react";
import { Slide, Heading, List, ListItem } from "spectacle";
import styled from "styled-components";

const Error = styled.p`
  color: red;
  font-size: 20px;
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 1.2em;
`;

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
  margin-top: 4rem;
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

const IntegrationTest = () => {
  const [data, setData] = React.useState({ email: "" });
  const [submittedOnce, setSubmittedOnce] = React.useState(false);

  const handleEmailChange = e => {
    setData({ ...data, email: e.currentTarget.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      !data.email ||
      !data.email.includes("@") ||
      !data.email.includes(".de")
    ) {
      return;
    }

    alert("E-Mail: " + data.email);

    setSubmittedOnce(true);
    setData({ email: "" });
  };

  const valid = data.email.includes("@") && data.email.includes(".de");

  return (
    <Slide>
      <Heading size={4} margin="0 0 40px">
        Integration Tests
      </Heading>

      <form onSubmit={handleSubmit}>
        <label>E-Mail: </label>
        <Input type="text" onChange={handleEmailChange} value={data.email} />
        {data.email && !valid && (
          <Error>Bitte geben Sie eine E-Mail-Adresse ein</Error>
        )}
        <br />
        <Button
          text="Simple Button"
          disabled={!valid}
          handleClick={handleSubmit}
        />
      </form>

      {submittedOnce && (
        <List>
          <ListItem textSize={26}>Button korrekt deaktiviert</ListItem>
          <ListItem textSize={26}>Senden nicht möglich</ListItem>
          <ListItem textSize={26}>Zurücksetzen nach Senden</ListItem>
          <ListItem textSize={26}>Korrekte Funktion ausführen</ListItem>
          <ListItem textSize={26}>...</ListItem>
        </List>
      )}
    </Slide>
  );
};

export default IntegrationTest;
