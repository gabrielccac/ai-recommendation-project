import { useState, useMemo, useEffect, useCallback } from "react";

import { GlobalStyle } from "./styles/global";

import { Sidenav } from "./components/Sidenav";
import { RecommendationCard } from "./components/RecommendationCard";
import { SearchBar } from "./components/SearchBar";
import { ChatWindow } from "./components/ChatWindow";
import axios from "axios";

import { AllChats } from "./styles/App";

interface Message {
  content: string;
  bot_response: string;
}
interface Chat {
  id: number;
  title: string;
  created_at: string;
}

function App() {
  const [allChats, setAllChats] = useState<Chat[]>([]);
  const [search, setSearch] = useState("");
  const [currentChat, setCurrentChat] = useState<number | null>(null);
  const [messages, setMessages] = useState<Message[] | null>(null);
  const [reload, toggleReload] = useState(false);

  const createNewChat = useCallback(async () => {
    try {
      const response = await axios.post(`http://localhost:8000/api/chat/`);

      setCurrentChat(response.data.id);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    createNewChat();
  }, [createNewChat]);

  const memoizedSideNav = useMemo(() => <Sidenav />, []);

  useEffect(() => {
    const getAllChats = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/chat/`);
        setAllChats(response.data.reverse());
      } catch (error) {
        console.log(error);
      }
    };
    getAllChats();
  }, [currentChat, reload]);

  useEffect(() => {
    const getChatMessages = async () => {
      try {
        if (currentChat) {
          const response = await axios.get(
            `http://localhost:8000/api/chat/${currentChat}/messages`
          );
          setMessages(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getChatMessages();
  }, [currentChat]);

  return (
    <>
      <GlobalStyle />
      <div
        className="app-container"
        style={{
          position: "relative",
          height: "90vh",
          padding: "2rem",
          backgroundColor: "var(--clr-background)",
          width: "90%",
          borderRadius: "2rem",
          display: "flex",
          gap: "1.5rem",
        }}
      >
        {memoizedSideNav}
        <div
          className="RC-container"
          style={{
            width: "40rem",
            marginLeft: "6rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <SearchBar search={search} setSearch={setSearch} />
          <AllChats>
            {allChats
              .filter((chat) => {
                return chat.title.toLowerCase().includes(search.toLowerCase());
              })
              .map((chat, i) => (
                <li key={i}>
                  <RecommendationCard
                    title={chat.title}
                    text={chat.created_at.slice(0, 10)}
                    id={chat.id}
                    currentChat={currentChat}
                    setCurrentChat={setCurrentChat}
                  />
                </li>
              ))}
          </AllChats>
        </div>
        <ChatWindow
          messages={messages}
          setMessages={setMessages}
          currentChat={currentChat}
          toggleReload={toggleReload}
        />
      </div>
    </>
  );
}

export default App;
