import styled from "styled-components";
import logo from "@assets/logo-white.svg";
import Navbar from "@components/navbar";
import LogInButton from "@components/button/LoginButton";
const Main = styled.main`
  background-image: url('assets/homepage-bg.png');
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
`
const LogoLink = styled.a`
  padding-top: 0.625rem;
`
const LogoImg = styled.img`

`
const Home = () => {
  return <Main>
    <Header>
      <NavContainer>
        <NavInnerContainer>
          <LogoLink href="/" >
            <LogoImg src={logo} />
          </LogoLink>
          <Navbar />
          <LogInButton />
        </NavInnerContainer>
      </NavContainer>
    </Header>
  </Main>
}

export default Home
