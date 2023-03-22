import React from 'react'
import styled from 'styled-components'
import KittyMariImg from "../assets/kittymari.png"

const Container = styled.div`
    display: flex;
`

const ProfileHeader = styled.div`
    display: flex;
    background-color: #fff;
    width: 250px;
`

const ProfileImage = styled.img`
    height: 55px;
    width: 55px;
    flex: 1;
    object-fit: cover;
`

const ProfileName = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
    margin-left: 15px;
    flex: 5;
`

const VerticalLine = styled.div`
    border-left: 3px solid purple;
    height: inherit;
    margin: 0px 8px;
`

const AccountHeader = () => {
  return (
    <Container>
        <ProfileHeader>
            <ProfileImage src={KittyMariImg}></ProfileImage>
            <ProfileName>SMURFAREN</ProfileName>
        </ProfileHeader>
    <VerticalLine></VerticalLine>
    </Container>
  )
}

export default AccountHeader