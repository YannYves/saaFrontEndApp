import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  width: 100vw;
  text-align: left;
  position: absolute;
  opacity: 1;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 11;
  font-size: 1rem;

  nav {
    filter: blur(8px);
  }

  a {
    font-family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol';
    text-transform: none;
    font-size: 2rem;
    text-align: center;
    padding: 2rem;
    font-weight: 575;
    letter-spacing: 0.2rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobileSmall}) {
      font-size: 1.5rem;
      text-align: left;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
