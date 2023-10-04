import styled from 'styled-components'
import Console from './Components/Console'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
const Blue = styled.span`
  color: #00bfff;
`
const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d4d4d4;
  height: 2rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 0;
  padding: 0;
`

const GithubLink = styled.a`
  display: flex;
  align-items: center;
  color: #d4d4d4;
  text-decoration: none;
  font-size: 0.7rem;
`

const GithubImage = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`

const App = () => {


    return (
      <Wrapper>
        <Console>
        <div>
        <br/>
        Hey there, I'm <Blue>Daniel Koch</Blue>,
a seasoned software engineer
who thrives on the artistry of coding.
Armed with a deep understanding
of cutting-edge technologies
and a history of delivering top-notch solutions,
I'm eager to join fellow developers
in shaping the future of software.
Let's craft exceptional code
and innovate together.
        </div>
        </Console>
        <Footer>
          <GithubLink href="https://github.com/Ukonhattu/danielkochfi">
            <GithubImage src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" />
            View on GitHub
          </GithubLink>
        </Footer>
      </Wrapper>
    )
}
export default App
