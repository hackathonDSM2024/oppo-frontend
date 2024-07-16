import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { MyChat } from "../components/MyChat";
import { AIChat } from "../components/AIChat";

const ChatBot = () => {
  const textRef = useRef(null);

  useEffect(() => {
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
  }, []);

  return (
    <Container>
      <ChatterBox>
        <Title>맥북 프로 14</Title>
        <ChattingBox>
          <ChatBox>
            <MyChat
              contents={`물건 기본 정보\n물건 이름: 맥북 프로 14\n가격: 100,000원\n특징: 비쌈, 개발하기 좋음`}
            />
            <MyChat
              contents={`맥북은 소프트웨어 개발에 있어 매우 유용한 도구입니다. 특히 iOS
              개발에 관심이 있거나 유닉스 기반 환경을 선호한다면 좋은 선택이 될
              수 있습니다. 그러나 예산과 필요 사항을 고려해 윈도우나 리눅스
              노트북도 좋은 대안이 될 수 있습니다. 학교에서 요구하는 사항이나
              친구들이 추천하는 이유를 좀 더 구체적으로 알아보고, 예산과 필요에
              맞는 최적의 선택을 하시길 바랍니다.`}
            />
            <AIChat
              contents={`맥북은 소프트웨어 개발에 있어 매우 유용한 도구입니다. 특히 iOS 개발에 관심이 있거나 유닉스 기반 환경을 선호한다면 좋은 선택이 될 수 있습니다. 그러나 예산과 필요 사항을 고려해 윈도우나 리눅스 노트북도 좋은 대안이 될 수 있습니다. 학교에서 요구하는 사항이나 친구들이 추천하는 이유를 좀 더 구체적으로 알아보고, 예산과 필요에 맞는 최적의 선택을 하시길 바랍니다.
맥북은 소프트웨어 개발에 있어 매우 유용한 도구입니다. 특히 iOS 개발에 관심이 있거나 유닉스 기반 환경을 선호한다면 좋은 선택이 될 수 있습니다. 그러나 예산과 필요 사항을 고려해 윈도우나 리눅스 노트북도 좋은 대안이 될 수 있습니다. 학교에서 요구하는 사항이나 친구들이 추천하는 이유를 좀 더 구체적으로 알아보고, 예산과 필요에 맞는 최적의 선택을 하시길 바랍니다.
맥북은 소프트웨어 개발에 있어 매우 유용한 도구입니다. 특히 iOS 개발에 관심이 있거나 유닉스 기반 환경을 선호한다면 좋은 선택이 될 수 있습니다. 그러나 예산과 필요 사항을 고려해 윈도우나 리눅스 노트북도 좋은 대안이 될 수 있습니다. 학교에서 요구하는 사항이나 친구들이 추천하는 이유를 좀 더 구체적으로 알아보고, 예산과 필요에 맞는 최적의 선택을 하시길 바랍니다.`}
            />
          </ChatBox>
        </ChattingBox>
      </ChatterBox>
      <Answer>
        <Text ref={textRef} />
        <Button></Button>
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
  overflow: auto;
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
  width: 56.67vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  color: #000;
  font-size: 30px;
  font-weight: 600;
  position: sticky;
  top: 7.9vh;
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
`;

export default ChatBot;
