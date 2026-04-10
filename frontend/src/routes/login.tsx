import styled from "styled-components";
import background from "@assets/discord-login-screen.png";
import LoginForm from "@components/forms/LoginForm";

const Outer = styled.div`
  height: 100vh;
`
const Frame = styled.div`
  position: relative;
  --n: ${(props) => props.ratio ? props.ratio[0] : 1};
  --d: ${(props) => props.ratio ? props.ratio[1] : 1};

  aspect-ratio: var(--n), var(--d);

  height: 100vh;
  supports not (aspect-ratio: 1, 1) {
    padding-bottom: calc(var(--d) / var(--n) * 100%);
  }
  > * {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  > img,
  > video {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

const Login = () => {
  return (
    <Outer>
      <Frame ratio={[16,9]}>
        <img src={background}/>
        <LoginForm />
      </Frame>
    </Outer>
  )
}

export default Login
