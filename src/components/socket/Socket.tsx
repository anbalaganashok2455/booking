"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

export default function ChatApp() {
  const [name, setName] = useState("");
  const [joined, setJoined] = useState(false);

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<Array<{ name: string; message: string }>>([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  const sendMessage = () => {
    if (!message.trim()) return;

    const data = {
      name,
      message,
    };

    socket.emit("send_message", data);
    setMessage("");
  };

  // 👉 Join screen
  if (!joined) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Enter your name</h2>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => setJoined(true)}>Join Chat</button>
      </div>
    );
  }

  // 👉 Chat screen
  return (
    <div style={{ padding: 20 }}>
      <h2>💬 Chat Room</h2>

      <div style={{
        height: "300px",
        overflowY: "auto",
        border: "1px solid #ccc",
        marginBottom: "10px",
        padding: "10px"
      }}>
        {chat.map((msg, i) => (
          <div key={i}>
            <strong>{msg.name}: </strong> {msg.message}
          </div>
        ))}
      </div>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type message..."
      />

      <button onClick={sendMessage}>Send</button>
    </div>
  );
}