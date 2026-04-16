import styled from "styled-components";
import ChevronDown from "@components/chevron"
const OuterContainer = styled.div`
  margin: 0 auto;
`;
const InnerContainer = styled.div``;
const UL = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 auto;
`
const LI = styled.li`
  padding: 0 8px;
  position: relative; 
  &:hover nav {
    opacity: 1;
    display: block;
  }
  &:hover div a svg {
    transform: rotate(180deg);
  }
  div:has(+ div) a {
    background-color: red;
  }
`
const LinkWrap = styled.div`
  
`
const MainNavLink = styled.a`
  text-decoration: none;
  padding: 0.625rem .45rem;
  border-radius: 0.75rem;
  font-size: .875rem;
  font-weight: 500;
  line-height: 1rem;
  text-decoration: none;
  transition: background-color .4s;
  display: flex;
  align-items: center;
  gap: 4px;
  color: #fff;
  &:hover {
    background-color: #5865f2;
  }
`
const Navbar = () => {
  return <OuterContainer>
    <InnerContainer>
      <UL>
        <LI><MainNavLink href="/download">Download</MainNavLink></LI>
        <LI><MainNavLink href="/nitro">Nitro</MainNavLink></LI>
        <LI><MainNavLink href="/discover">Discover</MainNavLink></LI>
        <LI>
          <LinkWrap>
            <MainNavLink href="/safety"><div>Safety</div><ChevronDown /></MainNavLink>
          </LinkWrap>
          <SafetyNav />
        </LI>
        <LI>
          <LinkWrap>
            <MainNavLink href="/quests"><div>Quests</div><ChevronDown /></MainNavLink>
          </LinkWrap>
          <QuestsNav />
        </LI>
        <LI>
          <LinkWrap>
            <MainNavLink href="/support"><div>Support</div><ChevronDown /></MainNavLink>
            <SupportNav />
          </LinkWrap>
        </LI>
        <LI>
          <LinkWrap>
            <MainNavLink href="/blog"><div>Blog</div><ChevronDown /></MainNavLink>
            <BlogNav />
          </LinkWrap>
        </LI>
        <LI>
          <LinkWrap>
            <MainNavLink href="/developers"><div>Developers</div><ChevronDown /></MainNavLink>
            <DeveloperNav />
          </LinkWrap>
        </LI>
        <LI><MainNavLink href="/careers">Careers</MainNavLink></LI>
      </UL>
    </InnerContainer>
  </OuterContainer>
}

const Link = styled.a`
  color: #fff;
  justify-content: flex-start;
  align-items: center;
  margin-left: 0;
  margin-right: 0;
  padding: 0;
  font-size: .875rem;
  font-weight: 500;
  line-height: 1.2;
  display: flex;
  cursor: pointer;
  text-decoration: none;
`
const SmallHeading = styled.h6`
  opacity: .5;
  color: #fff;
  margin-bottom: .25rem;
  margin-top: 0;
  font-size: .875rem;
  line-height: 1.3;
  text-align: left;
  font-weight: 500;
`
const OuterSafetyContainer = styled.div`
  padding-top: 0.675rem;
`
const Container = styled.nav`
  opacity: 0;
  display: none;
  height: 0;
  background-color: #5865f2;
  border-radius: 40px;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
  position: absolute;
  width: 480px;
  min-height: 192px;
  transform: translate(-50%,0);
  padding: 2rem;
  x: 50%;
  &:hover {
    opacity: 1;
    display: block;
  }
`
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  &:first-child {
    border-right: 1px solid #ffffff1a;
  }
`
const InnerSafetyContainer = styled.div`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: auto auto;
`
const SafetyNav = () => {
  return <OuterSafetyContainer>
    <Container>
      <InnerSafetyContainer>
        <Wrap>
          <SmallHeading>
            Resources
          </SmallHeading>
          <Link href="/family">Family Center</Link>
          <Link href="/safety">Safety Library</Link>
          <Link href="/news">Safety News</Link>
          <Link href="/charter">Team Charter</Link>
        </Wrap>
        <Wrap>
          <SmallHeading>
            Hubs
          </SmallHeading>
          <Link href="/parent">Parent Hub</Link>
          <Link href="/policy">Policy Hub</Link>
          <Link href="/privacy">Privacy Hub</Link>
          <Link href="/transparency">Transparency Hub</Link>
          <Link href="/wellbeing">Wellbeing Hub</Link>
        </Wrap>
      </InnerSafetyContainer>
    </Container>
  </OuterSafetyContainer>
}

