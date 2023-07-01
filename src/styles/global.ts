import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --clr-backscreen: #212529;
    --clr-background: #131313;
    --clr-text-primary: #F8F9FA;
    --clr-text-secondary: #8D8D8D;

    --clr-primary: #202329;
    --clr-secondary: #2E343D;
    --clr-tertiary: #3E444D;

    --clr-accent: #FF6565;
    --clr-hover: #FF9B9B;

    --ff-primary: 'Inter', sans-serif;

    --fw-regular: 400;
    --fw-medium: 500;
    --fw-bold: 700;

    --fs-lg: 1rem; // 14px
    --fs-sm: .875rem; // 12px
  } 

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font: inherit;
    font-family: var(--ff-primary);
  }

  img, svg {
      display: block;
      max-width: 100%;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720) {
      font-size: 87.5%; // 14px
    }
  }
  
  body {
    display: grid;
    place-content: center;

    background-color: var(--clr-backscreen);
    
    height: 100vh;
    width: 100%;
  }

  #root {
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  li {
    list-style: none;
  }

  button {
    background-color: var(--clr-accent);
    padding: 0.75rem 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 0.75rem;

    height: 100%;

    transition: all 1ms ease-out;
    &:hover {
      cursor: pointer;
      filter: drop-shadow(0px 0px 4px #ff6565);
    }

    

  }
  button:active {
    transform: translateY(3px);
  filter: drop-shadow(0px 0px 4px #ff6565);
}
`;
