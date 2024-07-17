import React, { useState } from 'react';
import styled from 'styled-components';
import { createChat } from '../service/net/createChat';
import { useNavigate } from 'react-router-dom';


const CreateChat = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");


  const handleStartChat = () => {
    // 사용자 입력 정보로 새 채팅방 생성
    console.log('데이터 똑바로 주나 확인할거임 ㅇㅇ', name, price, description);

    createChat({
      name,
      price,
      description
    }).then((res) => {
      navigate(`/chatBot/${res.id}`);
    }).catch((err) => {
      console.error(err);
    });
  };

  return (
    <StartChatBotContainer>
      <Title>대화 생성하기</Title>
      <InputContainer>
        <InputLabel>물건 이름</InputLabel>
        <InputField
          type="text"
          placeholder="물건의 이름을 입력해주세요."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputLabel>물건 가격</InputLabel>
        <InputField
          type="text"
          placeholder="물건의 가격을 입력해주세요."
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <InputLabel>물건 특징</InputLabel>
        <ThirdInputField
          type="text"
          placeholder="물건의 특징을 입력해주세요."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </InputContainer>
      <StartButton onClick={handleStartChat}>대화 생성하기</StartButton>
    </StartChatBotContainer>
  );
};

export default CreateChat;

const StartChatBotContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
  `;

const Title = styled.h1`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 2rem;
  `;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  `;

const InputLabel = styled.label`
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 0.5rem;
  width: 512px;
  text-align: left;
`;

const InputField = styled.input`
    width: 512px;
    height: 46px;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 1rem;
    font-size: 1rem;
  `;
const ThirdInputField = styled.textarea`
  width: 512px;
  height: 197px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const StartButton = styled.button`
    width: 514px;
    height: 50px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
`