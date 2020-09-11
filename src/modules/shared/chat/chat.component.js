import React from 'react';
import {
  Contanier,
  Title,
  Messages,
  ChatBox,
  ButtonContainer,
  ChatContainer,
} from './chat.styles';

export default function Chat(props) {
  return (
    <Contanier>
      <ChatContainer>
        <Title>
          <label>{props.title}</label>
        </Title>
        <Messages>
          <label>message</label>
        </Messages>
        <ChatBox>
          <input type="text" />
        </ChatBox>
        <ButtonContainer>
          <button>Send</button>
        </ButtonContainer>
      </ChatContainer>
    </Contanier>
  );
}
