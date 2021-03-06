import React from "react";
import Columns from "react-bulma-components/lib/components/columns";
import Image from 'react-bulma-components/lib/components/image';
import Header from 'react-bulma-components/lib/components/heading';
import Content from 'react-bulma-components/lib/components/content';

import { TESTIMONIALS } from "../libs/images";

export default () => {
  return (
    <React.Fragment>
      {TESTIMONIALS.map(testimonial => (
        <Columns.Column
        >
          <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: "wrap",
              marginBottom: "2rem"
          }}>
          <div style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              }}>
            <Image
              src={testimonial.image}
              className="testimonial-image"
              style={{width: "75%", height: "75%"}}
            />
            </div>
            <Content>
            <Header style={{textAlign: "center", color: "white", marginTop: "15px"}}>{testimonial.name}</Header>
            <p className="subtitle is-4" style={{fontStyle: "italic", color: "white", textAlign: "center" }}>"{testimonial.quote}"</p>
            </Content>
          </div>
        </Columns.Column>
      ))}
    </React.Fragment>
  );
};
