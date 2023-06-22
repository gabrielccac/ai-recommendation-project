import { Container } from "./styles";

import robot from "../../assets/robot.svg";

interface AIResponseProps {
  text: string;
}

export function AIResponse({ text }: AIResponseProps) {
  return (
    <Container>
      <img src={robot} alt="" />
      <div className="message-container">
        <p>{text}</p>
      </div>
    </Container>
  );
}
