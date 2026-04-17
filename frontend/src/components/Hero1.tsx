import styled from "styled-components";
import mainImage from "@assets/main-computer.webp";
import boyImage from "@assets/main-boy.webp";
import girlImage from "@assets/main-girl.webp";
import wumpusImage from "@assets/wumpus.webp";
import clydeImage from "@assets/clyde.webp";
import trophyImage from "@assets/blurry-trophy.webp";
import crownImage from "@assets/blurry-crown.webp";
import leafImage from "@assets/leaf.webp";
import DownloadIcon from "@components/download";
const OuterContainer = styled.div`
  max-width: 1320px; 
  margin: 0 auto;
  padding-bottom: 5rem;
`
const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 100px;
`
const Heading = styled.h2`
  text-align: left;
  z-index: 4;
  width: 100%;
  color: white;
  letter-spacing: -.01em;
  text-transform: uppercase;
  margin-top: -2rem;
  margin-bottom: .5rem;
  font-size: 56px;
  position: relative;
  font-family: 'Ginto Bold', Arial, sans-serif;
  font-weight: 700;
  line-height: .857143;
`
const Text = styled.p`
  text-align: left;
  color: white; 
`
const Wrap = styled.div`
  max-width: 27rem;
`
const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
`
const MainImage = styled.img`
  width: 100%;
  height: 650px;
  display: block;
`
const OverlayBoyImage = styled.div`
  position: absolute;
  right: -7%;
  bottom: 4%;
  z-index: 2;
`
const BoyImage = styled.img`
  width: 100%;
  height: 290px;
  display: block;

`
const OverlayGirlImage = styled.div`
  position: absolute;
  left: -20%;
  bottom: 0%;
  z-index: 2;

`
const GirlImage = styled.img`
  width: 190px;
  height: auto;
`
const OverlayWumpusImage = styled.div`
  position: absolute;
  left: 40%;
  bottom: 0%;
`
const WumpusInnerWrap = styled.div`
  display: flex;
  flex-direction: column;
`
const LeafImage = styled.img`
  width: 216px;
  height: auto;
  animation: floatScaleAndRotate 16s ease-in-out infinite; 
  @keyframes floatScaleAndRotate {
    0% {
      transform: translateY(-20px) rotate(0deg) scale(1);
    }
    50% {
      /* The "up" part of the float */
      transform: translateY(0px) rotate(35deg) scale(1.1);
    }
    100% {
      /* Return to start to loop seamlessly */
      transform: translateY(-20px) rotate(0deg) scale(1);
    }
  }
`
const WumpusImage = styled.img`
  width: 216px;
  height: auto;

`
const OverlayClydeImage = styled.div`
  position: absolute;
  left: 0%;
  bottom: 0;
`
const ClydeImage = styled.img`
  width: 72px;
  height: auto;
  animation: moveUpDown 4s ease-in-out infinite;
  @keyframes moveUpDown {
  0%, 100% {
    transform: translateY(0); 
  }
  50% {
    transform: translateY(-10px); 
  }
}
`
const CrownImage = styled.img`
  animation: floatScaleAndRotate 16s ease-in-out infinite; 
  @keyframes floatScaleAndRotate {
    0% {
      transform: translateY(-20px) rotate(0deg) scale(1);
    }
    50% {
      /* The "up" part of the float */
      transform: translateY(0px) rotate(35deg) scale(1.1);
    }
    100% {
      /* Return to start to loop seamlessly */
      transform: translateY(-20px) rotate(0deg) scale(1);
    }
  }
`
const OverlayTrophyImage = styled.div`
  position: absolute;
  right: -30%;
  top: 34%;
`
const TrophyImage = styled.img`
  animation: floatAndRotate 32s ease-in-out infinite;
  
  display: inline-block;
  @keyframes floatAndRotate {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      /* The "up" part of the float */
      transform: translateY(-20px) rotate(35deg);
    }
    100% {
      /* Return to start to loop seamlessly */
      transform: translateY(0px) rotate(0deg);
    }
  }

`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 64px;
`
const PrimaryButton = styled.a`
  min-width: 299px;
  padding: 16.7px 24px;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  -webkit-transition-property: none;
  transition-property: none;
  background-color: #5865f2;
  color: white;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  z-index: 1;
  &:hover::after {
    opacity: 1;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    background: -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(130%, #1f1d5d));
    background: linear-gradient(180deg, transparent 0, #1f1d5d 130%);
    opacity: 0;
    transition: opacity .3s ease;
    z-index: -1;
  }
`
const SecondaryButton = styled.a`
  display: flex;
  border-radius: 12px;
  background-color: white;
  color: #23272a;
  min-width: 232px;
  padding: 15px 24px;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  transition: all .2s;
  transition-duration: .3s;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: hsl(231.429 calc(1*6.667%) 79.412% /1);
  }
`
const Hero1 = () => {
  return <OuterContainer>
    <InnerContainer>
      <Wrap>
        <CrownImage src={crownImage} />
        <Heading>
          Group Chat that's all fun and Games
        </Heading>
        <Text>
          Discord is great for playing games and chilling with friends, or even building a worldwide community. Customize your own space to talk, play, and hang out.
        </Text>
      </Wrap>
      <ImageWrap>
        <OverlayTrophyImage>
          <TrophyImage src={trophyImage} />
        </OverlayTrophyImage>
        <MainImage src={mainImage} />
        <OverlayBoyImage>
          <BoyImage src={boyImage} />
        </OverlayBoyImage>
        <OverlayGirlImage>
          <GirlImage src={girlImage} />
        </OverlayGirlImage>
        <OverlayWumpusImage>
          <WumpusInnerWrap>
            <LeafImage src={leafImage} />
            <WumpusImage src={wumpusImage} />
          </WumpusInnerWrap>
        </OverlayWumpusImage>
        <OverlayClydeImage>
          <ClydeImage src={clydeImage} />
        </OverlayClydeImage>
      </ImageWrap>
    </InnerContainer>
    <ButtonContainer>
      <SecondaryButton>
        <DownloadIcon />
        Download for Linux
      </SecondaryButton>
      <PrimaryButton>
        Open Discord in your browser
      </PrimaryButton>
    </ButtonContainer>
  </OuterContainer>
}

export default Hero1
