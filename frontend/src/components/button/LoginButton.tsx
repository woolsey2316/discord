import styled from "styled-components"
const Button = styled.a`
  background-color: #fff;
  color: #000;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  border-style: none;
  border-radius: 16px;
  margin-bottom: 0;
  padding: 9px 16px;
  font-family: Abcgintodiscord, sans-serif;
  font-size: 16px;
  font-weight: 600;
  transition: background-color .2s;
`
const LogInButton = () => {
  return <Button href="/login">
    Log In
  </Button>
}
export default LogInButton
