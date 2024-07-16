// import React from 'react'

// const StartChatBot = () => {
//   return (
//     <div>StartChatBot</div>
//   )
// }

// export default StartChatBot


import React, { useState } from 'react';
import styled from 'styled-components';


const StartChatBot = () => {
  const [username, setUsername] = useState('');
  const [roomName, setRoomName] = useState('');

  const handleStartChat = () => {
    // 사용자 입력 정보로 새 채팅방 생성
  };

  return (
    <StartChatBotContainer>
      <Title>대화 생성하기</Title>
      <InputContainer>
        <InputField
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          type="text"
          placeholder="Room Name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
      </InputContainer>
      <StartButton onClick={handleStartChat}>대화 시작하기</StartButton>
    </StartChatBotContainer>
  );
};

export default StartChatBot;

  const StartChatBotContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
  `;
  
  const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
  `;
  
  const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  `;
  
  const InputField = styled.input`
    width: 300px;
    height: 40px;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 1rem;
    font-size: 1rem;
  `;
  
  const StartButton = styled.button`
    width: 200px;
    height: 50px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  
    &:hover {
      background-color: #0056b3;
    }
  `;