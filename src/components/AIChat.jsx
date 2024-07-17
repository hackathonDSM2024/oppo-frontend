import React from "react";
import styled from "styled-components";
import Profile from "../asset/img/Profile.png";

export const AIChat = ({ contents }) => {
  const formattedContents = contents.split("\n").map((item, index) => (
    <React.Fragment key={index}>
      {item}
      <br />
    </React.Fragment>
  ));
  return (
    <Container>
      <Profiled src={Profile} />
      <ContentContain>
        <Content>{formattedContents}</Content>
        
      </ContentContain>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 44px;
`;

const Profiled = styled.img`
  width: 60px;
  height: 60px;
`;

const ContentContain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

const Content = styled.p`
  width: 100%;
  color: #000000;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.5px;
`;

