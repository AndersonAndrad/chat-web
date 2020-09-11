import styled from 'styled-components';

export const Contanier = styled.div`
  display: flex;
  justify-content: center;
`;

export const ChatContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #eee;
`;

export const Messages = styled.div`
  height: 300px;
  background: #1783da;
  width: 100%;
`;

export const ChatBox = styled.div`
  width: 100%;
  input {
    width: 100%;
    height: 50px;
    border: 0px;
    background: #eee;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  button {
    height: 20px;
    border-radius: 4px;
    border: 0px;
    background: #f14;
    padding: 30px;
  }
`;
