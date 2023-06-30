import { useState, useEffect } from "react";
import clapperboardIcon from "../../assets/clapperboard.svg";
import { Container } from "./styles";

interface RecommendationCardProps {
  title: string;
  text: string;
  id: number;
  currentChat: number | null;
  setCurrentChat: React.Dispatch<React.SetStateAction<number | null>>;
}

const formatText = function (text: string) {
  if (text.split(" ").length > 25) {
    return text.split(" ").slice(0, 10).join(" ") + "...";
  } else {
    return text;
  }
};

export function RecommendationCard({
  title,
  text,
  id,
  currentChat,
  setCurrentChat,
}: RecommendationCardProps) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    setDisplayText(formatText(text));
  }, [text]);

  const handleClick = () => {
    setCurrentChat(id);
  };

  return (
    <Container
      style={{
        zIndex: "-1",
        boxShadow: id === currentChat ? "0 0 0 1px gray" : "",
      }}
      onClick={handleClick}
    >
      <img src={clapperboardIcon} alt="" className="icon" />
      <div className="RC--content">
        <h2 className="RC--title">{title}</h2>
        <p className="RC--text">{displayText}</p>
      </div>
      {/* </div> */}
    </Container>
  );
}
