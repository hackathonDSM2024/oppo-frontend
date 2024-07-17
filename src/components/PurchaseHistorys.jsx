import { styled } from "styled-components";
import { AHistory } from "./AHistory";
import { useId } from "react";

const PurchaseHistorys = ({histories}) => {
  return (
    <Container>
      {histories.map((history) => (
        <AHistory Id={history.id} State={history.type} ProductName={history.name} Price={history.price} />
      ))}
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