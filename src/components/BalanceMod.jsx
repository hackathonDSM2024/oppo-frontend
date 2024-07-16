import { React } from "react";
import { styled, keyframes } from "styled-components";
import X from "../asset/img/X.png";

export const BalanceMod = ({ handleModalB }) => {
  return (
    <Container>
      <ModalBox>
        <InnerBox>
          <InnerHead>
            <Title>잔고 수정</Title>
            <TheX src={X} onClick={handleModalB} />
          </InnerHead>
          <MinerDiv>
            <NamePrice>
              <NP>잔고 (단위: 원)</NP>
              <NPInput type="text" placeholder="새 잔고를 입력해주세요." />
            </NamePrice>
          </MinerDiv>
          <ButtonBox>
            <Cancel onClick={handleModalB}>취소</Cancel>
            <Mod onClick={handleModalB}>수정</Mod>
          </ButtonBox>
        </InnerBox>
      </ModalBox>
    </Container>
  );
};

const fadeIn = keyframes`
  0% {
	opacity: 0;
  }
  100% {
	opacity: 1;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ModalBox = styled.div`
  width: 526px;
  height: 310px;
  display: flex;
  background-color: #fff;
  border-radius: 8px;
  border: none;
  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.19);
  z-index: 10;
  animation: ${fadeIn} 0.5s;
  padding: 33px 53px;
`;

const InnerBox = styled.div`
  width: 549px;
  display: flex;
  flex-direction: column;
  gap: 52px;
`;

const InnerHead = styled.div`
  width: 549px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 27px;
`;

const Title = styled.p`
  color: #000;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -1px;
`;

const TheX = styled.img`
  width: 19px;
  height: 19px;
  cursor: pointer;
`;

const NamePrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MinerDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const NP = styled.p`
  color: #555555;
  font-size: 14px;
  font-weight: 500;
  margin-left: 9.37px;
`;

const NPInput = styled.input`
  width: 487px;
  height: 44px;
  border-radius: 4px;
  background-color: #f9f9f9;
  border: 1px solid #999999;
  padding-left: 25px;
  color: #999999;
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  cursor: text;
  &:focus::placeholder {
    color: transparent;
  }
`;

const ButtonBox = styled.div`
  width: 549px;
  display: flex;
  justify-content: flex-end;
  gap: 23px;
`;

const Cancel = styled.button`
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

const Mod = styled.button`
  width: 104px;
  height: 50px;
  border: none;
  background-color: #4A68D9;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
`;
