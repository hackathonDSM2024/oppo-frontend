import { styled } from "styled-components";
import { AHistory } from "./AHistory";

const PurchaseHistorys = () => {
  return (
    <Container>
      <AHistory ii="직접 입력" jj="맥북 프로 14" kk="100,000원" />
      <AHistory ii="챗봇 구매" jj="크리스피 허니 눈꽃 쌀과자" kk="100,000원" />
      <AHistory ii="챗봇 포기" jj="크리스피 허니 눈꽃 쌀과자" kk="100,000원" />
      <AHistory ii="챗봇 구매" jj="삼립약과" kk="1,000원" />
      <AHistory ii="챗봇 구매" jj="라즈베리 파이" kk="10,000,000원" />
      <AHistory ii="직접 입력" jj="삼다수" kk="10,000원" />
      <AHistory ii="챗봇 구매" jj="충전기" kk="500,000원" />
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