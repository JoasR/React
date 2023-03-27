import React from 'react'
import styled, { keyframes } from 'styled-components'
import KittyMariImg from "../assets/kittymari.png"
import { Group, Stars } from "@mui/icons-material"

const Container = styled.div`
    display: flex;
`

const ProfileHeader = styled.div`
    display: flex;
    background-color: #fff;
    width: 250px;
    border-radius: 3px;
`

const ProfileImage = styled.img`
    height: 55px;
    width: 55px;
    flex: 1;
    object-fit: cover;
    border-radius: 3px 0px 0px 3px;
`

const ProfileName = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
    margin-left: 15px;
    flex: 5;
`

const VerticalLine = styled.div`
    border-left: 2px solid rgba(255, 255, 255, 0.2);
    height: inherit;
    margin: 0px 8px;
`

const GroupIcon = styled.div`
    padding: 10px;
    border: 2px solid #fff;
    border-radius: 3px;
    width: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const glow = keyframes`
  0% {
    border-color: transparent;
    box-shadow: 0 0 0 0 white;
  }
  50% {
    border-color: white;
    box-shadow: 0 0 10px 3px white;
  }
  100% {
    border-color: transparent;
    box-shadow: 0 0 0 0 white;
  }
`

const AchievementsIcon = styled.div`
    padding: 10px;
    border-radius: 3px;
    width: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EE7600;
    margin-left: 5px;
    border: 2px solid transparent;

    &:hover{
        animation: ${glow} 2.5s ease-in-out infinite;
    }
`

const AccountHeader = () => {
  return (
    <Container>
        <ProfileHeader>
            <ProfileImage src={KittyMariImg}></ProfileImage>
            <ProfileName>SMURFAREN</ProfileName>
        </ProfileHeader>
        <VerticalLine></VerticalLine>
        <GroupIcon>
            <Group style={{color: 'rgba(0, 0, 0, 0.5)'}}/>
        </GroupIcon>
        <AchievementsIcon>
            <Stars style={{color: "#fff"}}/>
        </AchievementsIcon>
    </Container>
  )
}

export default AccountHeader