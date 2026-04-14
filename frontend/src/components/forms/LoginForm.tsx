import { z } from "zod";
import styled from "styled-components"
import logo from "@assets/discordqr.png"

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
  padding: 32px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  
`
const Left = styled.div`
  
`
const Right = styled.div`
  width: 240px;
`
const InnerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const InnerLeft = styled.div`
  dispaly: flex;
  flex-direction: column;
`
const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  
`
const Input = styled.input`
  background-color: hsl(0 calc(1*0%) 0% /0.0784313725490196);
  border: 1px solid hsl(240 calc(1*4%) 60.784% /0.2);
  border-radius: 8px;
  box-sizing: border-box;
  color: var(--text-default);
  font-size: 16px;
  height: 44px;
  padding: 12px 10px;
  transition: border-color .2s ease-in-out;
  width: 414px;
  margin-bottom: 20px;
  &:nth-child(4) {
    margin-bottom: 0px;
  }
`
const Link = styled.a`
  color: hsl(228.785 calc(1*100%) 79.02% /1);
  font-size: 14px;
`
const Text = styled.h6`
  font-size: 14px;
  font-weight: 400;
  margin: 8px 0px 0px;
  color: oklab(0.964427 0.000418067 -0.00125384);
`
const MinorHeading = styled.h2`
  font-size: 24px;
`
const FormHeading = styled.span`
  color: white;
  margin: 0px 0px 8px;
  text-align: left;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
`
const RequiredText = styled.span`
  color: hsl(3 calc(1*100%) 80.392% /1);
  margin: 0px 0px 8px;
  text-align: left;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;

`
const TextContainer = styled.div`
  color: hsl(228.785 calc(1*100%) 79.02% /1);
  margin: 4px 0px 20px;
  width: fit-content;
`
const TextButton = styled.button`
  border: none;
  background: initial;
  box-sizing: border-box;
  color: inherit;
  display: inline-flex;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 14px;
  font-weight: 400;
  gap: 4px;
  margin: 0;
  max-width: 100%;
  padding: 0;
  text-align: left;
  text-decoration: none;
`
const FlexBetween = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`
const QRCodeImage = styled.div`
  background-color: #fff;
  height: 176px;
  width: 176px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const DiscordLogo = styled.img`
  width: 50px;
  height: 50px;
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
              <MinorHeading>Welcome back!</MinorHeading>
              <Text>We're so exited to see you again</Text>
              <Form action={formAction}>
                <FlexBetween>
                  <FormHeading>Email or Phone Number</FormHeading>
                  <RequiredText>*</RequiredText>
                </FlexBetween>
                <Input name="emailOrPhoneNumber" />
                <FlexBetween>
                  <FormHeading>Password</FormHeading>
                  <RequiredText>*</RequiredText>
                </FlexBetween>
                <Input name="password" />
                <TextContainer>
                  <TextButton>Forgot Your Password?</TextButton>
                </TextContainer>
              </Form>
            </InnerLeft>
          </Left>
          <Right>
            <InnerRight>
              <QRCodeImage>
                <DiscordLogo src={logo}/>
              </QRCodeImage>
              <h2>Log in with QR code</h2>
              <Text>
                scan this with the <strong>Discord mobile app</strong> to login instantly
              </Text>
              <Link>or, sign in with a passkey</Link>
            </InnerRight>
          </Right>
        </Grid>
      </InnerContainer>
    </OuterContainer>
  )
}

export default LoginForm;
