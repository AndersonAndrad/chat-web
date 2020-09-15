import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import socket from '../../service/socketio/socket.service';

export default function Room1() {
  const [message, setMessage] = useState('');
  const [received, setReceived] = useState([]);

  function renderMessage() {
    socket.on('messageToClient', (data) => {
      setReceived([...received, data]);
    });
  }

  socket.on('previusMessage', (data) => {
    setReceived(data);
  });

  function handleNewMessage(event) {
    event.preventDefault();

    const data = {
      id: uuid(),
      room: 1,
      user: 'anderson.andrade',
      message,
    };

    renderMessage();

    if (message.length) {
      socket.emit('msgToServer', data);
    }
  }

  useEffect(() => {
    socket.on('previusMessage', (data) => {
      setReceived(data);
    });
  }, [received]);

  return (
    <div>
      <form onSubmit={handleNewMessage}>
        <label>Room1</label>
        <br />
        <label>Message</label>
        <br />
        <input
          type="text"
          onChange={(event) => setMessage(event.target.value)}
        />
        <br />
        <button type="submit">Send Message</button>
      </form>
      <ul>
        {received !== undefined
          ? received.map((msg) =>
              msg.room === 1 ? (
                <li key={msg.id}>
                  <strong>{msg.user}</strong>: <label>{msg.message}</label>
                </li>
              ) : null
            )
          : null}
      </ul>
    </div>
  );
}
