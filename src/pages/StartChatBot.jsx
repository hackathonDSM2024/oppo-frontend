import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { MyChat } from "../components/MyChat";
import { AIChat } from "../components/AIChat";
import { GetChatById } from "../service/net/getChatById"
import { PostChatById } from "../service/net/postChatById"
import { useLocation, useNavigate } from "react-router-dom";
import { DeleteChatById } from "../service/net/deleteChatById"

const ChatBot = () => {
  const [chatList, setChatList] = useState([]);
  const [input, setInput] = useState("")
  const navigate = useNavigate()

  const textRef = useRef(null);
  const location = useLocation();
  const chatBotId = location.pathname.split("/chatBot/")[1];

  const controllTextFiled = () => {
    const textArea = textRef.current;

    const handleInput = () => {
      textArea.style.height = "32px"; // 초기 높이를 설정하여 높이 계산을 다시 함
      if (textArea.scrollHeight > textArea.clientHeight) {
        textArea.style.height = textArea.scrollHeight + "px";
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
      }
    };

    const handleBlur = () => {
      if (textArea.value.trim() === "") {
        textArea.style.height = "32px";
      }
    };

    textArea.addEventListener("input", handleInput);
    textArea.addEventListener("keydown", handleKeyDown);
    textArea.addEventListener("blur", handleBlur);

    return () => {
      textArea.removeEventListener("input", handleInput);
      textArea.removeEventListener("keydown", handleKeyDown);
      textArea.removeEventListener("blur", handleBlur);
    };
  }

  const getChat = () => {
    GetChatById({ id: chatBotId })
    .then((data) => {
      data.chats.splice(0, 2)
      setChatList(data.chats)
    })
    .catch((err) => {
      alert(err)
    })
  }

  const getPoint = (s) => {
    console.log(s.match(/기회비용 점수\s*:\s*<(\d+)>\/100/)[1])
  }

  const getUserInput = (s) => {
    return s.match(/입력:\s*(.*)/)[1]
  }

  const handleInput = (e) => {
    if (!e.target.value) {
      return
    }

    setInput(e.target.value)
  }

  const handleSendChat = () => {
    PostChatById({ id: chatBotId, content: input })
    .then(() => {
      getChat()
    })
  }  

  const handleEndChat = (type) => {
    switch(type) {
    case "CHAT_PURCHASE":
      DeleteChatById({
        id: chatBotId,
        type: "CHAT_PURCHASE"
      })
      .then(() => navigate("/"))
      .catch((err) => alert(err))
      return;
    case "CHAT_GIVE_UP":
      DeleteChatById({
        id: chatBotId,
        type: "CHAT_GIVE_UP"
      })
      .then(() => navigate("/"))
      .catch((err) => alert(err))
      return;
    }
    setInput("")
  }

  useEffect(() => {
    controllTextFiled()
    getChat()
  }, []);

  return (
    <Container>
      <ChatterBox>
        {/* <Title>맥북 프로 14</Title> */}
        <ChattingBox>
          <ChatBox>
            {chatList.map((chat) => (
              chat.type === "system" || chat.type === "assistant" ? 
                <AIChat contents={chat.content}/> 
                : 
                <MyChat contents={getUserInput(chat.content.replace("아래 형식으로 출력해줘", ""))}/>
            ))}
            <Buttons>
              <Purchase onClick={() => handleEndChat("CHAT_PURCHASE")}>구매하기</Purchase>
              <Giveup onClick={() => handleEndChat("CHAT_GIVE_UP")}>포기하기</Giveup>
            </Buttons>
          </ChatBox>
        </ChattingBox>
      </ChatterBox>
      <Answer>
        <Text ref={textRef} onChange={handleInput}/>
        <Button onClick={handleSendChat}>send</Button>
      </Answer>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.textarea`
  width: 804px;
  min-height: 32px;
  max-height: 150px;
  font-size: 20px;
  border: 1px solid #999999;
  border-radius: 4px;
  padding: 10px 25px;
  resize: none;
  overflow: scroll;
`;

const Button = styled.button`
  width: 73px;
  height: 54px;
  background-color: #4a68d9;
  border: 1px solid #4a68d9;
  border-radius: 4px;
  color: white;
`;

const Answer = styled.div`
  display: flex;
  align-items: end;
  gap: 13px;
  position: sticky;
  bottom: 20px;
  z-index: 10;
`;

const ChatterBox = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding: 0 0 100px 0;
`;

const Title = styled.p`
  color: #000;
  font-size: 30px;
  font-weight: 600;
  position: sticky;
  top: 7.9vh;
  z-index: 99;
`;

const ChattingBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 18vh;
`;

const ChatBox = styled.div`
  width: 925px;
  display: flex;
  align-items: end;
  flex-direction: column;
  gap: 30px;
  margin-top: 80px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

const Purchase = styled.button`
  width: 92px;
  height: 50px;
  border: 1px solid #4a68d9;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  border-radius: 4px;
  background-color: #4a68d9;
  cursor: pointer;
`;

const Giveup = styled.button`
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


export default ChatBot;