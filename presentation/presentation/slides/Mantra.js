import React from "react";
import { Slide, BlockQuote, Quote, Cite, Link } from "spectacle";

const Mantra = () => (
  <Slide bgColor="secondary" textColor="primary">
    <BlockQuote margin="0 0 5vh">
      <Quote>
        The more your tests resemble the way your software is used,
        <p style={{ margin: "45px 0 0 0" }}>
          the more confidence they can give you.
        </p>
      </Quote>
      <Cite margin="10px 0 0 30px">Kent C. Dodds</Cite>
    </BlockQuote>
    <Link
      textColor="primary"
      target="_blank"
      textSize={22}
      href="https://testing-library.com/"
      style="float: right"
    >
      https://testing-library.com/
    </Link>
  </Slide>
);

export default Mantra;
