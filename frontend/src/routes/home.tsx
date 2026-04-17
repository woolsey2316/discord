import styled from "styled-components";
import logo from "@assets/logo-white.svg";
import Navbar from "@components/navbar";
import LogInButton from "@components/button/LoginButton";
import Hero1 from "@components/Hero1";

const Main = styled.main`
  background-image: url('./src/assets/homepage-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 0px;
`
const Header = styled.header`
  
`
const NavContainer = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
`
const NavInnerContainer = styled.div`
 display: flex; 
 padding-top: 40px;
`
const LogoLink = styled.a`
  padding-top: 0.625rem;
`
const LogoImg = styled.img`

`
const SkipToContentButton = styled.a`
  z-index: 100;
  opacity: 0;
  pointer-events: none;
  color: #000;
  background-color: #35ed7e;
  border-radius: .75rem;
  padding: .813rem 1.5rem;
  font-family: Abcgintodiscord, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.375rem;
  transition: transform .25s, opacity .25s;
  position: absolute;
  inset: .75rem auto auto .75rem;
  transform: translateY(-10px);
  text-decoration: none;
  &:focus, &:focus-visible {
    opacity: 1;
    pointer-events: auto;
    outline: 3px solid orange; /* High contrast focus indicator */
  }
`
const Home = () => {
  return <Main>
    <Header>
      <NavContainer>
        <NavInnerContainer>
          <SkipToContentButton href="#main">
            Skip to main content
          </SkipToContentButton>
          <LogoLink href="/" >
            <LogoImg src={logo} />
          </LogoLink>
          <Navbar />
          <LogInButton />
        </NavInnerContainer>
      </NavContainer>
    </Header>
    <Hero1 />
  </Main>
}

export default Home
