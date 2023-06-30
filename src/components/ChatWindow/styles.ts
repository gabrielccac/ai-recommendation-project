import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem;

  border-radius: 1.25rem;
  background-color: var(--clr-primary);

  display: flex;
  flex-direction: column;
  justify-content: end;
  /* gap: 1.5rem; */

  .messages {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: auto;

    /* hide scrollbar */
    scrollbar-width: none;
    -ms-overflow-style: none;

    justify-content: end;
    gap: 1.5rem;
  }

  .messages::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .request-container {
    width: 100%;
    display: flex;
    gap: 1rem;
  }

  input {
    width: 100%;
    padding: 0.75rem 1.25rem;
    border: none;
    border-radius: 0.75rem;

    font-size: var(--fs-lg);

    color: var(--clr-text-primary);
    background-color: var(--clr-secondary);

    transition: box-shadow 0.3s ease-in-out;
    &:focus,
    &:hover {
      outline: none;
      box-shadow: 0 0 0 1px var(--clr-tertiary);
    }
  }

  button {
    background-color: var(--clr-accent);
    padding: 0.75rem 1rem;

    border: none;
    border-radius: 0.75rem;

    transition: filter 0.3s ease-in-out;
    &:hover {
      cursor: pointer;
      filter: drop-shadow(0px 0px 4px #ff6565);
    }
  }
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;
