import React from "react";
import { Link } from "react-router-dom";
import { flexCenter, h2 } from "../styles";
import Hero from "react-bulma-components/lib/components/hero";
import Section from "react-bulma-components/lib/components/section";
import Heading from "react-bulma-components/lib/components/heading";
import Button from "react-bulma-components/lib/components/button";
import PostCodeForm from "../components/PostCodeForm";
import { STEPS } from "../libs/images";

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <HeroSection />
        <HowDoesItWork />
      </div>
    );
  }
}

const HeroSection = () => {
  return (
    <Section className="hero-background">
      <Hero>
        <Hero.Body>
          <Heading>Hälsosamma soppor hem till dig</Heading>
          <br />
          <PostCodeForm />
          <Link to={"/products"}>
            <Button>Se vår meny</Button> <br />
          </Link>
        </Hero.Body>
      </Hero>
    </Section>
  );
};

const HowDoesItWork = () => {
  return (
    <Section>
      <h1 className="title" style={{ textAlign: "center" }}>
        Hur fungerar det?
      </h1>
      <Row>
        <Column>
          <img
            alt="step-1"
            style={{ width: "60%", height: "auto" }}
            src={STEPS["1"]}
          />
        </Column>
        <Column>
          <h2 style={h2}>Välj en av våra hälsomsamma soppor</h2>
        </Column>
      </Row>
      <Row>
        <Column>
          <h2 style={h2}>
            Beställ soppa till dig själv eller som en gåva till nära och kära
          </h2>
        </Column>
        <Column>
          <img
            alt="step-2"
            style={{ width: "60%", height: "auto" }}
            src={STEPS["2"]}
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <img
            alt="step-3"
            style={{ width: "60%", height: "auto" }}
            src={STEPS["3"]}
          />
        </Column>
        <Column>
          <h2 style={h2}>Ta emot din leverans och njut</h2>
        </Column>
      </Row>
    </Section>
  );
};

const Row = ({ children }) => (
  <div
    style={{
      display: "flex",
      maxWidth: "500px",
      margin: "0 auto",
      padding: "30px 0"
    }}
  >
    {children}
  </div>
);

const Column = ({ children }) => (
  <div style={{ ...flexCenter, width: "48%", padding: "0 2%" }}>{children}</div>
);
