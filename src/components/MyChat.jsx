import React from "react";
import styled from "styled-components";

export const MyChat = ({ contents }) => {
  const formattedContents = contents.split("\n").map((item, index) => (
    <React.Fragment key={index}>
      {item}
      <br />
    </React.Fragment>
  ));
  return <Container>{formattedContents}</Container>;
};

const Container = styled.div`
  width: 56.5%;
  padding: 13px 15px 16px 23px;
  color: #000;
  font-size: 15px;
  line-height: 20px;
  font-weight: 500;
  background-color: #eeeeee;
  border-radius: 4px;
  border: none;
  letter-spacing: -0.5px;
`;
