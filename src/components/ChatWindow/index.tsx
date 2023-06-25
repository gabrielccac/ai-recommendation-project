import { useState, useEffect } from "react";
import sendIcon from "../../assets/send.svg";
import { Container, Message } from "./styles";
import { UserRequest } from "../UserRequest";
import { AIResponse } from "../AIResponse";

// const text =
//   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas harum temporibus atque ullam ea repudiandae nesciunt suscipit in, minima beatae quae repellendus placeat fuga asperiores hic illum, esse officia cum.';

interface Message {
  request: string;
  response: string;
}

export function ChatWindow() {
  const [input, setInput] = useState("");
  const [data, setdata] = useState({ answer: "" });
  const [request, setRequest] = useState("");
  const [messages, setMessages] = useState([
    { request: "Hello!", response: "Nahhh" },
  ]);
  useEffect(() => {
    if (request) {
      console.log(data);
      fetch("http://localhost:8000/data?text=" + request.toString() ?? "").then(
        (res) =>
          res.json().then((data) => {
            // Setting a data from api
            setdata({
              answer: data,
            });
          })
      );
    }
  }, [request]);

  useEffect(() => {
    if (request) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { request: request, response: data.answer },
      ]);
    }
  }, [request, setMessages, data]);

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
      </div>
      <form
        action="#"
        className="request-container"
        onSubmit={() => {
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
