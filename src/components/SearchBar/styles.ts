import styled from 'styled-components';

export const Container = styled.div`
  input {
    width: 100%;
    padding: .75rem 1.25rem;
    
    background-color: var(--clr-primary);
    color: var(--clr-text-primary);
    border: none;
    border-radius: .75rem;

    transition: box-shadow .3s ease-in-out;
    &::placeholder {
      color: var(--clr-text-secondary);
    }

    &:focus, &:hover {
      outline: none;
      box-shadow: 0 0 0 1px var(--clr-secondary);
    }
  
    
  }
`;
