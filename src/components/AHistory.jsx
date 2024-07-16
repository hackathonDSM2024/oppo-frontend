import { styled } from "styled-components";

export const AHistory = ({ ii, jj, kk }) => {
  return (
    <Container>
      <ItemBox>
        <ItemName>{jj}</ItemName>
        <ItemPrice>| {kk}</ItemPrice>
        <Record ii={ii}>{ii}</Record>
      </ItemBox>
      <HistoryDate>2024.07.18 12:34</HistoryDate>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: calc(100% - 50px);
  height: 70px;
  border-radius: 5px;
  border: 1px solid #dddddd;
  padding: 0 27px 0 23px;
  align-items: center;
  justify-content: space-between;
`;

const ItemBox = styled.div`
  display: flex;
  gap: 12px;
`;

const HistoryDate = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #555555;
`;

const ItemName = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #343434;
`;

const ItemPrice = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #999999;
`;

const Record = styled.div`
  display: flex;
  width: 68px;
  height: 26px;
  background-color: ${(props) =>
    props.ii === "챗봇 포기"
      ? "#fff0f0"
      : props.ii === "챗봇 구매"
      ? "#ecf9fe"
      : "#eeeeee"};
  font-size: 12px;
  font-weight: 500;
  color: ${(props) =>
    props.ii === "챗봇 포기"
      ? "#c23535"
      : props.ii === "챗봇 구매"
      ? "#0c408b"
      : "#202020"};
  border-radius: 13px;
  justify-content: center;
  align-items: center;
`;