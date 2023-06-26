import { Container } from "./styles";
import { TypeAnimation } from "react-type-animation";

import robot from "../../assets/robot.svg";

interface AIResponseProps {
  text: string;
}

export function AIResponse({ text }: AIResponseProps) {
  return (
    <Container>
      <img src={robot} alt="" />
      <div className="message-container">
        <TypeAnimation
          sequence={[text, 1000]}
          wrapper="span"
          speed={70}
          style={{ fontSize: "1rem" }}
          cursor={false}
          omitDeletionAnimation={true}
        />
      </div>
    </Container>
  );
}
