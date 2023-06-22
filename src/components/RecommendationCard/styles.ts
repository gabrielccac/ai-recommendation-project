import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: var(--clr-primary);

  width: 100%;

  display: flex;
  align-items: center;
  gap: 1.25rem;

  transition: all 0.3s ease-in-out;

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .RC--content {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
  }

  .RC--title {
    font-size: var(--fs-lg);
    color: var(--clr-text-primary);
  }

  .RC--text {
    font-size: var(--fs-sm);
    color: var(--clr-text-secondary);
  }

  &:hover {
    cursor: pointer;
    /* background-color: #37393d; */
    box-shadow: 0 0 0 1px var(--clr-secondary);
  }
`;
