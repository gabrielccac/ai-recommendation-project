import { Container } from './styles';

import robot from '../../assets/robot.svg';

export function AIResponse() {
  return (
    <Container>
      <img
        src={robot}
        alt=''
      />
      <div className='message-container'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero autem vitae dolores
          voluptatum odio quibusdam dignissimos odit quam dicta aliquam tempore sequi saepe ipsa ut,
          tempora dolore, culpa incidunt optio?
        </p>
      </div>
    </Container>
  );
}
