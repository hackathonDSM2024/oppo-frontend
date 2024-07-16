// 쳇봇 대화 페이지

import React from 'react'

import styled from 'styled-components'

const ChatBot = () => {
  return (
    <>
      <div>ChatBot</div>
      <Container action='#'>
        <fieldset>
          <Text type='text'></Text>
          <Button type='button'></Button>
        </fieldset>
      </Container>
    </>
  )
}

const Container = styled.form`
  width: 100vw;
  height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    border-radius: 4px;
`

const Text = styled.input`
  width: 700px;
  height: 30px;
  margin-top: 500px;
  border-radius: 4px;
`

const Button = styled.input`
  width: 50px;
  height: 36px;
  margin-left: 10px;
  background-color: #3f3fff;
  border: 1px solid black;
  border-radius: 4px;
`

export default ChatBot