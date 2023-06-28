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
  const scrollEnd = useRef<HTMLDivElement>(null);

  const [input, setInput] = useState("");
  const [request, setRequest] = useState("");
  const [messages, setMessages] = useState([
    { request: "Hello!", response: "Hello! What can I do for you today?" },
  ]);

  const updateScroll = () => {
    if (scrollEnd.current) {
      scrollEnd.current.scrollIntoView({ behavior: "auto" });
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateScroll();
    });
    setTimeout(() => {
      clearInterval(intervalId);
    }, 7000);
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
      <div className="messages">
        {messages.map((message, i) => {
          return (
            <Message key={i}>
              <UserRequest text={message.request} />
              <AIResponse text={message.response} />
            </Message>
          );
        })}
        <div style={{ margin: "-1rem 0 0 0", height: 0 }} ref={scrollEnd}></div>
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
