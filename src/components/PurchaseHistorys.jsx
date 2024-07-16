import { styled } from "styled-components";
import { AHistory } from "./AHistory";

const PurchaseHistorys = () => {
  return (
    <Container>
      <AHistory State="직접 입력" ProductName="맥북 프로 14" Price="100,000원" />
      <AHistory State="챗봇 구매" ProductName="크리스피 허니 눈꽃 쌀과자" Price="100,000원" />
      <AHistory State="챗봇 포기" ProductName="크리스피 허니 눈꽃 쌀과자" Price="100,000원" />
      <AHistory State="챗봇 구매" ProductName="삼립약과" Price="1,000원" />
      <AHistory State="챗봇 구매" ProductName="라즈베리 파이" Price="10,000,000원" />
      <AHistory State="직접 입력" ProductName="삼다수" Price="10,000원" />
      <AHistory State="챗봇 구매" ProductName="충전기" Price="500,000원" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
`;

export default PurchaseHistorys;