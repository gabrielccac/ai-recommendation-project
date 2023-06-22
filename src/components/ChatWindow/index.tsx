import { useState, useRef } from 'react';

import sendIcon from '../../assets/send.svg';
import { Container } from './styles';

import { UserRequest } from '../UserRequest';
import { AIResponse } from '../AIResponse';

const text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas harum temporibus atque ullam ea repudiandae nesciunt suscipit in, minima beatae quae repellendus placeat fuga asperiores hic illum, esse officia cum.';

interface ChatWindowProps {
  input: string;
  setInput: (input: string) => void;
}

export function ChatWindow({ input, setInput }: ChatWindowProps) {
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
        onSubmit={() => {
          console.log(input);
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
