import styled from 'styled-components';

export const Container = styled.nav`
  position: absolute;

  min-width: 4.5rem;
  min-height: calc(100% - 4rem);
  padding: 1rem;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;

  background-color: var(--clr-accent);

  transition: min-width 0.3s ease-in-out;

  .flex-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;
  }

  .flex-flow {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .icon-container {
    padding: 0.5rem;
    border-radius: 0.5rem;

    transition: all 0.3s ease-in;
    display: flex;

    &:hover {
      cursor: pointer;
      background-color: var(--clr-hover);
    }
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .icon--label {
    position: absolute;
    left: 0;
    opacity: 0;
    font-size: var(--fs-lg);
    font-weight: var(--fw-medium);
    color: var(--clr-text-primary);

    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }

  &:hover {
    min-width: 10rem;

    .flex-group {
      width: 100%;
    }

    .icon-container {
      width: 100%;
    }

    .icon--label {
      display: block;
      opacity: 1;
      transform: translateX(4rem);
    }
  }
`;
