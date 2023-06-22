import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import clapperboardIcon from '../../assets/clapperboard.svg';
import { Container } from './styles';

interface RecommendationCardProps {
  title: string;
  text: string;
}

const formatText = function (text: string) {
  if (text.split(' ').length > 25) {
    return text.split(' ').slice(0, 10).join(' ') + '...';
  } else {
    return text;
  }
};

export function RecommendationCard({ title, text }: RecommendationCardProps) {
  const [displayText, setDisplayText] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  //   setDisplayText(text);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  //   setDisplayText(formatText(formatText(text)));
  // };

  useEffect(() => {
    setDisplayText(formatText(text));
  });

  return (
    <Container style={{ zIndex: '-1' }}>
      {/* <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`container ${isHovered ? 'expanded' : ''}`}> */}
        <img
          src={clapperboardIcon}
          alt=''
          className='icon'
        />
        <div className='RC--content'>
          <h2 className='RC--title'>{title}</h2>
          <p className='RC--text'>{displayText}</p>
        </div>
      {/* </div> */}
    </Container>
  );
}
