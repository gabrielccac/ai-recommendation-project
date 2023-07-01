import { styled } from "styled-components";

export const AllChats = styled.div`
  padding: 2px;
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 1.25rem;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2%;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
`;
