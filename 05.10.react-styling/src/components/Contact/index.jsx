import React from "react";
import Form from "../Form";
import styled from "styled-components";

const Contact = () => {
  return (
    <div id="contact">
      <Container>
        <Flex className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6078.982913179021!2d49.839547966007146!3d40.375799135308135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d079efb5163%3A0xc20aa51a5f0b5e01!2sCode%20Academy!5e0!3m2!1sen!2saz!4v1715330468028!5m2!1sen!2saz"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          <Form />
        </Flex>
      </Container>
    </div>
  );
};

export default Contact;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  
`;
