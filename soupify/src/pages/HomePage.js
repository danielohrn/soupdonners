import React from "react";
import { Link } from "react-router-dom";
import { flexCenter, h2 } from "../styles";
import Hero from "react-bulma-components/lib/components/hero";
import Section from "react-bulma-components/lib/components/section";
import Columns from "react-bulma-components/lib/components/columns";
import Heading from "react-bulma-components/lib/components/heading";
import Button from "react-bulma-components/lib/components/button";
import PostCodeForm from "../components/PostCodeForm";
import { STEPS } from "../libs/images";
import { PRIMARY_GREEN } from "../constants";
import Testimonial from "../components/Testimonial";

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <HeroSection />
        <HowDoesItWork />
        <TestimonialsSection/>
      </div>
    );
  }
}

const HeroSection = () => {
  return (
    <Section className="hero-background">
      <Hero>
        <Hero.Body>
          <Heading>Soppogram</Heading>
          <br />
          <Heading size={5}>Vi levererar i Stockholms innerstad</Heading>
          <br />
          <PostCodeForm style={{ maxWidth: 480 }} />
          <Link to={"/products"}>
            <Button
              style={{
                background: PRIMARY_GREEN,
                border: "none",
                color: "white"
              }}
            >
              Se vår meny
            </Button>{" "}
            <br />
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
          <h2 class="subtitle is-5">Välj en av våra hälsomsamma soppor</h2>
        </Column>
      </Row>
      <Row>
        <Column>
          <h2 class="subtitle is-5">
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
          <h2 class="subtitle is-5">Ta emot din leverans och njut</h2>
        </Column>
      </Row>
    </Section>
  );
};

const TestimonialsSection = () => {
  return (
    <Section className="hero is-bold" style={{
      backgroundColor: PRIMARY_GREEN
    }}>
    
      <div class="hero-body">
      <div class="container has-text-centered">
      <Heading size={"1"} style={{color: "white", margin: "2rem 0rem"}}>
      Från Kunder
      </Heading>
      </div> 
      </div>
    
    <Columns>

    <Testimonial/>
    </Columns>
    </Section>
)
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
