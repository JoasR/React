import styled from "styled-components"
import AccountHeader from "./components/AccountHeader"
import Fps from "./components/Fps"
import Friends from "./components/Friends"
import Navbar from "./components/Navbar"
import SocialHeader from "./components/SocialHeader"
import Time from "./components/Time"
import FriendCards from "./components/FriendCards"
import "./style.css"

const Container = styled.div`
  margin: 30px;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
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
      <SocialHeader />
      <Friends />
      <FriendCards />
    </Container>
  )
}

export default App
