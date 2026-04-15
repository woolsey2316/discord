import styled from "styled-components"
const Button = styled.button`
  background-color: #fff;
  color: #000;
  cursor: pointer;
  text-align: center;
  border-style: none;
  border-radius: 16px;
  margin-bottom: 0;
  padding: 9px 16px;
  font-family: Abcgintodiscord, sans-serif;
  font-size: 16px;
  transition: background-color .2s;
`
const LogInButton = () => {
  return <Button>
    Log In
  </Button>
}
export default LogInButton
