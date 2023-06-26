import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: end;
  gap: 1rem;

  .message-container {
    max-width: 70%;
    padding: 0.75rem 1rem;
    border-radius: 1rem 1rem 1rem 0.25rem;
    color: var(--clr-text-primary);
    background-color: var(--clr-background);
  }
`;
