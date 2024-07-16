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
        <Buttons>
          <Purchase>구매하기</Purchase>
          <Giveup>포기하기</Giveup>
        </Buttons>
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

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

const Purchase = styled.button`
  width: 92px;
  height: 50px;
  border: 1px solid #4a68d9;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  border-radius: 4px;
  background-color: #4a68d9;
  cursor: pointer;
`;

const Giveup = styled.button`
  width: 91px;
  height: 50px;
  border: 1px solid #3443be;
  color: #3443be;
  font-size: 14px;
  font-weight: 700;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
`;
