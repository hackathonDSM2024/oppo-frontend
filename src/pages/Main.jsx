// 내역 보기 페이지
import React, { useEffect } from "react";
import { useState } from "react";
import { styled } from "styled-components";
import { BalanceMod } from "../components/BalanceMod";
import { DirectInput } from "../components/DirectInput";
import PurchaseHistorys from "../components/PurchaseHistorys";
import { getBalance } from "../service/net/getBalance";
import { GetPurchase } from "../service/net/getPurchase"
import { Link } from "react-router-dom";

const MainPage = () => {
  const [userBalance, setUserBalance] = useState(0);
  const [histories, setHistories] = useState([])

  // Modal State
  const [onBalanceModi, setOnB] = useState(false);
  const [onDirectModi, setOnD] = useState(false);

  const handleModalD = () => {
    setOnD(!onDirectModi);
  };

  const handleModalB = () => {
    setOnB(!onBalanceModi);
  };

  useEffect(() => {
    GetPurchase()
    .then((data) => {
      setHistories(data.purchaseHistory)
    })
    .catch((err) => {
      alert(err)
    })

    getBalance()
    .then((data) => {
      setUserBalance(data.balance)
    })
    .catch((err) => {
      alert(err)
    })
  }, [])

  return (
    <Container>
      <CenterBox>
        <Headers>
          <HeadBox>
            <PurchaseHistory>구매내역</PurchaseHistory>
            <MyBalance>현재 잔고: {userBalance}원
            </MyBalance>
          </HeadBox>
          <Buttons>
            <ModOrDirect onClick={handleModalB}>잔고 수정</ModOrDirect>
            <ModOrDirect onClick={handleModalD}>직접 입력</ModOrDirect>
            <Link to="/createChat"><NewChatStart>새 채팅 시작하기</NewChatStart></Link>
          </Buttons>
        </Headers>
        <PurchaseHistorys histories={histories} />
      </CenterBox>
      {onDirectModi ? <DirectInput handleModalD={handleModalD} /> : null}
      {onBalanceModi ? <BalanceMod handleModalB={handleModalB} /> : null}
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