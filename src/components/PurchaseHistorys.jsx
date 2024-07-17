import { styled } from "styled-components";
import { AHistory } from "./AHistory";
import { Link } from "react-router-dom";

const PurchaseHistorys = ({histories}) => {
  return (
    <Container>
      {histories.map((history) => 
        history.type.purchaseType === "DIRECT" ?
          <AHistory Id={history.chatId} State={history.type.purchaseType} ProductName={history.name} Price={history.price} />
          :
          <Link to={`/chatBot/${history.chatId}`}>
            <AHistory Id={history.chatId} State={history.type.purchaseType} ProductName={history.name} Price={history.price} /> 
          </Link>
      )}
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