const PlainOuterContainer = styled.div`
  padding-top: 0.675rem;
`
const PlainContainer = styled.nav`
  opacity: 0;
  display: none;
  height: 0;
  background-color: #5865f2;
  border-radius: 40px;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
  position: absolute;
  width: 179px;
  min-height: 122px;
  transform: translate(-50%,0);
  padding: 2rem;
  x: 50%;
  &:hover {
    opacity: 1;
    display: block;
  }
`
const PlainWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
const QuestsNav = () => {
  return <PlainOuterContainer>
    <PlainContainer>
      <PlainWrap>
        <SmallHeading>
          Resources
        </SmallHeading>
        <Link href="/family">Advertising</Link>
        <Link href="/safety">Success Stories</Link>
        <Link href="/news">Quests FAQ</Link>
      </PlainWrap>
    </PlainContainer>
  </PlainOuterContainer>

}

const SupportNav = () => {
  return <PlainOuterContainer>
    <PlainContainer>
      <PlainWrap>
        <SmallHeading>
          Resources
        </SmallHeading>
        <Link href="/family">Help Center</Link>
        <Link href="/safety">Feedback</Link>
        <Link href="/news">Submit a Request</Link>
      </PlainWrap>
    </PlainContainer>
  </PlainOuterContainer>

}

const PlainBlogContainer = styled.nav`
  opacity: 0;
  display: none;
  height: 0;
  background-color: #5865f2;
  border-radius: 40px;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
  position: absolute;
  width: 203px;
  min-height: 274px;
  transform: translate(-50%,0);
  padding: 2rem;
  x: 50%;
  &:hover {
    opacity: 1;
    display: block;
  }
`
const BlogNav = () => {
  return <PlainOuterContainer>
    <PlainBlogContainer >
      <PlainWrap>
        <SmallHeading>
          Resources
        </SmallHeading>
        <Link href="/family">Featured</Link>
        <Link href="/safety">Community</Link>
        <Link href="/news">Discord HQ</Link>
        <Link href="/news">Engineering & Developers</Link>
        <Link href="/news">How to Discord</Link>
        <Link href="/news">Policy & Safety</Link>
        <Link href="/news">Product & Features</Link>
      </PlainWrap>
    </PlainBlogContainer>
  </PlainOuterContainer>

}

const OuterDeveloperContainer = styled.div`
  padding-top: 0.675rem;
`
const DeveloperContainer = styled.nav`
  opacity: 0;
  display: none;
  height: 0;
  background-color: #5865f2;
  border-radius: 40px;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
  position: absolute;
  width: 305px;
  min-height: 445px;
  transform: translate(-50%,0);
  padding: 2rem;
  x: 50%;
  &:hover {
    opacity: 1;
    display: block;
  }
`
const DeveloperWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
const InnerDeveloperContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  grid-template-columns: auto auto;
`
const LineBreak = styled.div`
  margin: .75rem 0;
  border-bottom: 1px solid #ffffff1a;
`
const DeveloperNav = () => {
  return <OuterDeveloperContainer>
    <DeveloperContainer>
      <InnerDeveloperContainer>
        <DeveloperWrap>
          <SmallHeading>
            Learn
          </SmallHeading>
          <Link href="/family">Discord for game developers</Link>
          <Link href="/safety">Integration</Link>
          <Link href="/news">Social Commerce</Link>
          <Link href="/charter">Apps & Activities</Link>
          <Link href="/charter">Developer Newsletter</Link>
          <Link href="/charter">Developer Case Studies</Link>
          <LineBreak />
          <SmallHeading>
            Build
          </SmallHeading>
          <Link href="/parent">Parent Hub</Link>
          <Link href="/policy">Policy Hub</Link>
          <Link href="/privacy">Privacy Hub</Link>
          <Link href="/transparency">Transparency Hub</Link>
          <Link href="/wellbeing">Wellbeing Hub</Link>
        </DeveloperWrap>
      </InnerDeveloperContainer>
    </DeveloperContainer>
  </OuterDeveloperContainer>
}

export default Navbar
