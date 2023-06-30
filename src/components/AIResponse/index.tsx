import { Container } from "./styles";
import { TypeAnimation } from "react-type-animation";

import robot from "../../assets/robot.svg";

interface AIResponseProps {
  text: string;
  lastMsg: boolean;
}

export function AIResponse({ text, lastMsg }: AIResponseProps) {
  return (
    <Container>
      <img src={robot} alt="" />
      <div className="message-container">
        <TypeAnimation
          sequence={[text, 1000]}
          wrapper="span"
          speed={90}
          style={{ fontSize: "1rem" }}
          cursor={false}
          omitDeletionAnimation={true}
          preRenderFirstString={lastMsg ? false : true}
        />
      </div>
    </Container>
  );
}
