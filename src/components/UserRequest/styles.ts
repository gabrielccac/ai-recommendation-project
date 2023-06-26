import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: end;

  .message-container {
    max-width: 70%;
    padding: 0.75rem 1rem;
    border-radius: 1rem 1rem 0.25rem 1rem;

    color: var(--clr-text-primary);
    background-color: var(--clr-secondary);
  }
`;
