import clapperboardIcon from '../../assets/clapperboard.svg';

import { Container } from './styles';

interface RecommendationCardProps {
  title: string;
  text: string;
}

const formatDescription = function (text: string) {
  if (text.split(' ').length > 25) {
    return text.split(' ').slice(0, 10).join(' ') + '...';
  } else {
    return text;
  }
};

export function RecommendationCard({ title, text }: RecommendationCardProps) {
  return (
    <Container>
      <img
        src={clapperboardIcon}
        alt=''
        className='icon'
      />
      <div className='RC--content'>
        <h2 className='RC--title'>{title}</h2>
        <p className='RC--text'>{formatDescription(text)}</p>
      </div>
    </Container>
  );
}
