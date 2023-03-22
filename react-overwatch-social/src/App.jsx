import styled from "styled-components"
import AccountHeader from "./components/AccountHeader"
import Fps from "./components/Fps"
import Navbar from "./components/Navbar"
import Time from "./components/Time"
import "./style.css"

const Container = styled.div`
  margin: 30px;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

function App() {

  return (
    <Container>
      <Time />
      <Fps />
      <HeaderContainer>
        <Navbar />
        <AccountHeader />
      </HeaderContainer>
    </Container>
  )
}

export default App
