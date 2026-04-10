import { z } from "zod";
import styled from "styled-components"

const OuterContainer = styled.div`
`
const InnerContainer = styled.div`
  position: absolute; 
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 784px;
  background-color: hsl(232.5 calc(1*6.557%) 23.922% /1);
  border-radius: 8px;
  box-shadow: 0 2px 10px 0 hsl(0 calc(1*0%) 0% /0.2);
  box-sizing: border-box;
  color: var(--text-muted);
  font-size: 18px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  
`
const Left = styled.div`
  
`
const Right = styled.div`
  
`
const InnerRight = styled.div`
  display: flex;
  flex-direction: column;
`
const InnerLeft = styled.div`
  dispaly: flex;
  flex-direction: column;
`
const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`
const Input = styled.input`
  background-color: transparent;
  border: none;
  border-radius: 8px;
  box-sizing: border-box;
  color: var(--text-default);
  font-size: 16px;
  height: 44px;
  padding: 12px 10px;
  transition: border-color .2s ease-in-out;
  width: 100%;
  margin-bottom: 20px;
`
const Link = styled.a`
  color: hsl(228.785 calc(1*100%) 79.02% /1);
`
const Text = styled.h6`
  font-weight: 400;
`
const MinorHeading = styled.h2`

`
const loginSchema = z.object({
  emailOrPhoneNumber: z.string(),
  password: z.string(),
})

export const LoginForm = () => {
  function formAction(formData: FormData) {
    formValues = Object.fromEntries(formData)

    const result = loginSchema.safeParse(formValues)

    if (result.success) {
      result.data.emailOrPhoneNumber;
    }

  };

  return (
    <OuterContainer>
      <InnerContainer>
        <Grid>
          <Left>
            <InnerLeft>
              <MinorHeading>Welcome Back!</MinorHeading>
              <Form action={formAction}>
                <Input name="emailOrPhoneNumber" />
                <Input name="password" />
              </Form>
            </InnerLeft>
          </Left>
          <Right>
            <InnerRight>
              <h2>Log in with QR code</h2>
              <Text>
                scan this with the <strong>Discord mobile app</strong> to login instantly
              </Text>
              <Link>or sign in with a passkey</Link>
            </InnerRight>
          </Right>
        </Grid>
      </InnerContainer>
    </OuterContainer>
  )
}

export default LoginForm;
