// 내역 보기 페이지
import React from "react";
import { styled } from "styled-components";
import PurchaseHistorys from "../components/PurchaseHistorys";

const MainPage = () => {
  return (
    <Container>
      <CenterBox>
        <Headers>
          <HeadBox>
            <PurchaseHistory>구매내역</PurchaseHistory>
            <MyBalance>현재 잔고: 100,000,000원</MyBalance>
          </HeadBox>
          <Buttons>
            <ModOrDirect>잔고 수정</ModOrDirect>
            <ModOrDirect>직접 입력</ModOrDirect>
            <NewChatStart>새 채팅 시작하기</NewChatStart>
          </Buttons>
        </Headers>
        <PurchaseHistorys />
      </CenterBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterBox = styled.div`
  display: flex;
  width: 53.65vw;
  height: 75vh;
  flex-direction: column;
  gap: 37px;
`;

const Headers = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const HeadBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const PurchaseHistory = styled.p`
  font-size: 30px;
  font-weight: 600;
`;

const MyBalance = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

const Buttons = styled.div`
  display: flex;
  gap: 13px;
  margin-top: 4px;
`;

const ModOrDirect = styled.button`
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

const NewChatStart = styled.button`
  width: 135px;
  height: 50px;
  border: 1px solid #3443be;
  background-color: #3443be;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
`;

export default MainPage;
