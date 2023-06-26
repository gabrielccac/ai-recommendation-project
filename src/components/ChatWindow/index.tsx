import { useState, useEffect, useRef } from "react";
import sendIcon from "../../assets/send.svg";
import { Container, Message } from "./styles";
import { UserRequest } from "../UserRequest";
import { AIResponse } from "../AIResponse";
import axios from "axios";

interface Message {
  request: string;
  response: string;
}

export function ChatWindow() {
  const messagesRef = useRef<HTMLDivElement>(null);

  const [input, setInput] = useState("");
  const [request, setRequest] = useState("");
  const [messages, setMessages] = useState([
    { request: "Hello!", response: "Nahhh" },
  ]);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/data?text=${request}`
        );
        setMessages((prevMessages) => [
          ...prevMessages,
          { request: request, response: response.data },
        ]);
      } catch (error) {
        console.log(error);
      }
    };

    if (request) {
      fetchData();
    }
  }, [request]);

  return (
    <Container>
      <div className="messages" ref={messagesRef}>
        {messages.map((message, i) => {
          return (
            <Message key={i}>
              <UserRequest text={message.request} />
              <AIResponse text={message.response} />
            </Message>
          );
        })}
      </div>
      <form
        className="request-container"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(input);
          setRequest(input);
          setInput("");
        }}
      >
        <input
          className="request-input"
          type="text"
          placeholder="Ask for a recommendation..."
          value={input}
          onChange={(e) => {
            e.preventDefault();

            setInput(e.target.value);
          }}
        />
        <button className="send-button">
          <img src={sendIcon} alt="Send" />
        </button>
      </form>
    </Container>
  );
}
