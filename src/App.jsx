import styled from 'styled-components'
import './App.css'
import Console from './Components/Console'

const Wrapper = styled.div`
`

const App = () => {


    return (
      <Wrapper>
        <Console>
        <div>
        ************************************ <br/>
        Hello! I am Daniel Koch, a software developer based in Helsinki, Finland.<br/>
        Welcome to my site!<br/>
        *************************************<br/>
        h: show help<br/>
        cv: open my cv<br/>
        github: open my github<br/>
        linkedin: open my linkedin</div>
        <div>
        

        </div>
        </Console>
      </Wrapper>
    )
}
export default App
