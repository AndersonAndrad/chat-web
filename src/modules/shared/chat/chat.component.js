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
          <label>
            <ul>
              {props.messages.map((msg) => (
                <li key={msg.id}>
                  <label>
                    <strong>{msg.user}</strong>: <p>{msg.message}</p>
                  </label>
                </li>
              ))}
            </ul>
          </label>
        </Messages>
      </ChatContainer>
    </Contanier>
  );
}
