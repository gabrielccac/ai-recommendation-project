import { useState, useEffect, useRef } from "react";
import sendIcon from "../../assets/send.svg";
import { Container, Message } from "./styles";
import { UserRequest } from "../UserRequest";
import { AIResponse } from "../AIResponse";
import axios from "axios";

interface Message {
  content: string;
  bot_response: string;
}

interface ChatWindowProps {
  currentChat: number | null;
  messages: Message[] | null;
  setMessages: React.Dispatch<React.SetStateAction<Message[] | null>>;
  toggleReload: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ChatWindow({
  currentChat,
  messages,
  setMessages,
  toggleReload,
}: ChatWindowProps) {
  const scrollEnd = useRef<HTMLDivElement>(null);

  const [input, setInput] = useState<string>("");
  const [request, setRequest] = useState<string>("");

  const updateScroll = () => {
    if (scrollEnd.current) {
      scrollEnd.current.scrollIntoView({ behavior: "auto" });
    }
  };

  // useEffect(() => {
  //   updateScroll();
  // }, [messages]);

  // useEffect(() => {
  //   setRequest("");
  // }, [currentChat]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateScroll();
    });
    setTimeout(() => {
      clearInterval(intervalId);
    }, 2000);
  }, [messages]);

  useEffect(() => {
    const changeTitle = async (title: string) => {
      try {
        if (!currentChat) return;
        const response = await axios.patch(
          `http://localhost:8000/api/chat/${currentChat}`,
          {
            title: title,
          }
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (request && request.includes("movie:")) {
      changeTitle(request.slice(6, request.length).toUpperCase());
      toggleReload((prev) => {
        return !prev;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [request, toggleReload]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (currentChat) {
          const response = await axios.post(
            `http://localhost:8000/api/chat/${currentChat}/messages`,
            {
              content: request,
            }
          );
          if (messages) {
            setMessages([...messages, response.data]);
          } else {
            setMessages(response.data);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (request) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [request]);

  return (
    <Container>
      <div className="messages">
        {messages &&
          messages.map((message, i) => {
            return (
              <Message key={i}>
                <UserRequest text={message.content} />
                <AIResponse
                  text={message.bot_response}
                  lastMsg={i === messages.length - 1}
                />
              </Message>
            );
          })}
        <div style={{ height: 0 }} ref={scrollEnd}></div>
      </div>
      <form
        className="request-container"
        onSubmit={(e) => {
          e.preventDefault();
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
