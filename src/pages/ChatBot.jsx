import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const ChatBot = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textArea = textRef.current;

    const handleInput = () => {
      const lines = textArea.value.split("\n").length;
      textArea.style.height = "auto";
      if (lines > 1) {
        textArea.style.height = textArea.scrollHeight + "px";
      } else {
        textArea.style.height = "32px"; // 첫 줄 입력에서는 높이를 고정
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
      }
    };

    const handleBlur = () => {
      if (textArea.value.trim() === "") {
        textArea.style.height = "32px"; // 최소 크기로 설정
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
    <>
      <Container>
        <Answer>
          <Text ref={textRef} />
          <Button>Send</Button>
        </Answer>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
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
  position: absolute;
  bottom: 20px;
  left: 25vw;
`;

export default ChatBot;
