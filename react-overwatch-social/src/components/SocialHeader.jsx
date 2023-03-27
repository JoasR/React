import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    margin-top: 10px;
    font-family: 'Oxanium', cursive;
`

const Header = styled.h1`
    font-weight: 600;
    position: relative;
    z-index: 1;
    font-style: italic;
`

const FriendsText = styled.span`
    color: black;
    position: absolute;
    font-size: 2.5rem;
    z-index: 2;
    letter-spacing: -2px;
    top: 35px;
`

const SocialText = styled.span`
    position: relative;
    top: -10px;
    left: 0;
    font-size: 4.5rem;
    font-weight: bold;
    letter-spacing: -3px;
    background: linear-gradient(to bottom, rgba(23, 23, 23, 0.8), rgba(211, 211, 211, 0.1));
    background-size: 100% 150%;
    background-position: 0 50%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 0;
`



const SocialHeader = () => {
  return (
    <Container>
        <Header>
            <FriendsText>FRIENDS</FriendsText>
            <SocialText>SOCIAL</SocialText>
        </Header>
    </Container>
  )
}

export default SocialHeader