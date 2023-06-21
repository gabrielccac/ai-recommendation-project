import { useState } from 'react';

import sendIcon from '../../assets/send.svg';
import { Container } from './styles';

import { UserRequest } from '../UserRequest';
import { AIResponse } from '../AIResponse';

const text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas harum temporibus atque ullam ea repudiandae nesciunt suscipit in, minima beatae quae repellendus placeat fuga asperiores hic illum, esse officia cum.';

export function ChatWindow() {
  const [input, setInput] = useState('');

  return (
    <Container>
      <div className='messages'>
        <UserRequest text={text} />
        <AIResponse />
        <UserRequest text={text} />
        <AIResponse />
      </div>
      <form
        action='#'
        className='request-container'
        onSubmit={(e) => {
          const [{ value }] = e.target;
          console.log(value);
          setInput('');
        }}>
        <input
          className='request-input'
          type='text'
          placeholder='Ask for a recommendation...'
          value={input}
          onChange={(e) => {
            e.preventDefault();

            setInput(e.target.value);
          }}
        />
        <button className='send-button'>
          <img
            src={sendIcon}
            alt='Send'
          />
        </button>
      </form>
    </Container>
  );
}
