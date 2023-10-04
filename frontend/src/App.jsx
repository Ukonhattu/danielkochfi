import styled from 'styled-components'
import './App.css'
import Console from './Components/Console'

const Wrapper = styled.div`
`
const Blue = styled.span`
  color: #00bfff;
`


const App = () => {


    return (
      <Wrapper>
        <Console>
        <div>
        <br/>
        Hello! I am <Blue>Daniel Koch</Blue>, a software developer based in Helsinki, Finland.<br/>
        Welcome to my site!<br/>


        </div>
        <div>
        

        </div>
        </Console>
      </Wrapper>
    )
}
export default App
