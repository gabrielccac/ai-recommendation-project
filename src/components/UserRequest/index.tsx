import { Container } from './styles';

interface UserRequestProps {
  text: string;
}

export function UserRequest({ text }: UserRequestProps) {
  return (
    <Container>
      <div className='message-container'>
        <p>
          {text}
        </p>
      </div>
    </Container>
  );
}
